---
emoji: 💻
title: 'iOS 인증서 생성하기 - CSR(Certificate Signing Request)'
created: 2022-04-13
modified: 2022-04-13
link: ''
tags:
- React Native
---
<br></br>


# **❐ CSR(Certificate Signing Request) 이란?**
CSR은 Certificate Signing Request의 약자로 인증서 발급을 요청하기 위한 파일입니다.  
CSR 파일을 생성하면 키체인 접근 앱에 자동으로 개인키, 공개키가 생성됩니다.  
Certificate 파일에는 일반 이름, 이메일 정보와 공개키가 포함되어 있습니다.  
CSR 파일은 나중에 Certificate 발급 요청 시 사용합니다.
<br></br><br></br>



# **❐ CSR 파일 생성하는 방법**
키체인 접근을 실행합니다.  
<br></br>

키체인 접근 > 인증서 지원 > 인증 기관에서 인증서 요청... 메뉴를 선택합니다.
![](/assets/react-native-create-ios-certificate-csr1.png)
<br></br>

인증서 정보를 입력 후 계속 버튼을 클릭합니다.
- 사용자 이메일 주소 : 이메일 주소를 입력합니다. (Apple 계정을 입력해도 되고 다른 이메일 주소를 입력해도 됩니다.)
- 일반 이름 : 본인 이름이나 그룹 이름 등을 입력합니다.
- 요청 항목 : '디스크에 저장됨'을 선택합니다.

<div style="max-width:580px">

![](/assets/react-native-create-ios-certificate-csr2.png)
</div>
<br></br>

CSR 파일이 생성되었습니다.  
완료 버튼을 클릭합니다.
<div style="max-width:580px">

![](/assets/react-native-create-ios-certificate-csr3.png)
</div>
<br></br>

생성한 CSR 파일을 확인합니다.
<div style="max-width:540px">

![](/assets/react-native-create-ios-certificate-csr4.png)
</div>
<br></br>

키 체인 접근 앱에 위에서 입력한 일반 이름으로 개인키, 공개키가 생성된 것을 확인합니다.
![](/assets/react-native-create-ios-certificate-csr5.png)
<br></br><br></br>
