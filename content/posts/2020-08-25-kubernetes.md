---
template: post
title: '[실습] Kubernetes 사용해보기'
slug: /posts/infra/kubernetes
draft: false
priority: 0
date: 2020-08-25T00:46:37.121Z
description: >-
category: Infra
tags:
  - Docker
  - Kubernetes
---

<br>

# <실습 내용>
쿠버네티스를 사용하여 jenkins를 설치해보자. 
<br><br><br><br>





### **마스터노드 VM 인스턴스 터미널 창 열기**
마스터노드 VM 인스턴스 > 연결 SSH 버튼 클릭하면 터미널 창이 열립니다.
<br><br><br><br>





### **sudo 권한 얻기**
```
sudo -i
```
<br>

### **도커 허브에서 jenkins 도커 이미지 검색**
```
root@instance-1:~# docker search jenkins
NAME                                    DESCRIPTION                                     STARS     OFFICIAL   AUTOMA
TED
jenkins                                 Official Jenkins Docker image                   5293      [OK]       
jenkins/jenkins                         The leading open source automation server       2643                 
jenkinsci/blueocean                     https://jenkins.io/projects/blueocean           635                  
jenkinsci/jenkins                       Jenkins Continuous Integration and Delivery …   391                  
jenkins/jnlp-slave                      a Jenkins agent which can connect to Jenkins…   147                  [OK]
jenkinsci/jnlp-slave                    A Jenkins slave using JNLP to establish conn…   134                  [OK]
jenkinsci/slave                         Base Jenkins slave docker image                 66                   [OK]
(생략...)
```
<br>

### **jenkins 도커 이미지 실행 및 서비스, 파드 생성**
파드를 관리할 디플로이먼트를 만듭니다. 이 디플로이먼트 이름은 jk로 지었습니다.  
이 파드는 jenkins 도커 이미지를 실행하는 컨테이너를 실행합니다.
```
root@instance-1:~# kubectl create deploy jk --image=jenkins:2.60.3
deployment.apps/jk created
```
<br>

### **디폴로이먼트 리스트 확인**
jk 디폴리이언트가 조회되는 것을 확인할 수 있습니다.
```
root@instance-1:~# kubectl get deployment
NAME   READY   UP-TO-DATE   AVAILABLE   AGE
jk     1/1     1            1           17m
```
<br>

### **파드 리스트 확인**
파드가 생성된 것을 확인할 수 있다.
```
root@instance-1:~# kubectl get pods
NAME                  READY   STATUS    RESTARTS   AGE
jk-5879bd485b-dmqcs   1/1     Running   0          5s
```
<br>

### **서비스 리스트 확인**
서비스가 생성된 것을 확인할 수 있습니다.
```
root@instance-1:~# kubectl get svc
NAME         TYPE        CLUSTER-IP   EXTERNAL-IP   PORT(S)   AGE
kubernetes   ClusterIP   10.96.0.1    <none>        443/TCP   6m37s
```
<br>

### **로드밸런스 추가**
jk 디플로이먼트에 로드밸런스를 추가합니다. 이 로드밸런스 이름은 jk-svc로 지었습니다.  
서비스 리스트를 조회해보면 로드밸런스가 조회되는 것을 확인할 수 있습니다.
```
root@instance-1:~# kubectl expose deployment jk --type=LoadBalancer --name jk-svc --port=80 --target-port=8080
service/jk-svc exposed
root@instance-1:~# kubectl get svc
NAME         TYPE           CLUSTER-IP      EXTERNAL-IP   PORT(S)        AGE
jk-svc       LoadBalancer   10.104.137.34   <pending>     80:30419/TCP   2s
kubernetes   ClusterIP      10.96.0.1       <none>        443/TCP        8m44s
```
<br>

### **컨테이너에 도커 이미지가 잘 실행됬는지 확인**
로드밸런스의 EXTERNAL-IP로 접속하면 jenkins 사이트가 열립니다.  
<br><br>