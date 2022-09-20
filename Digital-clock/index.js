"use strict";

function showTime() {
  let date = new Date();
  let hour = date.getHours();
  let minute = date.getMinutes();
  let second = date.getSeconds();
  let session = "AM";

  if (hour == 12) {
    hour = 12;
    session = "AM";
  }

  if (hour > 12) {
    hour = hour - 12;
    session = "PM";
  }

  hour = hour < 10 ? "0" + hour : hour;

  minute = minute < 10 ? "0" + minute : minute;

  second = second < 10 ? "0" + second : second;

  let time = `${hour} : ${minute} : ${second} ${session}.`;
  document.getElementById("Digital-clock").innerHTML = time;

  setTimeout(showTime, 1000);

  console.log(hour);
}

showTime();
