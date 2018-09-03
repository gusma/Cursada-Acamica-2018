var gameState;
var errorSound = new Audio("error.mp3");
var okSound = new Audio("ok.mp3");

$(document).ready(startGame);

function startGame() {
  gameState = getInitialState();

  // Y ahora? muajajajaja 😈
}

function getInitialState() {
  return {
    masterGrid: [
      [1, 1, 1, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0]
    ],
    successfulMovements: 0,
    successfulMovementsNeeded: 3
  };
}

function playErrorSound() {
  errorSound.play();
}

function playOkSound() {
  okSound.play();
}
