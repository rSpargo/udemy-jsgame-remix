export default class Gameloop {
    constructor(game, context, fps) {
        this.game = game;
        this.context = context;
        this.fps = fps;

        let fpsInterval = 1000 / this.fps;
        let then = performance.now();
        function animate(timeStamp) {
        let deltaTime = timeStamp - then;
        // throttle FPS to minimum variable
        if (deltaTime > fpsInterval) {
            this.context.clearRect(0, 0, canvas.width, canvas.height);
            this.game.draw(ctx);
            if (!this.game.paused) {
            this.game.update(deltaTime);
            }
            then = timeStamp;
        }
        requestAnimationFrame(animate);
        }
        animate(0);
    }
}