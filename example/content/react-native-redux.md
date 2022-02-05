---
emoji: 💻
title: '[React Native] Redux'
created: 2021-06-25
modified: 2021-06-25
link: ''
tags:
  - React Native
---
<br></br>





# **❐ Reduc란?**
**Reduct**는 리액트 생태계에서 가장 사용률이 높은 상태관리 라이브러리입니다.  

보통 상위 컴포넌트에서 하위 컴포넌트로 데이터를 전달할 때 props를 통해 인자로 넘깁니다.  
하지만 개발하다보면 하위 컴포넌트의 하위 하위 하위컴포넌트로 데이터를 전달해야 할 수도 있고  
오히려 반대로 하위 컴포넌트에서 상위 컴포넌트로 데이터를 공유해야 할 수도 있습니다.  
이런 경우 props를 통해 데이터를 전달하기 어렵기 때문에 redux 통해 데이터를 전달합니다.  
redux는 앱의 상태(state) 전부가 하나의 스토어(store) 안에 있는 객체 트리에 저장됩니다.  
![](/assets/react-native-redux.jpeg)  
<br></br><br></br><br></br><br></br>





# **❐ Redux 아키텍처**
![](/assets/redux-architecture.png)

###### **액션 (Action)**
상태 변경을 설명할 수 있는 정의 값입니다.

###### **액션 생성함수 (Action Creator)**
액션 생성함수는 액션을 만드는 함수입니다.

###### **상태 (State)**
리덕스 스토어에서 관리하는 상태(데이터) 입니다.

###### **리듀서 (Reducer)**
리듀서는 변화를 일으키는 함수입니다.  
현재의 상태(state)와 전달 받은 액션(action)을 참고하여 불변성을 가진 새로운 state를 반환해주는 순수함수입니다.

###### **스토어 (Store)**
리덕스에서는 한 애플리케이션당 하나의 스토어를 만들게 됩니다.  
스토어 안에는 현재의 상태와 리듀서가 들어가있고 추가적으로 몇가지 내장 함수들이 있습니다.

###### **디스패치 (dispatch)**
dispatch는 스토어의 내장함수 중 하나입니다.  
dispatch는 액션을 발생 시키는 함수입니다.  
dispatch 함수에 액션을 파라미터로 전달하여 호출하면 스토어는 리듀서 함수를 실행시켜서 해당 액션을 처리하는 로직이 있다면 액션을 참고하여 새로운 상태를 만들어줍니다.  
<br></br><br></br><br></br><br></br>





# **❐ Package 설치**
redux, react-redux package를 설치합니다.
```
yarn add redux react-redux
```
<br></br><br></br><br></br><br></br>





# **❐ 예시**
### **예시 설명**
아래와 같이 동작하는 로직을 redux를 활용하여 구현해봅시다.
- \+ 버튼을 클릭하면 number state값이 +1 증가  
  \- 버튼을 클릭하면 number state값이 -1 감소
- name input값이 바뀌면 name state값이 바뀜  
  age input값이 바뀌면 age state값이 바뀜

![](/assets/react-native-redux.gif)
<br></br><br></br><br></br><br></br>





### **파일 구조**
App.js  
src  
ㅤㅤ├ redux  
ㅤㅤㅤㅤ├ modules  
ㅤㅤㅤㅤㅤㅤ├ index.js     //여러개의 리듀서를 하나의 루트리듀서로 합침  
ㅤㅤㅤㅤㅤㅤ├ counter.js   //액션 정의, 액션생성함수 정의, 스토어에서 관리할 상태 정의, 리듀서 정의  
ㅤㅤㅤㅤㅤㅤ├ userInfo.js  //액션 정의, 액션생성함수 정의, 스토어에서 관리할 상태 정의, 리듀서 정의  
ㅤㅤ├ screen  
ㅤㅤㅤㅤ├ rudux  
ㅤㅤㅤㅤㅤㅤ├ ReduxScreen.js //스토어에서 관리하는 상태를 디스플레이하고, 상태를 변경시키는 액션을 디스패치하는 화면  
<br></br><br></br><br></br><br></br>





### **예시 코드**
###### **count.js 파일 작성**
```javascript
//액션 타입 선언
const INCREASE = 'counter/INCREASE';
const DECREASE = 'counter/DECREASE';

//액션 생성함수 선언
export const increase = () => ({ type: INCREASE });
export const decrease = () => ({ type: DECREASE });

//초기값 선언
const initialState = {
    number: 0
};

//리듀서 선언
export default function counter(state = initialState, action) {
  switch (action.type) {
    case INCREASE:
      console.log("counter 리듀서의 INCREASE 액션 호출");
      return {
        ...state,
        number: state.number + 1
      };
    case DECREASE:
      console.log("counter 리듀서의 DECREASE 액션 호출");
      return {
        ...state,
        number: state.number - 1
      };
    default:
      return state;
  }
}
```
<br></br><br></br><br></br><br></br>





###### **userInfo.js 파일 작성**
```javascript
//액션 타입 선언
const CHANGE_NAME = 'userInfo/CHANGE_NAME';
const CHANGE_AGE = 'userInfo/CHANGE_AGE';

//액션 생성함수 선언
export const changeName = (newName) => ({ 
    type: CHANGE_NAME,
    newName
});
export const changeAge = (newAge) => ({ 
    type: CHANGE_AGE,
    newAge
});

//초기값 선언
const initialState = {
    name: '임소희',
    age: 30
};

//리듀서 선언
export default function changeUserInfo(state = initialState, action) {
  switch (action.type) {
    case CHANGE_NAME:
      console.log("userInfo 리듀서의 CHANGE_NAME 액션 호출");
      return {
        ...state,
        name: action.newName
      };
    case CHANGE_AGE:
      console.log("userInfo 리듀서의 CHANGE_AGE 액션 호출");
      return {
        ...state,
        age: action.newAge
      };
    default:
      return state;
  }
}
```
<br></br><br></br><br></br><br></br>





###### **index.js 파일 작성**
```javascript
import { combineReducers } from "redux";
import counter from "./counter";
import userInfo from "./userInfo";

//combineReducers() 함수를 이용하여 여러개의 리듀서를 합칩니다.
//합쳐진 리듀서를 루트리듀서라고 부릅니다.
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
  //루트리듀서를 파라미터로 전달합니다.
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
import { increase, decrease } from '../../redux/modules/counter';
import { changeName, changeAge } from '../../redux/modules/userInfo';

const ReduxScreen = () => {
  //useSelector는 리덕스 스토어의 상태를 조회하는 Hook입니다.
  const { number, name, age } = useSelector(state => ({
    number: state.counter.number,
    name: state.userInfo.name,
    age: state.userInfo.age    
  }));

  //useDispatch는 리덕스 스토어의 함수를 사용 할 수 있게 해주는 Hook 입니다.
  //dispatch()는 상태를 변화시키기 위해 액션을 발생시킵니다.
  const dispatch = useDispatch();
  const onIncrease = () => {
    dispatch(increase());
  }
  const onDecrease = () => {
    dispatch(decrease());
  }
  const onChangeName = newName => {
    dispatch(changeName(newName));
  };
  const onChangeAge = newAge => {
    dispatch(changeAge(newAge));
  };

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





# **<참고>**
아래 사이트를 참고하여 작성하였습니다.
> https://xn--xy1bk56a.run/react-master/lecture/rd-redux.html  
> https://react.vlpt.us/basic/16-useEffect.html

<br></br><br></br>