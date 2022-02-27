---
emoji: 💻
title: 'iOS앱 TestFlight에 배포하기'
created: 2022-02-26
modified: 2022-02-26
link: ''
tags:
  - React Native
---
<br></br>


 


# **❐ iOS앱 TestFlight에 업로드하기**
### **Debug/Release모드 선택**
Edit Scheme 메뉴 클릭
![](/assets/react-native-upload-app-on-testflight1.png)
Archive 진행 시 Debug모드로 할 것인지 Release모드로 할 것인지 선택
![](/assets/react-native-upload-app-on-testflight2.png)
<br></br>

### **Archive 진행**
Any iOS Device 선택
![](/assets/react-native-upload-app-on-testflight3.png)
Product > Archive 메뉴 선택
![](/assets/react-native-upload-app-on-testflight4.png)
<br></br>

### **업로드할 앱 버전 선택**
업로드할 앱 버전 선택 > Distribute App 버튼 클릭
![](/assets/react-native-upload-app-on-testflight5.png)
<br></br>

### **배포 방식 선택**
App Store Connect 선택 > Next 버튼 클릭
![](/assets/react-native-upload-app-on-testflight6.png)
<br></br>

### **앱 생성할 목적지 선택**
Upload 선택 > Next 버튼 클릭
- Upload : TestFlight에 바로 업로드
- Export : ipa 파일로 앱을 내보내기
           (Transporter 앱을 이용하여 ipa 파일을 TestFlight에 업로드할 수 있습니다.)

![](/assets/react-native-upload-app-on-testflight7.png)
<br></br>

### **배포 옵션 선택**
기본 상태 그대로 옵션 선택 > Next 버튼 클릭
![](/assets/react-native-upload-app-on-testfligh8.png)
<br></br>

### **인증서 선택**
배포 인증서, 프로비저닝 파일 선택 > Next 버튼 클릭
![](/assets/react-native-upload-app-on-testfligh9.png)
<br></br>

### **TestFlight에 앱 업로드**
업로드 중
![](/assets/react-native-upload-app-on-testfligh10.png)
업로드 완료
![](/assets/react-native-upload-app-on-testfligh11.png)
<br></br>

### **TestFlight에 앱 업로드 확인**
App Store Connect 사이트 > Testflight > 빌드 > iOS 메뉴 선택
TestFlight에 업로드한 앱 버전들을 확인할 수 있습니다.  
업로드 직후에는 처리중 상태이며, 10~20분 후에 제출 준비 완료 상태로 변경됩니다.  
제출 준비 완료 상태로 변경되면 TestFlight앱을 통해 테스트앱을 다운로드 받을 수 있습니다.
![](/assets/react-native-upload-app-on-testfligh12.png)
<br></br><br></br><br></br><br></br>