 export default class InputHandler {
    constructor(game) {
      this.game = game;
      window.addEventListener('keydown', (e) => {
        if (
          ((e.key === 'ArrowUp') ||
           (e.key === 'ArrowDown')
          ) && !this.game.keys.includes(e.key)) {
          this.game.keys.push(e.key);
        } else if (e.key === ' ') {
          this.game.player.shootTop();
        } else if (e.key === 'd') {
          this.game.debug = !this.game.debug;
        } else if (e.key === 'Escape') {
          this.game.paused = !this.game.paused;
        }

        // reset or go to main menu during game over state
        if (this.game.gameOver) {
          if (e.key === 'y') {
            this.game.reset();
          } else if (e.key === 'n') {
            // take back to main menu
          }
        }
      });
      window.addEventListener('keyup', (e) => {
        if (this.game.keys.includes(e.key)) {
          this.game.keys.splice(this.game.keys.indexOf(e.key), 1);
        }
      });
    }
  }