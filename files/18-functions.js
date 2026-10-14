// console.log(greet()) // hoisting
// function greet() {
//     return "Welcome to CodingGita"
// };

// let greet = function(){
//     return "Welcome to CodingGita"
// };

// function greet(name){
//     return ("Welcome to CodingGita, " + name)
// };
// console.log(greet("Nirmal"));
// console.log(greet("Aniiket"));

// function multiple(a, b){
//     return a * b
// }
// console.log(multiple(5, 7))

// function division(a, b){
//     return a/b
// }
// console.log(division(3, 4))

// let m1 = 85 , m2 = 92 , m3 = 78
// let avg = m1+m2+m3;
// console.log(avg);

// let x1 = 75, x2 = 99 , x3 = 77;
// let avg = x1+x2+x3;
// console.log(avg);

// function average(x, y, z){
//     let avg = (x + y + z)/ 3;
//     return avg.toFixed(2);
// }
// // console.log(average(70, 77, 88))

// let marksOfStudent1 = average(70, 77, 88);
// let marksOfStudent2 = average(67, 72, 83);
// console.log(marksOfStudent1, marksOfStudent2)

// let marks = 90;
// function showMarks(marks) {
//     console.log(marks);
// }
// showMarks(marks);

function isEven(num) {
    if (num % 2 == 0) {
        return true;

    } else {
        return false;
    }
}
let result = isEven(23);
console.log(result)