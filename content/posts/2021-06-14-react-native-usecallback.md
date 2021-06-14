---
template: post
title: React Native - useCallback
slug: /posts/react-native/usecallback
draft: false
priority: 0
date: 2021-06-14T00:46:37.121Z
description: >-
category: Programming
tags:
  - React Native
---

<br>

**useCallback** 는 이벤트 핸들러 함수를 필요할 때만 생성할 수 있는 hook입니다.
<br><br>

기본적으로 컴포넌트가 리렌더링 될 때마다 이벤트 핸들러 함수들이 새로 생성됩니다.  
useCallback을 사용하면 이벤트 핸들러 함수를 필요할 때만 생성 할 수 있어 성능 최적화를 할 수 있습니다.  
숫자, 문자열, 객체 처럼 일반 값을 재사용하기 위해서는 useMemo을 사용하고,  
함수를 재사용 하기 위해서는 useCallback을 사용하면 됩니다.
<br><br><br><br>





useMemoScreen.js에서 useMemo를 사용하여 구현했던
숫자를 등록하고, 등록한 숫자들의 평균을 구해주는 로직에 useCallback을 적용해봅시다.
<br><br>

# **❐ 코드 예제**
screen 폴더 안에 UseCallbackScreen.js 파일을 생성하고, 아래와 같이 작성합니다.
```javascript
import React, { useState, useMemo, useCallback } from "react";
import { View, Text, TextInput, Button } from 'react-native';

const UseCallbackScreen = () => {
  const [number, setNumber] = useState('');
  const [list, setList] = useState([]);

  const onInsert = useCallback(() => {
    const nextList = list.concat(parseInt(number));
    setList(nextList);
    setNumber('');
  }, [number, list]);

  const getAverage = numbers => {
    console.log('평균값 계산중...');
    if (numbers.length === 0) return 0;
    const sum = numbers.reduce((a, b) => a + b);
    return sum / numbers.length;
  };
  const avg = useMemo(() => getAverage(list), [list]);

  return (
    <View style={{flex: 1}}>
      <Text style={{fontSize: 40, fontWeight: 'bold', marginBottom: 40}}>[UseCallbackScreen]</Text>
      <TextInput
        style={{fontSize: 30, backgroundColor: '#FFFFFF'}}
        onChangeText={setNumber}
        value={number}
      />
      <Button
        style={{fontSize: 30, backgroundColor: '#FFFFFF'}}
        title="등록"
        onPress={onInsert}
      />

      {list.map((value, index) => (
        <Text style={{fontSize: 20}}>{value}  </Text>
      ))}

      <Text style={{fontSize: 20}}>평균 : {avg}</Text>
    </View>
  );
};

export default UseCallbackScreen
```
<br>

재사용하고 싶은 함수를 UseCallback로 감싸주면 되며,  
두번째 파라미터에 어떤 상태 값이 변경되었을 때 함수를 재생성할 것인지 명시해주면 됩니다.  
즉, 아래 소스코드는 number, list 상태 값이 변경되었을 때 onInsert()함수를 생성합니다.
```javascript
  const onInsert = useCallback(() => {
    const nextList = list.concat(parseInt(number));
    setList(nextList);
    setNumber('');
  }, [number, list]);
```

<br><br>