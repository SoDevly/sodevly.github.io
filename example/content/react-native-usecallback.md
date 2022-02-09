---
emoji: 💻
title: '[React Native] useCallback'
created: 2021-06-14
modified: 2021-06-14
link: ''
tags:
  - React Native
---
<br></br>





# **❐ useCallback란?**
`useCallback` 는 <u>메모이즈된 콜백을 return하는 hook입니다.</u>    

기본적으로 컴포넌트가 리렌더링 될 때마다 이벤트 핸들러 함수들이 새로 생성됩니다.  
useCallback을 사용하면 이벤트 핸들러 함수를 필요할 때만 생성 할 수 있어 성능 최적화를 할 수 있습니다.  
숫자, 문자열, 객체 처럼 일반 값을 재사용하기 위해서는 useMemo을 사용하고,  
함수를 재사용 하기 위해서는 useCallback을 사용합니다.
<br></br><br></br><br></br><br></br>





# **❐ 예시**
### **예시 설명**
아래와 같이 동작하는 로직을 useCallback를 사용하여 구현해봅시다.
useCallback를 적용한 버전과 적용하지 않은 버전을 둘 다 구현하여 비교해봅시다.
- 3개의 버튼(Light 컴포넌트) 정의
- 버튼 클릭 시, 버튼명이 ON <-> OFF로 변경
- Light 컴포넌트에 State와 Callback함수를 넘겨줍니다.
- Light 컴포넌트를 props가 같을 때 리렌더링하지 않도록 React.memo로 감싸줍니다.
<br></br><br></br><br></br><br></br>





### **예시 코드**
###### **UseCallbackScreen.js 파일 작성**
```javascript
import React, { useState, useCallback } from "react";
import { StyleSheet, View, Button } from 'react-native';

function Light({ room, isOn, toggle }) {
  console.log("Light 렌더링... ", { room, isOn });
  return (
    <Button
      title={isOn? room + " ON" : room + " OFF"}
      onPress={toggle}>
    </Button>
  );
}
Light = React.memo(Light);

const UseCallbackScreen = () => {
  const [masterOn, setMasterOn] = useState(false);
  const [kitchenOn, setKitchenOn] = useState(false);
  const [bathOn, setBathOn] = useState(false);

  //useCallback 미사용
  //const toggleMaster = () => setMasterOn(!masterOn);
  //const toggleKitchen = () => setKitchenOn(!kitchenOn);
  //const toggleBath = () => setBathOn(!bathOn);

  //useCallback 사용
  const toggleMaster = useCallback(() => setMasterOn(!masterOn), [masterOn]);
  const toggleKitchen = useCallback(() => setKitchenOn(!kitchenOn),[kitchenOn]);
  const toggleBath = useCallback(() => setBathOn(!bathOn), [bathOn]);

  console.log("UseCallbackScreen 렌더링...");
  return (
    <View style={styles.screen}>
      <Light room="침실" isOn={masterOn} toggle={toggleMaster} />
      <Light room="주방" isOn={kitchenOn} toggle={toggleKitchen} />
      <Light room="욕실" isOn={bathOn} toggle={toggleBath} />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: '#ffffff'
  }
})

export default UseCallbackScreen
```
<br></br><br></br><br></br><br></br>





###### **로그 확인**
`useCallback 미사용하는 경우`
모든 컴포넌트가 재렌더링되는 것을 확인할 수 있습니다.  
useCallback을 미사용했기 때문에 컴포넌트가 렌더링될 때 함수가 재생성되었고, Light 컴포넌트의 props의 toggle이 변경되었기 때문에 Light 컴포넌트 3개 모두 재렌더링된 것입니다.
![](/assets/react-native-usecallback-before.png)

`useCallback 사용하는 경우`
State를 변경하는 컴포넌트만 재렌더링되는 것을 확인할 수 있습니다.  
useCallback을 사용했기 때문에 컴포넌트가 렌더링될 때 함수를 재생성하지 않았고, Light 컴포넌트의 props의 toggle이 변경되지 않았기 때문에 props의 isOn이 변경된 컴포넌트 1개만 재렌더링된 것입니다.
![](/assets/react-native-usecallback-after.png)
<br></br><br></br>