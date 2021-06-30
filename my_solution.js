// solution explanation: https://www.youtube.com/watch?v=CE2b_-XfVDk

function(nums) {
    let count = Array(nums.length).fill(1)
    
    for(let i = 1; i < nums.length; i++){
        for(let j = 0; j < i; j++){
            if(nums[j] < nums[i]){
                if(count[j] + 1 > count[i]) {
                    count[i] = count[j] + 1
                }
            }
        }
    }
    
    return count.sort((a, b) => b - a)[0]
};
