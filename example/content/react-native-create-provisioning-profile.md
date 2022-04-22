---
emoji: 💻
title: 'iOS 인증서 생성하기 - Provisioning Profile'
created: 2022-04-16
modified: 2022-04-16
link: ''
tags:
- React Native
---
<br></br>



# **❐ Provisioning Profile 이란?**
Provisioning Profile은 앱을 업로드하기 위해 필요한 인증서입니다.  
Provisioning Profile에는 누가(Certificate), 무엇을(Identifier), 어디에(Device)에 배포할 것인지에 대한 정보가 담겨있습니다.
<br></br><br></br>



# **❐ Profiles 파일 생성하는 방법**
AppStore Connect 사이트 > Certificates, Identifiers & Profiles > Profiles 메뉴에 접속합니다.  
https://developer.apple.com/account/resources/profiles/list
<br></br>

Profiles > + 버튼을 클릭합니다.
![](/assets/react-native-create-ios-certificate-profiles1.png)
<br></br>

Distribution > App Store을 선택한 후 Continue 버튼을 클릭합니다.
![](/assets/react-native-create-ios-certificate-profiles2.png)
<br></br>

위에서 생성한 Identifier를 선택한 후 Continue 버튼을 클릭합니다.
![](/assets/react-native-create-ios-certificate-profiles3.png)
<br></br>

앞에서 생성한 Certificate를 선택한 후 Continue 버튼을 클릭합니다.
![](/assets/react-native-create-ios-certificate-profiles4.png)
<br></br>

Continue 버튼을 클릭합니다.
![](/assets/react-native-create-ios-certificate-profiles5.png)
<br></br>

Provisioning Profile 이름을 입력한 후 Generate 버튼을 클릭합니다.
![](/assets/react-native-create-ios-certificate-profiles6.png)
<br></br>

Provisioning Profile이 생성되었습니다.  
Download 버튼을 클릭하여 Provisioning Profile을 다운로드합니다.
![](/assets/react-native-create-ios-certificate-profiles7.png)
<div style="max-width:540px">
<br></br>

Provisioning Profile이 디스크에 다운로드되었습니다.
![](/assets/react-native-create-ios-certificate-profiles8.png)
</div>
<br></br><br></br>
