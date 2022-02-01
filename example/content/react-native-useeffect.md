---
emoji: 💻
title: '[React Native] useEffect'
created: 2021-06-06
modified: 2021-06-06
link: ''
tags:
  - React Native
---
<br></br>





**<Highlight>useEffect</Highlight>**는 <Underline>컴포넌트가 렌더링 될 때마다 특정 작업을 수행하도록 설정 할 수 있는 Hook 입니다.</Underline>  

useEffect은 실행 시점을 기준으로 크게 3가지로 나눠집니다.
- 컴포넌트가 렌더링될 때마다 실행
- 컴포넌트가 마운트될 때만 실행
- 특정 값이 업데이트 될 때만 실행

그리고 정리(Clean-Up) 동작 필요 여부에 따라 2가지로 나눠집니다.
- 정리(Clean-Up)가 필요한 경우
- 정리(Clean-Up)가 필요하지 않은 경우
 
즉, useEffect 종류별 사용 방법에 대하여 알아봅시다.
<br></br><br></br><br></br><br></br>





# **❐ 문법**
### **컴포넌트가 렌더링될 때마다 실행**
컴포트가 렌더링될 때마다 실행하고 싶은 경우, 두번째 파라미터를 전달하지 않습니다.  
아래 예제의 로그를 보면 [화면 진입 시], [number 상태 업데이트 시], [count 상태 업데이트 시]에 로그가 기록된 것을 볼 수 있습니다.  
```javascript
useEffect(() => {
  console.log('컴포넌트가 렌더링될 때 실행     -> 두번째 파라미터 : 없음');
});
```
<br></br><br></br>





### **컴포넌트가 마운트될 때만 실행**
컴포넌트가 마운트될 때만 실행하고 싶은 경우, 두번째 파라미터를 []으로 전달합니다.  
아래 예제의 로그를 보면 [화면 진입 시]에만 로그가 기록된 것을 볼 수 있습니다.  
```javascript
useEffect(() => {  
  console.log('컴포넌트가 마운트될 때만 실행   -> 두번째 파라미터 : []');  
}, []);
```
<br></br><br></br>





### **특정 값이 업데이트 될 때만 실행**
특정 상태 변수의 값이 변경되었을 때 실행하고 싶은 경우, 두번째 파라미터에 해당 상태 변수를 전달합니다.  
아래 예제의 로그를 보면 [화면 진입 시], [number 상태 업데이트 시]에 로그가 기록된 것을 볼 수 있습니다.  
```javascript
useEffect(() => {  
  console.log('특정 값이 변경되었을 때 실행    -> 두번째 파라미터 : [number]');  
}, [number]);  
```
<br></br><br></br>





### **정리(Clean-Up)가 필요한 경우 실행**
정리(Clean-Up)가 필요한 경우, return을 추가합니다.  
아래 예제의 로그를 보면 [화면 나갈 때], [number 상태 업데이트 시], [count 상태 업데이트 시]에 로그가 기록된 것을 볼 수 있습니다.  
[화면 나갈 때] 호출은 컴포넌트가 언마운트될 때 Clean-Up하기 위해서 이며,  
[number 상태 업데이트 시], [count 상태 업데이트 시] 호출은 새로운 값으로 상태 업데이트 하기 전에 값을 Clean-Up하기 위해서 라고 이해하면 될 것 같습니다.  
```javascript
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
```
<br></br><br></br><br></br><br></br>







# **❐ 예시**
### 예시 설명
useEffect 종류별로 console log를 출력하여 언제 실행되는지 확인해 봅시다.  
<br></br><br></br><br></br><br></br>





### UseEffectScreen.js 파일 작성
```javascript
import React, { useState, useEffect } from "react";
import { StyleSheet, View, Text, Button } from 'react-native';

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
    <View style={styles.screen}>
      <Text style={styles.text}>현재 number = {number}</Text>
      <Button
        style={styles.btn}
        title="더하기"
        onPress={onIncreaseNumber}
      />
      <Button
        style={styles.btn}
        title="빼기"
        onPress={onDecreaseNumber}
      />
      <Text style={styles.text}>현재 count = {count}</Text>
      <Button
        style={styles.btn}
        title="더하기"
        onPress={onIncreaseCount}
      />
      <Button
        style={styles.btn}
        title="빼기"
        onPress={onDecreaseCount}
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
  },
  btn: {
    fontSize: 30,
    backgroundColor: '#FFFFFF'
  }
})

export default UseEffectScreen
```
<br></br><br></br>





상황별 로그는 아래와 같습니다.  

**[화면 진입 시]**  
컴포넌트가 마운트될 때만 실행   -> 두번째 파라미터 : []  
컴포넌트가 마운트될 때만 실행   -> 두번째 파라미터 : [], return 있음  
컴포넌트가 렌더링될 때 실행     -> 두번째 파라미터 : 없음  
컴포넌트가 렌더링될 때 실행     -> 두번째 파라미터 : 없음, return 있음  
특정 값이 변경되었을 때 실행    -> 두번째 파라미터 : [number]  
특정 값이 변경되었을 때 실행    -> 두번째 파라미터 : [number], return 있음  
<br></br>

**[number 상태 업데이트 시]**  
Clean-Up 실행   -> 두번째 파라미터 : 없음, return 있음  
Clean-Up 실행   -> 두번째 파라미터 : [number], return 있음  
컴포넌트가 렌더링될 때 실행     -> 두번째 파라미터 : 없음  
컴포넌트가 렌더링될 때 실행     -> 두번째 파라미터 : 없음, return 있음  
특정 값이 변경되었을 때 실행    -> 두번째 파라미터 : [number]  
특정 값이 변경되었을 때 실행    -> 두번째 파라미터 : [number], return 있음  
<br></br>

**[count 상태 업데이트 시]**  
Clean-Up 실행   -> 두번째 파라미터 : 없음, return 있음  
컴포넌트가 렌더링될 때 실행     -> 두번째 파라미터 : 없음  
컴포넌트가 렌더링될 때 실행     -> 두번째 파라미터 : 없음, return 있음  
<br></br>

**[화면 나갈 때]**  
Clean-Up 실행   -> 두번째 파라미터 : [], return 있음  
Clean-Up 실행   -> 두번째 파라미터 : 없음, return 있음  
Clean-Up 실행   -> 두번째 파라미터 : [number], return 있음  
<br></br><br></br><br></br><br></br>





# **<참고>**
아래 사이트를 참고하여 작성하였습니다.
> React Native 사이트 : https://reactjs.org/docs/hooks-effect.html

<br></br><br></br>