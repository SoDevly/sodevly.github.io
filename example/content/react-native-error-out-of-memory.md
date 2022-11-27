---
emoji: 💻
title: '[React Native] apk 생성 시 에러 (java.lang.OutOfMemoryError)'
created: 2022-11-01
modified: 2022-11-01
link: ''
tags:
  - React Native
---
<br></br>



# **❐ Error 로그** 
```undefined isWrap
java.lang.OutOfMemoryError (no error message)
```
<br></br><br></br>



# **❐ 원인**
메모리 부족
<br></br><br></br>



# **❐ 해결방법**
gradle.properties 파일에서 메모리를 늘려줍니다.
```undefined addLine={2} removeLine={1}
org.gradle.jvmargs=-Xmx2048m
org.gradle.jvmargs=-Xmx4096m
```
<br></br><br></br>
