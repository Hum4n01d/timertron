var Timer = function(callback) {
    this.$el = $('#timer')
    this.minutes = 0
    this.time = 0
    this.update = function() {
        if (this.time == -1) {
            this.callback();
            this.time = 0;
        }

        this.render()
    }
    this.render = function() {
        var minutes = Math.floor(this.time / 60);
        var seconds = this.time - minutes * 60;

        if (seconds < 10) {
            seconds = '0'+seconds
        }

        this.$el.children('#timer-minutes').text(minutes)
        this.$el.children('#timer-seconds').text(seconds);
    }
    this.start = function(minutes) {
        this.length = minutes
        this.time = minutes
        this.render()
    }
    this.callback = callback

    this.update()
}

module.exports = Timer;
