---
emoji: 💻
title: 'Git 명령어 정리'
created: 2021-05-02
modified: 2021-05-02
link: ''
tags:
  - Markdown
---
<br></br>





# **❐ Git 저장소 만들기**
### 디렉토리에 Git 저장소를 만드는 CLI 명령어
```
cd [기존 디렉토리 위치]
git init
```
<br></br><br></br><br></br><br></br>





# **❐ Git 저장소 복사하기**
### 기존 Git 저장소를 복사하는 CLI 명령어
```
cd [복사할 디렉토리 위치]
git clone [git 주소]
```
<br></br>

### 기존 Git 저장소의 특정 branch 1개만 복사하는 CLI 명령어
```
cd [복사할 디렉토리 위치]
git clone -b [branch명] --single-branch [git 주소]
```
<br></br><br></br><br></br><br></br>





# **❐ 사용자 정보 설정**
### 사용자 정보(이름, 이메일) 설정하는 CLI 명령어
Git은 커밋할 때마다 이 정보를 사용합니다.
```
git config user.name [이름]
git config user.email [이메일]
```
<br></br>

### 설정한 사용자 정보를 확인할 수 있는 CLI 명령어
```
git config user.name
git config user.email
```
<br></br><br></br><br></br><br></br>





# **❐ 새로운 파일 추적하기**
### 새로운 파일을 추적하도록 추가하는 CLI 명령어
새로운 파일을 Git으로 관리하고 싶은 경우 사용합니다.
```
git add [파일명]
```
<br></br><br></br><br></br><br></br>





# **❐ Tag**
Tag는 의미있는 특정 시점을 Snapshot으로 기록하는 방법입니다. 
Tag는 수정이 불가능한 Read Only 상태의 하나의 완전한 Branch 형태를 띕니다.
Tag를 이용하여 특정 시점으로 롤백하거나 배포 버전을 생성하는 등의 용도로 많이 사용됩니다.

### Local Repository에 관리되는 Tag를 확인할 수 있는 CLI 명령어
```
git tag

1.0.0  
1.1.0  
2.0.0  
```
<br></br>

### Remote Repository에 관리되는 Tag를 확인할 수 있는 CLI 명령어
```
git ls-remote --tags

From https://github.com/zdlath/zdlath.github.io.git  
15a5c25bb0e7330de2acb15e8d6b3f62613a1392        refs/tags/1.0.0  
16a5c23ba0e7890de2adb15e8d6b3f62613c1391        refs/tags/1.1.0  
17a5c22be0e8830de2bcb15e8d6b3f62613c1394        refs/tags/2.0.0  
```
<br></br>

### Local Repository에 Tag를 생성하는 CLI 명령어
```
git tag [Tag명]

ex)
git tag v2.2.1
```
<br></br>

### Remote Repository에 Tag를 PUSH하는 CLI 명령어
```
git push -u [Remote명] [Tag명]

ex)
git push -u origin v2.2.1

Total 0 (delta 0), reused 0 (delta 0)  
To https://github.com/zdlath/zdlath.github.io.git  
 \* [new tag]           v2.2.1 -> v2.2.1
```
<br></br>

### Local Repository에 있는 모든 Tag를 Remote Repository에 PUSH하는 CLI 명령어
```
git push origin --tags
```
<br></br>

### Local Repository에 있는 Tag를 삭제하는 CLI 명령어
```
git tag -d [Tag명]

ex)
git tag -d v2.2.1

Deleted tag 'v2.2.1' (was 3b0cb63)
```
<br></br>

### Remote Repository에 있는 Tag를 삭제하는 CLI 명령어
```
git push [Remote명] -d [Tag명]

ex)
git push origin -d v2.2.1

To https://...
 - [deleted]         v2.2.1
 ```
<br></br><br></br><br></br><br></br>





# **❐ Branch**
Branch는 독립적으로 어떤 작업을 진행하기 위한 방법이다.

### Local Repository에 Branch를 생성하는 CLI 명령어
```
git branch [Branch 이름]
```
<br></br>

### Remote Repository에 Branch를 PUSH하는 CLI 명령어
```
git push --set-upstream origin [Branch 이름]
```
<br></br>

### Local Repository에 관리되는 Branch를 삭제하는 CLI 명령어
```
git branch -d [Branch 이름]
```
<br></br>

### Remote Repository에 관리되는 Branch를 삭제하는 CLI 명령어
```
git push origin --delete [Branch 이름]
```
<br></br>

### Local Repository에 관리되는 Branch를 확인할 수 있는 CLI 명령어
앞에 *표시는 현재 선택된 Branch를 의미합니다.
```
git branch

* develop
master
```
<br></br>

### Remote Repository에 관리되는 Branch를 확인할 수 있는 CLI 명령어
```
git branch -r

origin/develop
origin/master
```
<br></br>

### Local Repository와 Remote Repository에 관리되는 Branch를 확인할 수 있는 CLI 명령어
```
git branch --all

* develop
  master
  remotes/origin/develop
  remotes/origin/master
```
<br></br>

### Local Repository에 관리되는 Branch를 변경할 수 있는 CLI 명령어
```
git checkout [Branch 이름]
```
<br></br><br></br><br></br><br></br>





# **❐ 히스토리 그대로 가져와서 저장소 옮기기**
```
git clone --mirror [기존 git주소]
cd [clone해서 다운로드받은 git 폴더명]
git remote set-url origin [옮길 git 주소]
git push --mirror
```
<br></br><br></br><br></br><br></br>




# **<참고>**
아래 Git 사이트를 참고하여 작성하였습니다.
> Git 사이트 : https://git-scm.com/

<br></br><br></br>