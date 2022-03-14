---
emoji: 💻
title: '[React Native] Break Point 잡아서 디버깅하기 with WebStorm'
created: 2022-03-13
modified: 2022-03-13
link: ''
tags:
  - React Native
---
<br></br>





# **❐ Break Point 잡아서 디버깅하는 방법**
### **Android Configuration 만들기**
Add Configuration... 클릭합니다.
![](/assets/react-native-debug-with-webstorm1.png)
<br></br>

왼쪽 위에 + 버튼 클릭 > React Native 선택합니다.
![](/assets/react-native-debug-with-webstorm2.png)
<br></br>

Configuration 정보를 입력합니다.
- Name : Configuration 이름 입력
- Platform : Android 선택
- Arguments : Android앱 실행 시 필요한 인자 입력
![](/assets/react-native-debug-with-webstorm3.png)
<br></br><br></br>





### **iOS Configuration 만들기**
왼쪽 위에 + 버튼 클릭 > React Native 선택합니다.
![](/assets/react-native-debug-with-webstorm4.png)
<br></br>

Configuration 정보를 입력합니다.
- Name : Configuration 이름 입력
- Platform : iOS 선택
- Arguments : iOS앱 실행 시 필요한 인자 입력
![](/assets/react-native-debug-with-webstorm5.png)
<br></br><br></br>





### **Android 디버깅하기**
위에서 생성한 Android Configuration을 선택합니다.
![](/assets/react-native-debug-with-webstorm6.png)
<br></br>

Debug 버튼을 클릭합니다.
![](/assets/react-native-debug-with-webstorm7.png)
<br></br>

Android앱과 React Native Debugger가 실행됩니다.  
![](/assets/react-native-debug-with-webstorm8.png)
<br></br>

Status: Waitting이라면 개발자옵션 > Debug 메뉴를 선택합니다.
![](/assets/react-native-debug-with-webstorm9.png)
<br></br>

Status: Debugger session active로 변경됩니다.
![](/assets/react-native-debug-with-webstorm10.png)

Break Point 추가 후 실행하면 Break Point가 잡히는 것을 확인할 수 있습니다.
![](/assets/react-native-debug-with-webstorm11.png)
<br></br><br></br>





### **iOS 디버깅하기**
위에서 생성한 iOS Configuration을 선택 후, Debug 버튼을 클릭합니다.
![](/assets/react-native-debug-with-webstorm16.png)
<br></br>

iOS앱과 React Native Debugger가 실행됩니다.  
![](/assets/react-native-debug-with-webstorm12.png)
<br></br>

개발자옵션 > Debug with Chrome 메뉴를 선택합니다.
![](/assets/react-native-debug-with-webstorm13.png)
<br></br>

Status: Debugger session active로 변경됩니다.
![](/assets/react-native-debug-with-webstorm14.png)
<br></br>

Break Point 추가 후 실행하면 Break Point가 잡히는 것을 확인할 수 있습니다.
![](/assets/react-native-debug-with-webstorm15.png)
<br></br><br></br>
