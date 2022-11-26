---
emoji: 💻
title: '[React Native] Error: Duplicate resources'
created: 2022-03-30
modified: 2022-03-30
link: ''
tags:
  - React Native
---
<br></br>



# **❐ 현상**
apk 생성 시 아래 Error가 발생하면서 apk 생성에 실패함
<br></br><br></br>



# **❐ Error 로그** 
```undefined isWrap
[raw/src_network_mock_userinfo] /Users/sohee/Desktop/rnstudy/android/app/src/main/res/raw/src_network_mock_userinfo.json        [raw/src_network_mock_userinfo] /Users/sohee/Desktop/rnstudy/android/app/build/generated/res/react/release/raw/src_network_mock_userinfo.json: Error: Duplicate resources
(생략...)
```
<br></br><br></br>



# **❐ 원인**
중복된 Resource가 있어서 발생한 오류입니다.  
./gradlew assembleRelease 명령어로 Android APK를 생성할 때 위와 같은 에러를 자주 봅니다.
<br></br><br></br>



# **❐ 해결방법**
아래 명령어로 중복된 Resource를 삭제합니다.  
rm -rf ./android/app/src/main/res/drawable-*  
rm -rf ./android/app/src/main/res/raw
<br></br><br></br>
