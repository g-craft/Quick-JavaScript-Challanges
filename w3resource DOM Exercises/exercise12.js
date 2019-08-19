function highlight() {
var strong = document.querySelectorAll("strong");
for (i=0; i<strong.length; i++){
strong[i].style.backgroundColor = "teal";
}
}
function back() {
var strong = document.querySelectorAll("strong");
for (i=0; i<strong.length;i++){
strong[i].style.backgroundColor = "";
}
}
