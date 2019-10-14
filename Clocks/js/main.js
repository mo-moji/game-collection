const time = document.getElementById("time");
const secondsHand = document.getElementById("seconds-hand");
const minutesHand = document.getElementById("minutes-hand");
const hourHand = document.getElementById("hour-hand");


function showTime(){
  let today = new Date();
  let hour = today.getHours();
  let mins = today.getMinutes();
  let secs = today.getSeconds();
  let digitalTime =  mins + ":" + secs;
  if (secs < 10) {
    digitalTime =  mins + ":0" + secs;
  }else{
    digitalTime =  mins + ":" + secs;
  }
  
  let secondsDegrees = (secs/60)*360;
  let minutesDegrees = (mins/60)*360;

  if (hour > 12){
	hour -= 12;
	digitalTime = hour + ":" + digitalTime + " PM";
  }else{
	digitalTime = digitalTime + " AM";
  }
	let hourDegrees = (hour/12)*360;;
  time.innerHTML = digitalTime;


  if(secondsDegrees === 0 || minutesDegrees === 0  || hourDegrees === 0 ){
    secondsHand.style.transition = "none";
    minutesHand.style.transition = "none";
    hourHand.style.transition = "none";
  }else if((secondsDegrees > 0 || minutesDegrees > 0 || hourDegrees > 0 ) && 
    (secondsDegrees < 360 || minutesDegrees < 360  || hourDegrees < 360 )){
    secondsHand.style.transition = "";
    minutesHand.style.transition = "";
    hourHand.style.transition = "";
  }
  secondsHand.style.transform = "rotate(" + secondsDegrees + "deg)";
  minutesHand.style.transform = "rotate(" + minutesDegrees + "deg)";
  hourHand.style.transform = "rotate(" + hourDegrees + "deg)";


  setTimeout(showTime, 1000);
}

showTime();


