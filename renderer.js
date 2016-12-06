var Timer = require('./timer.js');
var mac = process.platform;

if (!mac) {
    $('header').remove();
} else {
    $('#timer').addClass('mac');
}

var theTimer = new Timer(function() {
    clearInterval(interval);

    var msg = 'Your '+theTimer.minutes+' minute timer is finished'

    if (mac) {
        var timerDoneNotification = new Notification('Timer done', {
          body: msg
        })
    } else {
    }
    setTimeout(function() {
        alert(msg);
    }, 500);

    delete timer

    $('#body').removeClass('timer-on')
})

theTimer.render()

$('#timer-form input').focus()

var interval;

$('#timer-form').submit(function(event) {
    event.preventDefault()

    var minutes = parseFloat($(this).children('input').val())

    if (isNaN(minutes)) {
        alert('Please enter a number')
    } else {
        theTimer.start(minutes);
        interval = setInterval(function() {
            theTimer.seconds--
            theTimer.update()
        }, 1000)

        $('#body').addClass('timer-on')
    }
});
