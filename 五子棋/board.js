// game.js
const canvas = document.getElementById('board');
const ctx = canvas.getContext('2d');
const boardSize = 19; // 15x15
const cellSize = canvas.width / boardSize; // 计算每个格子的大小
let board = []; // 用来存储棋盘状态

// 初始化棋盘
function initBoard() {
  for (let row = 0; row < boardSize; row++) {
    board[row] = [];
    for (let col = 0; col < boardSize; col++) {
      board[row][col] = null; // 空位
    }
  }
  console.log(board,'board')
}

// 绘制棋盘
function drawBoard() {
  ctx.clearRect(0, 0, canvas.width, canvas.height); // 清空画布
  for (let row = 0; row <= boardSize; row++) {
    ctx.moveTo(0, row * cellSize);
    ctx.lineTo(canvas.width, row * cellSize);
    ctx.moveTo(row * cellSize, 0);
    ctx.lineTo(row * cellSize, canvas.height);
  }
  ctx.strokeStyle = "#000";
  ctx.stroke();
}

// 绘制棋子
function drawPiece(row, col, color) {
  const x = col * cellSize + cellSize / 2;
  const y = row * cellSize + cellSize / 2;
  ctx.beginPath();
  ctx.arc(x, y, cellSize / 3, 0, Math.PI * 2);
  ctx.fillStyle = color;
  ctx.fill();
  ctx.stroke();
}

// 初始化并绘制棋盘
initBoard();
drawBoard();
