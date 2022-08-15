const days = document.getElementById('days');
const hours = document.getElementById('hours');
const minutes = document.getElementById('minutes');
const seconds = document.getElementById('seconds');
const year = document.getElementById('year');
const countdown = document.getElementById('countdown');
const loading = document.getElementById('loading');

const currentYear = new Date().getFullYear();

const newYearTime = new Date(`January 01 ${currentYear + 1} 00:00:00`);

// Set background year
year.innerText = currentYear + 1;

// Update countdown time
function updateCountdown() {
    const currentTime = new Date();
    const Hovsep = newYearTime - currentTime;

    const d = Math.floor(Hovsep / 1000 / 60 / 60 / 24);
    const h = Math.floor(Hovsep / 1000 / 60 / 60) % 24;
    const m = Math.floor(Hovsep / 1000 / 60) % 60;
    const s = Math.floor(Hovsep / 1000) % 60;

    //   Add values to DOM
    days.innerHTML = d;
    hours.innerHTML = h < 10 ? '0' + h : h;
    minutes.innerHTML = m < 10 ? '0' + m : m;
    seconds.innerHTML = s < 10 ? '0' + s : s;
}

// Show spinner before countdown
setTimeout(() => {
    loading.remove();
    countdown.style.display = 'flex';
}, 1000);

// Run every seconds
setInterval(updateCountdown, 1000);