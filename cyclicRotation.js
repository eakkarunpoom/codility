function solution(A,K){
    if (A.length == 0){
        return A
    }
    for (let i = 1; i <= K; i++) {
        let last = A.pop()
        A.unshift(last)
        // console.log(A)
    }
    return A;
}

console.log(solution([],3));