
// 1. Get 1 to 255
// function get_array(){
//     arr = [];
//     for(var i = 1 ; 1<=255;i++)
//     arr.push(i)
//     return arr;  
//     }
// console.log (arr[])

// 2. Get even 1000
// function sum_even_numbers(){
//     var sum = 0;
//     for(var i = 1; i<1001;i++){
//         if(i % 2===0){
//             sum +=1;
//         }
//     }return sum;
// }
// console.log (sum)

// // 3. Sum odd 5000
// function sum_odd_5000(){
//     var sum = 0;
//     for (var i = 1; i < 5001; i++){
//         if(1 % 2 ==1){
//             sum=sum+1;
//         }
//     }
//     return sum;
// }

// 4. Iterate an Array
function iterArr(){
    var sum = 0;
    for (var i = 0; i < Array.length; i++){
        sum = sum + arr[i];
    }
}return sum;
console.log (sum);
iterArr([-5,2,5,12]);

// 5. Find max
function findMa(arr) {
    var max = arr[0]
    for (var i = 1; i < arr.length; i++){
        if(max < arr[i]){
            max = arr[i]
        }
    }
    return max;
}