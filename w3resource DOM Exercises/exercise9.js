function getOptions(){
var options = [];
var list = document.getElementById("mySelect");
  for (var i = 0; i < list.length; i++) {
    options.push(list[i].value);
  }
  alert("There are " + list.length + " options: " + options);
}
