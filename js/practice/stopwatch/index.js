var clock = document.getElementById("time");
var timer;
var start_timer = false;
var init_timer = true;
var second = 0;
var min = 0;
function initTimer() {
    start_timer = true;
}
function getDate() {

    if (start_timer) {
        second++;
        if (second == 60) {
            min++;
            second = 0;
        }
        let formatSecond = ("0" + second).slice(-2);
        let formatmin = ("0" + min).slice(-2);
        clock.textContent = `${formatmin}:${formaFtSecond}`;
        console.log(1);
    }
}
setInterval(getDate, 1000);


