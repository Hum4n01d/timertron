var Timer = function (callback) {
    this.$el = $('#timer')
    this.minutes = 0
    this.seconds = 0
    this.update = function () {
        if (this.seconds == -1) {
            this.callback();
            this.seconds = 0;
        }

        this.render()
    }
    this.render = function () {
        var minutes = Math.floor(this.seconds / 60);
        var seconds = this.seconds - minutes * 60;

        if (seconds < 10) {
            seconds = '0' + seconds
        }

        this.$el.children('#timer-minutes').text(minutes)
        this.$el.children('#timer-seconds').text(seconds);
    }
    this.start = function (minutes) {
        this.minutes = minutes
        this.seconds = minutes * 60
        this.render()
    }
    this.callback = callback

    this.update()
}

module.exports = Timer;