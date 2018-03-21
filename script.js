function reverse (inputString, splitOn, joinOn, questionNumber) {
    let stringSplit = inputString.split(splitOn);
    let reversedString = stringSplit.reverse();
    let joined = reversedString.join(joinOn);
    console.log(questionNumber, ":", joined)
}

reverse("Donald", "", "", "1");
reverse("Marley", "", "", "1");
reverse("Marley is odd", " ", " ", "2")
reverse("Bob likes dogs", " ", " ", "2")

const arr = [8, 10, 23, 4, 9, 2, 13, 18, 1]
const arr2 = [4, 32, 18, 9, 23, 22, 13, 35, 10]

console.log("Array:", arr);
console.log("Array 2:", arr2)

function mini (inputArray) {
    let minimum = Math.min(...inputArray)
    console.log("3 :", minimum)
}

 function maximum (inputArray) {
     let maximum = Math.max(...inputArray)
     console.log("4 :", maximum)
 }

 mini(arr);
 mini(arr2);
 maximum(arr);
 maximum(arr2);

 function remainder (numerator, denominator) {
     let remainingValue = numerator % denominator
     console.log("5 : Numerator:", numerator, "Denominator:", denominator, "Remainder:", remainingValue)
 }

 remainder (29, 5);
 remainder (47, 16);

 const arrDuplicates = [1, 1, 2, 5, 8, 5, 4, 2, 9, 11, 11, 22, 19, 5]
 const arrDuplicates2 = [4, 17, 17, 17, 6, 7, 7, 7, 9, 4, 0, 0, 9]

 console.log("Array with duplicates:", arrDuplicates);
 console.log("Array with duplicates 2:", arrDuplicates2);

 function uniqueValues (inputArray) {
     const arrUnique = [];
     for (let i = 0; i < inputArray.length; i++) {
        if (arrUnique.includes(inputArray[i])) {
            continue;
        } else {
            arrUnique.push(inputArray[i]);
        }
     }
     console.log("6 :", arrUnique)
 }

 uniqueValues(arrDuplicates);
 uniqueValues(arrDuplicates2);

 function uniqueValuesCounts (inputArray) {
     const uniqueCounts = {};
     for (let i = 0; i < inputArray.length; i++) {
        let currentValue = inputArray[i];
        if (!uniqueCounts[currentValue]) {
            uniqueCounts[currentValue] = 1
        } else {
            uniqueCounts[currentValue]++
        }
     }
     console.log("7 :", uniqueCounts)
 }

 uniqueValuesCounts(arrDuplicates);
 uniqueValuesCounts(arrDuplicates2);

 const values = {
     a: 2,
     b: 6,
     c: 18,
     d: 54
 }
const values2 = {
    a: 2,
    b: 4,
    c: 8,
    d: 16
}

console.log("Object:", values)
console.log("Object 2:", values2)

function objectAddition (object) {
    let sum = object.a + object.b + object.c + object.d
    console.log("8 :", sum)
}

objectAddition(values);
objectAddition(values2);