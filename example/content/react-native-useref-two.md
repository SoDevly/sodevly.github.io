---
emoji: 💻
title: '[React Native] Hook - useRef 설명 및 예제 (2)'
created: 2021-06-16
modified: 2021-06-16
link: ''
tags:
  - React Native
---
<br></br>





# **❐ useRef란?**
`useRef`는 <u>컴포넌트 리렌더링없이 상태 값을 관리할 수 있는 hook입니다.</u>  

useState()로 선언한 변수는 값 변경 시 컴포넌트를 리렌더링합니다.  
let으로 선언한 변수는 컴포넌트가 리렌더링되면 값이 초기화됩니다.  
따라서 모든 상태를 useState()로 선언할 경우 불필요한 컴포넌트가 리렌더링되는 부작용이 있을 수 있으며, let로 선언할 경우 컴포넌트가 리렌더링될 때 값이 초기화되는 부작용이 있을 수 있습니다.  
값이 변경되어도 컴포넌트를 리렌더링되지 않고 컴포넌트가 리렌더링되도 값이 유지되어야하는 경우가 있는데 이 때 useRef()를 사용합니다.  
<br></br>

`useRef`는 <u>특정 컴포넌트를 선택할 수 있게 도와주는 hook입니다.</u>  
[useRef (1) 게시글 이동 ](https://sodevly.github.io/react-native-useref1)  
<br></br><br></br><br></br><br></br>





# **❐ let/useState/useRef로 선언한 변수 차이**
컴포넌트의 생애주기란 DOM에 mount 되고 unmount 되기까지의 과정을 말합니다.  
함수 컴포넌트는 부모로 부터 전달 받는 props가 변경되거나 자신의 state가 변경되면 리렌더링이 발생합니다.  

`let로 선언한 변수`는 <u>컴포넌트가 렌더링될 때마다 값이 초기화</u> 되며 <u>값이 변경되어도 컴포넌트를 리렌더링하지 않습니다.</u>  

`useState()로 선언한 변수`는 컴포넌트의 생애주기 동안 값이 유지되기때문에 <u>컴포넌트가 리렌더링되어도 값이 유지</u>되며 <u>값이 변경되면 컴포넌트를 리렌더링합니다.</u>  

`useRef()로 선언한 변수`는 컴포넌트의 생애주기 동안 값이 유지되기때문에 <u>컴포넌트가 리렌더링되어도 값이 유지</u>되며 <u>값이 변경되어도 컴포넌트를 리렌더링하지 않습니다.</u>
<br></br><br></br><br></br><br></br>





# **❐ 예시**
### **예시 설명**
아래와 같은 동작 구현을 통해 let로 선언한 변수, useState로 선언한 변수, useRef로 선언한 변수의 차이를 확인해봅시다.
- let로 선언한 변수 letValue 정의
- letValue 변수 값 디스플레이
- [let 변수 값 변경] 버튼 클릭 시, letValue 변수 값을 +1한 값으로 업데이트
+ useState()로 선언한 변수 stateValue 정의
+ stateValue 변수 값 디스플레이
+ [state 변수 값 변경] 버튼 클릭 시, stateValue 변수 값을 +1한 값으로 업데이트
* useRef()로 선언한 변수 refValue 정의
* refValue 변수 값 디스플레이
* [ref 변수 값 변경] 버튼 클릭 시, refValue 변수 값을 +1한 값으로 업데이트
<br></br><br></br><br></br><br></br>





### **예시 코드**
###### **useRefScreen2.js 파일 작성**
```javascript
import React, { useState, useRef } from "react";
import { StyleSheet, View, Text, Button } from 'react-native';

const UseRefScreen2 = () => {
  let letValue = 0;
  const [stateValue, setStateValue] = useState(0);
  const refValue = useRef(0);

  const onChangeLetValue = () => {
    letValue = letValue+1;
    console.log('letValue : ' + letValue);
  };

  const onChangeStateValue = () => {
    setStateValue(stateValue+1);
    console.log('stateValue : ' + stateValue);
  };

  const onChangeRefValue = () => {
    refValue.current = refValue.current+1;
    console.log('refValue.current : ' + refValue.current);
  };

  console.log('렌더링...');
  return (
    <View style={styles.screen}>
      <Text style={styles.text}>{letValue}</Text>
      <Button
        title="let 변수 값 변경"
        onPress={onChangeLetValue}
      />

      <Text style={styles.text}>{stateValue}</Text>
      <Button
        title="state 변수 값 변경"
        onPress={onChangeStateValue}
      />

      <Text style={styles.text}>{refValue.current}</Text>
      <Button
        title="ref 변수 값 변경"
        onPress={onChangeRefValue}
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
    textAlign: 'center'
  }
})

export default UseRefScreen2
```

let로 선언한 변수 값을 변경했을 때, 값은 업데이트되지만 컴포넌트는 리렌더링되지 않는 것을 확인할 수 있습니다.
![](/assets/react-native-useref2-let1.gif)

let로 선언한 변수 값 변경 > useState()로 선언한 변수를 업데이트하여 컴포넌트 리렌더링 > 다시 let로 선언한 변수 값 변경했을 때, 리렌더링 후에 let로 선언한 변수 값이 초기화된 것을 확인할 수 있습니다.
![](/assets/react-native-useref2-let2.gif)
<br></br>

useState()로 선언한 변수 값을 변경했을 때, 값도 업데이트되고 컴포넌트도 리렌더링되는 것을 확인할 수 있습니다.
![](/assets/react-native-useref2-state.gif)
<br></br>

useRef()로 선언한 변수 값을 변경했을 때, 값은 업데이트되지만 컴포넌트는 리렌더링되지 않는 것을 확인할 수 있습니다.
![](/assets/react-native-useref2-ref1.gif)

useRef()로 선언한 변수 값 변경 > useState()로 선언한 변수를 업데이트하여 컴포넌트 리렌더링 > 다시 useRef()로 선언한 변수 값 변경했을 때, 리렌더링 후에도 useRef()로 선언한 변수 값이 유지되는 것을 확인할 수 있습니다.
![](/assets/react-native-useref2-ref2.gif)
<br></br><br></br>
