---
emoji: 💻
title: '[React Native] 웹페이지 열기 / 전화 걸기 / 문자 보내기 / 이메일 보내기 (Linking)'
created: 2022-05-02
modified: 2022-05-02
link: ''
tags:
  - React Native
---
<br></br>



# **❐ Linking이란?**
`Linking`은 수신 및 발신 앱 링크와 상호 작용할 수있는 일반 인터페이스를 제공합니다.
<br></br><br></br><br></br><br></br>





# **❐ 예시**
### **예시 설명**
- '웹페이지 열기' 버튼 클릭 시, 웹페이지 이동
- '전화 걸기' 버튼 클릭 시, 전화 화면으로 이동
- '문자 보내기' 버튼 클릭 시, 문자 화면으로 이동
- '이메일 보내기' 버튼 클릭 시, 이메일 화면으로 이동
![](/assets/react-native-linking1.png)
<br></br><br></br>



### **예시 코드**
###### **LinkingScreen.js 파일 작성**
```javascript
import React from 'react';
import {StyleSheet, View, Button, Linking} from 'react-native';

const LinkingScreen = () => {
    return (
        <View style={styles.screen}>
            <Button title={'웹페이지 열기'} onPress={() => Linking.openURL(`https://www.google.com`)} />
            <Button title={'전화 걸기'} onPress={() => Linking.openURL(`tel:01012341234`)} />
            <Button title={'문자 보내기'} onPress={() => Linking.openURL(`sms:01012341234`)} />
            <Button title={'이메일 보내기'} onPress={() => Linking.openURL(`mailto:test@mail.com`)} />
        </View>
    );
};

생략...

export default LinkingScreen;
```
<br></br><br></br>
