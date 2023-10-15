function currentTime() {
    //Declare variables
    var d = new Date();
    var hr = d.getHours();
    var min = d.getMinutes();
    var sec = d.getSeconds();
    var utchr = d.getUTCHours();
    var ampm;
    var timeZones;
    var timeDiff;

    if (hr >= utchr) {
        timeDiff = hr - utchr;
    } else {
        timeDiff = 24 - utchr + hr;
    }

    if (timeDiff == 16) {
        timeZone = "PT";
    } else if (timeDiff == 17) {
        timeZone = "MT";
    } else if (timeDiff == 18) {
        timeZone = "CT";
    } else if (timeDiff == 19) {
        timeZone = "ET";
    }

    if ( sec < 10 ) {
        sec = "0" + sec;
    }
    if ( min < 10 ) {
        min = "0" + min;
    }
    if ( hr == 12 ) {
        ampm = "PM";
    } else if ( hr > 12 ) {
        hr -= 12;
        ampm = "PM";
    } else {
        ampm = "AM";
    }
    
    var time = hr + ":" + min + ":" + sec + " " + ampm + " " + timeZone;
    document.getElementById("clock").innerText = time;
    
}
currentTime();
setInterval(currentTime, 1000);