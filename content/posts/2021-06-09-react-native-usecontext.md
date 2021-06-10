---
template: post
title: React Native - 전역(global) 데이터를 전달할 수 있는 useContext
slug: /posts/react-native/usecontext
draft: false
priority: 0
date: 2021-06-09T00:46:37.121Z
description: >-
  React Native 전역 데이터를 전달할 수 있는 useContext에 대하여 설명합니다.
category: Programming
tags:
  - React Native
---

<br>

**useContext**는 전역(global) 데이터를 전달할 수 있는 Hook 입니다.  
<br><br><br><br>




보통 상위 컴포넌트에서 하위 컴포넌트로 데이터를 전달할 때 props를 통해 인자로 넘깁니다.
하지만 개발하다보면 하위 컴포넌트의 하위 하위 하위컴포넌트로 데이터를 전달해야 할 수도 있고
오히려 반대로 하위 컴포넌트에서 상위 컴포넌트로 데이터를 공유해야 할 수도 있습니다.
이런 경우 props를 통해 데이터를 전달하기 어렵기 때문에 useContext를 통해 데이터를 전달합니다.



# **❐ 코드 예제**
screen 폴더 안에 UseContextScreen.js 파일을 생성하고, 아래와 같이 작성합니다.






# **<참고>**
아래 사이트를 참고하여 작성하였습니다.
> React Native 사이트 : https://reactjs.org/docs/hooks-effect.html

<br><br>