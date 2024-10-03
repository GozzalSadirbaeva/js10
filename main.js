// 1 delete falsy value
const deleteFalsyValue = (arr) =>{
    return arr.filter(Boolean);
}
console.log(deleteFalsyValue([0, "apple", false, "", "banana", NaN, 42]));

console.log('<-------------->');
console.log('<-------------->');

// 2 arraydagi eng kop takrorlangan element
const mostRepeatedElement = (array) =>{
    const counter = array.reduce((acc, val) =>{
        acc[val] = (acc[val] || 0) + 1;
        return acc
    }, {})
   
    return Object.keys(counter).reduce((x,y) =>{
        return counter[x] > counter[y] ? x : y;
    });
}
console.log(mostRepeatedElement(["apple","banana", "apple", "orange", "banana", "apple"]));

console.log('<-------------->');
console.log('<-------------->');


// 3 arrayning 2-eng katta qiymati
const numbers = [3, 1, 4, 1, 5, 9, 2, 6, 6, 7];
const secondBigNum = (numbers) =>{
    let firstNum = 0;
    let secondNum = 0;
    for(let num of numbers){
        if(num > firstNum){
            secondNum = firstNum
            firstNum = num
        }
        else if(num > secondNum && num < firstNum){
            secondNum = num
        }
    }
    return secondNum

}
console.log(secondBigNum(numbers));

console.log('<-------------->');
console.log('<-------------->');

// 4
const group = (text) =>{
    
}



