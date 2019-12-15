
function ChangeColor(color) {
    document.getElementById("shape").style.backgroundColor = color;
}
var height_shape = document.getElementById("shape").style.height;
var width_shape = document.getElementById("shape").style.width;
console.log(width_shape);
var radius_shape = 0;

function ChangeShape(shape) {
    switch (shape) {
        case "square":
            document.getElementById("shape").style.width = "100px";
            document.getElementById("shape").style.height = "100px";
            document.getElementById("shape").style.borderRadius = "0%";
            break;
        case "circle":
            document.getElementById("shape").style.width = "100px";
            document.getElementById("shape").style.height = "100px";
            document.getElementById("shape").style.borderRadius = "50%";
            break;
        case "oval":
            document.getElementById("shape").style.height = "100px";
            document.getElementById("shape").style.width = "50px";
            document.getElementById("shape").style.borderRadius = "50%";
            break;
    }
}