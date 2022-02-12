---
emoji: 💻
title: 'Node.js 버전 여러개 사용하기 (nvm)'
created: 2021-05-20
modified: 2021-05-20
link: ''
tags:
  - React Native
  - React
---
<br></br>





# **❐ nvm이란?**
`nvm(Node Version Manager)`은 <u>Node.js 버전을 여러개 설치하여 관리해주는 도구입니다.</u>  
nvm을 사용하면 Node.js 버전을 여러개 설치하고 간단하게 스위칭하며 사용할 수 있습니다.  
주로 여러개의 프로젝트를 동시에 진행하는데 각 프로젝트마다 Node.js 버전이 다른 경우, Node.js 버전을 여러개 사용하기 위해 nvm을 사용합니다.
<br></br><br></br><br></br><br></br>





# **❐ nvm 설치**
### nvm 설치
```shell
$ curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.38.0/install.sh | bash
```
<br></br>

### 환경변수 설정
bash 쉘을 사용하는 경우 ~/.bash_profile 파일에 스크립트 추가하시고,  
zsh 쉘을 사용하는 경우 ~/.zshrc 파일에 스크립트를 추가하시면 됩니다.
```shell
$ vim ~/.bash_profile

# 아래 스크립트를 추가해주세요.
export nvm_DIR="$HOME/.nvm"
  [ -s "/usr/local/opt/nvm/nvm.sh" ] && . "/usr/local/opt/nvm/nvm.sh"  # This loads nvm
```
<br></br>

### nvm 설치 확인
```shell
$ nvm --version
0.38.0
```
<br></br><br></br><br></br><br></br>





# **❐ nvm 명령어**
### Node.js 버전 설치
```shell
# node 최신 버전 설치 (설치 당시 기준)
$ nvm install node

# node LTS 최신버전 설치
$ nvm install --lts

# node 특정 버전 설치
# nvm install [버전명]
$ nvm install v14.17.6
```
<br></br>





### Node.js 버전 삭제
```shell
# nvm uninstall [버전명]
$ nvm uninstall v14.17.6
```
<br></br>




### nvm에 설치되어 있는 Node.js 버전 리스트 출력
```shell
$ nvm ls
       v10.24.1
       v14.17.6
->      v16.3.0
         system
default -> v16.3.0
iojs -> N/A (default)
unstable -> N/A (default)
node -> stable (-> v16.3.0) (default)
stable -> 16.3 (-> v16.3.0) (default)
lts/* -> lts/fermium (-> v14.17.6)
lts/argon -> v4.9.1 (-> N/A)
lts/boron -> v6.17.1 (-> N/A)
lts/carbon -> v8.17.0 (-> N/A)
lts/dubnium -> v10.24.1
lts/erbium -> v12.22.6 (-> N/A)
lts/fermium -> v14.17.6
```
<br></br>





### 사용하는 Node.js 버전 변경
```shell
# nvm use [버전명]
$ nvm use v14.17.6
```
<br></br>





### Node.js 기본 버전 설정
터미널창을 종료했다가 다시 실행하면 설정한 Node.js 기본 버전으로 변경됩니다.  
기본 버전을 변경하고 싶은 경우 아래 명령어를 사용하면 됩니다.
```shell
# 특정 버전으로 설정
# nvm alias default [버전명]
$ nvm alias default 8.9.4

# 설치되어 있는 가장 최신버전으로 설정
$ nvm alias default node
```
<br></br><br></br>
