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



# **❐ 현상**
아래 명령어로 iOS단말로 앱을 실행하려고 하였으나 Error가 발생하며 앱이 실행되지 않았습니다.
```
react-native run-ios --device [아이폰 장비 이름]
```
<br></br><br></br>



# **❐ Error 로그** 
```undefined isWrap
(Use `node --trace-warnings ...` to show where the warning was created)
error Failed to install the app on the device because we couldn't execute the "ios-deploy" command. Please install it by running "npm install -g ios-deploy" and try again.
```
<br></br><br></br>



# **❐ 해결방법**
ios-deploy를 설치해줍니다.
```
npm install -g ios-deploy
```

만약 npm 명령어로 ios-deploy 설치 실패하거나 설치해도 문제가 해결되지 않는다면, brew 명령어를 통해 설치해보세요.
```
npm uninstall -g ios-deploy
brew install ios-deploy
```
<br></br><br></br>
