---
emoji: 💻
title: 'TestFlight 내부 테스터 추가하기'
created: 2022-04-24
modified: 2022-04-24
link: ''
tags:
  - React Native
---
<br></br>





# **❐ TestFlight 내부테스트란?**
TestFlight앱을 통해 iOS앱을 테스트할 수 있도록 내부 사용자에게 공유할 수 있는 기능입니다.
- 계정 소유자, 관리자, 앱 관리자, 개발자 또는 마케팅 역할을 맡은 팀원만 초대가 가능합니다.
- 외부 테스터를 100명까지 초대할 수 있습니다.
<br></br><br></br><br></br><br></br>





# **❐ TestFlight 내부 테스터 추가하는 방법**
### **내부 테스팅 그룹 만들기**
내부 테스팅 + 버튼 클릭 > 그룹명 입력 > 생성 버튼을 클릭합니다.  
TestFlight에 업로드한 모든 앱 버전을 자동으로 공유하게 하고 싶으면 자동 배포 활성화를 체크하고, 공유할 앱 버전을 선택하여 공유하고 싶으면 미체크합니다.
![](/assets/react-native-add-internal-tester1.png)
<br></br><br></br><br></br><br></br>





### **내부 테스터 초대**
내부 테스팅 > 그룹 선택 > 테스터 + 버튼 클릭합니다.
![](/assets/react-native-add-internal-tester2.png)

내부 사용자의 이메일 주소 리스트가 보입니다.  
내부 테스터로 초대할 사용자 선택 > 다음 버튼을 클릭합니다.
![](/assets/react-native-add-internal-tester3.png)

내부 테스트가 추가된 것을 확인할 수 있습니다.  
추가 직후 진행 상태는 `초대됨`으로 추가한 테스터의 이메일 주소로 초대 메일이 전송된 상태를 의미합니다.
![](/assets/react-native-add-internal-tester4.png)
<br></br><br></br><br></br><br></br>





### **공유할 앱 버전 추가 (자동 배포 활성화 체크한 경우)**
빌드 + 버튼이 안보이며, TestFlight에 업로드한 앱 버전 리스트가 자동으로 보입니다.
![](/assets/react-native-add-internal-tester12.png)
<br></br><br></br><br></br><br></br>

### **공유할 앱 버전 추가 (자동 배포 활성화 미체크한 경우)**
빌드 + 버튼을 클릭합니다.
![](/assets/react-native-add-internal-tester5.png)

TestFlight에 업로드한 앱 버전들이 보입니다.  
공유할 앱 버전을 선택 > 다음 버튼을 클릭합니다.
![](/assets/react-native-add-internal-tester6.png)

무엇을 테스트할 앱인지 내용을 적습니다.
![](/assets/react-native-add-internal-tester7.png)

공유할 앱 버전이 추가된 것을 확인을 수 있습니다.
![](/assets/react-native-add-internal-tester8.png)
<br></br><br></br><br></br><br></br>





### **초대 수락하기**
초대 메일 > View in TestFlight 버튼을 클릭합니다.
<div style="max-width:420px">

![](/assets/react-native-add-internal-tester9.png)
</div>

TestFlight 앱 > 수락 버튼을 클릭합니다.  
만약 TestFlight앱이 설치되어 있지 않다면 App Store에서 TestFlight 앱을 다운로드 받습니다.
<div style="max-width:420px">

![](/assets/react-native-add-internal-tester10.png)
</div>

설치 버튼을 클릭하여 앱을 다운로드 받습니다.
<div style="max-width:420px">

![](/assets/react-native-add-internal-tester11.png)
</div>
<br></br><br></br>
