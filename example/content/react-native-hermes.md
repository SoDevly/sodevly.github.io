---
emoji: 💻
title: '[React Native] Hermes 적용하여 앱 최적화하기'
created: 2022-05-07
modified: 2022-05-07
link: ''
tags:
  - React Native
---
<br></br>



# **❐ Hermes란?**
`Hermes`은 React Native에 최적화된 오픈소스 기반 자바스크립트 엔진입니다.  
Hermes를 활성화하면 앱 시작 시간이 향상되고 메모리 사용량이 감소하며 앱 크기가 작아집니다.
<br></br><br></br><br></br><br></br>





# **❐ Hermes 적용하기**
### **Android 적용하기**
###### **android/app/build.gradle 파일 수정**
enableHermes 값을 false -> true로 변경합니다.
```undefined removeLine={3} addLine={4}
  project.ext.react = [
    entryFile: "index.js",
    enableHermes: false  // clean and rebuild if changing
    enableHermes: true  // clean and rebuild if changing
  ]
```

###### **proguard-rules.pro 파일 수정**
아래 규칙을 추가합니다.
```undefined addLine={1,2}
-keep class com.facebook.hermes.unicode.** { *; }
-keep class com.facebook.jni.** { *; }
```

###### **Build Clean 하기**
```
$ cd android && ./gradlew clean
```

###### **Android앱 실행하기**
```
$ npx react-native run-android
```
<br></br><br></br>



### **iOS 적용하기**
###### **ios/Podfile 파일 수정**
hermes_enabled 값을 false -> true로 변경합니다.
```undefined removeLine={4} addLine={5}
use_react_native!(
:path => config[:reactNativePath],
# to enable hermes on iOS, change `false` to `true` and then install pods
     :hermes_enabled => false
     :hermes_enabled => true
)
```

###### **Pod 재설치하기**
```
$ cd ios && pod install
```

###### **iOS앱 실행하기**
```
$ npx react-native run-ios
```
<br></br><br></br>
