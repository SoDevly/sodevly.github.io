---
emoji: 💻
title: '[React Native] Redux Middleware 설명 및 예제'
created: 2021-06-26
modified: 2021-06-26
link: ''
tags:
  - React Native
---
<br></br>





# **❐ Redux Middleware란?**
`Redux Middleware`는 <u>dispatch(action)을 호출했을 때 Reducer가 호출되기 전에 사전/사후 작업을 추가할 수 있는 기능</u>입니다.  
<br></br><br></br><br></br><br></br>





# **❐ Redux Middleware 아키텍처**
![](/assets/react-native-redux-middleware.png)  
<br></br><br></br><br></br><br></br>





# **❐ 예시**
### **예시 설명**
앞에 [Redux 게시글](https://sodevly.github.io/react-native-redux/)에서 구현한 로직에서 Middleware 2개를 추가하여 구현해보고, Redux Middleware의 아키텍쳐를 이해해봅시다.
- \+ 버튼을 클릭하면 number state값이 +1 증가  
  \- 버튼을 클릭하면 number state값이 -1 감소
- name input값이 바뀌면 name state값이 바뀜  
  age input값이 바뀌면 age state값이 바뀜
- Middleware1, Middleware2 추가
<br></br><br></br><br></br><br></br>





### **파일 구조**
App.js  
src  
ㅤㅤ├ redux  
ㅤㅤㅤㅤ├ middleware  
ㅤㅤㅤㅤㅤㅤ├ Middleware1.js   //Middleware 정의  
ㅤㅤㅤㅤㅤㅤ├ Middleware2.js   //Middleware 정의  
ㅤㅤㅤㅤ├ modules  
ㅤㅤㅤㅤㅤㅤ├ rootReducer.js   //여러개의 Reducer를 하나의 rootReducer로 합침  
ㅤㅤㅤㅤㅤㅤ├ counter.js       //Action 정의, Action Creator 정의, State 정의, Reducer 정의  
ㅤㅤㅤㅤㅤㅤ├ userInfo.js      //Action 정의, Action Creator 정의, State 정의, Reducer 정의  
ㅤㅤ├ screen  
ㅤㅤㅤㅤ├ rudux  
ㅤㅤㅤㅤㅤㅤ├ ReduxScreen.js   //Store에서 관리하는 State를 디스플레이하고, dispatch(action)을 호출하여 State를 변경시키는 화면  
<br></br><br></br><br></br><br></br>





### **예시 코드**
###### **Middleware1.js 파일 작성**
```javascript
const Middleware1 = store => next => action => {
  //Reducer가 호출되기 전에 사전 작업 추가
  console.log('[Middleware1] Reducer가 호출되기 전에 사전 작업');

  //next() 함수를 통해 다음 Middleware에게 Action을 전달합니다.
  //다음 Middleware가 없다면 Reducer에게 Action을 전달합니다.
  const result = next(action);

  //Reducer가 호출된 후에 사후 작업 추가
  console.log('[Middleware1] Reducer가 호출된 후에 사후 작업');
  return result;
};

export default Middleware1;
```
<br></br><br></br><br></br><br></br>





###### **Middleware2.js 파일 작성**
```javascript
const Middleware2 = store => next => action => {
  //Reducer가 호출되기 전에 사전 작업 추가
  console.log('[Middleware2] Reducer가 호출되기 전에 사전 작업');

  //next() 함수를 통해 다음 Middleware에게 Action을 전달합니다.
  //다음 Middleware가 없다면 Reducer에게 Action을 전달합니다.
  const result = next(action);

  //Reducer가 호출된 후에 사후 작업 추가
  console.log('[Middleware2] Reducer가 호출된 후에 사후 작업');
  return result;
};

export default Middleware2;
```
<br></br><br></br><br></br><br></br>





###### **App.js 파일 작성**
```javascript
import React from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { enableScreens } from 'react-native-screens';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux'
import rootReducer from './src/redux/modules';
import Middleware1 from './src/redux/middlewares/Middleware1';
import Middleware2 from './src/redux/middlewares/Middleware2';
import { default as HomeScreen } from "./src/screen/HomeScreen";
import { default as ReduxScreen } from "./src/screen/redux/ReduxScreen";
...생략

enableScreens();
const Stack = createStackNavigator();

function App() {
  //creactStore() 함수를 이용하여 Store를 생성합니다.
  //rootReducer를 첫번째 파라미터로 전달하며, Middleware를 두번째 파라미터로 전달합니다.
  //const store = createStore(rootReducer);
  const store = createStore(rootReducer, applyMiddleware(Middleware1, Middleware2));
  
  //Provider 컴포넌트는 컴포넌트들이 Redux의 Store에 접근 가능하도록 해주는 컴포넌트입니다.  
  //컴포넌트의 Root 위치에 Provider 컴포넌트로 감싸줍니다.  
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator  initialRouteName = "HomeScreen">
          <Stack.Screen name="HomeScreen" component={HomeScreen} />        
          <Stack.Screen name="ReduxScreen" component={ReduxScreen} />
          ...생략
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

export default App;
```
<br></br><br></br><br></br><br></br>





###### **로그 확인**
호출되는 로그 순서를 보면 위의 Redux Middleware 아키텍쳐 그림처럼 동작하는 것을 확인할 수 있습니다.  

\+ 버튼을 클릭할 때
![](/assets/react-native-redux-middleware-increase.png)

\- 버튼을 클릭할 때
![](/assets/react-native-redux-middleware-decrease.png)

name input값 바꿀 때 
![](/assets/react-native-redux-middleware-changename.png)

age input값이 바꿀 때
![](/assets/react-native-redux-middleware-changeage.png)
<br></br><br></br><br></br><br></br>





# **<참고>**
아래 사이트를 참고하여 작성하였습니다.
> https://redux.js.org/api/applymiddleware

<br></br><br></br>
