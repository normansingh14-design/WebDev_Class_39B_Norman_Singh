// 5. Largest of Three Numbers
// • Task: Given three numbers a, b, and c, find and log the
// largest one without using Math.max().


let a = 25;
let b = 45;
let c = 15;

if (a >= b && a >= c) {
    console.log("The largest number is: " + a);
} else if (b >= a && b >= c) {
    console.log("The largest number is: " + b);
} else {
    console.log("The largest number is: " + c);
}
