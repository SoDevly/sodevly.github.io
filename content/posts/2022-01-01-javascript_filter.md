---
template: post
title: '[Javascript] filter'
slug: /posts/javascript/filter
draft: false
priority: 0
date: 2022-01-01T00:46:37.121Z
description: >-
category: Programming
tags:
  - Javascript
---
<br><br>

# **❐ 설명**
**filter()**는 배열에서 특정 조건을 만족하는 요소만 필터하여 새로운 배열을 만들어줍니다.  
<br><br>



# **❐ 구문**
```javascript
arr.filter(callback(element, index, array), thisArg)
```
<br>

**매개변수**
<table>
  <tr>
    <td>callback</td>
    <td>필터 조건을 체크할 함수. true를 반환하면 요소를 유지하고, false를 반환하면 버립니다. 다음 세 가지 매개변수를 받습니다.</td>
  </tr>
    <tr>
    <td>ㅤㅤelement</td>
    <td>처리할 현재 요소</td>
  </tr>
  <tr>
    <td>ㅤㅤindex (Optional)</td>
    <td>처리할 현재 요소의 인덱스</td>
  </tr>
  <tr>
    <td>ㅤㅤarray (Optional)</td>
    <td>filter를 호출한 배열</td>
  </tr>  
  <tr>
    <td>thisArg (Optional)</td>
    <td>callback을 실행할 때 this로 사용하는 값</td>
  </tr>
</table>
<br>

**반환값**  
필터 조건을 만족하는 요소로만 이루어진 새로운 배열. 어떤 요소도 필터 조건을 만족하지 않는다면 빈 배열을 반환  
<br><br>



# **❐ 예제**
parameters값을 직접 확인해봅시다.
```javascript
let numbers = [1, 4, 9]
let parameters = numbers.filter((num, index, arr) => {console.log(num, index, arr)})
// expected output: 
// 1 0 [ 1, 4, 9 ]
// 4 1 [ 1, 4, 9 ]
// 9 2 [ 1, 4, 9 ]
```
<br>

숫자가 들어있는 배열에서 10보다 큰 숫자만 필터하여 새로운 배열을 만들어봅시다.
```javascript
const numbers = [1, 5, 10, 11, 15, 20];
const result = numbers.filter(num => num > 10);
console.log(result);
// expected output: Array [11, 15, 20]
```
<br>

문자가 들어있는 배열에서 문자길이가 5보다 큰 문자만 필터하여 새로운 배열을 만들어봅시다.
```javascript
const words = ['apple', 'banana', 'watermelon', 'kiwi'];
const result = words.filter(word => word.length > 5);
console.log(result);
// expected output: Array ["banana", "watermelon"]
```
<br><br>
