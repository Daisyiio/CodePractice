const WebSocket = require("ws");

const wss = new WebSocket.Server({ port: 8080 });

console.log("WebSocket 服务器已启动，监听端口 8080");

const clients = new Map(); // 存储用户 WebSocket 和昵称

wss.on("connection", (ws) => {
    console.log("一个新客户端连接");

    ws.on("message", (message) => {
        try {
            const data = JSON.parse(message);

            // 设置用户名
            if (data.type === "setName") {
                clients.set(ws, data.name);
                console.log(`用户 ${data.name} 已加入`);

                // 发送在线用户列表
                broadcastUserList();
                return;
            }

            // 处理私聊
            if (data.type === "privateMessage") {
                const senderName = clients.get(ws) || "匿名";
                const receiverName = data.to;
                const messageText = data.message;
                const timestamp = new Date().toLocaleTimeString();

                let found = false;
                clients.forEach((name, client) => {
                    if (name === receiverName && client.readyState === WebSocket.OPEN) {
                        client.send(JSON.stringify({
                            type: "privateMessage",
                            from: senderName,
                            message: messageText,
                            time: timestamp,
                        }));
                        found = true;
                    }
                });

                if (!found) {
                    ws.send(JSON.stringify({
                        type: "system",
                        message: `⚠️ 用户 ${receiverName} 不在线或不存在`,
                        time: timestamp,
                    }));
                }
                return;
            }

            // 群聊
            if (data.type === "message") {
                const senderName = clients.get(ws) || "匿名";
                const timestamp = new Date().toLocaleTimeString();

                const chatMessage = JSON.stringify({
                    type: "message",
                    user: senderName,
                    message: data.message,
                    time: timestamp,
                });

                // 广播消息给所有人
                wss.clients.forEach(client => {
                    if (client.readyState === WebSocket.OPEN) {
                        client.send(chatMessage);
                    }
                });
            }
        } catch (error) {
            console.error("消息解析错误:", error);
        }
    });

    ws.on("close", () => {
        console.log("客户端断开连接");
        clients.delete(ws);
        broadcastUserList();
    });

    // 发送在线用户列表
    function broadcastUserList() {
        const userList = [...clients.values()];
        const userListMessage = JSON.stringify({ type: "userList", users: userList });

        wss.clients.forEach(client => {
            if (client.readyState === WebSocket.OPEN) {
                client.send(userListMessage);
            }
        });
    }
});
