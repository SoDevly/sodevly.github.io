---
emoji: 💻
title: '[React Native] redux-pender 설명 및 예제'
created: 2022-04-27
modified: 2022-04-27
link: ''
tags:
  - React Native
---
<br></br>





# **❐ redux-pender 이란?**
`redux-pender`는 <u>Promise 기반 액션들을 관리하는 미들웨어가 포함되어있는 라이브러리</u>입니다.  
<br></br><br></br><br></br><br></br>





# **❐ Package 설치**
redux-pender package를 설치합니다.
```
yarn add redux-pender
```
<br></br><br></br><br></br><br></br>





# **❐ 예시**
### **예시 설명**
아래와 같은 로직을 redux-pender 사용하여 변경해봅시다.
- Get Promise Data 버튼 클릭 시, API 호출합니다.
- 응답을 받기 전에는 "Loading..." 문구를 표시합니다.
- 성공 응답을 받으면 API에서 받은 Data(title, body)를 표시합니다.
- 실패 응답을 받으면 "Fail..." 문구를 표시합니다.
<br></br><br></br><br></br><br></br>





### **예시 코드**
###### **promiseData.js 파일 작성**
GET_DATA 액션을 정의합니다.  
GET_DATA_ACTION 액션 생성 함수를 정의합니다.  
promiseDataReducer 리듀서를 정의합니다.  
GET_DATA 액션이 디스패치되면 getDataAPI()가 실행되고, promiseDataReducer 리듀서 안에 API를 요청했으면 onPending(), 성공 응답받으면 onSuccess(), 실패 응답을 받으면 onFailure()이 실행됩니다.
```javascript
import {createAction, handleActions} from 'redux-actions';
import {pender} from 'redux-pender';
import axios from 'axios';

function getDataAPI(postId) {
  console.log('3. getDataAPI 호출');
  return axios.get(`https://jsonplaceholder.typicode.com/posts/${postId}`);
}

//Action 타입 정의
const GET_DATA = 'promiseData/GET_DATA';

//Action 생성 함수 정의
export const GET_DATA_ACTION = createAction(GET_DATA, getDataAPI);

//State 초기값 정의
const initialState = {
  resultCode: 0,
  title: '',
  body: '',
  loading: false,
};

//Reducer 정의
const promiseDataReducer = handleActions(
        {
          ...pender({
            type: GET_DATA,
            onPending: (state, action) => {
              console.log('4. onPending() 호출');
              console.log('  [parameter] previousState : ', state);
              console.log('  [parameter] action : ', action);
              const newState = {
                ...state,
                loading: true,
              };
              console.log('  [return] newState : ', newState);
              return newState;
            },
            onSuccess: (state, action) => {
              console.log('4. onSuccess() 호출');
              console.log('  [parameter] previousState : ', state);
              console.log('  [parameter] action : ', action);
              const {title, body} = action.payload.data;
              const newState = {
                ...state,
                resultCode: 0,
                title: title,
                body: body,
                loading: false,
              };
              console.log('  [return] newState : ', newState);
              return newState;
            },
            onFailure: (state, action) => {
              console.log('4. onFailure() 호출');
              console.log('  [parameter] previousState : ', state);
              console.log('  [parameter] action : ', action);
              const newState = {
                ...state,
                resultCode: -1,
                loading: false,
              };
              console.log('  [return] newState : ', newState);
              return newState;
            },
          }),
        },
        initialState,
);
export default promiseDataReducer;
```
<br></br><br></br>





###### **rootReducer.js 파일 작성**
위에서 생성한 promiseDataReducer 리듀서를 combineReducers() 함수 안에 추가합니다.  
penderReducer은 비동기 액션의 상태를 추적해주는 리듀서입니다.  
penderReducer 리듀서도 combineReducers() 함수 안에 추가합니다.
```javascript
import {combineReducers} from 'redux';
import {penderReducer} from 'redux-pender';
import promiseDataReducer from './promiseData';

//combineReducers() 함수를 이용하여 여러개의 Reducer를 합칩니다.
//합쳐진 Reducer를 rootReducer라고 부릅니다.
const rootReducer = combineReducers({
  //other reducer...
  promiseDataReducer,
  pender: penderReducer,
});

export default rootReducer;
```
<br></br><br></br>





###### **App.js 파일 작성**
createStore() 함수의 두번째 파라미터에 penderMiddleware를 추가해줍니다.
```javascript
import React from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { enableScreens } from 'react-native-screens';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux'
import penderMiddleware from 'redux-pender';
import rootReducer from './src/redux/modules';
import { default as HomeScreen } from "./src/screen/HomeScreen";
import { default as ReduxPenderScreen } from "./src/screen/redux/ReduxPenderScreen";
...생략

enableScreens();
const Stack = createStackNavigator();

function App() {
  //creactStore() 함수를 이용하여 Store를 생성합니다.
  //rootReducer를 첫번째 파라미터로 전달하며, Middleware를 두번째 파라미터로 전달합니다.
  const store = createStore(rootReducer, applyMiddleware(penderMiddleware()));
  
  //Provider 컴포넌트는 컴포넌트들이 Redux의 Store에 접근 가능하도록 해주는 컴포넌트입니다.  
  //컴포넌트의 Root 위치에 Provider 컴포넌트로 감싸줍니다.  
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator  initialRouteName = "HomeScreen">
          <Stack.Screen name="HomeScreen" component={HomeScreen} />        
          <Stack.Screen name="ReduxPenderScreen" component={ReduxPenderScreen} />
          ...생략
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

export default App;
```
<br></br><br></br>





###### **ReduxPenderScreen.js 파일 작성**
Get Promise Data 버튼 클릭하면 GET_DATA_ACTION 액션이 디스패치됩니다.
```javascript
import React from 'react';
import {View, Text, Button, TextInput, StyleSheet} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {GET_DATA_ACTION} from '../../redux/modules/promiseData';

const ReduxPenderScreen = () => {
  //useSelector는 Store의 State를 조회하는 Hook입니다.
  const {title, body, loading, resultCode} = useSelector(state => ({
    title: state.promiseDataReducer.title,
    body: state.promiseDataReducer.body,
    loading: state.promiseDataReducer.loading,
    resultCode: state.promiseDataReducer.resultCode,
  }));

  //useDispatch는 Store의 함수를 사용 할 수 있게 해주는 Hook 입니다.
  //dispatch(action) 함수는 State를 변화시키기 위해 Action을 발생시킵니다.
  const dispatch = useDispatch();
  
  //Get Promise Data 버튼 클릭 시, GET_DATA_ACTION 액션을 디스패치합니다.
  const onGetPromiseData = () => {
    console.log('2. dispatch(GET_DATA_ACTION(1)) 함수 호출');
    dispatch(GET_DATA_ACTION(1));
  };

  console.log('5. UI 업데이트');
  return (
    <View style={styles.screen}>
      <Button onPress={onGetPromiseData} title="Get Promise Data" />
      {loading ? (
        <Text style={styles.text}>Loading...</Text>
      ) : resultCode == -1 ? (
        <Text style={styles.text}>Fail...</Text>
      ) : (
        <>
          <Text style={styles.text}>title : {title}</Text>
          <Text style={styles.text}>body : {body}</Text>
        </>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  textInput: {
    fontSize: 20,
    borderWidth: 1,
    borderColor: '#000000',
    margin: 10,
  },
  text: {
    fontSize: 20,
  },
});

export default ReduxPenderScreen;
```
<br></br><br></br>





###### **로그 확인**
API 응답 기다리는 중일 때
![](/assets/react-native-redux-pender-pending.png)

성공 응답받은 경우
![](/assets/react-native-redux-pender-success.png)

실패 응답받은 경우
![](/assets/react-native-redux-pender-fail.png)

<br></br><br></br>
