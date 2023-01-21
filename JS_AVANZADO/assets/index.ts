'use strict';

import { MediaPlayer, Config } from "./MediaPlayer";
import AutoPlay from "./plugins/AutoPlay";
import AutoPause from "./plugins/AutoPause";
const video = document.querySelector('video');
const togglePlayBtn = document.querySelector('#togglePlay');
const toggleMuteBtn = document.querySelector('#toggleMute');

let config: Config = {
  media: video as HTMLVideoElement,
  plugins: [new AutoPlay(), new AutoPause()]
};

let player = new MediaPlayer(config);

togglePlayBtn?.addEventListener('click', () => player.togglePlay());
toggleMuteBtn?.addEventListener('click', () => player.toggleMute());

if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('/sw.js').catch(error => {
    console.log(error.message);
  });
}


