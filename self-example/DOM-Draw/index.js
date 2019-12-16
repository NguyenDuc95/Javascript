window.onload = function () {
    console.log("onload");
   
}
var ctx = document.getElementById("myCanvas");
var st = ctx.getContext("2d");
st.moveTo(0,0);
st.lineTo(200, 100);

st.stroke();

