---
emoji: 💻
title: '[Kubernetes] kubectl 설치하고 사용하기 (Mac OS 기준)'
created: 2022-07-24
modified: 2022-07-24
link: ''
tags:
- Infra
---
<br></br>

# **❐ kubectl 란?**
쿠버네티스 API를 사용하여 쿠버네티스 클러스터의 컨트롤 플레인과 통신하기 위한 커맨드라인 툴입니다.
<br></br><br></br><br></br><br></br>





# **❐ kubectl 설치**
brew를 이용하여 kubectl를 설치합니다.
```
brew install kubectl
```

kubectl 버전을 확인합니다.
```
kubectl version
```
<br></br><br></br><br></br><br></br>





# **❐ 인증 설정**
### **kubeconfig 생성**
```
$ kubectl config use-context {context name}
```

### **kubeconfig 파일 확인**
kubeconfig 파일에 설정된 데이터를 확인 및 수정합니다.
```
cd $HOME/.kube
vi config
```
<br></br><br></br><br></br><br></br>





# **❐ kubectl 명령어**
### **Pod 조회하기**
```
kubectl get pod
```
<br></br><br></br>
