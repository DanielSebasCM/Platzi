import { MediaPlayer } from '../MediaPlayer';
class AutoPlay {
  run(player: MediaPlayer) {
    player.mute();
    player.play();
  }
}

export default AutoPlay;