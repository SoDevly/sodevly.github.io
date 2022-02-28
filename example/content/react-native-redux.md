---
emoji: 💻
title: '[React Native] Redux 설명 및 예제'
created: 2021-06-25
modified: 2021-06-25
link: ''
tags:
  - React Native
---
<br></br>





# **❐ Reduc란?**
`Redux`는 리액트 생태계에서 가장 사용률이 높은 <u>상태관리 라이브러리입니다.</u>  

보통 상위 컴포넌트에서 하위 컴포넌트로 데이터를 전달할 때 props를 통해 인자로 넘깁니다.  
하지만 개발하다보면 하위 컴포넌트의 하위 하위 하위컴포넌트로 데이터를 전달해야 할 수도 있고  
오히려 반대로 하위 컴포넌트에서 상위 컴포넌트로 데이터를 공유해야 할 수도 있습니다.  
이런 경우 props를 통해 데이터를 전달하기 어렵기 때문에 Redux 통해 데이터를 전달합니다.  
Redux는 앱의 상태(State) 전부가 하나의 스토어(Store) 안에 있는 객체 트리에 저장됩니다.  
![](/assets/react-native-redux.jpeg)  
<br></br><br></br><br></br><br></br>





# **❐ Redux 아키텍처**
![](/assets/react-native-redux-architecture.png)

###### **액션 (Action)**
State 변경을 설명할 수 있는 정의 값입니다.

###### **액션 생성함수 (Action Creator)**
Action Creator는 Action을 만드는 함수입니다.

###### **상태 (State)**
Store에서 관리하는 State(데이터) 입니다.

###### **리듀서 (Reducer)**
Reducer는 변화를 일으키는 함수입니다.  
현재의 State와 전달 받은 Action을 참고하여 불변성을 가진 새로운 State를 반환해주는 순수함수입니다.

###### **스토어 (Store)**
Redux에서는 한 애플리케이션당 하나의 Store를 만들게 됩니다.  
Store 안에는 현재의 State와 Reducer가 들어가있고 추가적으로 몇가지 내장 함수들이 있습니다.

###### **디스패치 (dispatch)**
dispatch는 Store의 내장 함수 중 하나입니다.  
dispatch는 Action을 발생시키는 함수입니다.  
dispatch 함수에 Action을 parameter로 전달하여 호출하면 Store는 Reducer 함수를 실행시켜서 해당 Action을 처리하는 로직을 걸쳐 새로운 State를 만들어줍니다.  
<br></br><br></br><br></br><br></br>





# **❐ Package 설치**
redux, react-redux package를 설치합니다.
```
yarn add redux react-redux
```
<br></br><br></br><br></br><br></br>





# **❐ 예시**
### **예시 설명**
아래와 같이 동작하는 로직을 Redux를 사용하여 구현해보고, Redux의 아키텍쳐를 이해해봅시다.
- \+ 버튼을 클릭하면 number state값이 +1 증가  
  \- 버튼을 클릭하면 number state값이 -1 감소
- name input값이 바뀌면 name state값이 바뀜  
  age input값이 바뀌면 age state값이 바뀜
<br></br><br></br><br></br><br></br>





### **파일 구조**
App.js  
src  
ㅤㅤ├ redux  
ㅤㅤㅤㅤ├ modules  
ㅤㅤㅤㅤㅤㅤ├ rootReducer.js   //여러개의 Reducer를 하나의 rootReducer로 합침  
ㅤㅤㅤㅤㅤㅤ├ counter.js       //Action 정의, Action Creator 정의, State 정의, Reducer 정의  
ㅤㅤㅤㅤㅤㅤ├ userInfo.js      //Action 정의, Action Creator 정의, State 정의, Reducer 정의  
ㅤㅤ├ screen  
ㅤㅤㅤㅤ├ rudux  
ㅤㅤㅤㅤㅤㅤ├ ReduxScreen.js   //Store에서 관리하는 State를 디스플레이하고, dispatch(action)을 호출하여 State를 변경시키는 화면  
<br></br><br></br><br></br><br></br>





### **예시 코드**
###### **count.js 파일 작성**
```javascript
//Action 타입 정의
const INCREASE = 'counter/INCREASE';
const DECREASE = 'counter/DECREASE';

//Action 생성 함수 정의
export const createIncreaseAction = () => {
  console.log("1. increase Action 생성 함수 호출");
  const action = { type: INCREASE };
  console.log("  [return] action : ", action.type);
  return action;
};
export const createDecreaseAction = () => {
  console.log("1. decrease Action 생성 함수 호출");
  const action = { type: DECREASE };
  console.log("  [return] action : ", action.type);
  return action;
};

//State 초기값 정의
const initialState = {
    number: 0
};

//Reducer 정의
export default function counterReducer(state = initialState, action) {
  console.log("3. counter Reducer 호출");
  console.log("  [parameter] previoudState : ", state);
  console.log("  [parameter] action : ", action.type);

  let newState;
  switch (action.type) {
    case INCREASE:
      newState = {
        ...state,
        number: state.number + 1
      };
      break;
    case DECREASE:
      newState = {
        ...state,
        number: state.number - 1
      };
      break;
    default:
      newState = state;
      break;
  }

  console.log("  [return] newState : ", newState);
  return newState;
}
```
<br></br><br></br><br></br><br></br>





###### **userInfo.js 파일 작성**
```javascript
//Action 타입 정의
const CHANGE_NAME = 'userInfo/CHANGE_NAME';
const CHANGE_AGE = 'userInfo/CHANGE_AGE';

//Action 생성 함수 정의
export const createChangeNameAction = (newName) => {
  console.log("1. changeName Action 생성 함수 호출");
  const action = { 
    type: CHANGE_NAME,
    newName
  };
  console.log("  [return] action : ", action.type);
  return action;
}
export const crateChangeAgeAction = (newAge) => {
  console.log("1. changeAge Action 생성 함수 호출");
  const action = { 
    type: CHANGE_AGE,
    newAge
  };
  console.log("  [return] action : ", action.type);
  return action;
}

//State 초기값 정의
const initialState = {
    name: '임소희',
    age: 30
};

//Reducer 정의
export default function userInfoReducer(state = initialState, action) {
  console.log("3. userInfo Reducer 호출");
  console.log("  [parameter] previoudState : ", state);
  console.log("  [parameter] action : ", action.type);

  let newState;
  switch (action.type) {
    case CHANGE_NAME:
      newState = {
        ...state,
        name: action.newName
      };
      break;
    case CHANGE_AGE:
      newState = {
        ...state,
        age: action.newAge
      };
      break;
    default:
      newState = state;
      break;
  }
  
  console.log("  [return] newState : ", newState);
  return newState;
}
```
<br></br><br></br><br></br><br></br>





###### **rootReducer.js 파일 작성**
```javascript
import { combineReducers } from "redux";
import counter from "./counter";
import userInfo from "./userInfo";

//combineReducers() 함수를 이용하여 여러개의 Reducer를 합칩니다.
//합쳐진 Reducer를 rootReducer라고 부릅니다.
const rootReducer = combineReducers({
  counter,
  userInfo
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
import { createStore } from 'redux';
import { Provider } from 'react-redux'
import rootReducer from './src/redux/modules';
import { default as HomeScreen } from "./src/screen/HomeScreen";
import { default as ReduxScreen } from "./src/screen/redux/ReduxScreen";
...생략

enableScreens();
const Stack = createStackNavigator();

function App() {
  //creactStore() 함수를 이용하여 Store를 생성합니다.
  //rootReducer를 파라미터로 전달합니다.
  const store = createStore(rootReducer);
  
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
import React from "react";
import { View, Text, Button, TextInput, StyleSheet } from 'react-native';
import { useDispatch, useSelector } from 'react-redux'
import { createIncreaseAction, createDecreaseAction } from '../../redux/modules/counter';
import { createChangeNameAction, crateChangeAgeAction } from '../../redux/modules/userInfo';

const ReduxScreen = () => {
  //useSelector는 Store의 State를 조회하는 Hook입니다.
  const { number, name, age } = useSelector(state => ({
    number: state.counter.number,
    name: state.userInfo.name,
    age: state.userInfo.age    
  }));

  //useDispatch는 Store의 함수를 사용 할 수 있게 해주는 Hook 입니다.
  //dispatch(action) 함수는 State를 변화시키기 위해 Action을 발생시킵니다.
  const dispatch = useDispatch();
  const onIncrease = () => {
    const increaseAction = createIncreaseAction();
    console.log("2. dispatch(increaseAction) 함수 호출");
    dispatch(increaseAction);
  }
  const onDecrease = () => {
    const decreaseAction = createDecreaseAction();
    console.log("2. dispatch(decreaseAction) 함수 호출");
    dispatch(decreaseAction);
  }
  const onChangeName = newName => {
    const changeNameAction = createChangeNameAction(newName);
    console.log("2. dispatch(changeNameAction) 함수 호출");
    dispatch(changeNameAction);
  };
  const onChangeAge = newAge => {
    const changeAgeAction = crateChangeAgeAction(newAge);
    console.log("2. dispatch(changeAgeAction) 함수 호출");
    dispatch(changeAgeAction);
  };

  console.log("4. UI 업데이트");
  return (
    <View style={styles.screen}>
      <Text style={styles.text}>숫자 : {number}</Text>
      <Button onPress={onIncrease} title="+"/>
      <Button onPress={onDecrease} title="-"/>

      <Text style={styles.text}>이름 : {name}</Text>
      <TextInput  style={styles.textInput} onChangeText={onChangeName} />
      <Text style={styles.text}>나이 : {age}</Text>
      <TextInput  style={styles.textInput} onChangeText={onChangeAge} />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: '#ffffff'
  },
  textInput: {
    fontSize: 20,
    borderWidth: 1,
    borderColor: '#000000',
    margin: 10
  },
  text: {
    fontSize: 20
  }
});

export default ReduxScreen
```
<br></br><br></br><br></br><br></br>





###### **로그 확인**
호출되는 로그 순서를 보면 위의 Redux 아키텍쳐 그림처럼 동작하는 것을 확인할 수 있습니다.  

\+ 버튼을 클릭할 때
![](/assets/react-native-redux-increase.png)

\- 버튼을 클릭할 때
![](/assets/react-native-redux-decrease.png)

name input값 바꿀 때 
![](/assets/react-native-redux-changename.png)

age input값이 바꿀 때
![](/assets/react-native-redux-changeage.png)
<br></br><br></br><br></br><br></br>





# **<참고>**
아래 사이트를 참고하여 작성하였습니다.
> https://xn--xy1bk56a.run/react-master/lecture/rd-redux.html  
> https://react.vlpt.us/basic/16-useEffect.html

<br></br><br></br>