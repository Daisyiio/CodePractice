const socket = new WebSocket("ws://localhost:8080");
let username = "";
let selectedUser = ""; // 当前选中的私聊对象

// 监听 WebSocket 连接
socket.onopen = () => {
    console.log("✅ 已连接到 WebSocket 服务器");
};

// 监听消息
socket.onmessage = (event) => {
    const data = JSON.parse(event.data);

    if (data.type === "userList") {
        updateUserList(data.users);
    } else if (data.type === "privateMessage") {
        addMessage(`私聊 - ${data.from}`, data.message, data.time);
    } else if (data.type === "message") {
        addMessage(data.user, data.message, data.time);
    } else if (data.type === "system") {
        addMessage("系统", data.message, data.time);
    }
};

// 监听关闭
socket.onclose = () => {
    console.log("❌ 连接已关闭");
    addMessage("系统", "⚠️ 服务器连接已断开", "");
};

// 设置昵称
function setUsername() {
    const nameInput = document.getElementById("name");
    username = nameInput.value.trim();

    if (username) {
        socket.send(JSON.stringify({ type: "setName", name: username }));
        nameInput.disabled = true;
        document.getElementById("message").disabled = false;
        document.querySelector("button[onclick='sendMessage()']").disabled = false;
    }
}

// 选择私聊对象
function selectUser(user) {
    selectedUser = user;
    document.getElementById("selectedUser").innerText = `当前私聊对象：${user}`;
}

// 发送消息
function sendMessage() {
    const input = document.getElementById("message");
    if (input.value.trim() !== "") {
        if (selectedUser) {
            socket.send(JSON.stringify({
                type: "privateMessage",
                to: selectedUser,
                message: input.value
            }));
            addMessage(`我 -> ${selectedUser}`, input.value, new Date().toLocaleTimeString(), true);
        } else {
            socket.send(JSON.stringify({
                type: "message",
                message: input.value
            }));
            addMessage(username, input.value, new Date().toLocaleTimeString(), true);
        }
        input.value = "";
    }
}

// 更新在线用户列表
function updateUserList(users) {
    const userListDiv = document.getElementById("userList");
    userListDiv.innerHTML = "<strong>在线用户</strong><br>";

    users.forEach(user => {
        if (user !== username) {
            const userItem = document.createElement("div");
            userItem.innerHTML = `<button onclick="selectUser('${user}')">${user}</button>`;
            userListDiv.appendChild(userItem);
        }
    });
}

// 添加消息到聊天框
function addMessage(user, msg, time, isMe = false) {
    const chatBox = document.getElementById("chat-box");
    const div = document.createElement("div");
    div.classList.add("message");

    if (isMe) div.classList.add("my-message");

    div.innerHTML = `<strong>${user}</strong> <span style="font-size: 12px; color: #aaa;">[${time}]</span><br>${msg}`;
    chatBox.appendChild(div);
    chatBox.scrollTop = chatBox.scrollHeight;
}
