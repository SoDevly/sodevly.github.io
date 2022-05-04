---
emoji: 💻
title: '[React Native] Linking.canOpenURL() 무조건 false 리턴되는 이슈'
created: 2022-05-04
modified: 2022-05-04
link: ''
tags:
  - React Native
---
<br></br>



# **❐ 이슈 현상**
Linking.canOpenURL() 함수에서 무조건 false를 리턴합니다.
<br></br><br></br>





# **❐ 원인**
targetSdkVersion 30 이상인 경우 AndroidManifest.xml에 관련 인텐트 쿼리를 지정하지 않으면 Linking.canOpenURL() 함수에서 무조건 false를 리턴합니다.
<br></br><br></br>





# **❐ 해결방법**
AndroidManifest.xml에 QUERY_ALL_PACKAGES 권한을 추가해줍니다.
```java addLine={5}
<manifest xmlns:android="http://schemas.android.com/apk/res/android"
  package="com.rnstudy">

    <uses-permission android:name="android.permission.INTERNET" />
    <uses-permission android:name="android.permission.QUERY_ALL_PACKAGES" />

    <application
      android:name=".MainApplication"
      android:label="@string/app_name"
      android:icon="@mipmap/ic_launcher"
      android:roundIcon="@mipmap/ic_launcher_round"
      android:allowBackup="false"
      android:theme="@style/AppTheme">
생략...
```
<br></br><br></br>
