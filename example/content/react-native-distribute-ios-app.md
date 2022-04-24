---
emoji: 💻
title: '[React Native] iOS앱 App Store에 배포하기'
created: 2022-04-22
modified: 2022-04-22
link: ''
tags:
  - React Native
---
<br></br>



# **❐ App Store에 앱 등록 및 정보 입력하기**
[App Store에 앱 등록 및 정보 입력하는 방법](https://sodevly.github.io/react-native-register-app-on-appstore/)은 여기서 자세히 설명하겠습니다.
<br></br><br></br><br></br><br></br>





# **❐ iOS 인증서 생성하기**
### **CSR 파일 생성**
[CSR 파일 생성 방법](https://sodevly.github.io/react-native-create-csr/)은 여기서 자세히 설명하겠습니다.

### **Identifier 생성**
[Identifier 생성 방법](https://sodevly.github.io/react-native-create-identifier/)은 여기서 자세히 설명하겠습니다.

### **Certificate 생성**
[Certificate 생성 방법](https://sodevly.github.io/react-native-create-certificate/)은 여기서 자세히 설명하겠습니다.

### **Provisioning Profile 생성**
[Provisioning Profile 생성 방법](https://sodevly.github.io/react-native-create-provisioning-profile/)은 여기서 자세히 설명하겠습니다.
<br></br><br></br><br></br><br></br>





# **❐ iOS앱 TestFlight에 배포하기**
[iOS앱 TestFlight에 배포하기](https://sodevly.github.io/react-native-upload-app-on-testflight/) 페이지를 참고해주세요.
<br></br><br></br>





# **❐ 앱 심사 요청**
빌드 > '앱을 제출하기 전에 빌드를 선택하십시오' 버튼을 클릭합니다.
![](/assets/react-native-distribute-ios-app1.png)

TestFlight에 업로드했던 앱 빌드가 보입니다.  
빌드 리스트에서 앱 심사 등록할 빌드를 선택한 후 완료 버튼을 클릭합니다.
![](/assets/react-native-distribute-ios-app2.png)

'심사에 추가' 버튼을 클릭합니다.
![](/assets/react-native-distribute-ios-app3.png)

'앱 심사에 제출' 버튼을 클릭합니다.
![](/assets/react-native-distribute-ios-app4.png)

앱 심사 요청이 완료되었습니다.
![](/assets/react-native-distribute-ios-app5.png)

상태가 '앱 심사 대기중'으로 변경된 것을 확인할 수 있습니다.  
앱 심사 결과가 나올 때 까지 기다립니다.
![](/assets/react-native-distribute-ios-app6.png)
<br></br><br></br>





# **❐ 앱 출시**
앱 심사 승인을 받으면 상태가 '개발자 출시 대기 중'으로 변경됩니다.  
'이 버전 출시' 버튼을 클릭합니다.
![](/assets/react-native-distribute-ios-app7.png)

App Store에 iOS앱이 출시되었습니다.  
상태가 '판매 준비됨'으로 변경된 것을 확인할 수 있습니다.
![](/assets/react-native-distribute-ios-app8.png)
<br></br><br></br>
