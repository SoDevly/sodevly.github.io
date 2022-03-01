---
emoji: 💻
title: '[Javascript] Array.map() 설명 및 예제'
created: 2022-01-02
modified: 2022-01-02
link: ''
tags:
  - Javascript
---
<br></br>





# **❐ 설명**
`map()`은 배열을 순회하며 각 요소를 특정 함수를 실행한 결과로 새로운 배열을 만들어줍니다.
<br></br><br></br><br></br><br></br>



# **❐ 구문**
```javascript
arr.map(callback(currentValue, currentIndex, originArray), thisArg)
```
<br></br>

**매개변수**
<table>
  <tr>
    <td>callback</td>
    <td>새로운 배열 요소를 생성하는 함수</td>
  </tr>
  <tr>
    <td>ㅤㅤcurrentValue</td>
    <td>처리할 현재 요소</td>
  </tr>
  <tr>
    <td>ㅤㅤcurrentIndex (Optional)</td>
    <td>처리할 현재 요소의 인덱스</td>
  </tr>
  <tr>
    <td>ㅤㅤoriginArray (Optional)</td>
    <td>map()을 호출한 배열</td>
  </tr>  
  <tr>
    <td>thisArg (Optional)</td>
    <td>callback을 실행할 때 this로 사용하는 값</td>
  </tr>
</table>
<br></br>

**반환값**  
배열의 각 요소를 callback함수를 실행한 결과로 만든 새로운 배열
<br></br><br></br><br></br><br></br>





# **❐ 예제**
숫자가 들어있는 배열의 각 요소에 1을 더한 새로운 배열을 만들어봅시다.  
그리고 callback함수의 Optional parameter가 없는 경우, parameters값도 직접 확인해봅시다.
```javascript
let testArray = [1, 4, 9]
let resultArray = testArray.map((currentValue) => {
  console.log(currentValue);
  return currentValue + 1;
});
console.log(resultArray);
// expected output: 
// 1
// 4
// 9
// [2, 5, 10]
```
<br></br>

숫자가 들어있는 배열의 각 요소에 1을 더한 새로운 배열을 만들어봅시다.  
그고 callback함수의 Optional parameter가 있는 경우, parameters값도 직접 확인해봅시다.
```javascript
let testArray = [1, 4, 9]
let resultArray = testArray.map((currentValue, currentIndex, originArray) => {
  console.log(currentValue, currentIndex, originArray);
  return currentValue + 1;
});
console.log(resultArray);
// expected output: 
// 1 0 [1, 4, 9]
// 4 1 [1, 4, 9]
// 9 2 [1, 4, 9]
// [2, 5, 10]
```
<br></br>

숫자가 들어있는 배열의 각 요소에 2를 곱한 새로운 배열을 만들어봅시다.
```javascript
const numberArray = [1, 2, 3, 4, 5];
const resultArray = numberArray.map((number) => number * 2);
console.log(resultArray);
// expected output: 
// [2, 4, 6, 8, 10]
```
<br></br>

배열의 각 요소에서 name 값만 가져와 새로운 배열을 만들어봅시다.
```javascript
const studentArray = [{name: '김철수', score: 100}, {name: '이영희', score: 90}, {name: '홍길동', score: 80}];
const nameArray = studentArray.map(student => student.name);
console.log(nameArray);
// expected output: 
// ["김철수", "이영희", "홍길동"]
```
<br></br><br></br>
