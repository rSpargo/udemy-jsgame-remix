import Game from "./Game";

// globals
const WIDTH = 1000;
const HEIGHT = 500;

const startGame = () => {
  const canvas = document.getElementById('canvas');
  const ctx = canvas.getContext('2d');
  canvas.width = WIDTH;
  canvas.height = HEIGHT;

  const game = new Game(canvas.width, canvas.height);

  let then = performance.now();
  function animate(timeStamp) {
    const deltaTime = timeStamp - then;
    then = timeStamp;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    game.draw(ctx);
    if (!game.paused) {
      game.update(deltaTime);
    }
    requestAnimationFrame(animate);
  }
  animate(0);
};

// window.addEventListener('load', () => {
//   const titleScreen = document.getElementById('title-screen');
//   titleScreen.width = WIDTH;
//   titleScreen.height = HEIGHT;
// });

const playButton = document.getElementById('play-button');
playButton.addEventListener('click', (e) => {
  // turns off title screen; turns on game scene
  toggleScreen('title-screen', false);
  toggleScreen('canvas', true);
  startGame();
});


const toggleScreen = (id, toggle) => {
  const element = document.getElementById(id);
  element.style.display = toggle ? 'block' : 'none';
}