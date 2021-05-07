/*
    점심시간에 도둑이 들어, 일부 학생이 체육복을 도난당했습니다. 
    다행히 여벌 체육복이 있는 학생이 이들에게 체육복을 빌려주려 합니다. 
    학생들의 번호는 체격 순으로 매겨져 있어, 바로 앞번호의 학생이나 바로 뒷번호의 학생에게만 체육복을 빌려줄 수 있습니다. 
    예를 들어, 4번 학생은 3번 학생이나 5번 학생에게만 체육복을 빌려줄 수 있습니다. 
    체육복이 없으면 수업을 들을 수 없기 때문에 체육복을 적절히 빌려 최대한 많은 학생이 체육수업을 들어야 합니다.

    전체 학생의 수 n, 체육복을 도난당한 학생들의 번호가 담긴 배열 lost, 
    여벌의 체육복을 가져온 학생들의 번호가 담긴 배열 reserve가 매개변수로 주어질 때, 
    체육수업을 들을 수 있는 학생의 최댓값을 return 하도록 solution 함수를 작성해주세요.
*/

function solution(n, lost, reserve) {
    var answer = 0;



    var student = [];

    for(var i = 0; i < n; i++){
        if(reserve.indexOf(i + 1) != -1) {
            student[i] = 2;
        } else {
            student[i] = 1;
        }

        if(lost.indexOf(i + 1) != -1) {
            student[i]--;
        }

    }
    console.log(student);
    for(var i = 0; i < n; i++){
        if(student[i] == 0) {
            if(i > 0 && student[i-1] >= 2) {
                student[i]++;
                student[i-1]--;
            } else if(i < n - 1 && student[i+1] >= 2) {
                student[i]++;
                student[i+1]--;
            }
        }
    }

    for(var i = 0; i < n; i++) {
        if(student[i] >= 1) {
            answer++;
        }
    }


    return answer;
}

n = 5
lost = [2, 4]
reserve = [1, 3, 5]	

console.log(solution(n, lost, reserve))

n = 5
lost = [2, 4]
reserve = [3]

console.log(solution(n, lost, reserve))

n = 3
lost = [3]
reserve = [1]

console.log(solution(n, lost, reserve))

n = 6
lost = [1, 5, 6]
reserve = [5]

console.log(solution(n, lost, reserve))