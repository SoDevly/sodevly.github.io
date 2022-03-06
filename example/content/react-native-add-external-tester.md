---
emoji: 💻
title: 'TestFlight 외부 테스터 추가하기'
created: 2022-03-06
modified: 2022-03-06
link: ''
tags:
  - React Native
---
<br></br>





# **❐ TestFlight 외부테스트란?**
TestFlight앱을 통해 iOS앱을 테스트할 수 있도록 외부 사용자에게 공유할 수 있는 기능입니다.
- 외부 사용자에게 앱을 공유할 수 있습니다.
- 공유하려는 앱은 TestFlight 앱 심사에서 승인을 받아야합니다.
- 외부 테스터를 10,000명까지 초대할 수 있습니다.
<br></br><br></br><br></br><br></br>





# **❐ TestFlight 외부 테스터 추가하는 방법**
### **외부 테스팅 그룹 만들기**
외부 테스팅 + 버튼 클릭 > 그룹명 입력 > 생성 버튼을 클릭합니다.
![](/assets/react-native-add-external-tester1.png)
<br></br><br></br><br></br><br></br>





### **외부 테스터 초대**
외부 테스팅 > 그룹 선택 > 테스터 + 버튼 클릭 > 새로운 테스터 추가 버튼을 클릭합니다.
![](/assets/react-native-add-external-tester2.png)

이메일 주소, 성, 이름 입력 > 추가 버튼을 클릭합니다.
![](/assets/react-native-add-external-tester3.png)

외부 테스트가 추가된 것을 확인할 수 있습니다.  
추가 직후 진행 상태는 `초대됨`으로 추가한 테스터의 이메일 주소로 초대 메일이 전송된 상태를 의미합니다.
![](/assets/react-native-add-external-tester4.png)
<br></br><br></br><br></br><br></br>





### **공유할 앱 버전 추가**
빌드 + 버튼을 클릭합니다.
![](/assets/react-native-add-external-tester5.png)

TestFlight에 업로드한 앱 버전들이 보입니다.  
공유할 앱 버전을 선택 > 추가 버튼을 클릭합니다.
![](/assets/react-native-add-external-tester6.png)

공유할 앱 버전이 추가된 것을 확인을 수 있습니다.  
추가 직후 진행 상태는 `심사중`으로 앱 심사 진행 중인 상태를 의미합니다.  
심사 통과 후 진행 상태는 `승인됨`으로 변경되며 이 때부터 테스터에게 공유됩니다.
![](/assets/react-native-add-external-tester7.png)
<br></br><br></br><br></br><br></br>





### **초대 수락하기**
초대 메일 > View in TestFlight 버튼을 클릭합니다.
![](/assets/react-native-add-external-tester8.png)

리딤코드를 복사합니다.
![](/assets/react-native-add-external-tester9.png)

TestFlight앱 > Redeem(교환) 버튼을 클릭 > 리딤코드 입력 > Redeem 버튼을 클릭합니다.  
만약 TestFlight앱이 설치되어 있지 않다면 App Store에서 TestFlight 앱을 다운로드 받습니다.
![](/assets/react-native-add-external-tester10.png)

초대받은 앱이 보이는 것을 확인할 수 있습니다.  
초대받은 앱 옆에 install 버튼을 클릭하여 앱을 다운로드 받습니다.
![](/assets/react-native-add-external-tester11.png)
<br></br><br></br>
