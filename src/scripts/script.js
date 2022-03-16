import Countdown from "./countdown.js";

let x = new Date().getTime();
x += Math.random() * 9999999999;

const finalTime = new Countdown(x);

let days = document.getElementById("d");
let hours = document.getElementById("h");
let minutes = document.getElementById("m");
let seconds = document.getElementById("s");

let atualiza = setInterval(() => {
    days.innerHTML = finalTime.days.toString();
    hours.innerHTML = (finalTime.hours % 24).toString();
    minutes.innerHTML = (finalTime.minutes % 60).toString();
    seconds.innerHTML = (finalTime.seconds % 60).toString();
}, 1000);
