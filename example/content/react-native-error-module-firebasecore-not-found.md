---
emoji: 💻
title: "[React Native] Module 'FirebaseCore' not found"
created: 2022-09-30
modified: 2022-09-30
link: ''
tags:
  - React Native
---
<br></br>



firebase 라이브러리 버전을 최신 버전으로 업데이트한 후, 빌드 시 아래 Error가 발생함
<br></br><br></br>



# **❐ Error 로그** 
```undefined isWrap
Module 'FirebaseCore' not found
```
<br></br><br></br>



# **❐ 원인**
'FirebaseCore' 모듈을 찾지 못해서 발생한 Error입니다.
<br></br><br></br>



# **❐ 해결방법**
Podfile 파일에 아래 모듈을 추가한 후, 다시 pod install 합니다.

```undefined filename=Podfile
pod 'FirebaseCore', :modular_headers => true
```
<br></br><br></br>
