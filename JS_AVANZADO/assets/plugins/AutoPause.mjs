const autoPauseMethods = {
  run(player) {
    const observer = new IntersectionObserver((entries) => {
      const entry = entries[0];
      const isVisible = entry.intersectionRatio >= this.threshold;
      if (isVisible) {
        player.play();
      } else {
        player.pause();
      }
    }, { threshold: this.threshold });

    observer.observe(player.video);
  },
};

function getAutoPause() {
  return {
    threshold: 0.25,
    ...autoPauseMethods,
  };
}

export default getAutoPause;