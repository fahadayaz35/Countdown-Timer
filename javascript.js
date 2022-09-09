var countsdate = new Date('Mar 30, 2021 00:00:00').getTime();

function endtime(){
    var now = new Date().getTime();
    gap = countsdate - now;

    var second = 1000;
    var minute = second * 60;
    var hour = minute * 60;
    var day = hour * 24;

    var a = Math.floor(gap / (day));
    var b = Math.floor((gap % (day)) / (hour));
    var c = Math.floor((gap % (hour)) / (minute));
    var d = Math.floor((gap % (minute)) / (second));

    document.getElementById('day').innerText = a;
    document.getElementById('hour').innerText = b;
    document.getElementById('minute').innerText = c;
    document.getElementById('second').innerText = d;
}

setInterval(function(){
    endtime();
},1000)

