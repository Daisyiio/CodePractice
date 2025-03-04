import express from 'express';
import http from 'http';
import { Server } from 'socket.io';
import cors from 'cors';  // 引入 CORS 中间件

const app = express();
const server = http.createServer(app);
const io = new Server(server);

// 允许所有来源的跨域请求
app.use(cors());

let board = Array.from({ length: 15 }, () => Array(15).fill(null));  // 15x15 棋盘
let currentPlayer = 'X';  // 玩家1为 X，玩家2为 O

// 处理玩家的下棋请求
io.on('connection', (socket) => {
  console.log('A player connected');

  // 监听玩家下棋
  socket.on('makeMove', (move) => {
    const { x, y, player } = move;

    // 如果是轮到当前玩家dee
    if (player !== currentPlayer) return;

    // 更新棋盘
    board[x][y] = player;

    // 切换玩家
    currentPlayer = currentPlayer === 'X' ? 'O' : 'X';

    // 广播更新后的棋盘
    io.emit('updateBoard', { x, y, player });

    // 可以在这里检查胜利条件（例如调用 checkWin 函数）
  });

  socket.on('disconnect', () => {
    console.log('A player disconnected');
  });
});

server.listen(3000, () => {
  console.log('Server running on port 3000');
});
