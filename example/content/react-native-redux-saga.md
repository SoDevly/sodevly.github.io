---
emoji: 💻
title: '[React Native] redux-saga 설명 및 예제'
created: 2022-04-29
modified: 2022-04-29
link: ''
tags:
  - React Native
---
<br></br>





# **❐ redux-saga 이란?**
`redux-saga`는 <u>애플리케이션의 사이드 이팩트를 더 쉽게 관리하고, 더 효율적으로 실행하고, 더 쉽게 테스트하고, 오류를 더 잘 처리하도록 하는 것을 목표로 하는 라이브러리</u>입니다.  
Action을 구독하는 Watcher, 실제 작업을 수행하는 Worker로 구성되어있습니다.  
액션을 모니터링하고 있다가, 특정 액션이 발생하면 이에 따라 특정 작업을 하는 방식으로 사용합니다.
<br></br><br></br><br></br><br></br>





# **❐ redux-saga/effects 함수**
redux-saga/effects는 미들웨어에 의해 수행되는 명령을 담고 있는 javascript 객체입니다.  

- all()  
여러개의 사가를 묶어줍니다.

- put()  
특정 액션을 디스패치합니다.  
ex) yield put({ type: 'LOG_IN_SUCCESS', data: result.data });

- takeLatest()  
특정 액션 타입에 대하여 디스패치된 가장 마지막 액션만 처리합니다.  
예를 들어서 특정 액션을 처리하고 있는 동안 동일한 타입의 새로운 액션이 디스패치되면 기존에 하던 작업을 무시 처리하고 새로운 작업을 시작합니다.  
ex) yield takeLatest(DECREASE3_ASYNC_ACTION, decreaseSaga);

- takeEvery()  
특정 액션 타입에 대하여 디스패치된 모든 액션을 처리합니다.  
ex) yield takeEvery(INCREASE3_ASYNC_ACTION, increaseSaga);
  
- take()
특정 액션이 디스패치될 때까지 기다립니다.  
특정 액션이 디스패치된 후 다음 소스를 실행합니다.  
ex) yield take('REQUEST_ORDER');

- fork()  
다른 task로 시작합니다.  
ex) yield fork(childTask);

- join()  
다른 task의 종료를 기다립니다.

- delay()  
설정된 시간만큼 지연시킵니다.

- call()  
주어진 함수를 실행합니다.

- cancel()  
fork()된 task를 취소시킵니다.

- select()  
특정 상태(state)를 가져옵니다.  
ex) yield select(activeUserSelector);
<br></br><br></br><br></br><br></br>





# **❐ Package 설치**
redux-saga package를 설치합니다.
```
yarn add redux-saga
```
<br></br><br></br><br></br><br></br>





# **❐ 예시**
### **예시 설명**
아래와 같은 로직을 redux-saga 사용하여 변경해봅시다.
- \+ 버튼을 클릭하면 number가 +1 증가  
  \- 버튼을 클릭하면 number가 -1 감소
- \+ 버튼을 빠르게 여러번 클릭하면 클릭한 횟수만큼 number가 증가합니다. (takeEvery : 모든 액션 처리)
- \- 버튼을 빠르게 여러번 클릭하면 number가 -1만 감소합니다. (takeLatest : 가장 마지막 액션만 처리)
<br></br><br></br><br></br><br></br>





### **예시 코드**
###### **counter3.js 파일 작성**
INCREASE3_ASYNC, DECREASE3_ASYNC 액션을 정의합니다.  
INCREASE3_ASYNC_ACTION, DECREASE3_ASYNC_ACTION 액션 생성 함수를 정의합니다.  
handleActions() 함수를 이용하여 counter3Reducer 리듀서를 정의합니다.
```javascript
import {createAction, handleActions} from 'redux-actions';
import {delay, put, takeEvery, takeLatest} from 'redux-saga/effects';

//Action 타입 정의
const INCREASE3 = 'counter/INCREASE3';
const DECREASE3 = 'counter/DECREASE3';
const INCREASE3_ASYNC = 'counter/INCREASE3_ASYNC';
const DECREASE3_ASYNC = 'counter/DECREASE3_ASYNC';

//Action 생성 함수 정의
export const INCREASE3_ACTION = createAction(INCREASE3);
export const DECREASE3_ACTION = createAction(DECREASE3);
export const INCREASE3_ASYNC_ACTION = createAction(INCREASE3_ASYNC);
export const DECREASE3_ASYNC_ACTION = createAction(DECREASE3_ASYNC);

//Worker Saga 정의
//put : 특정 액션을 디스패치 합니다.
//takeEvery : 모든 액션을 처리합니다.
//takeLatest : 가장 마지막으로 디스패치된 액션을 처리합니다.
function* increaseSaga() {
    console.log('3. increaseSaga 호출');
    yield delay(1000);
    yield put(INCREASE3_ACTION());
}
function* decreaseSaga() {
    console.log('3. decreaseSaga 호출');
    yield delay(1000);
    yield put(DECREASE3_ACTION());
}
export function* counterSaga() {
    console.log('3. counterSaga 호출');
    yield takeEvery(INCREASE3_ASYNC_ACTION, increaseSaga);
    yield takeLatest(DECREASE3_ASYNC_ACTION, decreaseSaga);
}

//State 초기값 정의
const initialState = {
    number: 0,
};

//Reducer 정의
const counter3Reducer = handleActions(
    {
        [INCREASE3]: (state, action) => {
            console.log('3. counter3 Reducer 호출');
            console.log('  [parameter] previousState : ', state);
            console.log('  [parameter] action : ', action);
            let newState = {...state, number: state.number + 1};
            console.log('  [return] newState : ', newState);
            return newState;
        },
        [DECREASE3]: (state, action) => {
            console.log('3. counter3 Reducer 호출');
            console.log('  [parameter] previousState : ', state);
            console.log('  [parameter] action : ', action);
            let newState = {...state, number: state.number - 1};
            console.log('  [return] newState : ', newState);
            return newState;
        },
    },
    initialState,
);
export default counter3Reducer;
```
<br></br><br></br><br></br><br></br>





###### **rootReducer.js 파일 작성**
위에서 생성한 counter3Reducer 리듀서를 combineReducers() 함수 안에 추가합니다.  
all() 함수를 이용하여 여러개의 사가를 합쳐 rootSaga를 생성해줍니다.
```javascript
import {combineReducers} from 'redux';
import counter3Reducer, { counterSaga } from "./counter3";
import {penderReducer} from 'redux-pender';
import promiseDataReducer from './promiseData';
import { all } from 'redux-saga/effects';

//combineReducers() 함수를 이용하여 여러개의 Reducer를 합칩니다.
//합쳐진 Reducer를 rootReducer라고 부릅니다.
const rootReducer = combineReducers({
    //other reducers...
    counter3Reducer,
    promiseDataReducer,
    pender: penderReducer,
});

//all() 함수를 이용하여 여러개의 Saga를 합칩니다.
//합쳐진 Saga를 rootSaga라고 부릅니다.
export function* rootSaga() {
    yield all([counterSaga()]);
}

export default rootReducer;
```
<br></br><br></br><br></br><br></br>





###### **App.js 파일 작성**
sagaMiddleware를 생성합니다.  
그리고 createStore() 함수의 두번째 파라미터에 sagaMiddleware를 추가해줍니다.  
그 다음 sagaMiddleware를 실행해 줍니다.
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
import rootReducer from './src/redux/modules';
import { default as HomeScreen } from "./src/screen/HomeScreen";
import { default as ReduxPenderScreen } from "./src/screen/redux/ReduxPenderScreen";
...생략

enableScreens();
const Stack = createStackNavigator();

function App() {
    //SagaMiddleware를 생성합니다.
    const sagaMiddleware = createSagaMiddleware();

    //creactStore() 함수를 이용하여 Store를 생성합니다.
    //rootReducer를 첫번째 파라미터로 전달하며, Middleware를 두번째 파라미터로 전달합니다.
    const store = createStore(
        rootReducer,
        applyMiddleware(penderMiddleware(), sagaMiddleware),
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





###### **ReduxSagaScreen.js 파일 작성**
\+ 버튼을 클릭하면 INCREASE3_ASYNC_ACTION 액션을 디스패치합니다.  
\- 버튼을 클릭하면 DECREASE3_ASYNC_ACTION 액션을 디스패치합니다.
```javascript
import React from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {
  INCREASE3_ASYNC_ACTION,
  DECREASE3_ASYNC_ACTION,
} from '../../redux/modules/counter3';

const ReduxSagaScreen = () => {
  //useSelector는 Store의 State를 조회하는 Hook입니다.
  const {number} = useSelector(state => ({
    number: state.counter3Reducer.number,
  }));

  //useDispatch는 Store의 함수를 사용 할 수 있게 해주는 Hook 입니다.
  //dispatch(action) 함수는 State를 변화시키기 위해 Action을 발생시킵니다.
  const dispatch = useDispatch();
  const onIncrease = () => {
    console.log('2. dispatch(INCREASE3_ASYNC_ACTION()) 함수 호출');
    dispatch(INCREASE3_ASYNC_ACTION());
  };
  const onDecrease = () => {
    console.log('2. dispatch(DECREASE3_ASYNC_ACTION()) 함수 호출');
    dispatch(DECREASE3_ASYNC_ACTION());
  };

  console.log('4. UI 업데이트');
  return (
    <View style={styles.screen}>
      <Text style={styles.text}>숫자 : {number}</Text>
      <Button onPress={onIncrease} title="+" />
      <Button onPress={onDecrease} title="-" />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  text: {
    fontSize: 20,
  },
});

export default ReduxSagaScreen;
```
<br></br><br></br><br></br><br></br>





###### **로그 확인**
\+ 버튼을 연속 2번 클릭할 때, number가 0->2로 +2 증가 (takeEvery : 모든 액션 처리)
![](/assets/react-native-redux-saga-takeEvery.png)

\- 버튼을 연속 2번 클릭할 때, number가 2->1로 -1 감소 (takeLatest : 가장 마지막 액션만 처리)
![](/assets/react-native-redux-saga-takeLatest.png)

<br></br><br></br>
