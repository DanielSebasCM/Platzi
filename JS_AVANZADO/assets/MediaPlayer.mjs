'use strict';
let mediaPlayerMethods = {
  _initPlugins() {
    this.plugins.forEach(plugin => {
      plugin.run(this)
    });
  },

  play() {
    this.video.play()
  },
  pause() {
    this.video.pause()
  },
  togglePlay() {
    if (this.video.paused) {
      this.play()
    } else {
      this.pause()
    }
  },
  mute() {
    this.video.muted = true;
  },
  unmute() {
    this.video.muted = false;
  },
  toggleMute() {
    if (this.video.muted) {
      this.unmute()
    } else {
      this.mute()
    }

  },
};

function createMediaPlayer({ video, plugins = [] }) {
  let newMediaPlayer = {
    video: video,
    plugins: plugins,
    ...mediaPlayerMethods
  };

  newMediaPlayer._initPlugins();

  return newMediaPlayer;
}
export default createMediaPlayer;