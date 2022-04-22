---
emoji: 💻
title: 'iOS 인증서 생성하기 - Identifier'
created: 2022-04-15
modified: 2022-04-15
link: ''
tags:
- React Native
---
<br></br>



# **❐ Identifiers 이란?**
앱을 구별하는 식별자인 App ID입니다.  
App ID Prefix는 애플에서 개발자 계정별로 부여하는 Team ID 입니다.  
App ID Suffix는 Bundle ID 입니다.
<br></br>



# **❐ Identifiers 생성하는 방법**
AppStore Connect 사이트 > Certificates, Identifiers & Profiles > Identifiers 메뉴에 접속합니다.  
https://developer.apple.com/account/resources/identifiers/list
<br></br>

Identifiers > + 버튼을 클릭합니다.
![](/assets/react-native-create-ios-certificate-identifiers1.png)
<br></br>

'App IDs'를 선택한 후 Continue 버튼을 클릭합니다.
![](/assets/react-native-create-ios-certificate-identifiers2.png)
<br></br>

'App'을 선택한 후 Continue 버튼을 클릭합니다.
![](/assets/react-native-create-ios-certificate-identifiers3.png)
<br></br>

App ID 정보를 입력한 후 Continue 버튼을 클릭합니다.
- App ID Prefix : TeamID를 선택합니다.
- Description : 앱 이름을 입력합니다. 
- Bundle ID : Bundle ID를 입력합니다.
- Capabilities : 앱에서 사용 중인 서비스를 체크합니다.

![](/assets/react-native-create-ios-certificate-identifiers4.png)
<br></br>

입력한 정보를 확인한 후 Register 버튼을 클릭합니다.
![](/assets/react-native-create-ios-certificate-identifiers5.png)
<br></br><br></br>
