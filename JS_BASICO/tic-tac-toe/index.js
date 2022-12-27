window.addEventListener("DOMContentLoaded", () => {
    const tiles = Array.from(document.querySelectorAll(".tile"));
    const display_player = document.querySelector(".display-player");
    const display_winner = document.querySelector(".result");
    const btn_reset = document.querySelector("#reset");

    let board = ['', '', '', '', '', '', '', '', ''];
    let isOver = false;
    let currentPlayer = "X";
    const winningCombinations = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];


    const changePlayer = () => {
        display_player.classList.remove(`player${currentPlayer}`);
        currentPlayer = currentPlayer === "X" ? "O" : "X"; //Update player
        display_player.innerHTML = currentPlayer;
        display_player.classList.add(`player${currentPlayer}`);
    };

    const validateBoard = () => {
        let roundWon = false;
        for (let combination of winningCombinations) {
            const [a, b, c] = combination;
            if (board[a] && board[a] === board[b] && board[a] === board[c]) {
                roundWon = true;
                isOver = true;
                break;
            }
        };
        if (roundWon) {
            display_winner.innerHTML = `${currentPlayer} wins!`;
            display_winner.classList.remove("hide");
            return;
        }
        if (!board.includes("")) {
            display_winner.innerHTML = "Draw!";
            display_winner.classList.remove("hide");
            return;
        }
    };

    const reset = () => {
        //Clears board
        board = ['', '', '', '', '', '', '', '', ''];
        tiles.forEach((tile) => {
            tile.innerHTML = ""
            tile.classList.remove('playerX');
            tile.classList.remove('playerO');
        })
        //Resets player
        display_player.innerHTML = "X";
        currentPlayer = "X";
        //Resets game
        isOver = false;
        display_winner.innerHTML = "";
        display_winner.classList.add("hide");
    };

    btn_reset.addEventListener("click", reset);

    tiles.forEach((tile, idx) => {
        tile.addEventListener("click", () => {
            if (tile.innerHTML !== "" || isOver) return;

            tile.innerHTML = currentPlayer;
            board[idx] = currentPlayer;
            tile.classList.add(`player${currentPlayer}`);
            validateBoard();
            changePlayer();



        });
    });
});

