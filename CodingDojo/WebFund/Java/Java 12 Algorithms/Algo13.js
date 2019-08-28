// Alorithm 1: List all numbers between 1 and 255
// function get_array(){
//     var arr = [];
//     for(var i = 1;i <255;i++){
//         arr.push(i);
//     }
//     return arr;
// }
// console.log(get_array());

// Algorithm 2: Sum of all even numbers between 1 and 1000
// function get_even_numbers(){
//     var sum = 0;
//     for(i = 1; i < 1001; i++){
//         if(i % 2 === 0){
//             sum += i;
//         }
//     }
//     return sum;
// }
// console.log (get_even_numbers());

// Algorithm 3: Sum odd 5000
// function sum_odd_5000(){
//     var sum = 0;
//     for(var i = 1; i < 5001; i++){
//         if(i % 2 == 1){
//             sum = sum + i;
//         }
//     }
//     return sum;
// }
// console.log(sum_odd_5000())

// Algorithm 4: Iterate an Array
// function iterArr(arr){
//     var sum = 0;
//     for(var i = 0; i < arr.length; i++){
//         sum = sum + arr[i];
//     }
//     return sum;
// }
// console.log(iterArr([1,2,5]))

// Algorithm 5: Find Max
// function findMax(arr){
//     var max = arr[0]
//     for (var i = 1; i < arr.lenght; i++){
//         if(max < arr[i]){
//             max = arr[i]
//         }
//     }
//     return max;
// }
// findMax(-3,3,5,7)
// console.log(max)

// Algorithm 6: Find Average
// function findAvg(arr){
//     var sum = 0;
//     for (var i = 0; i < arr.length; i++){
//         sum = sum + arr[i]
//     }
//     return sum / arr.length;
// }
// console.log(findAvg([1,3,5,7,20]))

// Algorithm 7: Array Odd
// function oddNumbers(){
//     var arr = [];
//     for(var i = 1; i < 51; i++){
//         if(i % 2 !== 0){
//             arr.push(i);
//         }
//     }
//     return arr;
// }
// console.log(oddNumbers())

// Algorithm 8:  Greater than Y 
// function greaterY(arr, Y){
//     var count = 0;
//     for(var i = 0; i < arr.length; i++){
//         if(arr[i] >Y){
//             count++;
//         }
//         return count;
//     }
// }
// console.log(greaterY([1,3,5,7]))

// Algorithm 9: Squares 
// function squareVal(arr) {
//     for(var i = 0; i < arr.length; i++){
//         arr[i] = arr[i] * arr[i];
//     }
//     return arr;
// }
// console.log(squareVal([2,4,6]))

// Algorithm 10: Negatives
// function noNeg(arr){
//     for(var i = 0; i < arr.length; i++){
//         if(arr[i]<0){
//             arr[i]=0;
//         }
//     }
//     return arr;
// }
// console.log(noNeg([1,5,-2,10]));

// Algorithm 11: Max/Min/Avg 
// function maxMinAvg(arr){
//     var max = arr[0];
//     var min = arr[0];
//     var sum = arr[0];

//     for ( var i = 1; i < arr.length; i++) {
//         if(arr[i] > max) {
//             max = arr[i];
//         }
//         if(arr[i] < min) {
//             min = arr[i];
//         }
//         sum = sum + arr[i];
//     }
//     var avg = sum / arr.length;
//     var arrnew = [max, min, avg];
//     return arrnew;
// }
// console.log(maxMinAvg([1,5,10,-2]));

// Algorithm 12: Swap Values
// function swap(arr){
//     var temp = arr[0];
//     arr[0] = arr[arr.length - 1];
//     arr[arr.length - 1] = temp;
//     return arr;
// }
// console.log (swap([3,2,1]));

// Algorithm 13: Num to String 
// function numToStr(arr){
//     for(var i = 0; i < arr.length; i++) {
//         if (arr[i] < 0){
//             arr[i] = "Dojo";
//         }
//     }
//     return arr;
// }
// console.log(numToStr([-1,-3,2]));