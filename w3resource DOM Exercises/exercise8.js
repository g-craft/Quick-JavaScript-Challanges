function removecolor()
{
var selectedColor = document.getElementById("colorSelect");
selectedColor.remove(selectedColor.selectedIndex);
}

// Old version:

// function removecolor() {
//   var selectedColor = document.getElementById("colorSelect");
//   for (i = 0; i < selectedColor.length; i++) {
//     if (selectedColor[i].value === selectedColor.value) {
//       selectedColor[i].remove();
//     }
//   }
// }
