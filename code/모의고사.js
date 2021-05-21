function solution(answers) {
    var answer = [];

    var student1 = [1, 2, 3, 4, 5];
    var student2 = [2, 1, 2, 3, 2, 4, 2, 5];
    var student3 = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];

    var student1Count = 0;
    var student2Count = 0;
    var student3Count = 0;

    for(var i = 0; i < answers.length; i++) {
        if(answers[i] === student1[i % student1.length]) student1Count++;
        if(answers[i] === student2[i % student2.length]) student2Count++;
        if(answers[i] === student3[i % student3.length]) student3Count++;
    }

    var maxScore = Math.max(student1Count, student2Count, student3Count);
    if(student1Count === maxScore) answer.push(1);
    if(student2Count === maxScore) answer.push(2);
    if(student3Count === maxScore) answer.push(3);

    return answer;
}

var answers = [1, 2, 3, 4, 5];
console.log(solution(answers));

answers = [1, 3, 2, 4, 2];
console.log(solution(answers));