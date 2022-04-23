---
emoji: 💻
title: 'Android앱 APK/AAB 생성하기'
created: 2021-10-05
modified: 2021-10-05
link: ''
tags:
  - React Native
---
<br></br>





# **❐ 앱 생성 시 자동으로 지정한 KeyStore로 인증하도록 설정**
### **Release용 KeyStore 생성**
react native 프로젝트를 생성하면 기본적으로 Debug용 KeyStore 파일(debug.keystore)은 생성됩니다.  
Release용 KeyStore 파일은 개발자가 생성해줘야합니다.  
[KeyStore 생성 방법](https://sodevly.github.io/react-native-keystore/)은 여기서 자세히 설명하겠습니다.
<br></br>





### **Release용 KeyStore 정보 저장**
gradle.properties 파일에 Release용 KeyStore 정보를 저장합니다.
```
RNSTUDY_APP_KEYSTORE_FILE=release.keystore
RNSTUDY_APP_KEY_ALIAS=release_app
RNSTUDY_APP_KEYSTORE_PASSWORD=soheePassword!
RNSTUDY_APP_KEY_PASSWORD=soheePassword!
```
<br></br>





### **앱 생성 시 인증할 KeyStore 설정**
react native 프로젝트 생성 시 Debug용 KeyStore는 이미 설정되어 있습니다.  
android > app > build.gradle 파일에 Release모드 앱 생성 시 인증에 사용할 KeyStore를 추가로 설정합니다.  
```
    signingConfigs {
        debug {
            storeFile file('debug.keystore')
            storePassword 'android'
            keyAlias 'androiddebugkey'
            keyPassword 'android'
        }
        release {
            if (project.hasProperty('RNSTUDY_APP_KEYSTORE_FILE')) {
                storeFile file(RNSTUDY_APP_KEYSTORE_FILE)
                storePassword RNSTUDY_APP_KEYSTORE_PASSWORD
                keyAlias RNSTUDY_APP_KEY_ALIAS
                keyPassword RNSTUDY_APP_KEY_PASSWORD
            }
        }        
    }
```
<br></br><br></br><br></br><br></br>





# **❐ Android앱 생성하기**
### **앱 버전명 변경**
/android/app/build.gradle 파일에서 versionName, versionCode를 입력합니다.
- versionName : 앱 버전명 입력
- versionCode : 빌드 버전명 입력
```
    defaultConfig {
        applicationId "com.rnstudy.app"
        minSdkVersion rootProject.ext.minSdkVersion
        targetSdkVersion rootProject.ext.targetSdkVersion
        versionCode 1
        versionName "1.0.0"
        missingDimensionStrategy 'react-native-camera', 'mlkit'
   }
```
<br></br>





### **Debug모드 Android앱 APK 생성하기**
Android앱을 Debug모드로 APK를 생성해주는 명령어입니다.  
/android/app/build/outputs/apk/debug/app-debug.apk 파일이 생성된 것을 확인할 수 있습니다.
```
cd android && ./gradlew app:assembleDebug && cd ..
```
<br></br>





### **Release모드 Android앱 APK 생성하기**
Android앱을 Release모드로 APK를 생성해주는 명령어입니다.  
/android/app/build/outputs/apk/release/app-release.apk 파일이 생성된 것을 확인할 수 있습니다.
```
cd android && ./gradlew app:assembleRelease && cd ..
```
<br></br>





### **Debug모드 Android앱 AAB 생성하기**
Android앱을 Debug모드로 AAB을 생성해주는 명령어입니다.  
/android/app/build/outputs/bundle/debug/app-debug.aab 파일이 생성된 것을 확인할 수 있습니다.
```
cd android && ./gradlew bundleDebug && cd ..
```
<br></br>





### **Release모드 Android앱 AAB 생성하기**
Android앱을 Release모드로 AAB을 생성해주는 명령어입니다.  
/android/app/build/outputs/bundle/release/app-release.aab 파일이 생성된 것을 확인할 수 있습니다.
```
cd android && ./gradlew bundleRelease && cd ..
```
<br></br><br></br>
