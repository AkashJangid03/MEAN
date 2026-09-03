function sumOfArr(arr1,arr2){
    const num1=arr1.reduce((t,d)=>t*10+d,0);
    const num2=arr2.reduce((t,d)=>t*10+d,0);

    return num1+num2;
}

console.log(sumOfArr([1,2,3],[4,5,6]))