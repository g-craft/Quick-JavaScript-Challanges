function calculate(){
var value = document.getElementById("radius").value;
volume = (4/3) * Math.PI * Math.pow(value, 3);
volume = volume.toFixed(4);
document.getElementById('volume').value = volume;
}
