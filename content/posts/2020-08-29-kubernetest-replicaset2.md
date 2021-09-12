---
template: post
title: '[실습] Replicaset의 문제점'
slug: /posts/infra/kubernetest-replicaset2
draft: false
priority: 0
date: 2020-08-29T00:46:37.121Z
description: >-
category: Infra
tags:
  - Docker
  - Kubernetes
---

<br>

# <실습 내용>
레플리카셋은 yaml파일 변경 후 적용 시, 모든 파드에 적용되지 않는다는 문제점이 있습니다.
해당 문제점을 확인해봅시다.
<br><br><br><br>





### **파드 확인**
```
root@instance-1:~# kubectl get pod
No resources found in default namespace.
```
<br><br>

### **yaml 파일 생성**
nginx.yaml 파일을 생성합니다.
```
root@instance-1:/etc/kubernetes/manifests# vi nginx.yaml
```
<br><br>

### **yaml 파일 작성**
nginx.yaml 파일에 아래와 같이 작성합니다.
```
apiVersion: apps/v1
kind: ReplicaSet
metadata:
  name: nginx
spec:
  template:
    metadata:
      name: nginx
      labels:
        app: nginx
    spec:
      containers:
      - name: nginx
        image: nginx:1.20.1
        ports:
        - containerPort: 80
  replicas: 3
  selector:
    matchLabels:
      app: nginx
```
<br><br>

### **yaml 파일 적용**
nginx.yaml 파일 내용을 적용합니다.
```
root@instance-1:/etc/kubernetes/manifests# kubectl create -f nginx.yaml
```
<br><br>

### **파드 확인**
파드가 3개 생성된 것을 볼 수 있습니다.
```
root@instance-1:/etc/kubernetes/manifests# kubectl get pod
NAME           READY   STATUS    RESTARTS   AGE
nginx-6jg7m   1/1     Running   0          11s
nginx-z7gjh   1/1     Running   0          11s
nginx-zmwfv   1/1     Running   0          11s
```
<br><br>

### **파드 yaml파일 내용 확인**
nginx1-6jg7m, nginx1-z7gjh, nginx1-zmwfv 파드의 yaml파일 내용을 확인합니다.
도커 이미지가 nginx:1.20.1인 것을 확인할 수 있습니다.
```
root@instance-1:~# kubectl get pod -o yaml nginx-6jg7m
apiVersion: v1
kind: Pod
metadata:
  creationTimestamp: "2021-08-29T14:34:49Z"
  generateName: nginx-
  labels:
    app: nginx
  name: nginx-6jg7m
  namespace: default
  ownerReferences:
  - apiVersion: apps/v1
    blockOwnerDeletion: true
    controller: true
    kind: ReplicaSet
    name: nginx
    uid: a827631e-6534-4c64-8e31-ae71d098861c
  resourceVersion: "25366"
  uid: 5637a3ae-96ee-49e2-81cf-9f0678e0a42e
spec:
  containers:
  - image: nginx:1.20.1
    imagePullPolicy: IfNotPresent
    name: nginx
    ports:
    - containerPort: 80
      protocol: TCP
    resources: {}
(생략...)

root@instance-1:/etc/kubernetes/manifests# kubectl get pod -o yaml nginx1-z7gjh
(생략...)
root@instance-1:/etc/kubernetes/manifests# kubectl get pod -o yaml nginx1-zmwfv
(생략...)
```
<br><br>

### **yaml 파일 수정**
nginx.yaml 파일을 열어 nginx:1.20.1 -> nginx:1.21.1으로 nginx 도커 이미지 버전을 변경합니다.
```
root@instance-1:/etc/kubernetes/manifests# vi nginx.yaml
```
```
apiVersion: apps/v1
kind: ReplicaSet
metadata:
  name: nginx
spec:
  template:
    metadata:
      name: nginx
      labels:
        app: nginx
    spec:
      containers:
      - name: nginx
        image: nginx:1.21.1
        ports:
        - containerPort: 80
  replicas: 3
  selector:
    matchLabels:
      app: nginx
```
<br><br>

### **수정한 yaml파일 적용**
수정한 nginx.yaml파일을 적용합니다.
```
root@instance-1:~# kubectl apply -f nginx.yaml
replicaset.apps/nginx configured
```
<br><br>

### **파드 yaml파일 내용 확인**
nginx1-6jg7m, nginx1-z7gjh, nginx1-zmwfv 파드의 yaml파일 내용을 확인합니다.
도커 이미지가 nginx:1.20.1 -> nginx:1.21.1로 변경되지 않은 것을 확인할 수 있습니다.
```
root@instance-1:~# kubectl get pod -o yaml nginx-6jg7m
apiVersion: v1
kind: Pod
metadata:
  creationTimestamp: "2021-08-29T14:34:49Z"
  generateName: nginx-
  labels:
    app: nginx
  name: nginx-6jg7m
  namespace: default
  ownerReferences:
  - apiVersion: apps/v1
    blockOwnerDeletion: true
    controller: true
    kind: ReplicaSet
    name: nginx
    uid: a827631e-6534-4c64-8e31-ae71d098861c
  resourceVersion: "25366"
  uid: 5637a3ae-96ee-49e2-81cf-9f0678e0a42e
spec:
  containers:
  - image: nginx:1.20.1
    imagePullPolicy: IfNotPresent
    name: nginx
    ports:
    - containerPort: 80
      protocol: TCP
    resources: {}
(생략...)

root@instance-1:/etc/kubernetes/manifests# kubectl get pod -o yaml nginx1-z7gjh
(생략...)
root@instance-1:/etc/kubernetes/manifests# kubectl get pod -o yaml nginx1-zmwfv
(생략...)
```
<br><br>