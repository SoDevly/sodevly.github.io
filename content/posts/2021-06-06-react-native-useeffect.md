---
template: post
title: React Native - useEffect
slug: /posts/react-native/useeffect
draft: false
priority: 0
date: 2021-06-06T00:46:37.121Z
description: >-
category: Programming
tags:
  - React Native
---

<br>

**useEffect**는 컴포넌트가 렌더링 될 때마다 특정 작업을 수행하도록 설정 할 수 있는 Hook 입니다.  
<br><br><br><br>




useEffect은 정리(Clean-Up)가 필요한 경우와 필요하지 않은 경우 크게 2가지로 나눠지며,  
각각 컴포넌트가 렌더링될 때마다 실행, 컴포넌트가 마운트될 때만 실행, 특정 값이 업데이트 될 때만 실행 등으로 나눠집니다.  
useEffect 종류별 사용 방법에 대하여 알아봅시다.
<br><br>





- ### **컴포넌트가 렌더링될 때마다 실행**
컴포트가 렌더링될 때마다 실행하고 싶은 경우, 두번째 파라미터를 전달하지 않습니다.  
아래 예제의 로그를 보면 [화면 진입 시], [number 상태 업데이트 시], [count 상태 업데이트 시]에 로그가 기록된 것을 볼 수 있습니다.  
~~~javascript
useEffect(() => {
　console.log('컴포넌트가 렌더링될 때 실행     -> 두번째 파라미터 : 없음');
});
~~~
<br><br>

- ### **컴포넌트가 마운트될 때만 실행**
컴포넌트가 마운트될 때만 실행하고 싶은 경우, 두번째 파라미터를 []으로 전달합니다.  
아래 예제의 로그를 보면 [화면 진입 시]에만 로그가 기록된 것을 볼 수 있습니다.  
~~~javascript
useEffect(() => {  
　console.log('컴포넌트가 마운트될 때만 실행   -> 두번째 파라미터 : []');  
}, []);
~~~
<br><br>

- ### **특정 값이 업데이트 될 때만 실행**
특정 상태 변수의 값이 변경되었을 때 실행하고 싶은 경우, 두번째 파라미터에 해당 상태 변수를 전달합니다.  
아래 예제의 로그를 보면 [화면 진입 시], [number 상태 업데이트 시]에 로그가 기록된 것을 볼 수 있습니다.  
~~~javascript
useEffect(() => {  
　console.log('특정 값이 변경되었을 때 실행    -> 두번째 파라미터 : [number]');  
}, [number]);  
~~~
<br><br>

- ### **정리(Clean-Up)가 필요한 경우 실행**
정리(Clean-Up)가 필요한 경우, return을 추가합니다.  
아래 예제의 로그를 보면 [화면 나갈 때], [number 상태 업데이트 시], [count 상태 업데이트 시]에 로그가 기록된 것을 볼 수 있습니다.  
[화면 나갈 때] 호출은 컴포넌트가 언마운트될 때 Clean-Up하기 위해서 이며,  
[number 상태 업데이트 시], [count 상태 업데이트 시] 호출은 새로운 값으로 상태 업데이트 하기 전에 값을 Clean-Up하기 위해서 라고 이해하면 될 것 같습니다.  
~~~javascript
useEffect(() => {
　console.log('컴포넌트가 마운트될 때만 실행   -> 두번째 파라미터 : [], return 있음');
　return () => {
　　console.log('Clean-Up 실행   -> 두번째 파라미터 : [], return 있음');
　};
}, []);

useEffect(() => {
　console.log('컴포넌트가 렌더링될 때 실행     -> 두번째 파라미터 : 없음, return 있음');
　return () => {
　　console.log('Clean-Up 실행   -> 두번째 파라미터 : 없음, return 있음');
　};
});

useEffect(() => {
　console.log('특정 값이 변경되었을 때 실행    -> 두번째 파라미터 : [number], return 있음');
　return () => {
　　console.log('Clean-Up 실행   -> 두번째 파라미터 : [number], return 있음');
　};
}, [number]);
~~~
<br><br><br><br>





# **❐ 코드 예제**
screen 폴더 안에 UseEffectScreen.js 파일을 생성하고, 아래와 같이 작성합니다.
```javascript
import React, { useState, useEffect } from "react";
import { View, Text, Button } from 'react-native';

const UseEffectScreen = () => {
  const [number, setNumber] = useState(0);
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log('컴포넌트가 마운트될 때만 실행   -> 두번째 파라미터 : []');
  }, []);

  useEffect(() => {
    console.log('컴포넌트가 마운트될 때만 실행   -> 두번째 파라미터 : [], return 있음');
    return () => {
      console.log('Clean-Up 실행   -> 두번째 파라미터 : [], return 있음');
    };
  }, []);

  useEffect(() => {
    console.log('컴포넌트가 렌더링될 때 실행     -> 두번째 파라미터 : 없음');
  });

  useEffect(() => {
    console.log('컴포넌트가 렌더링될 때 실행     -> 두번째 파라미터 : 없음, return 있음');
    return () => {
      console.log('Clean-Up 실행   -> 두번째 파라미터 : 없음, return 있음');
    };
  });

  useEffect(() => {
    console.log('특정 값이 변경되었을 때 실행    -> 두번째 파라미터 : [number]');
  }, [number]);

  useEffect(() => {
    console.log('특정 값이 변경되었을 때 실행    -> 두번째 파라미터 : [number], return 있음');
    return () => {
      console.log('Clean-Up 실행   -> 두번째 파라미터 : [number], return 있음');
    };
  }, [number]);

  const onIncreaseNumber = () => {
    setNumber(number + 1);
  }
  const onDecreaseNumber = () => {
    setNumber(number - 1);
  }

  const onIncreaseCount = () => {
    setCount(count + 1);
  }
  const onDecreaseCount = () => {
    setCount(count - 1);
  }

  return (
    <View style={{flex: 1}}>
      <Text style={{fontSize: 40, fontWeight: 'bold', marginBottom: 40}}>[useEffectScreen]</Text>
      <Text style={{fontSize: 30}}>현재 number = {number}</Text>
      <Button
        style={{fontSize: 30, backgroundColor: '#FFFFFF'}}
        title="더하기"
        onPress={onIncreaseNumber}
      />
      <Button
        title="빼기"
        onPress={onDecreaseNumber}
      />
      <Text style={{fontSize: 30}}>현재 count = {count}</Text>
      <Button
        style={{fontSize: 30, backgroundColor: '#FFFFFF'}}
        title="더하기"
        onPress={onIncreaseCount}
      />
      <Button
        title="빼기"
        onPress={onDecreaseCount}
      />
    </View>
  );
};

export default UseEffectScreen
```
<br><br><br><br>




상황별로 로그는 아래와 같습니다.  
**[화면 진입 시]**  
컴포넌트가 마운트될 때만 실행   -> 두번째 파라미터 : []  
컴포넌트가 마운트될 때만 실행   -> 두번째 파라미터 : [], return 있음  
컴포넌트가 렌더링될 때 실행     -> 두번째 파라미터 : 없음  
컴포넌트가 렌더링될 때 실행     -> 두번째 파라미터 : 없음, return 있음  
특정 값이 변경되었을 때 실행    -> 두번째 파라미터 : [number]  
특정 값이 변경되었을 때 실행    -> 두번째 파라미터 : [number], return 있음  
<br>

**[number 상태 업데이트 시]**  
Clean-Up 실행   -> 두번째 파라미터 : 없음, return 있음  
Clean-Up 실행   -> 두번째 파라미터 : [number], return 있음  
컴포넌트가 렌더링될 때 실행     -> 두번째 파라미터 : 없음  
컴포넌트가 렌더링될 때 실행     -> 두번째 파라미터 : 없음, return 있음  
특정 값이 변경되었을 때 실행    -> 두번째 파라미터 : [number]  
특정 값이 변경되었을 때 실행    -> 두번째 파라미터 : [number], return 있음  
<br>

**[count 상태 업데이트 시]**  
Clean-Up 실행   -> 두번째 파라미터 : 없음, return 있음  
컴포넌트가 렌더링될 때 실행     -> 두번째 파라미터 : 없음  
컴포넌트가 렌더링될 때 실행     -> 두번째 파라미터 : 없음, return 있음  
<br>

**[화면 나갈 때]**  
Clean-Up 실행   -> 두번째 파라미터 : [], return 있음  
Clean-Up 실행   -> 두번째 파라미터 : 없음, return 있음  
Clean-Up 실행   -> 두번째 파라미터 : [number], return 있음  
<br><br><br><br>





# **<참고>**
아래 사이트를 참고하여 작성하였습니다.
> React Native 사이트 : https://reactjs.org/docs/hooks-effect.html

<br><br>