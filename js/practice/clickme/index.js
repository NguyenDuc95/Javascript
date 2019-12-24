var pos_x;
var pos_y;
var btn_clickme = document.getElementById("click-me");
let rect = btn_clickme.getBoundingClientRect();
function getMousePosition(event) {
    pos_x = event.clientX;
    pos_y = event.clientY;
    if (((rect.left < pos_x) && (pos_x < rect.right))
        && ((rect.top < pos_y) && (pos_y < rect.bottom))) {
        hideButton();
    } else {
        unhideButton();
    }
}
const hideButton = () => btn_clickme.style.display = "none";

const unhideButton = () => btn_clickme.style.display = "block";
