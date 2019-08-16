var output = [];
var n = 0;

function fizzBuzz(){
n++;

if ((n % 3) === 0 && (n % 5) === 0){
    output.push("fizzbuzz");
}
else if ((n % 3) === 0){
    output.push("fizz");
}
else if ((n % 5) === 0){
    output.push("buzz");
}
else{
    output.push(n);
}

    console.log(output);
}
fizzBuzz();
