---
emoji: 💻
title: '[React Native] Task :@react-native-firebase_messaging:compileDebugJavaWithJavac FAILED'
created: 2022-07-28
modified: 2022-07-28
link: ''
tags:
  - React Native
---
<br></br>





# **❐ Error 로그** 
Task :@react-native-firebase_messaging:compileDebugJavaWithJavac FAILED'  
(생략...)
<br></br><br></br>





# **❐ 해결방법**
JDK 버전을 8에서 11로 업데이트 합니다.    

```
brew tap homebrew/cask-versions
brew install --cask temurin11
```

java 버전을 확인합니다.
```
java -version
openjdk version "11.0.15" 2022-04-19
OpenJDK Runtime Environment Temurin-11.0.15+10 (build 11.0.15+10)
OpenJDK 64-Bit Server VM Temurin-11.0.15+10 (build 11.0.15+10, mixed mode)
```
<br></br><br></br>
