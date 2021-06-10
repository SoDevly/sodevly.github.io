---
template: post
title: React Native - 상위 컴포넌트에서 하위 컴포넌트로 데이터 전달하기
slug: /posts/react-native/props
draft: false
priority: 0
date: 2021-06-02T00:46:37.121Z
description: >-
  React Native App에서 상위 컴포넌트에서 하위 컴포넌트로 데이터 전달하는 방법 가이드입니다.
category: Programming
tags:
  - React Native
---

<br>

**props**는 Properties 의 약자로, 상위 컴포넌트에서 하위 컴포넌트로 전달되는 데이터입니다.  
값 변경이 불가능한 Read-Only 데이터 입니다.
<br><br><br><br>





# **❐ 코드 예제**
screen 폴더 안에 PropsScreen.js 파일을 생성하고, 아래와 같이 작성합니다.
```
import React from "react";
import { View, Text } from 'react-native'; 
import PropsComponent from "../component/PropsComponent";

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
<br><br><br><br>




Component 폴더 안에 PropsComponent.js 파일을 생성하고, 아래와 같이 작성합니다.
```
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