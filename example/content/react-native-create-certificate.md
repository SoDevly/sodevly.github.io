---
emoji: 💻
title: 'iOS 인증서 생성하기 - Certificate'
created: 2022-04-14
modified: 2022-04-14
link: ''
tags:
- React Native
---
<br></br>


# **❐ Certificate 이란?**
Certificate는 Apple이 해당 개발자를 신뢰한다고 증명해주는 인증서입니다.  
개발할 때는 Development Certificate(개발용 인증서), 배포할 때는 Distribution Certificate(배포용 인증서)가 필요합니다.  
Certificate을 생성하기 위해서는 앞에서 생성한 CSR 파일이 필요합니다.
<br></br><br></br>



# **❐ Certificate 생성하는 방법**
AppStore Connect 사이트 > Certificates, Identifiers & Profiles > Certificates 메뉴에 접속합니다.  
https://developer.apple.com/account/resources/certificates/list
<br></br>

Certificates > + 버튼을 클릭합니다.
![](/assets/react-native-create-ios-certificate-distribute1.png)
<br></br>

Apple Distribution 또는 iOS Distribution (App Store and Ad Hoc)를 선택한 후 Continue 버튼을 클릭합니다.
![](/assets/react-native-create-ios-certificate-distribute2.png)
<br></br>

Choose File 버튼을 클릭하여 앞에서 생성한 CSR 파일을 선택한 후 Continue 버튼을 클릭합니다.
![](/assets/react-native-create-ios-certificate-distribute3.png)
<br></br>

Certificate가 생성되었습니다.  
Download 버튼을 클릭하여 Certificate를 다운로드합니다.
![](/assets/react-native-create-ios-certificate-distribute4.png)
<br></br>

다운로드한 Certificate를 확인합니다.
<div style="max-width:540px">

![](/assets/react-native-create-ios-certificate-distribute5.png)
</div>
<br></br>

Certificate를 더블 클릭하여 키체인 접근앱에 추가합니다.
![](/assets/react-native-create-ios-certificate-distribute6.png)
<br></br><br></br>
