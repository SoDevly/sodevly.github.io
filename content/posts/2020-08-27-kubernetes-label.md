---
template: post
title: '[실습] Pod에 Lable 설정해보기'
slug: /posts/infra/kubernetest-label
draft: false
priority: 0
date: 2020-08-27T00:46:37.121Z
description: >-
category: Infra
tags:
  - Docker
  - Kubernetes
---

<br>

# <실습 내용>
yaml 파일을 이용하여 파드를 생성하고, 파드에 레이블을 설정해봅시다.
<br><br><br><br>





### **파드 확인**
```
root@instance-1:~# kubectl get pod
No resources found in default namespace.
```
<br><br>

### **pod1.yaml 파일 생성**
pod1.yaml 파일을 생성합니다.
```
root@instance-1:~# vi pod.1yaml
```
<br><br>

### **yaml 파일 작성**
pod1.yaml 파일에 아래와 같이 작성합니다.
```
apiVersion: v1              # 디스크립터가 사용하는 API 버전
kind: Pod                   # 리소스 종류
metadata:              
  name: nginx               # 파드 이름
  labels:
    creation_method: manual
    env: production
spec:
  containers:          
  - name: nginx             # 생성할 컨테이너 이름
    image: nginx            # 생성할 컨테이너 이미지
    ports:
    - containerPort: 80     # 애플리케이션 포트
```
<br><br>

### **yaml 파일 적용**
pod1.yaml 파일 내용을 적용합니다.
```
root@instance-1:~# kubectl create -f pod1.yaml
pod/nginx created
```
<br><br>

### **pod2.yaml 파일 생성**
pod2.yaml 파일을 생성합니다.
```
root@instance-1:~# vi pod2.yaml
```
<br><br>

### **yaml 파일 작성**
pod2.yaml 파일에 아래와 같이 작성합니다.
```
apiVersion: v1              # 디스크립터가 사용하는 API 버전
kind: Pod                   # 리소스 종류
metadata:              
  name: jenkins             # 파드 이름
  labels:
    creation_method: manual
    env: develop
spec:
  containers:          
  - name: jenkins           # 생성할 컨테이너 이름
    image: jenkins          # 생성할 컨테이너 이미지
    ports:
    - containerPort: 80     # 애플리케이션 포트
```
<br><br>

### **yaml 파일 적용**
pod2.yaml 파일 내용을 적용합니다.
```
root@instance-1:~# kubectl create -f pod2.yaml
pod/jenkins created
```
<br><br>

### **파드 확인**
```
root@instance-1:~# kubectl get pod
NAME      READY   STATUS         RESTARTS   AGE
jenkins   0/1     ErrImagePull   0          10s
nginx     1/1     Running        0          6m58s
```
<br><br>

### *레이블 확인**
```
root@instance-1:~# kubectl get pod --show-labels
NAME      READY   STATUS             RESTARTS   AGE    LABELS
jenkins   0/1     ImagePullBackOff   0          76s    creation_method=manual,env=develop
nginx     1/1     Running            0          8m4s   creation_method=manual,env=production
```
<br><br>

### *레이블 추가**
nginx 파드에 team 레이블을 추가합니다.
```
root@instance-1:~# kubectl label pod nginx team=dev1 --overwrite
pod/nginx labeled

root@instance-1:~# kubectl get pod --show-labels
NAME      READY   STATUS             RESTARTS   AGE    LABELS
jenkins   0/1     ImagePullBackOff   0          76s    creation_method=manual,env=develop
nginx     1/1     Running            0          8m4s   creation_method=manual,env=production,team=dev1
```
<br><br>

### *레이블 삭제**
nginx 파드의 creation_method 레이블을 삭제합니다.
```
root@instance-1:/etc/kubernetes/manifests# kubectl label pod nginx creation_method-
pod/nginx labeled

root@instance-1:~# kubectl get pod --show-labels
NAME      READY   STATUS             RESTARTS   AGE    LABELS
jenkins   0/1     ImagePullBackOff   0          76s    creation_method=manual,env=develop
nginx     1/1     Running            0          8m4s   env=production,team=dev1
```
<br><br>

### *특정 레이블만 확인**
env 레이블 값을 확인할 수 있습니다.
```
root@instance-1:~# kubectl get pod -L env
NAME      READY   STATUS         RESTARTS   AGE     ENV
jenkins   0/1     ErrImagePull   0          3m34s   develop
nginx     1/1     Running        0          10m     production
```
<br><br>

### *특정 레이블을 가진 파드만 필터하여 확인**
team 레이블을 가진 파드만 확인할 수 있습니다.
```
root@instance-1:~# kubectl get pod --show-labels -l team
NAME    READY   STATUS    RESTARTS   AGE   LABELS
nginx   1/1     Running   0          10m   env=production,team=dev1
```
<br><br>

### *특정 레이블을 가지고 있지 않은 파드만 필터하여 확인**
team 레이블을 가지고 있지 않은 파드만 확인할 수 있습니다.
```
root@instance-1:~# kubectl get pod --show-labels -l '!team'
NAME      READY   STATUS             RESTARTS   AGE     LABELS
jenkins   0/1     ImagePullBackOff   0          4m11s   creation_method=manual,env=develop
```
<br><br>

### *특정 레이블의 값을 조건으로 일치하는 파드만 필터하여 확인**
env 레이블의 값이 production인 파드만 확인할 수 있습니다.
```
root@instance-1:~# kubectl get pods --show-labels -l env=production
NAME    READY   STATUS    RESTARTS   AGE   LABELS
nginx   1/1     Running   0          14m   env=production,team=dev1
```
<br><br>