---
emoji: 💻
title: '[React Native] Hook - useRef 설명 및 예제 (1) '
created: 2021-06-15
modified: 2021-06-15
link: ''
tags:
  - React Native
---
<br></br>





# **❐ useRef란?**
`useRef`는 <u>특정 컴포넌트를 선택할 수 있게 도와주는 hook입니다.</u>  

특정 컴포넌트를 직접 선택해야 하는 상황이 발생 할 수 있습니다.  
ex) 스크롤바 위치를 가져오거나 설정해야하는 상황, 입력필드에 포커스를 설정해야 하는 상황 등등...  
그럴 때 사용하는 것이 ref이며, ref를 쉽게 사용 할 수 있게 도와주는 hook이 바로 useRef입니다.  
<br></br>

`useRef`는 <u>컴포넌트 리렌더링없이 상태 값을 관리할 수 있는 hook입니다.</u>  
[useRef (2) 게시글 이동](https://sodevly.github.io/react-native-useref2)  
<br></br><br></br><br></br><br></br>





# **❐ 예시**
### **예시 설명**
아래와 같은 동작 구현을 통해 useRef를 사용하여 특정 컴포넌트에 포커스를 이동시켜 봅시다.
- 이름 입력필드, 나이 입력필드 2개 만듦
- Name 입력필드로 이동 버튼 클릭 시, 이름 입력필드로 포커스 이동
- Age 입력필드로 이동 버튼 클릭 시, 나이 입력필드로 포커스 이동  

![](/assets/react-native-useref1.gif)
<br></br><br></br><br></br><br></br>





### **예시 코드**
###### **useRefScreen1.js 파일 작성**
```javascript
import React, { useState, useRef, useCallback } from "react";
import { StyleSheet, View, TextInput, Button } from 'react-native';

const UseRefScreen = () => {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');

  //ref객체를 생성합니다.
  const nameInput = useRef();
  const ageInput = useRef();

  const onFocusName = useCallback(() => {
    //nameInput ref객체가 가리키는 컴포넌트(이름 입력필드)를 포커스합니다.
    nameInput.current.focus();
  }, []);

  const onFocusAge = useCallback(() => {
    //ageInput ref객체가 가리키는 컴포넌트(나이 입력필드)를 포커스합니다.
    ageInput.current.focus();
  }, []);

  return (
    <View style={styles.screen}>
      {/*nameInput ref객체가 이름 입력필드 컴포넌트를 가리키도록 ref속성을 설정해줍니다.*/}
      <TextInput
        style={styles.textInput}
        onChangeText={setName}
        value={name}
        placeholder="이름"
        ref={nameInput}
      />
      {/*ageInput ref객체가 나이 입력필드 컴포넌트를 가리키도록 ref속성을 설정해줍니다.*/}
      <TextInput
        style={styles.textInput}
        onChangeText={setAge}
        value={age}
        placeholder="나이"
        ref={ageInput}
      />      
      <Button
        title="Name 입력필드로 이동"
        onPress={onFocusName}
      />
      <Button
        title="Age 입력필드로 이동"
        onPress={onFocusAge}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: '#ffffff'
  },
  textInput: {
    fontSize: 20,
    margin: 5,
    borderWidth: 1,
    borderColor: '#000000',
  }
})

export default UseRefScreen
```
`useRef()`를 사용하여 Ref 객체를 생성할 수 있습니다.  
`컴포넌트 ref속성`를 사용하여 해당 컴포넌트를 가리킬 ref객체를 설정할 수 있습니다.  
`ref객체.current.focus()`을 사용하여 ref객체가 가리키는 컴포넌트에 포커스를 할 수 있습니다.
<br></br><br></br>
