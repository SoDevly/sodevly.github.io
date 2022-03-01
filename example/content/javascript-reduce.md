---
emoji: 💻
title: '[Javascript] Array.reduce() 설명 및 예제'
created: 2022-01-03
modified: 2022-01-03
link: ''
tags:
  - Javascript
---
<br></br>





# **❐ 설명**
`reduce()`은 배열을 순회하며 각 요소를 특정 함수 실행한 결과를 누적하여 하나의 결과값을 만들어줍니다.
<br></br><br></br><br></br><br></br>



# **❐ 구문**
```javascript
arr.map(callback(accumulator, currentValue, currentIndex, originArray), initialValue)
```
<br></br>

**매개변수**
<table>
  <tr>
    <td>callback</td>
    <td>새로운 배열 요소를 생성하는 함수</td>
  </tr>
  <tr>
    <td>ㅤㅤaccumulator</td>
    <td>callback의 이전 반환값<br></br>
        callback 최초 호출일 때 initialValue를 제공한 경우 initialValue, 아니면 배열의 첫번째 요소값입니다.</td>
  </tr>  
  <tr>
    <td>ㅤㅤcurrentValue</td>
    <td>처리할 현재 요소</td>
  </tr>
  <tr>
    <td>ㅤㅤcurrentIndex (Optional)</td>
    <td>처리할 현재 요소의 인덱스<br></br>
        initialValue를 제공한 경우 0, 아니면 1부터 시작합니다.</td>
  </tr>
  <tr>
    <td>ㅤㅤoriginArray (Optional)</td>
    <td>reduce()를 호출한 배열</td>
  </tr>  
  <tr>
    <td>initialValue (Optional)</td>
    <td>callback의 최초 호출에서 첫 번째 인수(accumulator)에 제공하는 값</td>
  </tr>
</table>
<br></br>

**반환값**  
배열의 각 요소를 callback함수를 실행한 결과로 만든 새로운 배열
<br></br><br></br><br></br><br></br>





# **❐ 예제**
배열의 모든 요소를 더한 누적값을 구해봅시다.  
그리고 callback함수의 Optional parameter가 없고 initialValue가 없는 경우, parameters값도 직접 확인해봅시다.
```javascript
let testArray = [0, 1, 2, 3, 4]
let result = testArray.reduce((accumulator, currentValue) => {
  console.log(accumulator, currentValue);
  return accumulator + currentValue;
});
console.log(result);
// expected output: 
// 0 1
// 1 2
// 3 3
// 6 4
// 10
```
<br></br>

배열의 모든 요소를 더한 누적값을 구해봅시다.  
그리고 callback함수의 Optional parameter가 없고 initialValue가 있는 경우, parameters값도 직접 확인해봅시다.
```javascript
let testArray = [0, 1, 2, 3, 4]
let result = testArray.reduce((accumulator, currentValue) => {
  console.log(accumulator, currentValue);
  return accumulator + currentValue;
}, 10);
console.log(result);
// expected output: 
// 10 0
// 10 1
// 11 2
// 13 3
// 16 4
// 20
```
<br></br>

배열의 모든 요소를 더한 누적값을 구해봅시다.  
그리고 callback함수의 Optional parameter가 있고 initialValue가 없는 경우, parameters값도 직접 확인해봅시다.
```javascript
let testArray = [0, 1, 2, 3, 4]
let result = testArray.reduce((accumulator, currentValue, currentIndex, originArray) => {
  console.log(accumulator, currentValue, currentIndex, originArray);
  return accumulator + currentValue;
});
console.log(result);
// expected output: 
// 0 1 1 [0, 1, 2, 3, 4]
// 1 2 2 [0, 1, 2, 3, 4]
// 3 3 3 [0, 1, 2, 3, 4]
// 6 4 4 [0, 1, 2, 3, 4]
// 10
```
<br></br>

배열의 모든 요소를 더한 누적값을 구해봅시다.  
그리고 callback함수의 Optional parameter가 있고 initialValue가 있는 경우, parameters값도 직접 확인해봅시다.
```javascript
let testArray = [0, 1, 2, 3, 4]
let result = testArray.reduce((accumulator, currentValue, currentIndex, originArray) => {
  console.log(accumulator, currentValue, currentIndex, originArray);
  return accumulator + currentValue;
}, 10);
console.log(result);
// expected output: 
// 10 0 0 [0, 1, 2, 3, 4]
// 10 1 1 [0, 1, 2, 3, 4]
// 11 2 2 [0, 1, 2, 3, 4]
// 13 3 3 [0, 1, 2, 3, 4]
// 16 4 4 [0, 1, 2, 3, 4]
// 20
```
<br></br>

숫자가 들어있는 배열에서 0보다 큰 숫자 갯수를 구해봅시다.
```javascript
const numberArray = [2, -5, -123, 59, -5480, 24, 0, -69, 349, 3];
const result = numberArray.reduce((accumulator, currentValue, currentIndex) => { 
  if(currentValue > 0){
    accumulator++;
  }
  return accumulator;
 }, 0);
console.log(result);
// expected output: 
// 5
```
<br></br>

숫자가 들어있는 배열에서 0보다 큰 숫자만 필터하여 각 요소에 2를 곱한 새로운 배열을 만들어봅시다.  
이 처럼 reduce() 하나로 filter() + map() 함수를 동시에 사용한 것과 동일한 결과를 얻을 수도 있습니다.
```javascript
const numberArray = [2, -5, -123, 59, -5480, 24, 0, -69, 349, 3];
const result = numberArray.reduce((accumulator, currentValue, currentIndex) => { 
  if(currentValue > 0){
    accumulator.push(currentValue * 2);
  }
  return accumulator;
 }, []);
console.log(result);
// expected output: 
// [4, 118, 48, 698, 6]
```
<br></br><br></br>
