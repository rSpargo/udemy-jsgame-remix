import Game from "./Game";

// globals
const WIDTH = 1000;
const HEIGHT = 500;
const FPS = 60;

window.addEventListener('load', () => {
  // initialize game components
  const titleScreen = document.getElementById('title-screen');
  titleScreen.style.width = `${WIDTH}px`;
  titleScreen.style.height = `${HEIGHT}px`;

  let game;

  const playGame = () => {
    const canvas = document.getElementById('canvas');
    const ctx = canvas.getContext('2d');
    canvas.width = WIDTH;
    canvas.height = HEIGHT;
    let fpsInterval = 1000 / FPS;
    let then = performance.now();
    
    if (!game) {
      // start new game instance and game loop
      game = new Game(canvas.width, canvas.height);
    } else {
      // reset current game instance
      game.reset();
    }
    
    animate(0);

    function animate(timeStamp) {
    let deltaTime = timeStamp - then;
    console.log("loop running");
    // throttle FPS to minimum variable (default 60)
    if (deltaTime > fpsInterval) {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        game.draw(ctx);
        if (!game.paused) {
        game.update(deltaTime);
        }
        then = timeStamp;
    }
    // only update animation if canvas is active (game is in play state)
    if (canvas.style.display === 'block') { requestAnimationFrame(animate); }
    }
  };

  const playButton = document.getElementById('play-button');
  playButton.addEventListener('click', (e) => {
    // turns off title screen; turns on game scene
    toggleScreen('title-screen', false);
    toggleScreen('canvas', true);
    playGame();
  });
  
});

export const toggleScreen = (id, toggle) => {
  const element = document.getElementById(id);
  element.style.display = toggle ? 'block' : 'none';
}