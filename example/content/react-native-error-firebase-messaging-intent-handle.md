---
emoji: 💻
title: '[React Native] FATAL EXCEPTION: Firebase-Messaging-Intent-Handle'
created: 2022-09-28
modified: 2022-09-28
link: ''
tags:
  - React Native
---
<br></br>



TargetSdkVersion 31(Android 12)로 업데이트한 후 Android앱에서 PUSH를 받지 못함
<br></br><br></br>



# **❐ Error 로그** 
```undefined isWrap
FATAL EXCEPTION: Firebase-Messaging-Intent-Handle
Process: com.sohee.rnstudy, PID: 5845
java.lang.IllegalArgumentException: com.sohee.rnstudy: Targeting S+ (version 31 and above) requires that one of FLAG_IMMUTABLE or FLAG_MUTABLE be specified when creating a PendingIntent.
Strongly consider using FLAG_IMMUTABLE, only use FLAG_MUTABLE if some functionality depends on the PendingIntent being mutable, e.g. if it needs to be used with inline replies or bubbles.
at android.app.PendingIntent.checkFlags(PendingIntent.java:375)
at android.app.PendingIntent.getActivityAsUser(PendingIntent.java:458)
at android.app.PendingIntent.getActivity(PendingIntent.java:444)
at android.app.PendingIntent.getActivity(PendingIntent.java:408)
(생략...)
```
<br></br><br></br>



# **❐ 원인**
Android 12를 타겟팅하면 변경되는 동작 중 아래 동작 변경사항이 대응되지 않아 발생한 이슈입니다.

> 대기 중인 인텐트 변경 가능 여부
앱이 Android 12를 타겟팅하는 경우 앱에서 만드는 각 PendingIntent 객체의 변경 가능 여부를 지정해야 합니다.  
이 추가 요구사항은 앱의 보안을 강화합니다.  

> Android 12를 타겟팅하는 앱 동작 변경사항 : https://developer.android.com/about/versions/12/behavior-changes-12?hl=ko

<br></br><br></br>



# **❐ 해결방법**
위의 동작 변경사항을 대응한 firebase 라이브러리 버전(14.11.1 이상)으로 업데이트 합니다.

```undefined addLine={4,5} removeLine={2,3}
  "dependencies": {
    "@react-native-firebase/app": "^11.3.3",
    "@react-native-firebase/messaging": "^11.3.3",
    "@react-native-firebase/app": "^14.11.1",
    "@react-native-firebase/messaging": "^14.11.1",
```
<br></br><br></br>
