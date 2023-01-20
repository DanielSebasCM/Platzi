'use strict';
let autoPlayMethods = {
  run(player) {
    player.mute();
    player.play();
  }
};

function getAutoPlay() {
  return {
    ...autoPlayMethods,
  }
}

export default getAutoPlay;