import Game from "./Game";

window.addEventListener('load', () => {
  // canvas setup
  const canvas = document.getElementById('canvas');
  const ctx = canvas.getContext('2d');

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