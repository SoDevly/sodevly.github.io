---
emoji: 💻
title: '[Redis] redis-cli 설치하고 사용하기 (Mac OS 기준)'
created: 2022-07-22
modified: 2022-07-22
link: ''
tags:
- Infra
---
<br></br>

# **❐ Redis 란?**
레디스는 고성능 키-값 저장소로서 문자열, 리스트, 해시, 셋, 정렬된 셋 형식의 데이터를 지원하는 NoSQL입니다.
<br></br><br></br><br></br><br></br>





# **❐ Redis 설치**
brew를 이용하여 Redis를 설치합니다.
```
brew install redis
```

Redis 버전을 확인합니다.
```
redis-server --version
```
<br></br><br></br><br></br><br></br>





# **❐ redis-cli 명령어**
### **Redis 접속하기**
```
redis-cli -h {접속할 호스트} -p {접속할 포트}
```
<br></br><br></br>

### **Redis 정보보기**
```
redis-cli info
```
<br></br><br></br>

### **Redis에 있는 Key의 전체 갯수 가져오기**
```
dbsize
```
<br></br><br></br>

### **Key 조회하기**
```
keys {패턴}
```
keys 명령어는 키가 많으면 키를 찾는 소요시간이 길어질 수 있습니다.  
이 때, Redis의 one thread 정책 특성 때문에 키를 찾는 동안 다른 작업을 하지 못하게 됩니다.  
따라서 keys 명령어보단 page, cusor 개념이 들어간 scan 명령어로 대체하여 사용하는 것이 좋습니다.  
처음 시작 cusor index는 0입니다.  
```
scan {시작 cusor index} count {조회갯수} match {패턴}
```
<br></br><br></br>

### **Key에 Value 저장하기**
```
set {key} {value}
```
<br></br><br></br>

### **Key에 저장된 Value 가져오기**
```
get {key}
```
<br></br><br></br>

### **특정 Key 삭제하기**
```
del {key}
```
<br></br><br></br>

### **모든 Key 삭제하기**
```
flushAll
```
<br></br><br></br>

### **Key 이름 변경하기**
```
rename {기존key이름} {변경할key이름}
```
<br></br><br></br>
