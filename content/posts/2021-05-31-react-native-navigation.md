---
template: post
title: React Native - 여러개의 화면 구성 및 화면 전환
slug: /posts/react-native/navigation
draft: false
priority: 0
date: 2021-05-31T00:46:37.121Z
description: >-
category: Programming
tags:
  - React Native
---

<br>

아래와 같은 화면 구조를 만들어 봅시다.
- 화면이 3개(HomeScreen/FirstScreen/SecondScreen)로 구성  
- HomeScreen에서 [Go FirstScreen] 버튼 클릭하면 FirstScreen 화면으로 전환  
- HomeScreen에서 [Go SecondScreen] 버튼 클릭하면 SecondScreen 화면으로 전환  
![](/media/react-native-navigation.png)
<br><br><br><br>





# **❐ 관련 라이브러리 설치**
아래 명령어를 실행하여 관련 라이브러리를 설치합니다.
```
yarn add @react-navigation/native @react-navigation/stack
yarn add react-native-reanimated react-native-gesture-handler react-native-screens react-native-safe-area-context @react-native-community/masked-view
cd ios
pod install
cd ..
```
<br><br><br><br>





# **❐ 코드 예제**
App.js 파일의 코드를 아래와 같이 수정합니다.
```javascript
import React from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { enableScreens } from 'react-native-screens';
import { default as HomeScreen } from "./src/screen/HomeScreen";
import { default as FirstScreen } from "./src/screen/FirstScreen";
import { default as SecondScreen } from "./src/screen/SecondScreen";

enableScreens();
const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator  initialRouteName = "HomeScreen">
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
        <Stack.Screen name="FirstScreen" component={FirstScreen} />
        <Stack.Screen name="SecondScreen" component={SecondScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
```
**createStackNavigator()** 는 Screen과 Navigator의 두 가지 속성을 포함하는 객체를 반환하는 함수입니다.  
둘 다 네비게이터 구성에 사용되는 React 컴포넌트입니다.

**Stack.Screen** 컴포넌트는 각각의 화면을 정의하기 위해 경로 이름(name)과 경로에 렌더링 할 구성 요소를 지정하는 컴포넌트(component)를 포함해야합니다.  

**Stack.Navigator** 컴포넌트는 경로에 대한 구성을 정의하기 위해 자식으로 Stack.Screen 컴포넌트를 포함해야합니다.  

**NavigationContainer** 컴포넌트는 navigation tree를 관리하고 navigation state를 포함합니다.  
이 컴포넌트는 모든 네비게이터 구조를 래핑해야합니다.

**initialRouteName** 속성은 초기 경로를 정의합니다.
<br><br><br><br>





screen 폴더 안에 HomeScreen.js 파일을 생성하고, 아래와 같이 작성합니다.
```javascript
import React from "react";
import { View, Text, Button } from 'react-native';

const HomeScreen = ({navigation}) => {  
  return (
    <View style={{flex: 1, backgroundColor: '#cccccc'}}>
      <Text style={{fontSize: 40, fontWeight: 'bold', marginBottom: 40}}>[HomeScreen]</Text>
      <Button
        title="Go FirstScreen"
        onPress={() => navigation.navigate('FirstScreen')}
      />
      <Button
        title="Go SecondScreen"
        onPress={() => navigation.navigate('SecondScreen')}
      />
    </View>
  );
};

export default HomeScreen
```
**navigation.navigate("이동하고 싶은 경로 이름")** 을 사용하여 다른 화면으로 전환할 수 있습니다.  
<br><br><br><br>





screen 폴더 안에 FirstScreen.js 파일을 생성하고, 아래와 같이 작성합니다.
```javascript
import React from "react";
import { View, Text } from 'react-native'; 

const FirstScreen = () => {  
  return (
    <View style={{flex: 1, backgroundColor: '#ccffcc'}}>
      <Text style={{fontSize: 40, fontWeight: 'bold', marginBottom: 40}}>[FirstScreen]</Text>
    </View>
  );
};

export default FirstScreen
```
<br><br><br><br>





screen 폴더 안에 SecondScreen.js 파일을 생성하고, 아래와 같이 작성합니다.
```javascript
import React from "react";
import { View, Text } from 'react-native';

const SecondScreen = () => {
  return (
    <View style={{flex: 1, backgroundColor: '#ccccff'}}>
      <Text style={{fontSize: 40, fontWeight: 'bold', marginBottom: 40}}>[SecondScreen]</Text>
    </View>
  );
};

export default SecondScreen
```
<br><br><br><br>





# **<참고>**
아래 사이트를 참고하여 작성하였습니다.
> React Native 사이트 : https://reactnative.dev/docs/navigation  
> React Navigation 사이트 : https://reactnavigation.org/docs/getting-started/

<br><br>