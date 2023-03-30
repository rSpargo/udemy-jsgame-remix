export default class UI {
    constructor(game) {
      this.game = game;
      this.fontSize = 25;
      this.fontFamily = 'Tilt Prism';
      this.color = 'white';
    }
    draw(context) {
      context.save();
      context.fillStyle = this.color;
      context.shadowOffsetX = 2;
      context.shadowOffsetY = 2;
      context.shadowColor = 'black';
      context.font = `${this.fontSize}px Helvetica`;
      // score
      context.fillText(`Score: ${this.game.score}`, 20, 40);
      // timer
      const formattedTime = (!this.game.gameOver ? (this.game.timeLimit * 0.001) - (this.game.gameTime * 0.001): 0).toFixed(1);
      context.fillText(`Timer: ${formattedTime}`, 20, 100);
      // pause
      if (this.game.paused) {
        context.textAlign = 'center';
        context.font = `80px ${this.fontFamily}`;
        context.fillText('PAUSED', this.game.width * 0.5, this.game.height * 0.5 - 20);
        context.font = `25px Helvetica`;
        context.fillText('Press ESC to continue.', this.game.width * 0.5, this.game.height * 0.5 + 20);
      }
      // game over messages
      if (this.game.gameOver) {
        context.textAlign = 'center';
        let message1;
        let message2;
        let retryMessage;
        if (this.game.score > this.game.winningScore) {
          message1 = 'Most Wondrous!';
          message2 = 'Well done explorer!';
          retryMessage = 'Play again? (Y/N)';
        } else {
          message1 = 'Blazes!';
          message2 = 'Get my repair kit and try again...';
          retryMessage = 'Try again? (Y/N)';
        }
        context.font = `80px ${this.fontFamily}`;
        context.fillText(message1, this.game.width * 0.5, this.game.height * 0.5 - 20);
        context.font = `25px Helvetica`;
        context.fillText(message2, this.game.width * 0.5, this.game.height * 0.5 + 20);
        context.font = '20px Helvetica';
        context.fillText(retryMessage, this.game.width * 0.5, this.game.height * 0.5 + 60);
      }
      // ammo
      if (this.game.player.powerUp) { context.fillStyle = '#ffffbd'; }
      for (let i = 0; i < this.game.ammo; i++) {
        context.fillRect(20 + 5 * i, 50, 3, 20);
      }
      // show fps on debug
      if (this.game.debug) {
        context.font = '12px Helvetica';
        context.fillText(`${this.game.fps} FPS`, this.game.width * 0.94, 20);
      }
      context.restore();
    }
  }