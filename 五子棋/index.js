let currentPlayer = 'black'; // 当前玩家
let isGameOver = false; // 游戏是否结束

// 切换玩家
function switchPlayer() {
  currentPlayer = currentPlayer === 'black' ? 'white' : 'black';
  document.getElementById('message').innerText = `当前玩家: ${currentPlayer === 'black' ? '黑' : '白'}`;
}

// 检查是否落子
canvas.addEventListener('click', (e) => {
  if (isGameOver) return;

  const rect = canvas.getBoundingClientRect();
  const x = e.clientX - rect.left;
  const y = e.clientY - rect.top;

  const col = Math.floor(x / cellSize);
  const row = Math.floor(y / cellSize);

  // 如果该位置已被占据，不做任何操作
  if (board[row][col] !== null) return;

  // 在棋盘上放置棋子
  board[row][col] = currentPlayer;
  drawPiece(row, col, currentPlayer === 'black' ? 'black' : 'white');

  // 判断胜负
  if (checkWin(row, col)) {
    document.getElementById('message').innerText = `${currentPlayer === 'black' ? '黑' : '白'} 胜利!`;
    isGameOver = true;
    return;
  }

  // 切换玩家
  switchPlayer();
});

// 胜负判断
function checkWin(row, col) {
  const directions = [
    { r: 0, c: 1 },  // 水平
    { r: 1, c: 0 },  // 垂直
    { r: 1, c: 1 },  // 斜向 /
    { r: 1, c: -1 }, // 斜向 \
  ];

  for (let dir of directions) {
    let count = 1;

    // 向一个方向延伸
    for (let i = 1; i < 5; i++) {
      const r = row + dir.r * i;
      const c = col + dir.c * i;
      if (r >= 0 && r < boardSize && c >= 0 && c < boardSize && board[r][c] === currentPlayer) {
        count++;
      } else {
        break;
      }
    }

    // 向另一个方向延伸
    for (let i = 1; i < 5; i++) {
      const r = row - dir.r * i;
      const c = col - dir.c * i;
      if (r >= 0 && r < boardSize && c >= 0 && c < boardSize && board[r][c] === currentPlayer) {
        count++;
      } else {
        break;
      }
    }

    // 判断是否连成五子
    if (count >= 5) {
      return true;
    }
  }

  return false;
}
