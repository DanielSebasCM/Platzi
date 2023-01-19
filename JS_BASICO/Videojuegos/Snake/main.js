'use strict';
window.addEventListener('load', function () {
  /** @type {HTMLCanvasElement} */
  const canvas = document.getElementById('game-canvas');
  const game = canvas.getContext('2d');
  const scoreSpan = document.getElementById('score');

  const aspectRatio = 16 / 9;
  const gridSize = 2 * 16;

  let canvasSize;
  let elementSize;
  let speed = 5;

  const snake = {
    length: 3,
    x: 0,
    y: 0,
    direction: [1, 0],
    body: []
  };
  snake.body.unshift([snake.x, snake.y]);

  scoreSpan.innerText = (snake.length - 3) * 100;
  let food = getFood();

  resizeCanvas();

  let gameUpdateInterval = setInterval(updateGameState, 1000 / speed);

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

  function updateGameState() {
    snake.x += snake.direction[0];
    snake.y += snake.direction[1];
    snake.body.unshift([snake.x, snake.y]);

    if (snake.body.length > snake.length) {
      snake.body.pop();
    }

    let isSnakeOutOfBounds =
      snake.x < 0 || snake.x >= gridSize ||
      snake.y < 0 || snake.y >= gridSize / aspectRatio;

    let didSnakeEatItself = snake.body.some((pos, index) => {
      return index !== 0 && pos[0] === snake.x && pos[1] === snake.y;
    });
    if (isSnakeOutOfBounds || didSnakeEatItself) {
      gameOver();
      return;
    }

    if (snake.x === food.x && snake.y === food.y) {
      snake.length++;
      food = getFood();
      speed += 0.5;
      scoreSpan.innerText = (snake.length - 3) * 100;
    }

    renderGame();
  }

  function resizeCanvas() {
    canvasSize = Math.min(window.innerHeight * aspectRatio, window.innerWidth) * 0.6;
    canvas.width = canvasSize;
    canvas.height = canvasSize / aspectRatio;
    elementSize = canvasSize / gridSize;
    renderGame();
  }

  function renderGame() {
    game.fillStyle = "#788374";
    game.clearRect(0, 0, canvas.width, canvas.height);
    let snakePadding = elementSize * 0.01;
    let snakeSize = elementSize - snakePadding * 2;
    snake.body.forEach((element) => {
      game.fillRect(
        element[0] * elementSize + snakePadding,
        element[1] * elementSize + snakePadding,
        snakeSize, snakeSize);
    });
    game.fillStyle = "#aa644d";
    let foodPadding = elementSize * 0.15;
    let foodSize = elementSize - foodPadding * 2;
    game.fillRect(food.x * elementSize + foodPadding, food.y * elementSize + foodPadding, foodSize, foodSize);
  }

  function gameOver() {
    clearInterval(gameUpdateInterval);
    game.fillStyle = "#788374";
    game.textAlign = "center";
    game.clearRect(0, 0, canvas.width, canvas.height);
    game.font = "30px Arial";
    game.fillText("Game Over", canvas.width / 2, (canvas.height / 2) + 15);
  }

  function getFood() {
    let x = Math.floor(Math.random() * gridSize);
    let y = Math.floor(Math.random() * gridSize / aspectRatio);
    if (snake.body.some((pos) => pos[0] === x && pos[1] === y)) {
      return getFood();
    }
    return { x, y };
  }
});