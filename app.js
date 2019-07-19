function startTime() {
    var today = new Date();
    var h = today.getHours() % 12 || 12;
    var m = today.getMinutes();
    var s = today.getSeconds();
    m = checkTime(m);
    s = checkTime(s);

    var t = setTimeout(startTime, 500);

    if (h > 12) {
        document.getElementById('clock').innerHTML =
            h + ":" + m + ":" + s + "AM";
    } else {
        document.getElementById('clock').innerHTML =
            h + ":" + m + ":" + s + "PM";
    }
}

function checkTime(i) {
    if (i < 10) {
        i = "0" + i
    }; // add zero in front of numbers < 10
    return i;
}