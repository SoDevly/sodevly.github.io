---
template: post
title: '[React Native] 빌드환경 분리하기 react-native-config'
slug: /posts/react-native/env
draft: false
priority: 0
date: 2021-12-30T00:46:37.121Z
description: >-
category: Programming
tags:
  - React Native
---
<br><br>
보통 우리는 개발/검증/운영 등등 개발환경을 여러개로 분리하여 개발합니다.  
원하는 개발환경을 실행하기 위해 매번 빌드환경을 수정한다면 변경부분을 누락할 수도 있고 오래 걸리고 귀찮을 수 밖에 없습니다.  
여러개의 빌드환경을 미리 세팅한다면 변경부분을 누락하지 않고 빠르고 편리하게 원하는 개발환경을 실행할 수 있습니다.  
react-native-config package를 이용하면 빌드환경을 세팅할 수 있습니다.
<br><br><br><br>



아래와 같은 빌드환경이 필요하다고 가정하고 빌드환경을 세팅해봅시다.  
<br>
개발환경은 3가지로 구분됩니다.  
- Develop (개발계)
- Stage (검증계)
- Product (운영계)
<br>

빌드모드는 2가지로 구분됩니다.  
- Debug (디버깅용으로 npm서버와 연동되어있어야 앱 실행 가능)
- Release (배포용으로 npm서버와 연동되어있지 않아도 앱 실행 가능)
<br>

그래서 최종적으로 빌드환경은 총 6가지로 구분할 수 있습니다.  
- Develop (개발계) + Debug 모드
- Stage (검증계) + Debug 모드
- Product (운영계) + Debug 모드
- Develop (개발계) + Release 모드
- Stage (검증계) + Release 모드
- Product (운영계) + Release 모드
<br><br><br><br>



# **❐ package 설치**
react-native-config package를 설치합니다.
```
yarn add react-native-config
cd ios
pod install
```
<br><br><br><br>



# **❐ .env 파일 생성**
.env 파일을 생성합니다.
```
ENV=PRODUCT

APP_ID=com.sohee.rnstudy
BUILD_VERSION=211230
APP_VERSION=1.0.0
APP_NAME=RN Study

APP_API_URL=https://prd-rnstudy.com/api/app
```
<br>

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
<br>

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
<br>

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
<br><br><br><br>



# **❐ Android 설정**
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
<br><br><br><br>



# **❐ iOS 설정**
Configuration Setting 파일을 생성합니다.  
![](/media/react-native-env-ios1.png)
![](/media/react-native-env-ios2.png)  
<br>

생성한 Config.xcconfig 파일에 아래 소스를 추가합니다.  
```
#include? "tmp.xcconfig"
```
<br>

info > configurations에서 Debug/Release모드에 Configuration Setting 파일을 적용해줍니다.  
![](/media/react-native-env-ios4.png)  
<br>

Product > Scheme > New Scheme... 메뉴를 통해 Scheme를 생성합니다.  
Product, Stage, Develop 3개를 생성합니다.  
![](/media/react-native-env-ios5.png)
![](/media/react-native-env-ios6.png)  
<br>

Product Scheme 선택 > Edit Scheme... > Build > Pre-actions > New Run Script Action를 선택합니다.  
![](/media/react-native-env-ios7.png)
![](/media/react-native-env-ios8.png)  
<br>

그리고 env파일 복사 및 tmp.xcconfig파일 생성하는 소스를 추가합니다.
```
# replace .env.product for your file
cp "${PROJECT_DIR}/../env/.env.product" "${PROJECT_DIR}/../.env"

"${SRCROOT}/../node_modules/react-native-config/ios/ReactNativeConfig/BuildXCConfig.rb" "${SRCROOT}/.." "${SRCROOT}/tmp.xcconfig"
```
![](/media/react-native-env-ios9.png)  
<br>

나머지 Scheme에도 Build > Pre-actions > New Run Script Action을 추가해줍니다. 
<br><br><br><br>



# **❐ 환경변수 사용하기**
screen 폴더 안에 EnvScreen.js 파일을 생성하고, 아래와 같이 작성합니다.  
.js 파일 안에서는 **Config 변수**를 통해 환경변수 값을 가져올 수 있습니다.
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
<br>

Android의 build.gradle 파일 안에서는 **project.env.get(변수명)**을 이용하여 환경변수 값을 가져올 수 있습니다.
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
<br>

iOS의 info.plist 파일 안에서는 **${변수명}** 형태로 환경변수 값을 가져올 수 있습니다.
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
<br><br><br><br>



# **❐ 미리 설정한 빌드환경으로 앱 실행하기**
package.json 파일에 설정한 빌드환경으로 앱을 실행하는 스크립트 명령어를 추가합니다.
```
  "scripts": {
    "ios:dev:d": "react-native run-ios --scheme Develop --configuration Debug --simulator='iPhone 12'",
    "ios:dev:r": "react-native run-ios --scheme Develop --configuration Release --device 'TEST iPhone'",
    "ios:stg:d": "react-native run-ios --scheme Stage --configuration Debug --simulator='iPhone 12'",
    "ios:stg:r": "react-native run-ios --scheme Stage --configuration Release --simulator='iPhone 12'",
    "ios:prd:d": "react-native run-ios --scheme Product --configuration Debug --simulator='iPhone 12'",
    "ios:prd:r": "react-native run-ios --scheme Product --configuration Release --device 'TEST iPhone'",   
    "android:dev:d": "react-native run-android --variant=developdebug",
    "android:dev:r": "react-native run-android --variant=developrelease",
    "android:stg:d": "react-native run-android --variant=stagedebug",
    "android:stg:r": "react-native run-android --variant=stagerelease",
    "android:prd:d": "react-native run-android --variant=productdebug",
    "android:prd:r": "react-native run-android --variant=productrelease",
```
<br>

.env.stage 파일에 작성된 환경변수를 사용하는 iOS앱을 Debug모드로 실행해봅시다.
```
yarn ios:stg:d
```
![](/media/react-native-env-ios10.png)
![](/media/react-native-env-ios11.png)  
<br>

.env.develop 파일에 작성된 환경변수를 사용하는 Android앱을 Debug모드로 실행해봅시다.  
```
yarn android:dev:d
```
![](/media/react-native-env-android1.png)
![](/media/react-native-env-android2.png)
<br><br><br><br>



# **<참고>**
아래 사이트를 참고하여 작성하였습니다.
> https://github.com/luggit/react-native-config

<br><br>
