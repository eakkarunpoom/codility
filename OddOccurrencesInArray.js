function solution(A){
    const obj = {};
    for (let i = 0; i < A.length; i++){
        if(!obj[A[i]]){
            obj[A[i]] = 1
        }
        else{
            obj[A[i]]++
        }
    }
    for (let key in obj) {
        if (obj[key] % 2 !== 0) {
          return parseInt(key);
        }
    }
}

console.log(solution([9,3,9,3,9,7,9]));