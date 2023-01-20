'use strict';

function getAutoPlay() {
  return {
    run(player) {
      player.mute();
      player.play();
    }
  }
}

export default getAutoPlay;