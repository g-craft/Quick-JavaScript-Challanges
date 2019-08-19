function createTable(){
var rowNb = prompt("Select nb of rows");
var colNb = prompt("Select nb of columns");
var newRow = document.getElementById("myTable");
for (i=0; i< rowNb; i++){
var newCell = newRow.insertRow(i);
for (j=0; j< colNb; j++){
newCell.insertCell(j).innerHTML = "row " + i + " cell " + j;
}
}

}
