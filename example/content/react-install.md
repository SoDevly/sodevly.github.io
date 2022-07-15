---
emoji: 💻
title: '[React] 설치 가이드'
created: 2022-05-30
modified: 2022-05-30
link: ''
tags:
  - React
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





# **❐ VSCode 설치 (선택)**
React 코드를 편집할 때 사용합니다.  
WebStorm, Atom 등등 다른 에디터/IDE를 사용하셔도 됩니다.  
>Visual Studio 사이트 : https://code.visualstudio.com/

Visual Studio 사이트에서 다운로드 받아 설치합니다.  
![](/assets/react-native-install_install-vscode.png)
<br></br><br></br>
