---
emoji: 💻
title: 'React Native 화면 전환 시 Parameter 넘겨주기'
created: 2021-06-01
modified: 2021-06-01
link: ''
tags:
  - React Native
---
<br></br>




# **❐ 예시**
### 예시 설명
아래와 같은 동작을 구현해봅시다.
- HomeScreen에서 PassingParameterScreen으로 화면 전환 시 Parameter 전달
![](/assets/react-native-passing-parameter.png)
<br></br><br></br><br></br><br></br>





### HomeScreen.js 파일 작성
```javascript
import React from "react";
import { View, Button } from 'react-native';

const HomeScreen = ({navigation}) => {  
  return (
    <View style={styles.screen}>
      <Button
        title="Go PassingParameterScreen"
        onPress={() => navigation.navigate('PassingParameterScreen', {
          fromScreenId: 1,
          fromScreenName: 'HomeScreen',
          otherParam: 'anything you want here',
        })}
      />  
    </View>
  );
};

export default HomeScreen
```
'<Box>navigation.navigate("이동하고 싶은 경로 이름", {파라미터명:값})</Box>' 을 사용하여 다른 화면으로 전환하면서 Parameter를 전달할 수 있습니다.
<br></br><br></br><br></br><br></br>





### PassingParameterScreen.js 파일 작성
```javascript
import React from "react";
import { StyleSheet, View, Text } from 'react-native';

const PassingParameterScreen = ({route}) => {
  return (
    <View style={styles.screen}>
      <Text style={styles.text}>HomeScreen에서 넘겨받은 Parameter입니다.</Text>
      <Text style={styles.text}>====================</Text>
      <Text style={styles.text}>fromScreenId : {route.params.fromScreenId}</Text>
      <Text style={styles.text}>fromScreenName : {route.params.fromScreenName}</Text>
      <Text style={styles.text}>otherParam : {route.params.otherParam}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: '#ffffff'
  },
  text: {
    fontSize: 20
  }
})

export default PassingParameterScreen
```
<Box>route.params.파라미터명</Box> 을 사용하여 앞 화면에서 전달한 값을 받아 사용할 수 있습니다.
<br></br><br></br><br></br><br></br>





# **<참고>**
아래 사이트를 참고하여 작성하였습니다.
> React Native 사이트 : https://reactnative.dev/docs/navigation  
> React Navigation 사이트 : https://reactnavigation.org/docs/hello-react-navigation

<br></br><br></br>