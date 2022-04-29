---
emoji: 💻
title: '[React Native] Flipper를 이용하여 Redux 디버깅 하기'
created: 2022-05-01
modified: 2022-05-01
link: ''
tags:
  - React Native
---
<br></br>



# **❐ Flipper Tool 설치**
Flipper를 설치합니다.
```
brew install --cask flipper
```

Flipper가 설치되었습니다.
![](/assets/react-native-redux-debugger-plugin-for-flipper1.png)
<br></br><br></br><br></br><br></br>





# **❐ 앱에 라이브러리 연동**
### **Package 설치**
redux-flipper, react-native-flipper package를 설치합니다.
```
yarn add redux-flipper react-native-flipper
# for iOS
cd ios && pod install
```
<br></br>

### **소스 수정**
###### **App.js 파일 작성**
flipperReduxDebugger를 미들웨어에 추가해줍니다.
```javascript
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux'
import rootReducer, {rootSaga} from './src/redux/modules/rootReducer';
import penderMiddleware from 'redux-pender';
import createSagaMiddleware from 'redux-saga';
import {createLogger} from 'redux-logger';
import { composeWithDevTools } from 'redux-devtools-extension';
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

    //redux flipper debugger를 생성합니다.
    const flipperReduxDebugger = require('redux-flipper').default;
    
    //creactStore() 함수를 이용하여 Store를 생성합니다.
    //rootReducer를 첫번째 파라미터로 전달하며, Middleware를 두번째 파라미터로 전달합니다.
    const store = createStore(
        rootReducer,
        composeWithDevTools(
            applyMiddleware(
                penderMiddleware(),
                sagaMiddleware,
                flipperReduxDebugger(),
                logger,
            ),
        ),
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
<br></br><br></br><br></br><br></br>





# **❐ Flipper를 이용하여 Redux 디버깅하는 방법**
1) App과 Flipper을 실행합니다.

2) Flipper의 Redux Debugger 메뉴를 선택합니다.
![](/assets/react-native-redux-debugger-plugin-for-flipper2.png)

3) 액션을 디스패치합니다.  
디스패치한 액션명, Store안에 변경된 상태 값 등을 확인할 수 있습니다.
![](/assets/react-native-redux-debugger-plugin-for-flipper3.png)

<br></br><br></br>
