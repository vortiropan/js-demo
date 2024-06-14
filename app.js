// const tasks = ["Задача 1", 'user', 'admin', 'manager'];

// let arr = ['1as', '2', '3', '41'];

// console.log(arr.unshift(12));
// console.log(arr.push(12));
// console.log(arr.unshift(12));
// console.log(arr);

const operations = [1000, -700, 300, -500, 10000];

function getBalance(arr, startSumm = 0){
    for(let i of arr){
        startSumm += i;
    }
    return startSumm;
}
console.log(getBalance(operations, 100));

function checkOperations(arr, startSumm = 0){
    for(let i of arr){
        if(startSumm <= 0){
            return false;
        }  
        startSumm += i;
    }
        return true;;
}
console.log( checkOperations(operations, 100));

function averageOperations(arr){
    let plusArr = [];
    let minusArr = [];
    let averageArr = [];
    for(let i of arr){
        if(i > 0){
            plusArr.push(i)
        } else {
            minusArr.push(i);
        }
    }
     plusArr.push(getBalance(plusArr, 0)  / plusArr.length);
    // plusArr =  plusArr.splice(plusArr.length - 1);
    averageArr.push(plusArr.pop())
    
     minusArr.push(getBalance(minusArr, 0) / minusArr.length);
    //   minusArr =  minusArr.splice(minusArr.length - 1);

        // averageArr.push(minusArr)
        // averageArr.push(plusArr)
        averageArr.push(minusArr.pop())
        return averageArr;

}

console.log(averageOperations(operations));
