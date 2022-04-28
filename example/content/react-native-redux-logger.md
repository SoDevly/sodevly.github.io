---
emoji: 💻
title: '[React Native] redux-logger 설명 및 예제'
created: 2022-04-30
modified: 2022-04-30
link: ''
tags:
  - React Native
---
<br></br>





# **❐ redux-saga 이란?**
`redux-logger`는 <u>redux관련 log를 자동으로 출력해주는 라이브러리</u>입니다.
<br></br><br></br><br></br><br></br>





# **❐ Package 설치**
redux-logger package를 설치합니다.
```
yarn add redux-logger
```
<br></br><br></br><br></br><br></br>





# **❐ 예시**
### **예시 설명**
앞에 [redux-saga 게시글](https://sodevly.github.io/react-native-redux-saga/)에서 구현한 로직에 redux-logger를 적용하여 봅시다.  
redux-logger 적용 전/후 차이도 확인해 봅시다.
<br></br><br></br><br></br><br></br>





### **예시 코드**
###### **App.js 파일 작성**
logger를 생성합니다.  
그리고 createStore() 함수의 두번째 파라미터에 logger를 추가해줍니다.  
미들웨어가 여러개인 경우, logger를 제일 마지막에 추가해줘야합니다.
```javascript
import React from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { enableScreens } from 'react-native-screens';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux'
import rootReducer, {rootSaga} from './src/redux/modules/rootReducer';
import penderMiddleware from 'redux-pender';
import createSagaMiddleware from 'redux-saga';
import {createLogger} from 'redux-logger';
import { default as HomeScreen } from "./src/screen/HomeScreen";
import { default as ReduxSagaScreen } from "./src/screen/redux/ReduxSagaScreen";
...생략

enableScreens();
const Stack = createStackNavigator();

function App() {
    //SagaMiddleware를 생성합니다.
    const sagaMiddleware = createSagaMiddleware();

    //logger를 생성합니다.
    const logger = createLogger();
  
    //creactStore() 함수를 이용하여 Store를 생성합니다.
    //rootReducer를 첫번째 파라미터로 전달하며, Middleware를 두번째 파라미터로 전달합니다.
    const store = createStore(
        rootReducer,
        applyMiddleware(penderMiddleware(), sagaMiddleware, logger),
    );

    //rootSaga를 실행해줍니다.
    sagaMiddleware.run(rootSaga);

    //Provider 컴포넌트는 컴포넌트들이 Redux의 Store에 접근 가능하도록 해주는 컴포넌트입니다.
    //컴포넌트의 Root 위치에 Provider 컴포넌트로 감싸줍니다.
    return (
        <Provider store={store}>
            <NavigationContainer>
                <Stack.Navigator initialRouteName="HomeScreen">      
                <Stack.Screen name="ReduxSagaScreen" component={ReduxSagaScreen} />
                ...생략
            </Stack.Navigator>
        </NavigationContainer>
    </Provider>
  );
}

export default App;
```
<br></br><br></br>





###### **로그 확인**
redux-logger 적용 전
![](/assets/react-native-redux-logger1.png)

redux-logger 적용 후
![](/assets/react-native-redux-logger2.png)

<br></br><br></br>
