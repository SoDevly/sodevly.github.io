---
template: post
title: React Native 화면 전환 시 값 전달하기
slug: /posts/react-native/passing-values-to-another-screen
draft: false
priority: 0
date: 2021-06-01T00:46:37.121Z
description: >-
  React Native App에서 화면 전환 시 값 전달하는 방법 가이드입니다.
category: Programming
tags:
  - React Native
---

<br></br>

아래와 같은 동작으로 만들어 봅시다.  
- HomeScreen에서 screen_name 파라미터를 전달  
- FirstScreen에서 전달 받은 screen_name 파라미터 값을 디스플레이  
![](/media/react-native-passing-values-to-another-screen.png)
<br></br>
<br></br>





Screen 폴더 안에 HomeScreen.js 파일을 아래와 같이 작성합니다.
```
import React from "react";
import { View, Text, Button } from 'react-native';

const HomeScreen = ({navigation}) => {  
  return (
    <View style={{flex: 1, backgroundColor: '#FF0000'}}>
      <Text style={{fontSize: 40, fontWeight: 'bold', marginBottom: 40}}>[HomeScreen]</Text>
      <Button
        title="Go FirstScreen"
        onPress={() => navigation.navigate('First', { screen_name: "[FirstScreen]" })}
      />
      <Button
        title="Go SecondScreen"
        onPress={() => navigation.navigate('Second')}
      />
    </View>
  );
};

export default HomeScreen
```
**navigation.navigate("이동하고 싶은 경로 이름", {파라미터명:값})**을 사용하여 다른 화면으로 전환하면서 해당 화면에 값을 전달할 수 있습니다. 
<br></br>
<br></br>





Screen 폴더 안에 FirstScreen.js 파일을 아래와 같이 작성합니다.
```
import React from "react";
import { View, Text } from 'react-native'; 

const FirstScreen = ({ navigation, route }) => {

  return (
    <View style={{flex: 1, backgroundColor: '#00FF00'}}>
      <Text style={{fontSize: 40, fontWeight: 'bold', marginBottom: 40}}>{route.params.screen_name}</Text>
    </View>
  );
};

export default FirstScreen
```
**route.params.파라미터명**을 사용하여 앞 화면에서 전달한 값을 받아 사용할 수 있습니다.
<br></br>
<br></br>





# **<참고>**
아래 사이트를 참고하여 작성하였습니다.
> React Native 사이트 : https://reactnative.dev/docs/navigation  
> React Navigation 사이트 : https://reactnavigation.org/docs/getting-started/

<br></br>