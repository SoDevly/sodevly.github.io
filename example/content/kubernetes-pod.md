---
emoji: 💻
title: '[실습] Pod 생성해보기'
created: 2020-08-26
modified: 2020-08-26
link: ''
tags:
  - Docker/Kubernetes
---
<br></br>





# **❐ 실습 내용**
파드를 생성하는 방식은 크게 2가지가 있습니다. 각 방식으로 파드를 생성해봅시다.
- yaml파일을 통해 파드 생성
- 명령어를 통해 파드 생성
<br></br><br></br><br></br><br></br>





# **[방법1] yaml파일을 통해 파드 생성**

### **yaml 파일 생성**
jenkins-pod.yaml 파일을 생성합니다.
```
root@instance-1:~# vi jenkins-pod.yaml
```
<br></br>

### **yaml 파일 작성**
jenkins-pod.yaml 파일에 아래와 같이 작성합니다.
jenkins 이미지를 실행하는 파드를 생성하고, 파드 이름은 jenkins-pod로 하겠다는 의미입니다.
```
apiVersion: v1              # 디스크립터가 사용하는 API 버전
kind: Pod                   # 리소스 종류
metadata:              
  name: jenkins-pod         # 파드 이름
spec:
  containers:          
  - name: jenkins           # 생성할 컨테이너 이름
    image: jenkins/jenkins  # 생성할 컨테이너 이미지
    ports:
    - containerPort: 8080   # 애플리케이션 포트
```
<br></br>

### **yaml 파일 적용**
jenkins-pod.yaml 파일 내용을 적용합니다.
```
root@instance-1:~# kubectl create -f jenkins-pod.yaml
pod/jenkins-pod created
```
<br></br>

### **파드 확인**
jenkins-pod 파드가 생성된 것을 확인할 수 있습니다.
```
root@instance-1:~# kubectl get pod
NAME          READY   STATUS    RESTARTS   AGE
jenkins-pod   1/1     Running   0          23s
```
<br></br>

### **파드 삭제**
jenkins-pod 파드를 삭제 후, 파드를 확인합니다.
jenkins-pod 파드가 삭제된 것을 확인할 수 있습니다.
```
root@instance-1:~# kubectl delete pod jenkins-pod
pod "jenkins-pod" deleted
root@instance-1:~# kubectl get pod
No resources found in default namespace.
```
<br></br><br></br><br></br><br></br>





# **[방법2] 명령어를 통해 파드 생성**

### **파드 확인**
파드가 없는 것을 확인할 수 있습니다.
```
root@instance-1:~# kubectl get pod
No resources found in default namespace.
```
<br></br>

### **파드 생성**
nginx 이미지를 실행하는 파드를 생성하고, 파드 이름은 nginx-pod로 지었습니다.
그리고 스펙은 nginx-pod.yaml 파일에 기록합니다.
```
root@instance-1:~# kubectl run nginx-pod --image=nginx --dry-run=client -o yaml > nginx-pod.yaml
root@instance-1:~# kubectl create -f nginx-pod.yaml 
pod/nginx-pod created
```
<br></br>

### **파드 확인**
nginx-pod 파드가 생성된 것을 확인할 수 있습니다.
```
root@instance-1:~# kubectl get pod
NAME        READY   STATUS    RESTARTS   AGE
nginx-pod   1/1     Running   0          24s
```
<br></br>

### **파일 확인**
nginx-pod.yaml 파일이 생성된 것을 확인할 수 있습니다.
```
root@instance-1:~# ls
kube_install.sh  nginx-pod.yaml  snap
```
<br></br>

### **yaml 파일 내용 확인**
nginx-pod.yaml 파일을 열어 내용을 확인합니다.
```
root@instance-1:~# vi nginx-pod.yaml
apiVersion: v1
kind: Pod
metadata:
  creationTimestamp: null
  labels:
    run: nginx-pod
  name: nginx-pod
spec:
  containers:
  - image: nginx
    name: nginx-pod
    resources: {}
  dnsPolicy: ClusterFirst
  restartPolicy: Always
status: {}
```
<br></br>

### **파드 삭제**
nginx-pod 파드를 삭제 후, 파드를 확인합니다.
nginx-pod 파드가 삭제된 것을 확인할 수 있습니다.
```
root@instance-1:~# kubectl delete pod nginx-pod
pod "nginx-pod" deleted
root@instance-1:~# kubectl get pod
No resources found in default namespace.
```
<br></br><br></br>