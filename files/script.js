// function division(p, q){
//     console.log(p/q)
// };
// division(20,10);

// function calculator(a, b){
//     console.log(a + b);
//     console.log(a - b);
//     console.log(a * b);
//     console.log(a / b);
// };
// calculator(20, 10);

// function greet(){
//     return "Hello Everyone"
// };
// console.log(greet());

// var baseRent = 1000;
// var maintainanceCharges = 500;
// var monthlyRent = baseRent + maintainanceCharges;
// console.log("The total monthly rent is:", monthlyRent, "Rs");

// var wallet = 7000;
// var spent = 179;
// var remainingAmount = wallet - spent;
// console.log("The remaining amount in the wallet is:", remainingAmount, "Rs")

// var totalTime = 60;
// var timeSpent = 24;
// var timeLeft = totalTime - timeSpent;
// console.log("The time remaining to complete a task is:", timeLeft, "minutes.")

// var totalChocolates = 97;
// var totalFriends = 4;
// var chocolatesLeft = totalChocolates%totalFriends
// console.log("The total amount of chocolates left, after distribution is:", chocolatesLeft)

// var n = 1234;
// var last2Digits = n%100;
// console.log(last2Digits)

// var totalMinutes = 135;
// var remainingMinutes = totalMinutes % 60;
// var hours = Math.floor(totalMinutes / 60);
// console.log("Total Minutes:", totalMinutes);
// console.log("Remaining time:", hours, ":",remainingMinutes);

// var num = 3;
// var pow = 2;
// var exp = num ** pow;
// console.log(exp)

// var num = 27;
// var root = num ** (1/3);
// console.log(root);

// var side = 5;
// var area = side ** 2;
// console.log("The area of the garden is:", area);

// var maxLoginAttempts = 5;
// console.log(maxLoginAttempts);

// var num = 17%-4
// console.log(num)

// var bonusPoints = 50;
// var playerPoints = 100;
// playerPoints += bonusPoints
// console.log(`Existing Score: ${playerPoints}`)

// let totalMonths = 120; 
// let remainingMonths = totalMonths - 1; 
// console.log(`Remaining Months: ${remainingMonths}`); 

// let price = 100; 
// price *= 0.75;  
// console.log(`The price: ${price}`)

// let a = prompt("Enter a number 1:");
// let b = prompt("Enter a number 2:");
// let sum = a + b;
// console.log(`The sum of a and b is ${sum}`)

// let workHours = 35;
// let workers = 7;
// workHours /= workers;
// console.log(`The work hours are, ${workHours}, hours`)

// let internetData = 1024;
// let familyMembers = 4;
// internetData /= familyMembers;
// console.log(`The internet data per family member is ${internetData}`);

// let playlistIndex = 128;
// let totalSongs = 10;
// playlistIndex %= totalSongs;
// console.log(`The song index is ${playlistIndex}`);

// let shift = 3;
// shift = (shift + 1) % 3;
// console.log(shift); 

// let edge = 4;
// let volm = edge;
// volm **= 4;
// console.log(`The volume is ${volm}`);

// let prompt = require("prompt-sync")();
// let inpu = prompt("enter a number: ");
// console.log(inpu);

// let a = 7;
// let b = 7;
// console.log(a==b) //true;
// console.log(a===b) //true;
// console.log(7 == "007");

// let pin = 1234;
// let inputPin = 3456;
// console.log(pin == inputPin);

// let savedLang = "en";
// let browserLang = "en";
// let res = (savedLang != browserLang);
// console.log(`The language verification is ${res}`)

// let currentDeviceType = "desktop";
// let registeredDeviceType = "desktop";
// let res =(currentDeviceType === registeredDeviceType);
// console.log(`The result is as follows: ${res}`);

// let heightOfRam = 180.25;
// let requiredHeight = 180;
// let isEligible = heightOfRam > requiredHeight;
// console.log(`Is the candidate eligible: ${isEligible}`);

// let roomTemperature = 180.25;
// let comfortLimit = 180;
// let isACcomfort = roomTemperature > comfortLimit;
// console.log(`Is the AC temperature comfortable: ${isACcomfort}`);

// let deliveryArrival = 60;
// let expectedDeliveryArrival = 120;
// let isMatch = deliveryArrival < expectedDeliveryArrival;
// console.log(`Is the delivery arrival on time: ${isMatch}`);

// let workingHours = 7;
// let requiredWorkingHours = 9;
// let isMatch = workingHours < requiredWorkingHours;
// console.log(`Is the minimum working hours criteria matcheed: ${isMatch}`);

// let phoneNo = true;
// let email = false;
// let res = (phoneNo && email);
// console.log(`Is the account Verified? ${res}`)

// let x = 99;
// let y= x++;
// console.log(y,x);

// let marks = 37;
// if (marks >= 35){
//     console.log("passed")
// };

// let num = 8;
// if (num >= 0){
//     console.log("postive number")
// }

// let isLogin = true;
// if (isLogin == true){
//     console.log("The user is logged in")
// };

// let isNotLogin = false;
// if (isNotLogin != true){
//     console.log("The user is logged in")
// };

// let age = 32;
// if (age >= 18){
//     console.log("eligiable to vote")
// };

// let num = 20;
// if (num%2 == 0){
//     console.log("even number")
// };

// let temp = 33;
// if (temp > 30){
//     console.log("Its hot")
// };

// let num = 49;
// if (num%2 == 0){ 
//     console.log("even number")
// } else{
//     console.log("odd number")
// };

// let year = 2000;
// if (year%4 == 0){
//     console.log("leap year")
// } else{
//     console.log("not a leap year")
// };

let character = "a";
if (character in 'aeiouAEIOU'){
    console.log("vowel")
} else{
    console.log("consonant")
};