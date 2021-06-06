---
template: post
title: React Native 상태 관리를 할 수 있는 useEffect
slug: /posts/react-native/useeffect
draft: false
priority: 0
date: 2021-06-06T00:46:37.121Z
description: >-
  React Native 상태 관리를 할 수 있는 useEffect에 대하여 설명합니다.
category: Programming
tags:
  - React Native
---

<br>

**useEffect**는 컴포넌트가 렌더링 될 때마다 특정 작업을 수행하도록 설정 할 수 있는 Hook 입니다.  
useEffect의 두번째 파라미터 값에 따라 또는 return 존재 여부에 따라 동작의 차이가 있습니다.
<br><br><br><br>

각 useEffect 사용 방식 별로 로그를 기록하고, 동작이 어떻게 다른게 살펴봅시다.
<br><br><br><br>


# **❐ 코드 수정**
SecondScreen.js 파일의 코드를 아래와 같이 수정합니다.
```
import React, { useState, useEffect } from "react";
import { View, Text, Button } from 'react-native';

const SecondScreen = () => {
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
    <View style={{flex: 1, backgroundColor: '#00FFFF'}}>
      <Text style={{fontSize: 40, fontWeight: 'bold', marginBottom: 40}}>[SecondScreen]</Text>
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

export default SecondScreen
```
<br><br>




# **❐ 로그**
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
<br><br>





컴포넌트가 마운트될 때만 실행하고 싶은 경우, 두번째 파라미터를 []으로 전달합니다.  
위의 로그를 보면 [화면 진입 시]에만 로그가 기록된 것을 볼 수 있습니다.  
<pre style="background: #ccc">
useEffect(() => {  
  console.log('컴포넌트가 마운트될 때만 실행   -> 두번째 파라미터 : []');  
}, []);
</pre>

컴포트가 렌더링될 때마다 실행하고 싶은 경우, 두번째 파라미터를 전달하지 않습니다.  
위 로그를 보면 [화면 진입 시], [number 상태 업데이트 시], [count 상태 업데이트 시]에 로그가 기록된 것을 볼 수 있습니다.  
<pre style="background: #ccc">
useEffect(() => {
  console.log('컴포넌트가 렌더링될 때 실행     -> 두번째 파라미터 : 없음');
});
</pre>

특정 상태 변수의 값이 변경되었을 때 실행하고 싶은 경우, 두번째 파라미터에 해당 상태 변수를 전달합니다.  
위 로그를 보면 [화면 진입 시], [number 상태 업데이트 시]에 로그가 기록된 것을 볼 수 있습니다.  
<pre style="background: #ccc">
useEffect(() => {  
  console.log('특정 값이 변경되었을 때 실행    -> 두번째 파라미터 : [number]');  
}, [number]);  
</pre>

정리(Clean-Up)가 필요한 경우, return을 추가합니다.  
위의 로그를 보면 [화면 나갈 때], [number 상태 업데이트 시], [count 상태 업데이트 시]에 로그가 기록된 것을 볼 수 있습니다.  
[화면 나갈 때] 호출은 컴포넌트가 언마운트될 때 Clean-Up하기 위해서 이며,  
[number 상태 업데이트 시], [count 상태 업데이트 시] 호출은 새로운 값으로 상태 업데이트 하기 전에 값을 Clean-Up하기 위해서 라고 이해하면 될 것 같습니다.  
<pre style="background: #ccc">
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
</pre>
<br><br><br><br>





# **<참고>**
아래 사이트를 참고하여 작성하였습니다.
> React Native 사이트 : https://reactjs.org/docs/hooks-effect.html

<br><br>