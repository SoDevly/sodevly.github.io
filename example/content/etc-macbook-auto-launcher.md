---
emoji: 💻
title: '맥북(MacBook) 프로그램 자동 실행 끄기/켜기'
created: 2022-02-01
modified: 2022-02-01
link: ''
tags:
  - Etc
---
<br></br>





# **❐ [방법1] 시스템 설정 > 사용자 및 그룹 사용**
`시스템 설정 > 사용자 및 그룹`에서 일반적인 시작프로그램들을 추가/삭제 할 수 있습니다.  
![](/assets/etc-auto-launch.png)
<br></br><br></br><br></br><br></br>





# **❐ [방법2] launchctl 사용**
`시스템 설정 > 사용자 및 그룹`에서 시작프로그램들을 추가/삭제 할 수 없는 경우도 있습니다.  
대부분 서비스 형태로 백그라운드에서 시작시키는 시작프로그램들 입니다.  
이러한 형태의 시작프로그램은 Launchctl CLI 명령어로 추가/삭제 할 수 있습니다.
<br></br><br></br>





### 시작프로그램 리스트 확인
```bash
# 모든 사용자 시작프로그램 리스트 확인
$ ls /Library/LaunchAgents
com.cisco.anyconnect.aciseposture.plist	com.genians.launch.agent.plist
com.cisco.anyconnect.gui.plist		com.microsoft.update.agent.plist
com.cisco.anyconnect.notification.plist	com.riverbed.useragentd.plist

# 특정 사용자만 시작프로그램 리스트 확인
# ls /Users/유저명/Library/LaunchAgents
$ ls /Users/sohee/Library/LaunchAgents
com.cisco.anyconnect.aciseposture.plist	com.genians.launch.agent.plist
com.cisco.anyconnect.gui.plist		com.microsoft.update.agent.plist
com.cisco.anyconnect.notification.plist	com.riverbed.useragentd.plist
```

아래 명령어로도 확인가능합니다.
```bash
$ launchctl list
```
<br></br><br></br>




### 자동 실행 끄기(unload)
```bash
# 모든 사용자 서비스 자동 실행 끄기
#launchctl unload -w /Library/LaunchAgents/서비스 네임.plist
launchctl unload -w /Library/LaunchAgents/com.cisco.anyconnect.gui.plist

# 특정 사용자만 서비스 자동 실행 끄기
#launchctl unload -w /Users/유저명/Library/LaunchAgents/서비스 네임.plist
launchctl unload -w /Users/sohee/Library/LaunchAgents/com.cisco.anyconnect.gui.plist
```
<br></br><br></br>





### 자동 실행 켜기(load)
```bash
# 모든 사용자 서비스 자동 실행 켜기
#launchctl load /Library/LaunchAgents/서비스 네임.plist
launchctl load -w /Library/LaunchAgents/com.cisco.anyconnect.gui.plist

# 특정 사용자만 서비스 자동 실행 켜기
#launchctl load /Users/유저명/Library/LaunchAgents/서비스 네임.plist
launchctl load -w /Users/sohee/Library/LaunchAgents/com.cisco.anyconnect.gui.plist
```
<br></br><br></br>