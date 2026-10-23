// const matrix = [
//     [10, 20, 30],
//     [40, 50, 60],
//     [70, 80, 90]
// ];
// console.log(matrix[1][2]);

// let mat = [
//     [10, 20, 30, 40],
//     [50, 60, 70, 80]
// ];

// for (let i = 0; i < 2; i ++){
//     console.log(mat[i]);
// }

// for (let i = 0; i < 4; i ++){
//     console.log(mat[0][i]);
// }

// let matrix = [
//     [87, 77, 95],
//     [83, 71, 92],
//     [91, 73, 98]
// ];

// for (let i = 0; i < 3; i ++){
//     console.log(matrix[1][i]);
// }

// const arr = [
//     [10, 20, 30],
//     [40, 50, 60],
//     [70, 80, 90],
//     [44, 66, 88]
// ];
// console.log(arr[arr.length - 1][arr[0].length - 1]

// let students = ["ayan", "mayank", "rounak", "jainam", "eklavya"];
// for (const i in students){
//     console.log(i)
// }

let marks = [90, 72, 85, 68, 53];
let highest = -Infinity;
let lowest = Infinity;
for (const mark of marks){
    let highest = mark > highest ? mark : highest;
    let lowest = mark > lowest ? mark : lowest;
    sum += mark
};
let avg = sum / marks.length
condsole.log(lowest, highest, sum, avg)