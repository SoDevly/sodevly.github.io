---
emoji: 💻
title: '[React Native] 빌드환경 분리하기 (react-native-config)'
created: 2022-02-01
modified: 2022-02-01
link: ''
tags:
  - React Native
---
<br></br>





보통 우리는 개발/검증/운영 등등 개발환경을 여러개로 분리하여 개발합니다.  
원하는 개발환경을 실행하기 위해 매번 빌드환경을 수정한다면 변경부분을 누락할 수도 있고 오래 걸리고 귀찮을 수 밖에 없습니다.  
여러개의 빌드환경을 미리 세팅한다면 변경부분을 누락하지 않고 빠르고 편리하게 원하는 개발환경을 실행할 수 있습니다.  
react-native-config package를 이용하면 빌드환경을 세팅할 수 있습니다.
<br></br><br></br><br></br><br></br>





# **❐ Package 설치**
react-native-config package를 설치합니다.
```
yarn add react-native-config
```
<br></br><br></br><br></br><br></br>





# **❐ 예시**
### **예시 설명**
아래와 같은 빌드환경이 필요하다고 가정하고 빌드환경을 세팅해봅시다.  

개발환경은 3가지로 구분됩니다.  
- Develop (개발계)
- Stage (검증계)
- Product (운영계)
<br></br>

빌드모드는 2가지로 구분됩니다.  
- Debug (디버깅용으로 npm서버와 연동되어있어야 앱 실행 가능)
- Release (배포용으로 npm서버와 연동되어있지 않아도 앱 실행 가능)
<br></br>

그래서 최종적으로 빌드환경은 총 6가지로 구분할 수 있습니다.  
- Develop (개발계) + Debug 모드
- Stage (검증계) + Debug 모드
- Product (운영계) + Debug 모드
- Develop (개발계) + Release 모드
- Stage (검증계) + Release 모드
- Product (운영계) + Release 모드
<br></br><br></br><br></br><br></br>





### **.env 파일 작성**
default용 .env 파일을 생성합니다.
```
ENV=PRODUCT

APP_ID=com.sohee.rnstudy
BUILD_VERSION=211230
APP_VERSION=1.0.0
APP_NAME=RN Study

APP_API_URL=https://prd-rnstudy.com/api/app
```
<br></br>

env 폴더 안에 .env.devlop 파일을 생성합니다.  
파일 안에는 개발환경이 develop일 때 사용하는 환경변수를 정의합니다.
```
ENV=DEVELOP

APP_ID=com.sohee.rnstudy.develop
BUILD_VERSION=211230
APP_VERSION=1.0.0
APP_NAME=RN Study - DEV

APP_API_URL=https://dev-rnstudy.com/api/app
```
<br></br>

env 폴더 안에 .env.stage 파일을 생성합니다.  
파일 안에는 개발환경이 stage일 때 사용하는 환경변수를 정의합니다.
```
ENV=STAGE

APP_ID=com.sohee.rnstudy.stage
BUILD_VERSION=211230
APP_VERSION=1.0.0
APP_NAME=RN Study - STG

APP_API_URL=https://stg-rnstudy.com/api/app
```
<br></br>

env 폴더 안에 .evn.product 파일을 생성합니다.  
파일 안에는 개발환경이 product일 때 사용하는 환경변수를 정의합니다.
```
ENV=PRODUCT

APP_ID=com.sohee.rnstudy
BUILD_VERSION=211230
APP_VERSION=1.0.0
APP_NAME=RN Study

APP_API_URL=https://prd-rnstudy.com/api/app
```
<br></br><br></br><br></br><br></br>





### **Android 설정**
android > app > build.gradle 파일을 아래와 같이 수정합니다.  
productFlavors은 개발환경을 정의해주는 것이고, envConfigFiles은 빌드환경에 따라 참조할 env파일을 정의해주는 것입니다.  
envConfigFiles의 이름은 productFlavors에서 정의한 개발환경이름 뒤에 debug/release만 붙여주면 됩니다.  
```
apply plugin: "com.android.application"

project.ext.envConfigFiles = [
    developdebug: "env/.env.develop",
    developrelease: "env/.env.develop", 
    stagedebug: "env/.env.stage",
    stagerelease: "env/.env.stage",
    productdebug: "env/.env.product",    
    productrelease: "env/.env.product",
    anothercustombuild: ".env",
]

apply from: project(':react-native-config').projectDir.getPath() + "/dotenv.gradle"

(생략...)

android {
    (생략...)

    flavorDimensions "version"
    productFlavors {
        develop {
        }
        stage {
        }
        product {
        }
    }
}
```
<br></br><br></br><br></br><br></br>





### **iOS 설정**
Configuration Setting 파일을 생성합니다.  
![](/assets/react-native-env-ios1.png)
![](/assets/react-native-env-ios2.png)  
<br></br>

생성한 Config.xcconfig 파일에 아래 소스를 추가합니다.  
```
#include? "tmp.xcconfig"
```
<br></br>

info > configurations에서 Debug/Release모드에 Configuration Setting 파일을 적용해줍니다.  
![](/assets/react-native-env-ios4.png)  
<br></br>

Product > Scheme > New Scheme... 메뉴를 통해 Scheme를 생성합니다.  
Product, Stage, Develop 3개를 생성합니다.  
![](/assets/react-native-env-ios5.png)
![](/assets/react-native-env-ios6.png)  
<br></br>

Product Scheme 선택 > Edit Scheme... > Build > Pre-actions > New Run Script Action를 선택합니다.  
![](/assets/react-native-env-ios7.png)
![](/assets/react-native-env-ios8.png)  
<br></br>

그리고 env파일 복사 및 tmp.xcconfig파일 생성하는 소스를 추가합니다.
```
# replace .env.product for your file
cp "${PROJECT_DIR}/../env/.env.product" "${PROJECT_DIR}/../.env"

"${SRCROOT}/../node_modules/react-native-config/ios/ReactNativeConfig/BuildXCConfig.rb" "${SRCROOT}/.." "${SRCROOT}/tmp.xcconfig"
```
![](/assets/react-native-env-ios9.png)  
<br></br>

나머지 Scheme에도 Build > Pre-actions > New Run Script Action을 추가해줍니다. 
<br></br><br></br><br></br><br></br>





### **환경변수 사용하기**
###### **.js 파일 안에서 사용해보기**
screen 폴더 안에 EnvScreen.js 파일을 생성하고, 아래와 같이 작성합니다.  
.js 파일 안에서는 `Config 변수`를 통해 환경변수 값을 가져올 수 있습니다.
```javascript
import React from "react";
import { StyleSheet, View, Text } from 'react-native';
import Config from 'react-native-config'

const EnvScreen = () => {
  return (
    <View style={styles.screen}>
      <Text style={styles.text}>ENV : {Config.ENV}</Text>
      <Text style={styles.text}>APP ID : {Config.APP_ID}</Text>
      <Text style={styles.text}>Build Version : {Config.BUILD_VERSION}</Text>
      <Text style={styles.text}>App Version : {Config.APP_VERSION}</Text>
      <Text style={styles.text}>APP Name: {Config.APP_NAME}</Text>
      <Text style={styles.text}>API URL : {Config.APP_API_URL}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  title: {
    fontSize: 40,
    fontWeight: 'bold',
    marginBottom: 40
  },
  text: {
    fontSize: 20,
  },
})

export default EnvScreen
```
<br></br>

###### **Android의 build.gradle 파일 안에서 사용해보기**
Android의 build.gradle 파일 안에서는 `project.env.get(변수명)`을 이용하여 환경변수 값을 가져올 수 있습니다.
```
android {
    (생략...)

    defaultConfig {
        applicationId project.env.get("APP_ID")
        minSdkVersion rootProject.ext.minSdkVersion
        targetSdkVersion rootProject.ext.targetSdkVersion
        versionCode project.env.get("BUILD_VERSION").toInteger()
        versionName project.env.get("APP_VERSION")
        resValue "string", "app_name", project.env.get("APP_NAME")
        resValue "string", "build_config_package", "com.rnstudy"
    }
}
```
<br></br>

###### **iOS의 info.plist 파일 안에서 사용해보기**
iOS의 info.plist 파일 안에서는 `${변수명}` 형태로 환경변수 값을 가져올 수 있습니다.
```
	<key>CFBundleDisplayName</key>
	<string>${APP_NAME}</string>
	<key>CFBundleIdentifier</key>
	<string>${APP_ID}</string>
	<key>CFBundleShortVersionString</key>
	<string>${APP_VERSION}</string>
	<key>CFBundleVersion</key>
	<string>${BUILD_VERSION}</string>
  (생략...)
```
<br></br><br></br><br></br><br></br>





### **미리 설정한 빌드환경으로 iOS앱 실행하기**
###### **package.json 파일에 스크립트 명령어 작성**
package.json 파일에 설정한 빌드환경으로 앱을 실행하는 스크립트 명령어를 추가합니다.
```
  "scripts": {
    "ios:dev:d": "react-native run-ios --scheme Develop --configuration Debug --simulator='iPhone 12'",
    "ios:dev:r": "react-native run-ios --scheme Develop --configuration Release --device 'TEST iPhone'",
    "ios:stg:d": "react-native run-ios --scheme Stage --configuration Debug --simulator='iPhone 12'",
    "ios:stg:r": "react-native run-ios --scheme Stage --configuration Release --simulator='iPhone 12'",
    "ios:prd:d": "react-native run-ios --scheme Product --configuration Debug --simulator='iPhone 12'",
    "ios:prd:r": "react-native run-ios --scheme Product --configuration Release --device 'TEST iPhone'",   
```
<br></br>

###### **iOS앱 실행해보기**
.env.stage 파일에 작성된 환경변수를 사용하는 iOS앱을 Debug모드로 실행해봅시다.
```
yarn ios:stg:d
```
![](/assets/react-native-env-ios10.png)
![](/assets/react-native-env-ios11.png)  
<br></br><br></br><br></br><br></br>





### **미리 설정한 빌드환경으로 Android앱 실행하기**
###### **package.json 파일에 스크립트 명령어 작성**
package.json 파일에 설정한 빌드환경으로 앱을 실행하는 스크립트 명령어를 추가합니다.
```
  "scripts": {
    "android:dev:d": "react-native run-android --variant=developdebug",
    "android:dev:r": "react-native run-android --variant=developrelease",
    "android:stg:d": "react-native run-android --variant=stagedebug",
    "android:stg:r": "react-native run-android --variant=stagerelease",
    "android:prd:d": "react-native run-android --variant=productdebug",
    "android:prd:r": "react-native run-android --variant=productrelease",
```
<br></br>

###### **Android앱 실행해보기**
.env.develop 파일에 작성된 환경변수를 사용하는 Android앱을 Debug모드로 실행해봅시다.  
```
yarn android:dev:d
```
![](/assets/react-native-env-android1.png)
![](/assets/react-native-env-android2.png)
<br></br><br></br><br></br><br></br>





### **미리 설정한 빌드환경으로 iOS앱 생성하기**
.env.product 파일에 작성된 환경변수를 사용하는 iOS앱을 Release모드로 앱을 생성해 봅시다.

###### **Xcode > 미리 설정한 Scheme 선택 > Any iOS Device 선택**
![](/assets/react-native-env-ios12.png)  

###### **Xcode > Product > Archive 메뉴 선택**
![](/assets/react-native-env-ios13.png)  
<br></br><br></br><br></br><br></br>





### **미리 설정한 빌드환경으로 Android앱 생성하기**
###### **Release용 KeyStore 생성**
[KeyStore 생성 방법](https://zdlath.github.io/react-native-keystore)은 여기서 자세히 설명하겠습니다.
<br></br>

###### **Release용 KeyStore 정보 저장**
gradle.properties 파일에 Release용 KeyStore 정보를 저장합니다.
```
RNSTUDY_APP_KEYSTORE_FILE=release.keystore
RNSTUDY_APP_KEY_ALIAS=release_app
RNSTUDY_APP_KEYSTORE_PASSWORD=soheePassword!
RNSTUDY_APP_KEY_PASSWORD=soheePassword!
```
<br></br>

###### **Release모드로 앱 생성 시, 인증할 KeyStore 설정**
android > app > build.gradle 파일에 Release모드 앱 생성 시 인증에 사용할 KeyStore를 설정합니다.
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
<br></br>

###### **package.json 파일에 스크립트 명령어 작성**
```
  "scripts": {
    "make-apk:dev:d": "cd android && ./gradlew app:assembleDevelopDebug && cd ..",
    "make-apk:dev:r": "cd android && ./gradlew app:assembleDevelopRelease && cd ..",
    "make-apk:stg:d": "cd android && ./gradlew app:assembleStageDebug && cd ..",  
    "make-apk:stg:r": "cd android && ./gradlew app:assembleStageRelease && cd ..",
    "make-apk:prd:d": "cd android && ./gradlew app:assembleProductDebug && cd ..",  
    "make-apk:prd:r": "cd android && ./gradlew app:assembleProductRelease && cd ..",  
    "make-aab:dev:d": "cd android && ./gradlew bundleDevelopDebug && cd ..",
    "make-aab:dev:r": "cd android && ./gradlew bundleDevelopRelease && cd ..",
    "make-aab:stg:d": "cd android && ./gradlew bundleStageDebug && cd ..",
    "make-aab:stg:r": "cd android && ./gradlew bundleStageRelease && cd ..",
    "make-aab:prd:d": "cd android && ./gradlew bundleProductDebug && cd ..",
    "make-aab:prd:r": "cd android && ./gradlew bundleProductRelease && cd .."
```

###### **Android앱 APK 생성하기**
.env.product 파일에 작성된 환경변수를 사용하는 Android앱을 Release모드로 APK를 생성해 봅시다.  
/app/build/outputs/apk/product/release/app-product-release.apk 파일이 생성된 것을 확인할 수 있습니다.
```
yarn make-apk:prd:r
```

###### **Android앱 AAB 생성하기**
.env.product 파일에 작성된 환경변수를 사용하는 Android앱을 Release모드로 AAB을 생성해 봅시다.  
/app/build/outputs/bundle/productRelease/app-product-release.aab 파일이 생성된 것을 확인할 수 있습니다.
```
yarn make-aab:prd:r
```
<br></br><br></br><br></br><br></br>




# **<참고>**
아래 사이트를 참고하여 작성하였습니다.
> https://github.com/luggit/react-native-config

<br></br><br></br>
