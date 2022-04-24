---
emoji: 💻
title: 'Android 인증서(KeyStore) 생성하기'
created: 2022-04-12
modified: 2022-04-12
link: ''
tags:
  - React Native
---
<br></br>





# **❐ KeyStore이란?**
`KeyStore`는 앱 개발자에 대한 정보가 포함되어 있는 암호화된 파일입니다.  
Google Play에 Android앱을 배포할 때 KeyStore로 서명한 APK 또는 Bundle 파일이 필요하며, 업데이트 버전을 배포 시 기존과 동일한 KeyStore로 서명한 APK 또는 Bundle 파일만 배포가 가능합니다.  
이는 APK 또는 Bundle 파일을 생성할 때 KeyStore로 서명하므로써 어떤 개발자가 생성한 앱인지 인증하는 것이고, 동일한 개발자가 생성한 앱만 배포가능하게 하므로써 다른 개발자가 의도치 못한 앱 배포를 하지 못하게 방지해 줍니다.
<br></br><br></br><br></br><br></br>





# **❐ KeyStore 생성 방법**
### 1) Build > Generate Signed Bundle / APK... 메뉴 클릭
<div style="max-width:800px; display: block">

![](/assets/react-native-keystore1.png)

</div>

### 2) Generate Signed Bundle or APK 팝업 > Android App Bundle 또는 APK 선택 > Next 버튼 클릭
<div style="max-width:680px; display: block">

![](/assets/react-native-keystore2.png)

</div>

### 3) Generate Signed Bundle or APK 팝업 > Create new... 버튼 클릭
<div style="max-width:680px; display: block">

![](/assets/react-native-keystore3.png)

</div>

### 4) New KeyStore 팝업 > KeyStore 정보 입력 > OK 버튼 클릭
- Key store path: KeyStore 생성 경로 및 파일명 입력  
- Password: KeyStore 비밀번호 입력  
- Comfirm: KeyStore 비밀번호 다시 입력  
- Key > Alias: Key 이름 입력  
- Key > Password: Key 비밀번호 입력  
- Key > Confirm: Key 비밀번호 다시 입력  
- Key > Validity (years): 유효기간 입력 (25년을 권장함)  
- Key > Certificate: 개발자 정보 입력  

<div style="max-width:680px; display: block">

![](/assets/react-native-keystore4.png)

</div>
