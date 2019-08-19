function insert_Row(){
var newRow = document.getElementById("sampleTable").insertRow(0);
newRow.insertCell(0).innerHTML = "new cell 1";
newRow.insertCell(1).innerHTML = "new cell 2";
}
