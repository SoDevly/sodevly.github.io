---
emoji: 💻
title: '[React Native] redux-action 설명 및 예제'
created: 2022-04-26
modified: 2022-04-26
link: ''
tags:
  - React Native
---
<br></br>





# **❐ redux-action 이란?**
`redux-action`는 redux를 좀 더 편하게 사용할 수 있는 라이브러리 중 하나로 <u>액션 생성 함수를 짧고 가독성 좋게 만들어주는 라이브러리</u>입니다.  
<br></br><br></br><br></br><br></br>





# **❐ redux-action 적용 전/후 비교**
### 액션 생성 함수
redux-action의 createAction 함수를 이용하면 직접 Action 객체를 만들 필요 없어 훨씬 간단하게 액션 생성 함수를 만들 수 있습니다.

###### 적용 전
```javascript
const CHANGE_NAME = 'userInfo/CHANGE_NAME';

export const createChangeNameAction = newName => {
  const action = {
    type: CHANGE_NAME,
    newName,
  };
  return action;
};
```
###### 적용 후
```javascript
import { createAction } from 'redux-actions';
const CHANGE_NAME = 'userInfo/CHANGE_NAME';

export const CHANGE_NAME_ACTION = createAction(CHANGE_NAME, newName => newName);
```
<br></br>

### 리듀서
redux-action의 handleActions 함수를 이용하여 리듀서를 더 간단하게 만들 수 있습니다.  
handleActions을 사용하면 추가 데이터의 파라미터명은 항상 action.payload가 됩니다.

###### 적용 전
```javascript
export default function userInfoReducer(state = initialState, action) {
  let newState;
  switch (action.type) {
    case CHANGE_NAME:
      newState = {
        ...state,
        name: action.newName,
      };
      break;
    default:
      newState = state;
      break;
  }
  
  return newState;
}
```
###### 적용 후
```javascript
const userInfoReducer = handleActions(
  {
    [CHANGE_NAME]: (state, action) => {
      let newState = {...state, name: action.payload};
      return newState;
    },
  },
  initialState,
);
export default userInfoReducer;
```
<br></br><br></br><br></br><br></br>





# **❐ Package 설치**
redux-action package를 설치합니다.
```
yarn add redux redux-action
```
<br></br><br></br><br></br><br></br>





# **❐ 예시**
### **예시 설명**
앞에 [Redux Middleware 게시글](https://sodevly.github.io/react-native-redux-middleware/)에서 구현한 로직을 redux-action을 사용하도록 변경해봅시다.
- \+ 버튼을 클릭하면 number state값이 +1 증가  
  \- 버튼을 클릭하면 number state값이 -1 감소
- name input값이 바뀌면 name state값이 바뀜  
  age input값이 바뀌면 age state값이 바뀜
- Middleware1, Middleware2 있음
<br></br><br></br><br></br><br></br>





### **예시 코드**
###### **count.js 파일 작성**
```javascript
import {createAction, handleActions} from 'redux-actions';

//Action 타입 정의
const INCREASE = 'counter/INCREASE';
const DECREASE = 'counter/DECREASE';

//Action 생성 함수 정의
export const INCREASE_ACTION = createAction(INCREASE);
export const DECREASE_ACTION = createAction(DECREASE);

//State 초기값 정의
const initialState = {
  number: 0,
};

//Reducer 정의
const counterReducer = handleActions(
        {
          [INCREASE]: (state, action) => {
            console.log('3. counter Reducer 호출');
            console.log('  [parameter] previousState : ', state);
            console.log('  [parameter] action : ', action);
            let newState;
            newState = {...state, number: state.number + 1};
            console.log('  [return] newState : ', newState);
            return newState;
          },
          [DECREASE]: (state, action) => {
            console.log('3. counter Reducer 호출');
            console.log('  [parameter] previousState : ', state);
            console.log('  [parameter] action : ', action);
            let newState;
            newState = {...state, number: state.number - 1};
            console.log('  [return] newState : ', newState);
            return newState;
          },
        },
        initialState,
);
export default counterReducer;
```
<br></br><br></br><br></br><br></br>





###### **userInfo.js 파일 작성**
```javascript
import {createAction, handleActions} from 'redux-actions';

//Action 타입 정의
const CHANGE_NAME = 'userInfo/CHANGE_NAME';
const CHANGE_AGE = 'userInfo/CHANGE_AGE';

//Action 생성 함수 정의
export const CHANGE_NAME_ACTION = createAction(CHANGE_NAME, newName => newName);
export const CHANGE_AGE_ACTION = createAction(CHANGE_AGE, newAge => newAge);

//State 초기값 정의
const initialState = {
  name: '임소희',
  age: 30,
};

//Reducer 정의
const userInfoReducer = handleActions(
        {
          [CHANGE_NAME]: (state, action) => {
            console.log('3. userInfo Reducer 호출');
            console.log('  [parameter] previousState : ', state);
            console.log('  [parameter] action : ', action);
            let newState;
            newState = {...state, name: action.payload};
            console.log('  [return] newState : ', newState);
            return newState;
          },
          [CHANGE_AGE]: (state, action) => {
            console.log('3. userInfo Reducer 호출');
            console.log('  [parameter] previousState : ', state);
            console.log('  [parameter] action : ', action);
            let newState;
            newState = {...state, age: action.payload};
            console.log('  [return] newState : ', newState);
            return newState;
          },
        },
        initialState,
);
export default userInfoReducer;
```
<br></br><br></br><br></br><br></br>





###### **rootReducer.js 파일 작성**
```javascript
import {combineReducers} from 'redux';
import counterReducer from './counter';
import userInfoReducer from './userInfo';

//combineReducers() 함수를 이용하여 여러개의 Reducer를 합칩니다.
//합쳐진 Reducer를 rootReducer라고 부릅니다.
const rootReducer = combineReducers({
  counterReducer,
  userInfoReducer,
});

export default rootReducer;
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





###### **ReduxScreen.js 파일 작성**
```javascript
import React from 'react';
import {View, Text, Button, TextInput, StyleSheet} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {INCREASE_ACTION, DECREASE_ACTION} from '../../redux/modules/counter';
import {
  CHANGE_NAME_ACTION,
  CHANGE_AGE_ACTION,
} from '../../redux/modules/userInfo';

const ReduxScreen = () => {
  //useSelector는 Store의 State를 조회하는 Hook입니다.
  const {number, name, age} = useSelector(state => ({
    number: state.counterReducer.number,
    name: state.userInfoReducer.name,
    age: state.userInfoReducer.age,
  }));

  //useDispatch는 Store의 함수를 사용 할 수 있게 해주는 Hook 입니다.
  //dispatch(action) 함수는 State를 변화시키기 위해 Action을 발생시킵니다.
  const dispatch = useDispatch();
  const onIncrease = () => {
    console.log('2. dispatch(INCREASE_ACTION()) 함수 호출');
    dispatch(INCREASE_ACTION());
  };
  const onDecrease = () => {
    console.log('2. dispatch(DECREASE_ACTION()) 함수 호출');
    dispatch(DECREASE_ACTION());
  };
  const onChangeName = newName => {
    console.log('2. dispatch(CHANGE_NAME_ACTION(newName)) 함수 호출');
    dispatch(CHANGE_NAME_ACTION(newName));
  };
  const onChangeAge = newAge => {
    console.log('2. dispatch(CHANGE_AGE_ACTION(newAge)) 함수 호출');
    dispatch(CHANGE_AGE_ACTION(newAge));
  };

  console.log('4. UI 업데이트');
  return (
    <View style={styles.screen}>
      <Text style={styles.text}>숫자 : {number}</Text>
      <Button onPress={onIncrease} title="+" />
      <Button onPress={onDecrease} title="-" />

      <Text style={styles.text}>이름 : {name}</Text>
      <TextInput style={styles.textInput} onChangeText={onChangeName} />
      <Text style={styles.text}>나이 : {age}</Text>
      <TextInput style={styles.textInput} onChangeText={onChangeAge} />
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

export default ReduxScreen;
```
<br></br><br></br><br></br><br></br>





###### **로그 확인**
\+ 버튼을 클릭할 때
![](/assets/react-native-redux-action-increase.png)

\- 버튼을 클릭할 때
![](/assets/react-native-redux-action-decrease.png)

name input값 바꿀 때 
![](/assets/react-native-redux-action-changename.png)

age input값이 바꿀 때
![](/assets/react-native-redux-action-changeage.png)
<br></br><br></br>
