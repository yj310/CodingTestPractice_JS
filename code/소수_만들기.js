/*
    주어진 숫자 중 3개의 수를 더했을 때 소수가 되는 경우의 개수를 구하려고 합니다. 
    숫자들이 들어있는 배열 nums가 매개변수로 주어질 때, 
    nums에 있는 숫자들 중 서로 다른 3개를 골라 더했을 때 소수가 되는 경우의 개수를 return 하도록 solution 함수를 완성해주세요.
*/

function solution(nums) {
    var answer = 0;
    
    var array = [];
    var length = nums.length;
    
    var isPrime;

    // 숫자 3개씩 더하기
    for(var i = 0; i < length - 2; i++) {
        for(var j = i + 1; j < length - 1; j++) {
            for(var k = j + 1; k < length; k++) {
                array.push(nums[i] + nums[j] + nums[k]);
            }
        }
    }
    
    // 각 요소가 소수인지 판단
    for(var i = 0; i < array.length; i++) {
        isPrime = true;
        for(var j = 2; j < array[i]; j++) {
            if(array[i] % j == 0) {
                isPrime = false;
            }
        }
        if(isPrime) {
            answer++;
        }
    }

    return answer;
}

var nums = [1,2,3,4];
console.log(solution(nums));