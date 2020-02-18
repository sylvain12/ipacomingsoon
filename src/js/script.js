var lauchDate = '2020-03-15 23:30';


function getCutdown(time, dayTarget, hourTarget, minuteTarget, secondTarget) {

// Set the date we're counting down to
var countDownDate = new Date(time).getTime();
// var countDownDate = new Date("Jan 5, 2021 15:37:25").getTime();

// Update the count down every 1 second
var x = setInterval(function() {
    // Get today's date and time
    var now = new Date().getTime();

    // Find the distance between now and the count down date
    var distance = countDownDate - now;

    // Time calculations for days, hours, minutes and seconds
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));

    var hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );

    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));

    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Display the result in the element with id="demo"
    
    var day = document.getElementById(dayTarget)
    var hour = document.getElementById(hourTarget)
    var minute = document.getElementById(minuteTarget)
    var second = document.getElementById(secondTarget)

    day.innerText = days;
    hour.innerText = hours;
    minute.innerText = minutes;
    second.innerText = seconds;

    // If the count down is finished, write some text
    if (distance < 0) {
        clearInterval(x);
        resetTimer(dayTarget, hourTarget, minuteTarget, secondTarget);
    }
}, 1000);
}

getCutdown(lauchDate, 'counter-day', 'counter-hour', 'counter-minute', 'counter-second');
