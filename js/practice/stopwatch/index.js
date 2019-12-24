var clock = document.getElementById("time");
var timer;
var start_timer = false;
var init_timer = true;
var second = 0;
var min = 0;
const startTimer = () => start_timer = true;
const stopTimer = () => start_timer = false;
const setTextTimer = (second, min) => clock.textContent = `${("0" + min).slice(-2)}:${("0" + second).slice(-2)}`;
const resetTimer = () => {
    second = 0;
    min = 0;
    setTextTimer(second, min);
}
const getDate = () => {
    if (start_timer) {
        second++;
        if (second == 60) {
            min++;
            second = 0;
        }
        setTextTimer(second, min);
    }
}
setInterval(getDate, 1000);


