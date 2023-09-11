const hrs = document.getElementById('hrs');
const mins = document.getElementById('mins');
const sec = document.getElementById('sec');
const AmOrBm = document.getElementById('am');



function displaytime(){
    const time = new Date();

    const hours = time.getHours();
    const minutes = time.getMinutes();
    const seconds = time.getSeconds();

    const amOrbm = hours >= 12 ? 'PM' : 'AM';

    const formattedHours = hours % 12 || 12;

    const formattedMinutes = minutes < 10 ? '0'+minutes : minutes;
    const formattedSeconds = seconds < 10 ? '0'+seconds : seconds;

    hrs.innerHTML = formattedHours;
    mins.innerHTML = formattedMinutes;
    sec.innerHTML = formattedSeconds;
    AmOrBm.innerHTML = amOrbm;
}

displaytime();
setInterval(displaytime, 1000);