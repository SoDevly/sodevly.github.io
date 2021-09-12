---
template: post
title: '[실습] Deploy 사용해보기'
slug: /posts/infra/kubernetest-deploy
draft: false
priority: 0
date: 2020-08-30T00:46:37.121Z
description: >-
category: Infra
tags:
  - Docker
  - Kubernetes
---

<br>

# <실습 내용>
디플로이먼트를 사용하여 파드를 생성해봅시다.
<br><br><br><br>





### **파드 확인**
```
root@instance-1:~# kubectl get pod
No resources found in default namespace.
```
<br><br>

### **디플로이먼트를 사용하여 파드 생성**
nginx:1.20.1 이미지를 실행하는 파드를 생성하고, 3개의 파드가 유지되도록 관리하는 디플로이먼트를 생성합니다. 이 디플로이먼트 이름은 nginx-deploy로 지었습니다.  
```
root@instance-1:~# kubectl create deploy nginx-deploy --image=nginx:1.20.1 --replicas=3 --dry-run=client -o yaml > deploy.yaml

root@instance-1:~# ls
deploy.yaml  kube_install.sh  snap

root@instance-1:~# kubectl apply -f deploy.yaml
deployment.apps/nginx-deploy created
```
<br><br>

### **파드 확인**
파드 3개가 생성된 것을 확인할 수 있습니다.
```
root@instance-1:~# kubectl get pod
NAME                            READY   STATUS    RESTARTS   AGE
nginx-deploy-55bd5b4d9d-2tk8x   1/1     Running   0          11s
nginx-deploy-55bd5b4d9d-55xff   1/1     Running   0          11s
nginx-deploy-55bd5b4d9d-5cbdj   1/1     Running   0          11s
```
<br><br>

### **파드가 실행하고 있는 nginx 버전 확인**
nginx:1.20.1가 실행 중인 것을 확인할 수 있습니다.
```
root@instance-1:~# kubectl get pod -o yaml nginx-deploy-55bd5b4d9d-2tk8x
apiVersion: v1
kind: Pod
metadata:
  creationTimestamp: "2021-09-01T13:20:08Z"
  generateName: nginx-deploy-55bd5b4d9d-
  labels:
    app: nginx-deploy
    pod-template-hash: 55bd5b4d9d
  name: nginx-deploy-55bd5b4d9d-2tk8x
  namespace: default
  ownerReferences:
  - apiVersion: apps/v1
    blockOwnerDeletion: true
    controller: true
    kind: ReplicaSet
    name: nginx-deploy-55bd5b4d9d
    uid: e2ee2fcc-5b7b-4fd8-99fd-feb097eb7217
  resourceVersion: "41314"
  uid: 7c93ed34-8788-426f-a2f2-01df4e972522
spec:
  containers:
  - image: nginx:1.20.1
    imagePullPolicy: IfNotPresent
    name: nginx
(생략...)    
```
<br><br>

### **yaml파일에 명시되어 있는 nginx 버전 변경**
deploy.yaml 파일을 열어 nginx:1.20.1 -> nginx:1.21.1으로 수정합니다.
```
root@instance-1:~# vi deploy.yaml 
```
<br><br>

### **수정한 yaml파일 적용**
```
root@instance-1:~# kubectl apply -f deploy.yaml
deployment.apps/nginx-deploy configured
```
<br><br>

### **파드 확인**
새로운 파드 3개가 생성된 것을 확인할 수 있습니다.
```
root@instance-1:~# kubectl get pods
NAME                            READY   STATUS    RESTARTS   AGE
nginx-deploy-69f689b6b9-9bfs2   1/1     Running   0          17s
nginx-deploy-69f689b6b9-mm4th   1/1     Running   0          19s
nginx-deploy-69f689b6b9-qcrmz   1/1     Running   0          16s
```
<br><br>

### **파드가 실행하고 있는 nginx 버전 확인**
nginx:1.21.1가 실행 중인 것을 확인할 수 있습니다.
```
root@instance-1:~# kubectl get pod -o yaml nginx-deploy-69f689b6b9-9bfs2
apiVersion: v1
kind: Pod
metadata:
  creationTimestamp: "2021-09-01T13:21:58Z"
  generateName: nginx-deploy-69f689b6b9-
  labels:
    app: nginx-deploy
    pod-template-hash: 69f689b6b9
  name: nginx-deploy-69f689b6b9-9bfs2
  namespace: default
  ownerReferences:
  - apiVersion: apps/v1
    blockOwnerDeletion: true
    controller: true
    kind: ReplicaSet
    name: nginx-deploy-69f689b6b9
    uid: 68308eac-30d0-4b20-b2b5-bb884e57066c
  resourceVersion: "41510"
  uid: 0866e603-a61d-489f-8e93-e07bec991d5f
spec:
  containers:
  - image: nginx:1.21.1
    imagePullPolicy: IfNotPresent
    name: nginx
```
<br><br>