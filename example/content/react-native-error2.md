---
emoji: 💻
title: '[React Native] error listen EADDRINUSE: address already in use :::8081.'
created: 2022-03-10
modified: 2022-03-10
link: ''
tags:
  - React Native
---
<br></br>





# **❐ Error 로그** 
error listen EADDRINUSE: address already in use :::8081.
<br></br><br></br><br></br><br></br>





# **❐ 원인**
이미 사용중인 Port라서 발생한 에러입니다.  
주로 비정상 종료로 인해 해당 Port를 사용하는 프로세스가 정상적으로 종료되지 않았거나 다른 프로세스에서 해당 Port를 이미 사용 중인 경우 발생합니다.
<br></br><br></br><br></br><br></br>





# **❐ 해결방법**  
해당 Port를 사용하고 있는 프로세스를 찾습니다.
```bash
# sudo lsof -i :[Port]
$ sudo lsof -i :8081
Password:
COMMAND  PID    USER    FD   TYPE             DEVICE SIZE/OFF NODE NAME
node    8049    sohee   24u  IPv6 0xe13923114fbed4c1      0t0  TCP *:sunproxyadmin (LISTEN)
```

해당 Port를 사용하고 있는 프로세스를 강제종료 합니다.
```bash
# kill -9 [PID]
$ kill -9 8049
```
<br></br><br></br>
