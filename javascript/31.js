function showCurrentTime(){
    var clock = document.getElementById('clock');
    var CurrentTime = new Date();
    var hours = CurrentTime.getHours();
    var minutes = CurrentTime.getMinutes();
    var secdonds = CurrentTime.getSeconds();

    var meridian = "AM";

    // if(hours >= noon){
    //     meridian = "PM";
    // }

var clocktime = hours +":" + minutes +":" + secdonds + ":" + meridian;
clock.innerText = clocktime;
}




// var oneSecond = 1000;
// setInterval(showCurrentTime, oneSecond);