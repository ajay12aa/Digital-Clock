const secs = document.getElementById("secs");
const mins = document.getElementById("mins");
const hrs = document.getElementById("hrs");

setInterval(() => {
  const now = new Date();
  const hours = now.getHours();
  const minutes = now.getMinutes();
  const secounds = now.getSeconds();

  if (secounds < 10) {
    secs.innerText = "0" + secounds;
  } else {
    secs.innerText = secounds;
  }
  if (minutes < 10) {
    mins.innerText = "0" + minutes;
  } else {
    mins.innerText = minutes;
  }
  if (hours < 10) {
    hrs.innerText = "0" + hours;
  } else {
    hrs.innerText = hours;
  }
}, 1000);
