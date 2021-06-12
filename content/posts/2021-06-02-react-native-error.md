---
template: post
title: "React Native - React Native ERROR  Error: Element type is invalid: expected a string (for built-in components) or a class/function (for composite components) but got: undefined. You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports. 에러"
slug: /posts/react-native/error
draft: false
priority: 0
date: 2021-06-02T00:46:37.121Z
description:
category: Programming
tags:
  - React Native
---

<br>

**❐ Error 로그**  
ERROR  Error: Element type is invalid: expected a string (for built-in components) or a class/function (for composite components) but got: undefined. You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.
<br><br>

**❐ 원인**  
export default PropsComponent로 되어 있는데 { PropsComponent }를 통해 import 해서 발생한 오류 입니다.
<br><br>

**❐ 해결방법**  
아래와 같이 수정해주니 Error가 해결되었습니다.
```javascript
//import { PropsComponent } from "../component/PropsComponent";
import PropsComponent from "../component/PropsComponent";
```
<br><br><br><br>





**❐ Error가 발생했던 소스**  
PropsScreen.js
```javascript
import React from "react";
import { View, Text } from 'react-native'; 
import { PropsComponent } from "../component/PropsComponent";

const PropsScreen = () => {

  return (
    <View style={{flex: 1}}>
      <Text style={{fontSize: 40, fontWeight: 'bold', marginBottom: 40}}>[PropsScreen]</Text>
      <PropsComponent product={'과자'} price={2000} />
      <PropsComponent product={'아이스크림'} price={1000} />
      <PropsComponent product={'빵'} price={2500} />
    </View>
  );
};

export default PropsScreen
```
<br><br>

PropsComponent.js
```javascript
import React from "react";
import { View, Text } from 'react-native'; 

function PropsComponent(props) {
  return (
    <View>
      <Text style={{fontSize: 20}}>Product : {props.product} Price : {props.price}</Text>
    </View>
  );
}

export default PropsComponent
```
<br><br>