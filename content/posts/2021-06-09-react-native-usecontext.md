---
template: post
title: React Native - useContext
slug: /posts/react-native/usecontext
draft: false
priority: 0
date: 2021-06-09T00:46:37.121Z
description: >-
category: Programming
tags:
  - React Native
---

<br>

**useContext** 는 depth가 깊은 하위컴포넌트에게 함수, 데이터를 전달할 수 있는 Hook 입니다.  
<br><br><br><br>




보통 상위 컴포넌트에서 하위 컴포넌트로 데이터를 전달할 때 props를 통해 인자로 넘깁니다.  
하지만 개발하다보면 하위 컴포넌트의 하위 하위 하위컴포넌트로 데이터를 전달해야 할 수도 있고  
오히려 반대로 하위 컴포넌트에서 상위 컴포넌트로 데이터를 공유해야 할 수도 있습니다.  
이런 경우 props를 통해 데이터를 전달하기 어렵기 때문에 useContext를 통해 데이터를 전달합니다.
<br><br><br><br>





# **❐ 코드 예제**
screen 폴더 안에 UseContextScreen.js 파일을 생성하고, 아래와 같이 작성합니다.
```javascript
import React, { useState, createContext } from "react";
import { View, Text } from 'react-native';
import UseContextComponent from "../component/UseContextComponent";

export const UserInfoContext = createContext();

const UseContextScreen = () => {
  const [name, setName] = useState("임소희");
  const userInfo = {
    name,
    setName
  }

  return (
    <UserInfoContext.Provider value={userInfo}>
      <View style={{flex: 1, backgroundColor: '#ccccff'}}>
        <Text style={{fontSize: 40, fontWeight: 'bold', marginBottom: 40}}>[UseContextScreen]</Text>
        <Text style={{fontSize: 20}}>name : {name}  (UseContextScreen)</Text>
        <UseContextComponent/>
      </View>
    </UserInfoContext.Provider>
  );
};

export default UseContextScreen
```
<br><br>

**createContext()** 를 이용하여 Context를 생성합니다.  
export하는 이유는 다른 파일에서 접근할 수 있게 하기 위해서 입니다.
~~~javascript
export const UserInfoContext = createContext();
~~~
<br>

**Provider** 를 이용하여 Context에 함수, 데이터를 저장합니다.  
하위 컴포넌트를 Provider로 감싸면 하위 컴포넌트에서 Context에 저장된 함수, 데이터를 사용할 수 있습니다.  
Provider는 하위 컴포넌트들에게 Context의 변화를 알리는 역할을 합니다.  
하위 컴포넌트는 value가 변경될 때 리렌더링 됩니다.
~~~
<UserInfoContext.Provider value={userInfo}>
   하위 컴포넌트들...
</UserInfoContext.Provider>
~~~
<br><br><br><br>





component 폴더 안에 UseContextComponent.js 파일을 생성하고, 아래와 같이 작성합니다.
```javascript
import React, { useContext } from "react";
import { View, Text,Button } from 'react-native'; 
import { UserInfoContext } from "../screen/UseContextScreen";

function UseContextComponent() {
  const { name, setName } = useContext(UserInfoContext);

  const changeName = () => {
    setName("김충기");
  }

  return (
    <View>
      <Text style={{fontSize: 20}}>name : {name}  (UseContextComponent)</Text>
      <Button
        style={{fontSize: 30}}
        title="이름 변경"
        onPress={changeName}
      />
    </View>
  );
}

export default UseContextComponent
```
<br><br>

**useContext()** 를 이용하여 Context에 저장한 함수, 데이터를 가져와 사용할 수 있습니다. 
~~~
const { name, setName } = useContext(UserInfoContext);
~~~

<br><br>