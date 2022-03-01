---
emoji: 💻
title: '[Javascript] Array.filter() 설명 및 예제'
created: 2022-01-01
modified: 2022-01-01
link: ''
tags:
  - Javascript
---
<br></br>





# **❐ 설명**
`filter()`는 배열에서 특정 조건을 만족하는 요소만 필터하여 새로운 배열을 만들어줍니다.  
<br></br><br></br><br></br><br></br>



# **❐ 구문**
```javascript
arr.filter(callback(currentValue, currentIndex, originArray), thisArg)
```
<br></br>

**매개변수**
<table>
  <tr>
    <td>callback</td>
    <td>필터 조건을 체크할 함수<br></br>true를 반환하면 요소를 유지하고, false를 반환하면 버립니다.</td>
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
    <td>filter()를 호출한 배열</td>
  </tr>  
  <tr>
    <td>thisArg (Optional)</td>
    <td>callback을 실행할 때 this로 사용하는 값</td>
  </tr>
</table>
<br></br>

**반환값**  
필터 조건을 만족하는 요소로만 이루어진 새로운 배열. 어떤 요소도 필터 조건을 만족하지 않는다면 빈 배열을 반환  
<br></br><br></br><br></br><br></br>





# **❐ 예제**
숫자가 들어있는 배열에서 0보다 큰 숫자만 필터하여 새로운 배열을 만들어봅시다.  
그리고 callback함수의 Optional parameter가 없는 경우, parameters값도 직접 확인해봅시다.
```javascript
let testArray = [-1, 4, 9]
let resultArray = testArray.filter((currentValue) => {
  console.log(currentValue);
  return currentValue > 0;
});
console.log(resultArray);
// expected output: 
// -1
// 4
// 9
// [4, 9]
```
<br></br>

숫자가 들어있는 배열에서 0보다 큰 숫자만 필터하여 새로운 배열을 만들어봅시다.  
그리고 callback함수의 Optional parameter가 있는 경우, parameters값도 직접 확인해봅시다.
```javascript
let testArray = [-1, 4, 9]
let resultArray = testArray.filter((currentValue, currentIndex, originArray) => {
  console.log(currentValue, currentIndex, originArray);
  return currentValue > 0;
});
console.log(resultArray);
// expected output: 
// -1 0 [ -1, 4, 9 ]
// 4 1 [ -1, 4, 9 ]
// 9 2 [ -1, 4, 9 ]
// [4, 9]
```
<br></br>

숫자가 들어있는 배열에서 10보다 큰 숫자만 필터하여 새로운 배열을 만들어봅시다.
```javascript
const numberArray = [1, 5, 10, 11, 15, 20];
const resultArray = numberArray.filter(num => num > 10);
console.log(resultArray);
// expected output:
// [11, 15, 20]
```
<br></br>

문자가 들어있는 배열에서 문자길이가 5보다 큰 문자만 필터하여 새로운 배열을 만들어봅시다.
```javascript
const wordArray = ['apple', 'banana', 'watermelon', 'kiwi'];
const resultArray = wordArray.filter(word => word.length > 5);
console.log(resultArray);
// expected output: 
// ["banana", "watermelon"]
```
<br></br><br></br>
