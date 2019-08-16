function fibonacciGenerator(n) {
  if (n === 1) {
    var fibbonaci = [0];
    return (fibbonaci);
  } else if (n === 2) {
    var fibbonaci = [0, 1];
    return (fibbonaci);
  } else if (n > 2) {
    var fibbonaci = [0, 1];
    var backup = 1;
    var m = 1;
    var l = 0;
    for (var i = 3; i <= n; i++) {
      backup = m;
      m = m + l;
      l = backup;
      fibbonaci.push(m);
    }
    return (fibbonaci);
  }

}
