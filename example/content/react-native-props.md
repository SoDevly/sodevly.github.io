---
emoji: 💻
title: '[React Native] 상위 컴포넌트에서 하위 컴포넌트로 데이터 전달하기 (props)'
created: 2021-06-02
modified: 2021-06-02
link: ''
tags:
  - React Native
---
<br></br>





**<Highlight>props</Highlight>**는 <Underline>Properties의 약자로 상위 컴포넌트에서 하위 컴포넌트로 전달되는 데이터입니다.</Underline>  

props는 값 변경이 불가능한 Read-Only 데이터 입니다.
<br></br><br></br><br></br><br></br>





# **❐ 예시**
### 예시 설명
아래와 같은 구조의 하위 컴포넌트를 가지고 있는 화면을 구현하고, props를 사용하여 하위 컴포넌트와 데이터를 공유해봅시다.  

PropsScreen  
ㅤㄴ PropsComponent  

- 상위 컴포넌트(PropsScreen)에서 하위 컴포넌트(PropsComponent)로 product, price 데이터 전달
- 하위 컴포넌트(PropsComponent)에서 전달받은 데이터 사용
![](/assets/react-native-props.png)
<br></br><br></br><br></br><br></br>





### PropsScreen.js 파일 작성
```javascript
import React from "react";
import { StyleSheet, View } from 'react-native'; 
import PropsComponent from "../component/PropsComponent";

const PropsScreen = () => {

  return (
    <View style={styles.screen}>
      <PropsComponent product={'과자'} price={2000} />
      <PropsComponent product={'아이스크림'} price={1000} />
      <PropsComponent product={'빵'} price={2500} />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: '#ffffff'
  }
})

export default PropsScreen
```
`<컴포넌트명 파라미터명={파라미터값} 파라미터명={파라미터값}>`을 이용하여 하위 컴포넌트에 데이터를 전달할 수 있습니다.
<br></br><br></br><br></br><br></br>





### PropsComponent.js 파일 작성
```javascript
import React from "react";
import { StyleSheet, View, Text } from 'react-native'; 

function PropsComponent(props) {
  return (
    <View style={styles.view}>
      <Text style={styles.text}>Product : {props.product}</Text>
      <Text style={styles.text}>Price : {props.price}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  view: {
    backgroundColor: '#00ffff',
    margin: 5
  },
  text: {
    fontSize: 20
  }
})

export default PropsComponent
```
`props.파라미터명`을 사용하여 상위 컴포넌트에서 넘겨준 데이터를 사용할 수 있습니다.
<br></br><br></br>