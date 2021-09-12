---
template: post
title: '[실습] Rollback'
slug: /posts/infra/kubernetest-rollback
draft: false
priority: 0
date: 2020-08-31T00:46:37.121Z
description: >-
category: Infra
tags:
  - Docker
  - Kubernetes
---

<br>

# <실습 내용>
mongo:4.2를 실행하는 파드를 mongo:4.4로 업데이트 한 후, mongo:4.2로 롤백해봅시다.
<br><br><br><br>





### **디플로이먼트를 사용하여 파드 생성**
mongo:4.2 이미지를 실행하는 파드를 생성하고, 3개의 파드가 유지되도록 관리하는 디플로이먼트를 생성합니다. 이 디플로이먼트 이름은 mongo-deploy로 지었습니다.
해당 명령어는 히스토리에 기록합니다.
```
root@instance-1:~# kubectl create deploy mongo-deploy --image=mongo:4.2 --replicas=3 --dry-run=client -o yaml > mongo-deploy.yaml

root@instance-1:~# kubectl apply -f mongo-deploy.yaml --record=true
deployment.apps/mongo-deploy created
```
<br><br>

### **파드 확인**
```
root@instance-1:~# kubectl get pod
NAME                            READY   STATUS    RESTARTS   AGE
mongo-deploy-7b856d549b-mc8v2   1/1     Running   0          6s
mongo-deploy-7b856d549b-ncm5b   1/1     Running   0          6s
mongo-deploy-7b856d549b-t7qhs   1/1     Running   0          6s
```
<br><br>

### **파드가 실행하고 있는 mongo 버전 확인**
mongo:4.2가 실행 중인 것을 확인할 수 있습니다.
```
root@instance-1:~# kubectl get pod -o yaml mongo-deploy-7b856d549b-mc8v2
apiVersion: v1
kind: Pod
metadata:
  creationTimestamp: "2021-09-02T15:06:59Z"
  generateName: mongo-deploy-7b856d549b-
  labels:
    app: mongo-deploy
    pod-template-hash: 7b856d549b
  name: mongo-deploy-7b856d549b-mc8v2
  namespace: default
  ownerReferences:
  - apiVersion: apps/v1
    blockOwnerDeletion: true
    controller: true
    kind: ReplicaSet
    name: mongo-deploy-7b856d549b
    uid: 830f3c35-6ab1-4eb1-a7e2-ea78c6ff1a6b
  resourceVersion: "68961"
  uid: 78758cf8-6ce8-4b75-a792-44e4bdcb3528
spec:
  containers:
  - image: mongo:4.2
    imagePullPolicy: IfNotPresent
    name: mongo
```
<br><br>

### **히스토리 확인**
히스토리 내역에 기록이 추가된 것을 확인할 수 있습니다.
```
root@instance-1:~# kubectl rollout history deploy mongo-deploy
deployment.apps/mongo-deploy 
REVISION  CHANGE-CAUSE
1         kubectl apply --filename=mongo-deploy.yaml --record=true
```
<br><br>

### **yaml파일에 명시되어 있는 mongo 버전 변경**
mongo-deploy.yaml 파일을 열어 mongo:4.2 -> mongo:4.4으로 수정합니다.
```
root@instance-1:~# vi mongo-deploy.yaml
```
<br><br>

### **수정한 yaml파일 적용**
수정한 yaml파일을 적용합니다.
해당 명령어는 히스토리에 기록합니다.
```
root@instance-1:~# kubectl apply -f mongo-deploy.yaml --record=true
deployment.apps/mongo-deploy configured
```
<br><br>

### **파드 확인**
새로운 파드 3개가 생성된 것을 확인할 수 있습니다.
```
root@instance-1:~# kubectl get pods
NAME                           READY   STATUS    RESTARTS   AGE
mongo-deploy-948457786-27fqk   1/1     Running   0          14s
mongo-deploy-948457786-6lnvz   1/1     Running   0          12s
mongo-deploy-948457786-mz5ff   1/1     Running   0          15s
```
<br><br>

### **파드가 실행하고 있는 mongo 버전 확인**
mongo:4.4가 실행 중인 것을 확인할 수 있습니다.
```
root@instance-1:~# kubectl get pod -o yaml mongo-deploy-948457786-27fqk
apiVersion: v1
kind: Pod
metadata:
  creationTimestamp: "2021-09-02T15:08:23Z"
  generateName: mongo-deploy-948457786-
  labels:
    app: mongo-deploy
    pod-template-hash: "948457786"
  name: mongo-deploy-948457786-27fqk
  namespace: default
  ownerReferences:
  - apiVersion: apps/v1
    blockOwnerDeletion: true
    controller: true
    kind: ReplicaSet
    name: mongo-deploy-948457786
    uid: 04c001f0-bf2a-4fb9-b414-74858ba4d577
  resourceVersion: "69135"
  uid: 8743139a-e91e-4eea-843a-6e10a801f598
spec:
  containers:
  - image: mongo:4.4
    imagePullPolicy: IfNotPresent
    name: mongo
```
<br><br>

### **히스토리 확인**
히스토리 내역에 기록이 추가된 것을 확인할 수 있습니다.
```
root@instance-1:~# kubectl rollout history deploy mongo-deploy
deployment.apps/mongo-deploy 
REVISION  CHANGE-CAUSE
1         kubectl apply --filename=mongo-deploy.yaml --record=true
2         kubectl apply --filename=mongo-deploy.yaml --record=true
```
<br><br>

### **롤백하기**
히스토리를 롤백합니다.
```
root@instance-1:~# kubectl rollout undo deploy mongo-deploy
deployment.apps/mongo-deploy rolled back

root@instance-1:~# kubectl rollout history deploy mongo-deploy
deployment.apps/mongo-deploy 
REVISION  CHANGE-CAUSE
2         kubectl apply --filename=mongo-deploy.yaml --record=true
3         kubectl apply --filename=mongo-deploy.yaml --record=true
```
<br><br>

### **파드 확인**
새로운 파드 3개가 생성된 것을 확인할 수 있습니다.
```
root@instance-1:~# kubectl get pods
NAME                            READY   STATUS    RESTARTS   AGE
mongo-deploy-7b856d549b-6gzxs   1/1     Running   0          59s
mongo-deploy-7b856d549b-7cfdk   1/1     Running   0          57s
mongo-deploy-7b856d549b-jrv9j   1/1     Running   0          58s
```
<br><br>

### **파드가 실행하고 있는 mongo 버전 확인**
mongo:4.4에서 mongo:4.2로 롤백된 것을 볼 수 있습니다.
```
root@instance-1:~# kubectl get pod -o yaml mongo-deploy-7b856d549b-6gzxs
apiVersion: v1
kind: Pod
metadata:
  creationTimestamp: "2021-09-02T15:10:14Z"
  generateName: mongo-deploy-7b856d549b-
  labels:
    app: mongo-deploy
    pod-template-hash: 7b856d549b
  name: mongo-deploy-7b856d549b-6gzxs
  namespace: default
  ownerReferences:
  - apiVersion: apps/v1
    blockOwnerDeletion: true
    controller: true
    kind: ReplicaSet
    name: mongo-deploy-7b856d549b
    uid: 830f3c35-6ab1-4eb1-a7e2-ea78c6ff1a6b
  resourceVersion: "69349"
  uid: 39e47ef4-d467-4a2b-8336-74f2a017cd4b
spec:
  containers:
  - image: mongo:4.2
    imagePullPolicy: IfNotPresent
    name: mongo
```
<br><br>