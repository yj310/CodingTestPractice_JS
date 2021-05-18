/*
    두 정수 left와 right가 매개변수로 주어집니다. 
    left부터 right까지의 모든 수들 중에서, 
    약수의 개수가 짝수인 수는 더하고, 
    약수의 개수가 홀수인 수는 뺀 수를 return 하도록 solution 함수를 완성해주세요.

    제한사항
    1 ≤ left ≤ right ≤ 1,000
*/

function solution(left, right) {
    var answer = 0;
    var count;

    for(var i = left; i <= right; i++) {
        count = 0;
        for(var j = 1; j <= i; j++) {
            if(i % j == 0) {
                count++;
            }
        }
        if(count % 2 == 0) {
            answer += i;
        } else {
            answer -= i;
        }
    }

    return answer;
}

left = 13;
right = 17;
console.log(solution(left, right));     // 43

left = 24;
right = 27;
console.log(solution(left, right));     // 52
