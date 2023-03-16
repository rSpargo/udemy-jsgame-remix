import Game from "./Game";

const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

// show loading text until everything is ready
ctx.fillStyle = '#fff';
ctx.font = 'bold 38px Helvetica';
ctx.textAlign = 'center';
ctx.fillText('LOADING...', canvas.width * 0.5, canvas.height * 0.6);

window.addEventListener('load', () => {
  canvas.width = 1000;
  canvas.height = 500;

  // instantiates new game on page load
  const game = new Game(canvas.width, canvas.height);
  
  // handles animation loop
  let lastTime = 0;
  function animate(timeStamp) {
    const deltaTime = timeStamp - lastTime;
    lastTime = timeStamp;
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    game.draw(ctx);
    game.update(deltaTime);
    requestAnimationFrame(animate);
  }
  animate(0);
});