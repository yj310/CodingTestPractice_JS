/* 
    2016년 1월 1일은 금요일입니다. 2016년 a월 b일은 무슨 요일일까요? 
    두 수 a ,b를 입력받아 2016년 a월 b일이 무슨 요일인지 리턴하는 함수, solution을 완성하세요. 
    
    요일의 이름은 일요일부터 토요일까지 각각 
    SUN,MON,TUE,WED,THU,FRI,SAT
    입니다. 
    
    예를 들어 a=5, b=24라면 5월 24일은 화요일이므로 문자열 "TUE"를 반환하세요.

    2016년은 윤년입니다.
    2016년 a월 b일은 실제로 있는 날입니다. (13월 26일이나 2월 45일같은 날짜는 주어지지 않습니다)
*/

function solution(a, b) {
    var answer = '';

    week = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];
    month_30 = [4, 6, 9, 11];
    month_31 = [1, 3, 5, 7, 8, 10, 12];
    febDays = 29;           // 2016년은 윤년입니다.
    dayCount = 0;
    firstDayWeek = 'FRI';   // 2016년 1월 1일은 금요일입니다.

    dayCount += b;

    for(var i = 1; i < a; i++) {
        if(month_30.indexOf(i) != -1) {
            dayCount += 30;
        } else if(month_31.indexOf(i) != -1) {
            dayCount += 31;
        } else if(i == 2) {
            dayCount += febDays;
        }
    }

    answer = week[(dayCount - 1 + week.indexOf(firstDayWeek))%7];

    return answer;
}

a = 5;
b = 24;
console.log(solution(a, b));