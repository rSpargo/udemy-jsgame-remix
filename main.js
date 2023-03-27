import Game from "./Game";
import Gameloop from "./Gameloop";

// globals
const WIDTH = 1000;
const HEIGHT = 500;
const FPS = 60;

window.addEventListener('load', () => {
  // initialize game components
  const titleScreen = document.getElementById('title-screen');
  titleScreen.style.width = `${WIDTH}px`;
  titleScreen.style.height = `${HEIGHT}px`;
  const canvas = document.getElementById('canvas');
  const ctx = canvas.getContext('2d');
  canvas.width = WIDTH;
  canvas.height = HEIGHT;

  let game,
    gameLoop;

  const startGame = () => {
    const game = new Game(canvas.width, canvas.height);
    const gameLoop = new Gameloop(game, ctx, FPS);
  };
  
  const playButton = document.getElementById('play-button');
  playButton.addEventListener('click', (e) => {
    // turns off title screen; turns on game scene
    toggleScreen('title-screen', false);
    toggleScreen('canvas', true);
    startGame();
  });
});

export const toggleScreen = (id, toggle) => {
  const element = document.getElementById(id);
  element.style.display = toggle ? 'block' : 'none';
}

export const restartGame = () => {

}