var Timer = require('./timer.js');

var theTimer = new Timer(function() {
    clearInterval(interval);

    var msg = 'Your '+theTimer.length+' second timer is finished'

    var timerDoneNotification = new Notification('Timer done', {
      body: msg
    })

    delete timer

    $('#body').removeClass('timer-on')
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
