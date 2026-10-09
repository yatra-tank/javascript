// let arr = [10, 20, 30]

// bag = ""
// for (let i = 0; i < arr.length - 1; i ++){
//     bag += arr[i] + " ";
//     // console.log(arr[i])
// }
// console.log(bag)

let mat = [
    [10, 20, 30],
    [40, 50, 60],
    [70, 80, 90]
];

let rows = mat.length;
let cols = mat[0].length;
console.log(rows, cols)

for (let i = 0; i < rows; i ++){
    bag = " "
    for (let j = 0; j <  cols; j ++){
        bag += mat [i][j] + " "
    }
    console.log(bag)
}