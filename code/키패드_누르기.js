/*

스마트폰 전화 키패드의 각 칸에 다음과 같이 숫자들이 적혀 있습니다.
1 2 3
4 5 6
7 8 9
* 0 #

이 전화 키패드에서 왼손과 오른손의 엄지손가락만을 이용해서 숫자만을 입력하려고 합니다.
맨 처음 왼손 엄지손가락은 * 키패드에 오른손 엄지손가락은 # 키패드 위치에서 시작하며, 엄지손가락을 사용하는 규칙은 다음과 같습니다.

1. 엄지손가락은 상하좌우 4가지 방향으로만 이동할 수 있으며 키패드 이동 한 칸은 거리로 1에 해당합니다.
2. 왼쪽 열의 3개의 숫자 1, 4, 7을 입력할 때는 왼손 엄지손가락을 사용합니다.
3. 오른쪽 열의 3개의 숫자 3, 6, 9를 입력할 때는 오른손 엄지손가락을 사용합니다.
4. 가운데 열의 4개의 숫자 2, 5, 8, 0을 입력할 때는 두 엄지손가락의 현재 키패드의 위치에서 더 가까운 엄지손가락을 사용합니다.
    4-1. 만약 두 엄지손가락의 거리가 같다면, 오른손잡이는 오른손 엄지손가락, 왼손잡이는 왼손 엄지손가락을 사용합니다.

순서대로 누를 번호가 담긴 배열 numbers, 
왼손잡이인지 오른손잡이인 지를 나타내는 문자열 hand가 매개변수로 주어질 때, 
각 번호를 누른 엄지손가락이 왼손인 지 오른손인 지를 나타내는 연속된 문자열 형태로 return 하도록 solution 함수를 완성해주세요.

*/

function solution(numbers, hand) {
    var answer = '';

    var hand = hand[0].toUpperCase();

    // 위치 값으로 숫자 재설정 
    while(true) {
        var search = numbers.indexOf(0);
        if(search != -1) {
            numbers[search] = 11;
        } else {
            break;
        }
    }
    
    var lkey = [1, 4, 7];
    var rkey = [3, 6, 9];
    var mkey = [2, 5, 8, 11];

    var right = 12;     
    var left = 10;

    for(var i = 0; i < numbers.length; i++) {
        if(lkey.indexOf(numbers[i]) != -1) {
            answer += 'L';
            left = numbers[i];
        } else if(rkey.indexOf(numbers[i]) != -1) {
            answer += 'R';
            right = numbers[i];
        } else if(mkey.indexOf(numbers[i]) != -1) {
            var nx = (numbers[i]-1) % 3;
            var ny = Math.floor((numbers[i]-1) / 3);
            var lx = (left-1) % 3;
            var ly = Math.floor((left-1) / 3);
            var rx = (right-1) % 3;
            var ry = Math.floor((right-1) / 3);

            var leftcount = Math.abs(nx - lx) + Math.abs(ny - ly);
            var rightcount = Math.abs(nx - rx) + Math.abs(ny - ry);

            console.log(numbers[i]+ "  |  " +left + "  |  " + right);
            console.log(nx +", "+ ny + "  |  " + lx + ", "+ ly + "  |  " + rx +", "+ ry);
            console.log(leftcount + "     " + rightcount);
            console.log();
            if(leftcount < rightcount) {
                answer += 'L';
                left = numbers[i];
            } else if(rightcount < leftcount) {
                answer += 'R';
                right = numbers[i];
            } else if(rightcount == leftcount) {
                answer += hand;
                if(hand == 'L') {
                    left = numbers[i];
                } else {
                    right = numbers[i];
                }
            }
        }
    }

    return answer;
}

numbers = [1, 3, 4, 5, 8, 2, 1, 4, 5, 9, 5, 5];
hand = "right";
console.log(solution(numbers, hand));

numbers = [7, 0, 8, 2, 8, 3, 1, 5, 7, 6, 2];
hand = "left";
console.log(solution(numbers, hand));

numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
hand = "right";
console.log(solution(numbers, hand));
