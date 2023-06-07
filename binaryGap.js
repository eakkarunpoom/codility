function solution(N) {
    // Implement your solution here
    const a = N.toString(2)
    let start = 0;
    let end = 0;
    let max = 0;
    while(end !== -1){
        //10000010001
        //^
        // ^
        start = a.indexOf("1",start)
        if(start >= 0){
            end = a.indexOf("1",start+1)
            if(end >= 0){
                max = Math.max((end - start) - 1,max)
                start = end
            }
        }
    }
    return max
}
solution([1041]);