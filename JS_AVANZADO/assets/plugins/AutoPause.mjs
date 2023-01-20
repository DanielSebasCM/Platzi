const autoPauseMethods = {
  run(player) {
    const observer = new IntersectionObserver(handleIntersection.bind(this), { threshold: this.threshold });
    observer.observe(player.video);

    document.addEventListener('visibilitychange', () => {
      if (document.visibilityState === 'visible') {
        player.play();
      } else {
        player.pause();
      }
    });

    function handleIntersection(entries) {
      const entry = entries[0];
      const isVisible = entry.intersectionRatio >= this.threshold;
      if (isVisible) {
        player.play();
      } else {
        player.pause();
      }
    }
  },
};

function getAutoPause() {
  return {
    threshold: 0.25,
    ...autoPauseMethods,
  };
}

export default getAutoPause;