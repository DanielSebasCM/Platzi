document.addEventListener("DOMContentLoaded", () => {
  /** @type {HTMLCanvasElement} */
  const canvas = document.querySelector('#game');
  const game = canvas.getContext('2d');
  const livesSpan = document.getElementById("lives");
  const timeSpan = document.getElementById("time");
  const recordSpan = document.getElementById("record");


  let canvasSize;
  let elementSize;

  let lives;
  let recordTime;
  let startTime;
  let playerPos;

  let map;
  let currentMap;

  let timeInterval;

  startGame();

  resizeCanvas();

  window.addEventListener('resize', resizeCanvas);

  window.addEventListener('keydown', (event) => {
    let dir;
    switch (event.key) {
      case 'ArrowUp':
        dir = [-1, 0];
        break;
      case 'ArrowDown':
        dir = [1, 0];
        break;
      case 'ArrowLeft':
        dir = [0, -1];
        break;
      case 'ArrowRight':
        dir = [0, 1];
        break;
      default:
        dir = [0, 0];
        return;
    }
    move(dir);
  });

  function startGame() {
    lives = 3;
    playerPos = [];
    map = [];
    currentMap = 0;

    loadMap(maps[currentMap]);

    if (!localStorage.record_time) {
      localStorage.setItem('record_time', 30)
    }
    recordTime = Number(localStorage.getItem('record_time'));

    startTime = Date.now();
    timeInterval = setInterval(() => {
      timeSpan.innerText = ((Date.now() - startTime) / 1000).toFixed(2);
    }, 50);
  }

  function loadMap(mapStr) {
    map = mapStr.trim().split('\n');
    map = map.map(row => row.trim().split(''));
    console.log(map);

    map.forEach((row, i) => {
      row.forEach((element, j) => {
        if (element === 'O') {
          playerPos = [i, j];
        }
      });
    });
  }

  function resizeCanvas() {
    canvasSize = Math.min(window.innerHeight, window.innerWidth) * 0.7;
    canvas.width = canvasSize;
    canvas.height = canvasSize;
    elementSize = canvasSize / map.length;
    game.font = elementSize + "px Verdana";
    renderFrame();
  }

  function renderFrame() {
    game.clearRect(0, 0, canvasSize, canvasSize);
    game.textAlign = "center";
    map.forEach((row, i) => {
      row.forEach((element, j) => {
        let x = (j + 0.5) * elementSize;
        let y = (i + 0.84) * elementSize;
        game.fillText(emojis[element], x, y);
      });
    });

    game.fillText(emojis['PLAYER'],
      (playerPos[1] + 0.5) * elementSize,
      (playerPos[0] + 0.84) * elementSize);

    livesSpan.innerText = '❤️'.repeat(lives);
    recordSpan.innerText = recordTime;
  }

  function move(dir) {
    let newX = playerPos[0] + dir[0];
    let newY = playerPos[1] + dir[1];

    if (newX < 0 || newX >= map.length || newY < 0 || newY >= map[0].length) return;

    if (map[newX][newY] === 'X') {
      if (--lives === 0) {
        gameOver();
      }
      renderFrame();
      return;
    }

    playerPos = [newX, newY];

    if (map[newX][newY] === 'I') {
      if (currentMap === maps.length - 1) {
        gameWon();
      }
      else {
        loadMap(maps[++currentMap]);
      }
    }

    renderFrame(map);
  }

  function gameWon() {
    clearInterval(timeInterval);
    const finalTime = ((Date.now() - startTime) / 1000).toFixed(2);
    if (finalTime < recordTime) {
      localStorage.setItem('record_time', finalTime);
    }

    alert('You won! with a time of ' + finalTime + ' seconds');
    startGame();

  }

  function gameOver() {
    alert('Game over!');
    clearInterval(timeInterval);
    startGame();
  }

});