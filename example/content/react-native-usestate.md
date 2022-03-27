---
emoji: 💻
title: '[React Native] Hook - useState 설명 및 예제'
created: 2021-06-03
modified: 2021-06-03
link: ''
tags:
  - React Native
---
<br></br>





# **❐ useState란?**
`useState`는 <u>상태를 관리 할 수 있는 hook입니다.</u>  

컴포넌트에서 동적인 값을 상태(state)라고 부릅니다.  
상태(state) 값은 컴포넌트의 생애주기 동안 값이 유지되기 때문에 컴포넌트가 리렌더링되어도 값이 유지됩니다.  
상태(state) 값은 변경되면 컴포넌트를 리렌더링합니다. 
<br></br><br></br><br></br><br></br>





# **❐ 예시**
### **예시 설명**
useState를 이용하여 아래와 같은 로직을 구현해봅시다.
- number라고 부르는 상태 변수 정의
- [더하기]버튼 선택 시, number + 1 값으로 상태 변경
- [빼기]버튼 선택 시, number -1 값으로 상태 변경  

<div style="width:860px; display: block">

![](/assets/react-native-usestate.png)

</div>
<br></br><br></br><br></br><br></br>





### **예시 코드**
###### **UseStateScreen.js 파일 작성**
```javascript
import React, { useState } from "react";
import { StyleSheet, View, Text, Button } from 'react-native';

const UseStateScreen = () => {
  //초기값이 0인 number라는 상태 변수를 정의합니다.
  const [number, setNumber] = useState(0);

  const onIncrease = () => {
    //number 상태 변수 +1한 값으로 업데이트합니다.
    setNumber(number + 1);
  }
  const onDecrease = () => {
    //number 상태 변수 -1한 값으로 업데이트합니다.
    setNumber(number - 1);
  }

  return (
    <View style={styles.screen}>
      {/*number 상태 변수 값을 디스플레이합니다.*/}
      <Text style={styles.text}>현재 number = {number}</Text>
      <Button
        title="더하기"
        onPress={onIncrease}
      />
      <Button
        title="빼기"
        onPress={onDecrease}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: '#ffffff'
  },
  text: {
    fontSize: 20,
    textAlign: "center"
  }
})

export default UseStateScreen
```
`const [상태 변수명, 상태 변수 업데이트 함수명] = useState(상태 변수 초기값)`을 사용하여 상태 변수를 정의합니다.  
상태 변수값을 사용할 때는 `상태 변수명`을 그대로 사용하면 됩니다.  
상태 변수값을 업데이트할 때는 `상태 변수 업데이트 함수`를 이용하면 됩니다.
<br></br><br></br><br></br><br></br>





# **<참고>**
아래 사이트를 참고하여 작성하였습니다.
> React Native 사이트 : https://reactnative.dev/docs/intro-react#state

<br></br><br></br>
