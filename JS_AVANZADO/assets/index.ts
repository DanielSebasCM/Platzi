'use strict';

import MediaPlayer from "./MediaPlayer";
import AutoPlay from "./plugins/AutoPlay";
import AutoPause from "./plugins/AutoPause";
import { Config } from "./interfaces/Interfaces";

const video = document.querySelector('video');
const togglePlayBtn: HTMLButtonElement | null = document.querySelector('#togglePlay');
const toggleMuteBtn: HTMLButtonElement | null = document.querySelector('#toggleMute');

if (!video) throw new Error('No video element found');
if (!togglePlayBtn) throw new Error('No togglePlay button found');
if (!toggleMuteBtn) throw new Error('No toggleMute button found');

let config: Config = {
  media: video,
  plugins: [new AutoPlay(), new AutoPause()]
};

let player = new MediaPlayer(config);

togglePlayBtn.onclick = () => player.togglePlay();
toggleMuteBtn.onclick = () => player.toggleMute();

if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('/sw.js').catch(error => {
    console.log(error.message);
  });
}


