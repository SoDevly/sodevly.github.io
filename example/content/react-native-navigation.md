---
emoji: 💻
title: 'React Native 화면 전환 (react-navigation)'
created: 2021-05-31
modified: 2021-05-31
link: ''
tags:
  - React Native
---
<br></br>





앱은 여러개의 화면으로 구성되어 있기때문에 화면 전환 동작이 필요합니다.  
react-navigation은 앱 화면 전환 동작을 도와주는 라이브러리이며, 3가지 방식으로 구현이 가능합니다.  
- Stack Navigator
- Tab Navigator
- Drawer Navigator

이 포스트에서는 Stack Navigator를 사용해 보도록 하겠습니다.
<br></br><br></br><br></br><br></br>





# **❐ 설치**
아래 명령어를 실행하여 관련 라이브러리를 설치합니다.
```
yarn add @react-navigation/native @react-navigation/stack
yarn add react-native-reanimated react-native-gesture-handler react-native-screens react-native-safe-area-context @react-native-community/masked-view
cd ios
pod install
cd ..
```
<br></br><br></br><br></br><br></br>





# **❐ 예시**
### **예시 설명**
react-navigation을 사용하여 아래와 같은 화면 및 동작을 구현해봅시다.
- 화면은 2개(HomeScreen, NavigationScreen)로 구성  
- HomeScreen에서 [Go NavigationScreen] 버튼 클릭하면 NavigationScreen 화면으로 전환  
- 화면 전환 방식은 Stack Navigator 사용
![](/assets/react-native-navigation.png)
<br></br><br></br><br></br><br></br>





### **예시 코드**
###### **App.js 파일 작성**
```javascript
import React from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { enableScreens } from 'react-native-screens';
import { default as HomeScreen } from "./src/screen/HomeScreen";
import { default as NavigationScreen } from "./src/screen/NavigationScreen";

enableScreens();
const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator  initialRouteName = "HomeScreen">
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
        <Stack.Screen name="NavigationScreen" component={NavigationScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
```
`createStackNavigator()` 는 Screen과 Navigator의 두 가지 속성을 포함하는 객체를 반환하는 함수입니다.
둘 다 네비게이터 구성에 사용되는 React 컴포넌트입니다.  

`NavigationContainer` 컴포넌트는 navigation tree를 관리하고 navigation state를 포함합니다.
이 컴포넌트는 모든 네비게이터 구조를 래핑해야합니다.  

`Stack.Navigator`컴포넌트는 경로에 대한 구성을 정의하기 위해 자식으로 Stack.Screen 컴포넌트를 포함해야합니다.
initialRouteName 속성으로 초기 경로를 정의할 수 있습니다.  

`Stack.Screen` 컴포넌트는 각각의 화면을 정의하기 위해 경로 이름(name)과 경로에 렌더링 할 구성 요소를 지정하는 컴포넌트(component)를 포함해야합니다.  
<br></br><br></br><br></br><br></br>





###### **HomeScreen.js 파일 작성**
```javascript
import React from "react";
import { StyleSheet, View, Button } from 'react-native';

const HomeScreen = ({navigation}) => {  
  return (
    <View style={styles.screen}>
      <Button
        title="Go NavigationScreen"
        onPress={() => navigation.navigate('NavigationScreen')}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: '#ffffff'
  }
})

export default HomeScreen
```
`navigation.navigate("이동하고 싶은 경로 이름")`을 사용하여 다른 화면으로 전환할 수 있습니다.  
<br></br><br></br><br></br><br></br>





###### **NavigationScreen.js 파일 작성**
```javascript
import React from "react";
import { StyleSheet, View, Text } from 'react-native'; 

const NavigationScreen = () => {  
  return (
    <View style={{flex: 1, backgroundColor: '#ccffcc'}}>
      <Text>HomeScreen에서 NavigationScreen으로 이동했습니다.</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: '#ffffff'
  }
})

export default NavigationScreen
```
<br></br><br></br><br></br><br></br>





# **<참고>**
아래 사이트를 참고하여 작성하였습니다.
> React Native 사이트 : https://reactnative.dev/docs/navigation  
> React Navigation 사이트 : https://reactnavigation.org/docs/hello-react-navigation

<br></br><br></br>