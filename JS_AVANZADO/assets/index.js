'use strict';

import createMediaPlayer from "./MediaPlayer.mjs";
import getAutoPlay from "./plugins/AutoPlay.mjs";
import getAutoPause from "./plugins/AutoPause.mjs";

const video = document.querySelector('video');
const togglePlayBtn = document.querySelector('#togglePlay');
const toggleMuteBtn = document.querySelector('#toggleMute');

let player = createMediaPlayer({ video: video, plugins: [getAutoPlay(), getAutoPause()] });
console.log(player);
togglePlayBtn.onclick = () => player.togglePlay();
toggleMuteBtn.onclick = () => player.toggleMute();
