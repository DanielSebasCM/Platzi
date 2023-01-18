'use strict';
window.addEventListener('load', function () {
  /** @type {HTMLCanvasElement} */
  let canvas = document.getElementById('game-canvas');
  let game = canvas.getContext('2d');

  let aspectRatio = 16 / 9;
  let gridSize = 2 * 16;

  let board = Array(gridSize).fill().map(() => Array(gridSize / aspectRatio).fill(createTile("-", 0)));
  console.log(board);

  let canvasSize;
  let elementSize;
  let speed = 5;
  let snake = {
    length: 3,
    x: 0,
    y: 0,
    direction: [1, 0]
  };


  function createTile(type, lifeSpan) {
    return { type, lifeSpan };
  }

  setInterval(() => {
    game.clearRect(0, 0, canvas.width, canvas.height);

    snake.x += snake.direction[0];
    snake.y += snake.direction[1];
    board[snake.x][snake.y] = createTile("s", snake['length']);
    drawSnake();
  }, 1000 / speed);

  resizeCanvas();

  window.addEventListener('keydown', (event) => {
    switch (event.key) {
      case 'ArrowUp':
        snake.direction = [0, -1];
        break;
      case 'ArrowDown':
        snake.direction = [0, 1];
        break;
      case 'ArrowLeft':
        snake.direction = [-1, 0];
        break;
      case 'ArrowRight':
        snake.direction = [1, 0];
        break;
    }
  });

  window.addEventListener('resize', resizeCanvas);

  function resizeCanvas() {
    canvasSize = Math.min(window.innerHeight * aspectRatio, window.innerWidth) * 0.6;
    canvas.width = canvasSize;
    canvas.height = canvasSize / aspectRatio;
    elementSize = canvasSize / gridSize;
    //renderFrame();
  }

  function drawSnake() {
    game.clearRect(0, 0, canvas.width, canvas.height);
    game.fillStyle = '#788374';
    board.forEach((row, x) => {
      row.forEach((tile, y) => {
        if (tile.type === 's') {
          if (tile.lifeSpan-- <= 0) {
            board[x][y] = createTile("-", 0);
          } else {
            game.fillRect(x * elementSize, y * elementSize, elementSize, elementSize);
          }
        }
      });
    });

  }
});