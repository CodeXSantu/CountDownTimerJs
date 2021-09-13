const day = document.getElementById('day');
const hour = document.getElementById('hour');
const min = document.getElementById('min');
const second = document.getElementById('second');

const newYears = '1 Jan 2022';



function countdown(){
    const newYearsDate = new Date(newYears)
    const currentDate = new Date();
    

    const totalSecond = Math.floor((newYearsDate - currentDate)/1000);
    const days = Math.floor(totalSecond / 3600 / 24)
    const hours = Math.floor(totalSecond / 3600) % 24;
    const minutes = Math.floor(totalSecond / 60) % 60;
    const seconds = Math.floor(totalSecond % 60)
   
    
    hour.innerHTML =formatTime(hours);
    min.innerHTML = formatTime(minutes);
    second.innerHTML = formatTime(seconds);
    day.innerHTML = formatTime(days);
    
    
}

function formatTime(time){
    return time < 10 ? (`0${time}`) : time ;
}

//initial call

countdown()

setInterval(countdown,1000)