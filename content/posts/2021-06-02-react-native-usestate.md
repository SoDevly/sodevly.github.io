---
template: post
title: React Native 상태 관리를 할 수 있는 useState
slug: /posts/react-native/usestate
draft: false
priority: 0
date: 2021-06-02T00:46:37.121Z
description: >-
  React Native 상태 관리를 할 수 있는 useState에 대하여 설명합니다.
category: Programming
tags:
  - React Native
---

<br>

컴포넌트에서 동적인 값을 **상태(state)**라고 부릅니다.  
**useState**를 사용하여 컴포넌트에서 상태를 관리 할 수 있습니다.  
하나의 useState 함수는 하나의 상태 값만 관리를 할 수 있기 때문에 만약에 컴포넌트에서 관리해야 할 상태가 여러 개라면 useState를 여러번 사용하면 됩니다.
<br><br><br><br>





useState를 이용하여 아래와 같은 로직을 구현해봅시다.
- numbe라고 부르는 상태 변수 정의
- [더하기]버튼 선택 시, number + 1 값으로 상태 변경
- [빼기]버튼 선택 시, number -1 값으로 상태 변경  
![](/media/react-native-usestate.gif)
<br><br><br><br>





# **❐ 코드 수정**
SecondScreen.js 파일의 코드를 아래와 같이 수정합니다.
```
import React, { useState } from "react";
import { View, Text, Button } from 'react-native';

const SecondScreen = () => {
  const [number, setNumber] = useState(0);

  const onIncrease = () => {
    setNumber(number + 1);
  }
  const onDecrease = () => {
    setNumber(number - 1);
  }

  return (
    <View style={{flex: 1, backgroundColor: '#00FFFF'}}>
      <Text style={{fontSize: 40, fontWeight: 'bold', marginBottom: 40}}>[SecondScreen]</Text>
      <Text style={{fontSize: 30}}>현재 number = {number}</Text>
      <Button
        style={{fontSize: 30, backgroundColor: '#FFFFFF'}}
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

export default SecondScreen
```
<br>

useState를 이용하여 새로운 상태 변수 number를 정의합니다.
useState의 argument에 초기값을 전달할 수 있습니다.  
<pre style="background: #ccc">
const [number, setNumber] = useState(0); // number 상태 변수의 초기값을 0으로 전달  
</pre>
<br>

setNumber함수를 이용하여 파라미터로 전달 받은 값을 최신 상태 값로 변경할 수 있습니다.
<pre style="background: #ccc">
setNumber(number + 1); // number + 1 값으로 상태 변경  
setNumber(number - 1); // number - 1 값으로 상태 변경
</pre>
<br>

number 상태 변수를 직접적으로 사용할 수 있습니다.
<pre style="background: #ccc">
<Text style={{fontSize: 30}}>현재 number = {number}</Text>
</pre>
<br><br><br><br>





# **<참고>**
아래 사이트를 참고하여 작성하였습니다.
> React Native 사이트 : https://reactnative.dev/docs/intro-react#state

<br><br>