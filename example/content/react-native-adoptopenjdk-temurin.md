---
emoji: 💻
title: '[Java] AdoptOpenJDK -> temurin 이전'
created: 2022-07-28
modified: 2022-07-28
link: ''
tags:
  - Java
  - React Native
---
<br></br>



2021년 8월 2일 AdoptOpenJDK가 Eclipse Adoptium으로 이전되었습니다.
> https://blog.adoptopenjdk.net/2021/08/goodbye-adoptopenjdk-hello-adoptium/

따라서 AdoptOpenJDK는 지원 중단될 예정이므로 Adoptium으로 이전할 것을 권장하고 있습니다.
> https://github.com/AdoptOpenJDK/homebrew-openjdk

<br></br><br></br>





# **❐ 이전 방법**
adoptopenjdk를 삭제합니다.
```
brew untap AdoptOpenJDK/openjdk
```

temurin를 설치합니다.
```
#가장 최신 버전을 설치하고 싶은 경우
brew install --cask temurin

#특정 버전을 설치하고 싶은 경우
brew tap homebrew/cask-versions
brew install --cask temurin8
```
<br></br><br></br>
