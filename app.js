$('video').on('ended', function () {
    this.load();
    this.play();
});