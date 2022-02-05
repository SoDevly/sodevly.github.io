---
emoji: 💻
title: '[React Native] Native Module'
created: 2021-09-01
modified: 2021-09-01
link: ''
tags:
  - React Native
---
<br></br>





# **❐ Native Module란?**
`Native Module`은 <u>각 플랫폼(Android/iOS) 환경에서 구현한 함수를 React-Native 환경에서 사용 가능하도록 구현한 모듈입니다.</u>  

Java 또는 Kotlin으로 Android 모듈을 구현하고, Object-C 또는 Swift로 iOS 모듈을 구현하여 React-Native 환경에서 직접 구현한 모듈을 사용할 수 있습니다.  
React Native 앱을 개발하다보면 플랫폼(Android/iOS) API 접근이 필요한데 React-Native에서 아직 그에 해당하는 모듈이 없을 때나 네이티브 성능이 더 좋을 경우 Native Module을 구현하여 사용합니다.
<br></br><br></br><br></br><br></br>





# **❐ 예시**
### **예시 설명**
아래와 같이 동작하는 로직을 native module로 구현해봅시다.
- Android 단말에서 'Native Module 함수 호출'버튼 클릭하면 "Hi! I'm Android" 얼럿 뜸
- iOS 단말에서 'Native Module 함수 호출'버튼 클릭하면 "Hi! I'm iOS" 얼럿 뜸
- 얼럿을 띄우는 함수를 각 플랫폼(Android/iOS)에 Callback 함수로 넘겨줌
- 각 플랫폼(Android/iOS)에서는 Callback 함수를 이용하여 얼럿 문구를 넘겨줌
![](/assets/react-native-nativemodule-android.gif)  ![](/assets/react-native-nativemodule-ios.gif)
<br></br><br></br><br></br><br></br>





### **Android Native Moduel 구현하기**
MainApplication.java 파일에서 HellowPackage를 추가합니다.
```java
(생략...)
import com.rnstudy.hellow.HellowPackage;

public class MainApplication extends Application implements ReactApplication {

  private final ReactNativeHost mReactNativeHost =
      new ReactNativeHost(this) {
        @Override
        protected List<ReactPackage> getPackages() {
          @SuppressWarnings("UnnecessaryLocalVariable")
          List<ReactPackage> packages = new PackageList(this).getPackages();
          packages.add(new HellowPackage()); //HellowPackage 추가
          return packages;
        }
        (생략...)
      };
(생략...)      
```
<br></br>


hellow 폴더 안에 HellowPackage.java 파일을 생성하고, HellowPackage에 HellowModule을 추가합니다.
```java
package com.rnstudy.hellow;

import com.facebook.react.ReactPackage;
import com.facebook.react.bridge.NativeModule;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.uimanager.ViewManager;

import java.util.ArrayList;
import java.util.Collections;
import java.util.List;
    
public class HellowPackage implements ReactPackage {
    @Override
    public List<ViewManager> createViewManagers(ReactApplicationContext reactContext) {
        return Collections.emptyList();
    }

    @Override
    public List<NativeModule> createNativeModules(ReactApplicationContext reactContext) {
        List<NativeModule> modules = new ArrayList<>();

        modules.add(new HellowModule(reactContext));//HellowModule 추가

        return modules;
    }
}
```
<br></br>


hellow 폴더 안에 HellowModule.java 파일을 생성하고, HellowModule을 구현합니다.  
HellowModule 안에 getGreeting 함수를 구현합니다.  
getGreeting 함수는 Callback 함수를 인수로 받으며, 해당 Callback 함수를 "Hi! I'm Android" 문구 파라미터를 넘기며 호출합니다.
```java
package com.rnstudy.hellow;

import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import com.facebook.react.bridge.Callback;

public class HellowModule extends ReactContextBaseJavaModule {
    private final ReactApplicationContext reactContext;

    HellowModule(ReactApplicationContext context) {
        super(context);
        this.reactContext = context;
    }

    @Override
    public String getName() {
      return "HellowModule";
    }

    @ReactMethod
    public void getGreeting(Callback callback) {
        callback.invoke("Hi! I'm Android");
    }
}
```
<br></br><br></br><br></br><br></br>





### **iOS Native Moduel 구현하기**
hellow폴더를 생성합니다.  
Xcode > 마우스 오른쪽버튼 클릭 > New Group  
![](/assets/react-native-nativemodule-ios-create1.png)

HellowModule.h, HellowModule.m 파일을 생성합니다.  
Xcode > hellow 폴더 클릭 > 마우스 오른쪽버튼 클릭 > New File...  
![](/assets/react-native-nativemodule-ios-create2.png)

Cocoa Touch Class 선택  
![](/assets/react-native-nativemodule-ios-create3.png)

Class 이름을 HellowModule이라고 정하고, Language를 Objective-C 선택  
![](/assets/react-native-nativemodule-ios-create4.png)

Create 버튼 클릭  
![](/assets/react-native-nativemodule-ios-create4.png)

HellowModule.h, HellowModule.m 파일이 생성된 것을 확인합니다.  
![](/assets/react-native-nativemodule-ios-create5.png)
<br></br>


HellowModule.h 파일을 아래와 같이 작성합니다.
```objectivec
#import <React/RCTBridgeModule.h>

@interface HellowModule : NSObject <RCTBridgeModule>
@end
```
<br></br>


HellowModule.m 파일에서 HellowModule을 구현합니다.  
HellowModule 안에 getGreeting 함수를 구현합니다.  
getGreeting 함수는 Callback 함수를 인수로 받으며, 해당 Callback 함수를 "Hi! I'm iOS" 문구 파라미터를 넘기며 호출합니다.  
```objectivec
#import "HellowModule.h"

@implementation HellowModule

RCT_EXPORT_MODULE();

RCT_EXPORT_METHOD(getGreeting: (RCTResponseSenderBlock)callback)
{
    callback(@[@"Hi! I'm iOS"]);
}

@end
```
<br></br><br></br>





### **React Native에서 구현한 Native Moduel 사용하기**
위에서 구현한 Native Module을 사용해봅시다.  
NativeModuleScreen.js 파일을 생성하고, 아래와 같이 작성합니다.
```javascript
import React from "react";
import { View, Button, NativeModules } from 'react-native';

const NativeModuleScreen = () => {

  const getGreeting = () => {
    //HellowModule의 getGreeting 함수 호출
    NativeModules.HellowModule.getGreeting(message => {
      alert(message);
    });
  }

  return (
    <View style={{flex: 1}}>
      <Button
        title="Native Module 함수 호출"
        onPress={getGreeting}
      />
    </View>
  );
};

export default NativeModuleScreen
```
<br></br><br></br><br></br><br></br>





# **<참고>**
아래 사이트를 참고하여 작성하였습니다.
> https://reactnative.dev/docs/native-modules-android  
> https://reactnative.dev/docs/native-modules-ios

<br></br><br></br>