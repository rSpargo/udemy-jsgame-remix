export default class SoundController {
    constructor() {
        // initialize sound effects from index.html
      this.powerUpSound = document.getElementById('powerup');
      this.powerDownSound = document.getElementById('powerdown');
      this.explosionSound = document.getElementById('explosion');
      this.shotSound = document.getElementById('shot');
      this.hitSound = document.getElementById('hit');
      this.shieldSound = document.getElementById('shieldSound');
    }
    play(soundKey) {
      soundKey.currentTime = 0;
      soundKey.volume = 0.25;
      soundKey.play();
    }
  }