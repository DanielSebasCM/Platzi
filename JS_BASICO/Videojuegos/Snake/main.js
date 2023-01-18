'use strict';
window.addEventListener('load', function () {
  /** @type {HTMLCanvasElement} */
  let canvas = document.getElementById('game-canvas');
  let game = canvas.getContext('2d');

  let aspectRatio = 16 / 9;
  let gridSize = 2 * 16;

  let canvasSize;
  let elementSize;
  let speed = 5;
  let snake = {
    length: 3,
    x: 0,
    y: 0,
    direction: [1, 0],
    body: []
  };

  resizeCanvas();

  setInterval(() => {
    snake.body.unshift([snake.x, snake.y]);
    snake.x += snake.direction[0];
    snake.y += snake.direction[1];
    if (snake.body.length > snake.length) {
      snake.body.pop();
    }
    renderSnake();
  }, 1000 / speed);



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

  function renderSnake() {
    game.fillStyle = "#788374";
    game.clearRect(0, 0, canvas.width, canvas.height);
    snake.body.forEach((element) => {
      game.fillRect(element[0] * elementSize, element[1] * elementSize, elementSize, elementSize);
    });
  }

});