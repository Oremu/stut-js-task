
 //Number 1;

 function printSum() {
     let sum = 0;
     let array1 = [10, 15, 20];
     for(let a = 0; a < array1.length; a++) {
         sum += array1[a];
     } console.log(sum);
 } 
printSum();

// Number 2;
let Alice = [1, 2, 3];
let Bob = [4, 5, 6];

function comparePoints(){
    let totalPoints = [];
    let pointA = 0;
    let pointB = 0;
    if (Alice[0] > Bob[0]){
        pointA++
    }else if (Alice[0] < Bob[0]){
        pointB++;
    }
    if (Alice[1] > Bob[1]){
        pointA++;
    } else if (Alice[1] > Bob[1]){
        pointB++;
    }
    if (Alice[2] > Bob[2]){
        pointA++;
    } else if (Alice[2] > Bob[2]){
        pointB++;
    }
    totalPoints.push(pointA);
    totalPoints.push(pointB);
    console.log(totalPoints);
}
comparePoints();

//Number 3;

let arrayNum = [5, -5, 0];

function plusMinus(arrayNum){
    let numA = 0;
    let numB = 0;
    let numC = 0;
    for(let i = 0; i < arrayNum.length; i++){
        if (arrayNum[i] > 0){
            numA++;
        } 
        if (arrayNum[i]< 0){
            numB++;
        }
        if (arrayNum[i] === 0){
            numC++;
        }
    }
}
console.log(parseFloat(numA/arrayNum.length));
console.log(parsefloat(numB/arrayNum.length));
console.log(parsefloat(numC/arrayNum.length));

// Number 4;
 let numA = 5;
 let numB = 9;

 function firstFunction(){
     let total = numA + numB;
     return total;
 }
 console.log(firstFunction);