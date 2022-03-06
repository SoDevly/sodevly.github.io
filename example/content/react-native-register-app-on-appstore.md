---
emoji: 💻
title: 'App Store에 앱 등록하기 - 앱 스토어 정보 등록하기'
created: 2022-03-02
modified: 2022-03-02
link: ''
tags:
  - React Native
---
<br></br>





# **❐ App Store Connect에 앱 만들기**
### **App Store Connect 페이지 접속**
App Store Connect 페이지에 접속 후, 개발자 계정으로 로그인합니다.
> https://appstoreconnect.apple.com/apps

### **신규 앱 만들기**
App Store Connect > 앱+ 버튼 > 신규앱 버튼을 클릭합니다.
![](/assets/react-native-register-app-on-appstore1.png)

### **신규 앱 정보 입력**
신규 앱 정보를 입력합니다.
- 플랫폼 : iOS 선택
- 이름 : 앱 이름 입력
- 기본 언어 : 기본 언어 선택
- 번들 ID : Certificates, Identifiers & Profiles 페이지에서 등록한 번들 ID를 선택
- SKU : App Store에 표시되지 않는 앱의 고유한 ID 입력
- 사용자 액세스 권한 : 앱을 볼 수 있는 사용자를 제한하려면 제한된 액세스 선택하고 모든 사용자가 접근 가능하게 할려면 전체 액세스 선택
![](/assets/react-native-register-app-on-appstore2.png)
<br></br><br></br><br></br><br></br>



# **❐ 앱 정보 > 기본 스토어 등록정보 등록**
### **앱 미리보기 및 스크린샷**
앱 미리보기 및 스크린샷을 업로드합니다.  

1) iPhone6.5형 디스플레이 앱 미리보기 및 스크린샷  
- 6.5형 기기  
iPhone 12 Pro Max, iPhone 11 Pro Max, iPhone 11, iPhone XS Max, iPhone XR  

- 스크린샷 스펙  
스크린샷 최대 10개  
RGB 색상 영역에 있는 JPG 또는 PNG 형식  
1284 x 2778 픽셀(세로)  
2778 x 1284 픽셀(가로)  

- 앱 미리보기 스펙  
앱 미리보기 최대 3개  
M4V, MP4 또는 MOV 형식  
최대 크기 500MB  

2) iPhone5.5형 디스플레이 앱 미리보기 및 스크린샷  
- 5.5형 기기  
iPhone 8 Plus, iPhone 7 Plus, iPhone 6s Plus

- 스크린샷 스펙  
스크린샷 최대 10개  
RGB 색상 영역에 있는 JPG 또는 PNG 형식  
1242 x 2208 픽셀(세로)  
2208 x 1242 픽셀(가로)  

- 앱 미리보기 스펙  
앱 미리보기 최대 3개  
M4V, MP4 또는 MOV 형식  
최대 크기 500MB
![](/assets/react-native-register-app-on-appstore3.png)

### **프로모션 텍스트 (170자 이내)**
프로모션 텍스트를 사용하면 업데이트된 사항을 제출하지 않고 현재 앱 기능을 App Store 방문자에게 알릴 수 있습니다.  
프로모션 텍스트는 iOS 11 이상 또는 macOS 10.13 이상이 설치된 기기를 사용하는 경우 App Store의 앱 설명 위에 표시됩니다.

### **설명 (4000자 이내)**
앱의 특징과 기능에 대한 자세한 설명을 입력합니다.

### **키워드 (100자 이내)**
앱을 설명하는 키워드를 입력합니다.  
키워드는 여러개를 입력할 수 있으며, 각 키워드는 쉼표로 구분합니다.  
키워드를 사용하면 App Store 검색 결과의 정확도를 높일 수 있습니다.

### **지원 URL**
앱에 대한 지원 정보가 포함되어 있는 URL을 입력합니다.  
이 URL은 App Store에 표시됩니다.

### **저작권**
앱에 대해 독점 권한을 가진 개인 또는 법인의 이름을 입력합니다.  
앞에 권한을 획득한 연도가 옵니다(예: ‘2008 Acme Inc.’).
![](/assets/react-native-register-app-on-appstore4.png)

### **앱 심사 정보**
앱에 로그인할 수 있는 로그인 정보를 입력합니다.  
이 로그인 정보는 앱 심사 진행 시 앱의 모든 기능을 심사하기 위해 사용됩니다.  
그리고 앱 심사팀에서 궁금한 점이 있거나 추가 정보를 필요로 할 경우에 연락할 개발자의 연락처 정보를 입력합니다.
![](/assets/react-native-register-app-on-appstore5.png)
<br></br><br></br><br></br><br></br>





# **❐ 일반 정보 > 앱 정보 등록**
### **앱 이름(12자 이내)**
앱 이름을 입력합니다.

### **부제(30자 이내)**
부제를 입력합니다.
![](/assets/react-native-register-app-on-appstore6.png)

### **카테고리**
카테고리를 선택합니다.
![](/assets/react-native-register-app-on-appstore7.png)

### **콘텐츠 권한**
콘텐츠 권한관련 설문을 진행합니다.
![](/assets/react-native-register-app-on-appstore8.png)

### **연령 등급**
앱의 연령 등급을 받기 위해 설문을 진행합니다
![](/assets/react-native-register-app-on-appstore9.png)
<br></br><br></br><br></br><br></br>





# **❐ 일반 정보 > 가격 및 사용 가능 여부 등록**
### **가격 변경 일정**
앱의 가격을 선택합니다.
![](/assets/react-native-register-app-on-appstore10.png)

### **사용 가능 여부**
앱 판매를 중단할꺼면 판매 중단을 선택하고, 앱을 판매할꺼면 국가 및 지역이 선택됨을 선택합니다.
![](/assets/react-native-register-app-on-appstore11.png)
국가 및 지역이 선택됨을 선택한 경우, 옆에 편집 버튼을 클릭하여 국가 및 지역별 사용 가능 여부를 세부적으로 선택할 수 있습니다.
![](/assets/react-native-register-app-on-appstore12.png)
<br></br><br></br><br></br><br></br>





# **❐ 일반 정보 > 앱이 수집하는 개인정보 등록**
### **개인정보 처리방침 URL**
개인정보처리방침 URL을 입력합니다.
![](/assets/react-native-register-app-on-appstore13.png)
<br></br><br></br><br></br><br></br>





# **❐ App Store에 등록한 정보 확인**
위에서 작성한 정보는 App Store에서 아래와 같이 표시됩니다.
![](/assets/react-native-register-app-on-appstore14.png)
<br></br><br></br>
