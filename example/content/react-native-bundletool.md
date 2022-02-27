---
emoji: 💻
title: 'App Bundle 파일(.aab)로 앱 설치하기'
created: 2021-11-03
modified: 2021-11-03
link: ''
tags:
  - React Native
---
<br></br>





예전에 사용하던 .apk 파일은 기기에서 바로 설치가 가능했으나 요즘 사용하는 .aab 파일은 기기에서 바로 설치가 불가능합니다.  
.aab 파일을 기기에 설치하는 방법을 알아봅시다.
<br></br><br></br><br></br><br></br>





# **❐ [방법1] BundleTool 이용**

### **1) BundleTool 설치**
https://github.com/google/bundletool/releases  
<br></br>

### **2) App Bundle 파일(.aab) → APK 집합 파일(.apks)로 변환**
터미널창에서 아래 명령어 입력하여 .apks 파일 생성
```
bundletool build-apks --bundle=/경로/.aab파일이름 --output=/경로/.apks파일이름 --ks=/경로/keystore파일이름 --ks-pass=pass:keystore비밀번호 --ks-key-alias=key이름 --key-pass=pass:key비밀번호
```
<br></br>

### **3) 연결된 기기에 앱 설치**
기기연결 후, 터미널창에서 아래 명령어 입력하여 앱 설치
```
bundletool install-apks --apks=/경로/.apks파일이름
```
<br></br><br></br><br></br><br></br>





# **❐ [방법2] Google Play 내부테스트 이용**
### **1) 내부테스트 버전 만들기**
내부테스트 > 새 버전 만들기 버튼 선택 > .aab파일을 업로드하여 내부테스트 버전을 만듭니다.  
![](/assets/react-native-bundle-install1.png)
### **2) 내부테스트할 Google Play 계정 추가**
내부테스터 > 테스터 > 테스트할 Google Play 계정을 추가합니다.  
![](/assets/react-native-bundle-install2.png)
### **3) 내부테스트 초대 수락**
초대링크를 통해 초대 페이지에 들어갑니다.  
초대 수락 버튼을 선택하여 내부테스트 초대에 수락합니다.  
![](/assets/react-native-bundle-install3.png)
![](/assets/react-native-bundle-install4.png)
### **4) 앱 다운로드**
download it on Google Play 버튼을 선택하면 Google Play > 앱 상세 페이지로 이동합니다.  
설치 버튼을 선택하여 앱을 설치합니다.  
![](/assets/react-native-bundle-install5.png)
<br></br><br></br><br></br><br></br>





# **<참고>**
아래 사이트를 참고하여 작성하였습니다.
> https://developer.android.com/studio/command-line/bundletool?hl=ko

<br></br><br></br>
