function changeContent(){
var rowNb = prompt("Select row (1,2,3)");
var col = prompt("Select column (0,1)");
var text = prompt("type new text");
document.getElementById("myTable").rows[rowNb].cells[col].innerHTML = text;
}
