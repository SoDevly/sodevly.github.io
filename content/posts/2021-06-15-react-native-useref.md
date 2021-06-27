---
template: post
title: React Native - useRef
slug: /posts/react-native/useref
draft: false
priority: 0
date: 2021-06-15T00:46:37.121Z
description: >-
category: Programming
tags:
  - React Native
---

<br>

**useRef** 는 ref를 쉽게 사용 할 수 있게 해주는 hook입니다.
<br><br>

특정 컴포넌트를 직접 선택해야 하는 상황이 발생 할 수 있습니다.  
ex) 스크롤바 위치를 가져오거나 설정해야하는 상황, 입력필드에 포커스를 설정해야 하는 상황 등등...
그럴 때 사용하는 것이 ref이며, ref를 쉽게 사용 할 수 있게 도와주는 hook이 바로 useRef입니다.
<br><br><br><br>





아래와 같은 로직으로 특정 컴포넌트를 선택해 동작해봅시다.
- 이름 입력필드, 나이 입력필드 2개 만듦
- Name 입력필드로 이동 버튼 클릭 시, 이름 입력필드로 포커스 이동
- Age 입력필드로 이동 버튼 클릭 시, 나이 입력필드로 포커스 이동
![](/media/react-native-useref.gif)
<br><br>

# **❐ 코드 예제**
screen 폴더 안에 useRefScreen.js 파일을 생성하고, 아래와 같이 작성합니다.
```javascript
import React, { useState, useRef, useCallback } from "react";
import { View, Text, TextInput, Button } from 'react-native';

const UseRefScreen = () => {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const nameInput = useRef();
  const ageInput = useRef();

  const onFocusName = useCallback(() => {
    nameInput.current.focus();
  }, []);

  const onFocusAge = useCallback(() => {
    ageInput.current.focus();
  }, []);

  return (
    <View style={{flex: 1}}>
      <Text style={{fontSize: 40, fontWeight: 'bold', marginBottom: 40}}>[UseRefScreen]</Text>
      <TextInput
        style={{fontSize: 30, backgroundColor: '#FFFFFF'}}
        onChangeText={setName}
        value={name}
        placeholder="이름"
        ref={nameInput}
      />
      <TextInput
        style={{fontSize: 30, backgroundColor: '#FFFFFF'}}
        onChangeText={setAge}
        value={age}
        placeholder="나이"
        ref={ageInput}
      />      
      <Button
        style={{fontSize: 30, backgroundColor: '#FFFFFF'}}
        title="Name 입력필드로 이동"
        onPress={onFocusName}
      />
      <Button
        style={{fontSize: 30, backgroundColor: '#FFFFFF'}}
        title="Age 입력필드로 이동"
        onPress={onFocusAge}
      />
    </View>
  );
};

export default UseRefScreen
```
<br>

useRef()를 사용하여 Ref 객체를 생성합니다.
```javascript
const nameInput = useRef();
const ageInput = useRef();
```
<br>

useRef()를 사용하여 생성한 Ref 객체가 가르킬 컴포넌트를 설정해줍니다.
```javascript
  <TextInput
    style={{fontSize: 30, backgroundColor: '#FFFFFF'}}
    onChangeText={setName}
    value={name}
    placeholder="이름"
    ref={nameInput}
  />
  <TextInput
    style={{fontSize: 30, backgroundColor: '#FFFFFF'}}
    onChangeText={setAge}
    value={age}
    placeholder="나이"
    ref={ageInput}
  />   
```
<br>

focus()함수를 이용하여 입력필드에 포커스를
useRef()를 사용하여 생성한 Ref 객체로 특정 컴포넌트를 직접 선택하고 해당 컴포넌트를 조작한 것을 볼 수 있습니다.
```javascript
nameInput.current.focus();
ageInput.current.focus();
```

<br><br>