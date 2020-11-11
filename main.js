let date = new Date();
let hours = date.getHours().toString();
let minutes = date.getMinutes().toString();
let tabs = document.querySelectorAll('.tab');

function setHours() {
    if (hours.length == 1) {
        tabs[1].innerHTML = hours[0];
    } else {
        tabs[0].innerHTML = hours[0];
        tabs[1].innerHTML = hours[1];
    }
}

function setMinutes() {
    if (minutes.length == 1) {
        tabs[2].innerHTML = 0;
        tabs[3].innerHTML = minutes[0];
    } else {
        tabs[2].innerHTML = minutes[0];
        tabs[3].innerHTML = minutes[1];
    }
}

function getTime() {
    date = new Date();
    hours = date.getHours().toString();
    minutes = date.getMinutes().toString();
}

function setTime() {
    getTime();
    setHours();
    setMinutes();
}

setTime();
setInterval(setTime, 1000);

console.log(minutes[0]);