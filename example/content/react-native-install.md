---
emoji: 💻
title: 'React Native 설치 가이드'
created: 2021-05-19
modified: 2021-05-19
link: ''
tags:
  - React Native
---
<br></br>





# **❐ Homebrew 설치**
Homebrew는 맥(Mac)에서 필요한 패키지를 설치하고 관리하는 맥(Mac)용 패키지 관리자입니다.  
Homebrew를 사용하면 맥(Mac)에서 간단하게 필요한 패키지를 설치할 수 있습니다.
> Homebrew 사이트 : https://brew.sh/

아래 명령어를 실행하여 Homebrew를 설치합니다.
```
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
```

아래 명령어를 실행하여 Homebrew가 잘 설치되었는지 확인합니다.
```
brew --version

Homebrew 3.1.7
Homebrew/homebrew-core (git revision b9b47e504a; last commit 2021-05-18)
Homebrew/homebrew-cask (git revision 312cb2002d; last commit 2021-05-18)
```
<br></br><br></br><br></br><br></br>





# **❐ Nodejs 설치**
react-native는 Javascript이므로 Javascript의 런타임인 Nodejs가 필요합니다.
> Nodejs 사이트: https://nodejs.org/

아래 명령어를 실행하여 Nodejs를 설치합니다.
```
brew install node
```
아래 명령어를 실행하여 Nodejs가 잘 설치되었는지 확인합니다.
```
node -–version

v16.1.0
```
Nodejs를 설치하면, 기본적으로 Nodejs 패키지 매니저인 npm(Node Package Manager)도 같이 설치됩니다.  
아래 명령어를 실행하여 npm이 잘 설치되었는지 확인합니다.
```
npm --version

7.11.2
```
<br></br><br></br><br></br><br></br>





# **❐ Yarn 설치 (선택)**
Yarn은 프로젝트의 의존성을 관리하는 JavaScript의 패키지 매니저입니다.  
npm을 사용해도 되지만 Yarn이 더 빠르고 더 안전합니다.

아래 명령어를 실행하여 Yarn를 설치합니다.
```
brew install yarn
```
아래 명령어를 실행하여 Yarn가 잘 설치되었는지 확인합니다.
```
yarn --version

1.22.10
```
<br></br><br></br><br></br><br></br>





# **❐ React Native CLI 설치**
React Native로 앱을 개발하기 위해 React Native CLI가 필요합니다.  

아래 명령어를 실행하여 React Native CLI를 설치합니다.
```
npm install -g react-native-cli
```
아래 명령어를 실행하여 React Native CLI가 잘 설치되었는지 확인합니다.
```
react-native --version

react-native-cli: 2.0.1
react-native: n/a - not inside a React Native project directory
```
<br></br><br></br><br></br><br></br>





# **❐ Watchman 설치**
Watchman은 특정 폴더나 파일을 감시하다가 변화가 생기면, 특정 동작을 실행하도록 설정하는 역할을 합니다.  
react-native에서는 소스코드의 추가, 변경이 발생하면 다시 빌드하기 위해 Watchman을 사용하고 있습니다.
> Watchman 사이트 : https://facebook.github.io/watchman/

아래 명령어를 실행하여 Watchman을 설치합니다.
```
brew install watchman
```
아래 명령어를 실행하여 Watchman이 잘 설치되었는지 확인합니다.
```
watchman --version

4.9.0
```
<br></br><br></br><br></br><br></br>





# **❐ Xcode 설치**
Xcode는 iOS 개발 툴입니다. React Native로 iOS 앱을 개발하기 위해서는 꼭 필요합니다.

앱 스토어에서 Xcode를 검색하여 설치합니다.  
![](/assets/react-native-install_install-xcode1.png)

Xcode > Preferences > Locations > Command Line Tools이 잘 설정 되었는지 확인합니다.  
![](/assets/react-native-install_install-xcode2.png)
<br></br><br></br><br></br><br></br>





# **❐ iOS Simulator 설치**
Xcode > Preferences > Components에서 iOS Simulator를 설치합니다.  
![](/assets/react-native-install_install-ios-simulator.png)  
<br></br><br></br><br></br><br></br>





# **❐ Cocoapods 설치**
Cocoapods는 iOS 개발에 사용되는 의존성 관리자입니다. React Native로 iOS 앱을 개발하기 위해서 설치해야합니다.
> Cocoapods 사이트 : https://cocoapods.org

아래 명령어를 실행하여 Cocoapods를 설치합니다.
```
sudo gem install cocoapods
```
아래 명령어를 실행하여 Cocoapods가 잘 설치되었는지 확인합니다.
```
pod --version

1.10.1
```
<br></br><br></br><br></br><br></br>





# **❐ JDK 설치**
React Native로 Android 개발하기 위해서 JDK(Java Development Kit)를 설치해야 합니다.  

아래 명령어를 실행하여 JDK를 설치합니다.
```
brew tap AdoptOpenJDK/openjdk
brew cask install adoptopenjdk8
```
아래 명령어를 실행하여 JDK가 잘 설치되었는지 확인합니다.
```
java -version

openjdk version "1.8.0_292"
OpenJDK Runtime Environment (AdoptOpenJDK)(build 1.8.0_292-b10)
OpenJDK 64-Bit Server VM (AdoptOpenJDK)(build 25.292-b10, mixed mode)
```
JDK를 설치하면 Java 컴파일러도 같이 설치됩니다.  
아래의 명령어를 실행하여 Java 컴파일러도 잘 설치되었는지 확인합니다.
```
javac -version

javac 1.8.0_292
```
<br></br><br></br><br></br><br></br>





# **❐ Android Studio 설치**
Android Studio는 Android 개발 툴입니다. React Native로 Android 앱을 개발하기 위해서는 꼭 필요합니다.
> Android Studio 사이트 : https://developer.android.com/studio  
> Android Studio 설치 가이드 : https://developer.android.com/studio/install

Android Studio 사이트에서 다운로드 받아 설치합니다.  
![](/assets/react-native-install_install-androidstudio1.png)

Android Studio > Configure > SDK Manager에서 SDK Platform을 설치합니다.  
![](/assets/react-native-install_install-androidstudio2.png)  
<br></br><br></br><br></br><br></br>





# **❐ Android Emulator 설치**
Android Studio > Tool > SDK Manager에서 Android Emulator를 설치합니다.  
![](/assets/react-native-install_install-android-emulator1.png)  

Android Studio > Tool > AVD Manager에서 Create Virtual Device 버튼 선택하여 Android Emulator를 생성합니다.  
![](/assets/react-native-install_install-android-emulator2.png)  

원하는 Hardware 선택합니다.  
![](/assets/react-native-install_install-android-emulator3.png)  

원하는 OS 선택합니다.  
![](/assets/react-native-install_install-android-emulator4.png)  

기타 설정 선택합니다.  
![](/assets/react-native-install_install-android-emulator5.png)  

Android 시뮬레이터가 생성된 것을 확인합니다.  
![](/assets/react-native-install_install-android-emulator6.png)  
<br></br><br></br><br></br><br></br>





# **❐ Android Studio 환경 변수 설정**
Android Studio SDK 환경 설정 화면에서 Android SDK 위치를 확인합니다.  
![](/assets/react-native-install_setting-androidstudio.png)

~/.bash_profile 파일 또는 ~/.zshrc 파일을 열고 아래와 같이 환경 변수를 추가합니다.
```
vi ~/.bash_profile

export ANDROID_HOME=[Android SDK 위치]/Android/sdk
export PATH=$PATH:$ANDROID_HOME/emulator
export PATH=$PATH:$ANDROID_HOME/tools
export PATH=$PATH:$ANDROID_HOME/tools/bin
export PATH=$PATH:$ANDROID_HOME/platform-tools
```

아래의 명령어를 실행하여 adb 환경 변수 설정이 잘 되었는지 확인합니다.
```
adb version

Android Debug Bridge version 1.0.41
Version 31.0.0-7110759
Installed as [Android SDK 위치]/platform-tools/adb
```
<br></br><br></br><br></br><br></br>





# **❐ VSCode 설치 (선택)**
React Native 코드를 편집할 때 사용합니다.  
WebStorm, Atom 등등 다른 에디터/IDE를 사용하셔도 됩니다.  
>Visual Studio 사이트 : https://code.visualstudio.com/

Visual Studio 사이트에서 다운로드 받아 설치합니다.  
![](/assets/react-native-install_install-vscode.png)
<br></br><br></br><br></br><br></br>





# **<참고>**
아래 React Native 사이트를 참고하여 작성하였습니다.
> React Native 사이트 : https://reactnative.dev/docs/environment-setup

<br></br><br></br>