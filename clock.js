let hour = document.querySelector('.hour');
let min = document.querySelector('.min');
let sec = document.querySelector('.sec');
let deg = 6;
setInterval(timehandler, 1000);
function timehandler(){
    let now = new Date();
    let h = now.getHours()*30;
    let m = now.getMinutes()*deg;
    let s = now.getSeconds()*deg;
    sec.style.transform = `rotateZ(${s}deg)`;
    min.style.transform = `rotateZ(${m}deg)`;
    hour.style.transform = `rotateZ(${h + (m/12)}deg)`;
}
