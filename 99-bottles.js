var n = 100;

function beer() {
  while (n > 0) {
    n--;
    if (n > 1) {
      console.log(n + " bottles of beer on the wall, " + n + " bottles of beer. Take one down and pass it around - " + (n - 1) + " bottles of beer on the wall.");
    }

    if (n === 1) {
      console.log(n + " bottle of beer on the wall, " + n + " bottle of beer. Take it down and pass it around - no more bottles of beer on the wall.");
    }
    if (n === 0) {
      console.log("No more bottles of beer on the wall, no more bottles of beer. Go to the store and buy some more, 99 bottles of beer on the wall.");
    }
  }
}
beer();
