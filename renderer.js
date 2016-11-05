var Timer = function(callback) {
    this.$el = $('#timer')
    this.length = 0
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

var theTimer = new Timer(function() {
    clearInterval(interval);

    var timerDoneNotification = new Notification('Timer done', {
      body: 'Your '+theTimer.length+' second timer is finished'
    })

    delete timer

    $('#body').removeClass('timer-on')
    timerDoneNotification.onclick = () => {
      console.log('Notification clicked')
    }
})

theTimer.render()

$('#timer-form input').focus()

var interval;

$('#timer-form').submit(function(event) {
    event.preventDefault()

    var minutes = parseFloat($(this).children('input').val()) * 60

    console.log(minutes);

    if (isNaN(minutes)) {
        alert('Please enter a number')
    } else {
        theTimer.start(minutes);
        interval = setInterval(function() {
            theTimer.time--
            theTimer.update()
        }, 1000)

        $('#body').addClass('timer-on')
    }
});
