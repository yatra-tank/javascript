// function showMarks() {
//     let marks = 90;
//     console.log(marks);
// }
// showMarks();
// console.log(marks);

// let marks = 90;
// function showMarks() {
//     console.log(marks);
// }
// showMarks();
// console.log(marks);

// function calculateMarksAndAverage(name, m1, m2, m3) {
//     let total = m1 + m2 + m3;
//     let average = total / 3;
//     return `The student ${name} gets a total marks = ${total} and an average marks = ${average}`
// }
// console.log(calculateMarksAndAverage("Aniket", 77, 85, 92));

// function reportCard(name, m1, m2) {
//     let total = m1 + m2;
//     let avg = (m1 + m2) / 2; 
//     return `The student ${name} and average is ${avg}`
// }
// console.log(reportCard("Aniket", 98, 53))

function studentReport(name, m1, m2) {
    function total(m1, m2) {
        return m1 + m2;
    };
    let totalMarks = total(m1, m2);
    return `The student ${ name } gets a total marks = ${ totalMarks}`
};
console.log(studentReport("Bineet", 78, 65))