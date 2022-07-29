---
emoji: 💻
title: "[React Native] Execution failed for task ':react-native-screens:compileDebugKotlin.'"
created: 2022-07-29
modified: 2022-07-29
link: ''
tags:
  - React Native
---
<br></br>





# **❐ Error 로그**
```
(생략...)
e: /Users/sohee/Desktop/rnstudy/node_modules/react-native-screens/android/src/main/java/com/swmansion/rnscreens/ScreenWindowTraits.kt: (245, 27): 'let((T) -> R): R' is only available since Kotlin 1.3.50 and cannot be used in Kotlin 1.3
e: /Users/sohee/Desktop/rnstudy/node_modules/react-native-screens/android/src/main/java/com/swmansion/rnscreens/SearchViewFormatter.kt: (48, 26): 'let((T) -> R): R' is only available since Kotlin 1.3.50 and cannot be used in Kotlin 1.3
e: /Users/sohee/Desktop/rnstudy/node_modules/react-native-screens/android/src/main/java/com/swmansion/rnscreens/SearchViewFormatter.kt: (55, 24): 'let((T) -> R): R' is only available since Kotlin 1.3.50 and cannot be used in Kotlin 1.3

FAILURE: Build failed with an exception.

* What went wrong:
Execution failed for task ':react-native-screens:compileDebugKotlin'.  
(생략...)
```
<br></br><br></br>





# **❐ 해결방법**
build.gradle 파일에 kotlinVersion을 1.3.50 이상 버전으로 명시해줍니다.
```undefined addLine={8,18}
buildscript {
    ext {
        buildToolsVersion = "30.0.2"
        minSdkVersion = 21
        compileSdkVersion = 30
        targetSdkVersion = 30
        ndkVersion = "20.1.5948944"
        kotlinVersion = "1.5.31"
    }
    repositories {
        google()
        jcenter()
    }
    dependencies {
        classpath('com.android.tools.build:gradle:4.1.3')
        classpath('com.google.gms:google-services:4.3.4')
        classpath 'com.google.firebase:firebase-crashlytics-gradle:2.7.1'
        classpath "org.jetbrains.kotlin:kotlin-gradle-plugin:1.5.31"
        // NOTE: Do not place your application dependencies here; they belong
        // in the individual module build.gradle files
    }
```
<br></br><br></br>
