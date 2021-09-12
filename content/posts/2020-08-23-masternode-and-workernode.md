---
template: post
title: '[실습] 마스터 노드, 워커 노드 설정해보기'
slug: /posts/infra/masternode-and-workernode
draft: false
priority: 0
date: 2020-08-23T00:46:37.121Z
description: >-
category: Infra
tags:
  - Docker
  - Kubernetes
---

<br>

# <실습 내용>
마스터 노드와 워커 노드를 설정해봅시다.
<br><br><br><br>





### **VM 인스턴스 3개 만들기**
- 이름 : instance-1 / instance-2 / instance-3
- 부팅디스크 > 변경 버튼 클릭  
    운영체제 : Ubuntu 20.04 LTS 
    부팅디스크 유형 : 표준 영구디스크  
    크기 : 100  
- 방화벽 : HTTP 트래픽 허용 체크박스 체크
<br>

### **VM 인스턴스 터미널 창 열기**
연결 SSH 버튼 클릭하면 터미널 창이 열립니다.
<br><br><br><br>





### **sudo 권한 얻기**
3개의 VM 인스턴스에 모두 동일하게 실행합니다.
```
sudo -i
```
<br>

### **도커 설치**
3개의 VM 인스턴스에 모두 동일하게 실행합니다.
```
root@instance-1:~# apt update && apt install docker.io -y
```
<br>

### **쿠버네티스 관련 설치**
3개의 VM 인스턴스에 모두 동일하게 실행합니다.  

kube_install.sh 파일을 생성합니다.
```
root@instance-1:~# vim kube_install.sh
```

kube_install.sh 파일 내용을 아래와 같이 작성 후, 저장합니다.
```
sudo apt-get update
sudo apt-get install -y apt-transport-https ca-certificates curl
sudo curl -fsSLo /usr/share/keyrings/kubernetes-archive-keyring.gpg https://packages.cloud.google.com/apt/doc/apt-key.gpg
echo "deb [signed-by=/usr/share/keyrings/kubernetes-archive-keyring.gpg] https://apt.kubernetes.io/ kubernetes-xenial main" | sudo tee /etc/apt/sources.list.d/kubernetes.list
sudo apt-get update
sudo apt-get install -y kubelet=1.21.1-00 kubeadm=1.21.1-00 kubectl=1.21.1-00
sudo apt-mark hold kubelet kubeadm kubectl
```

kube_install.sh 파일을 실행합니다.
```
root@instance-3:~# bash kube_install.sh
```

정상적으로 설치되었는지 확인합니다.
```
root@instance-3:~# kubeadm version
kubeadm version: &version.Info{Major:"1", Minor:"21", GitVersion:"v1.21.1", GitCommit:"5e58841cce77d4bc13713ad2b91f
a0d961e69192", GitTreeState:"clean", BuildDate:"2021-05-12T14:17:27Z", GoVersion:"go1.16.4", Compiler:"gc", Platfor
m:"linux/amd64"}
```
<br><br><br><br>





### **마스터 노드 초기화 및 설정**
마스터 노드로 사용할 첫번째 VM 인스턴스에서만 수행합니다.  

마스터 노드를 초기화합니다.  
해당 명령어를 입력하면 초기화 성공 메시지 뒤에 노드 설정하는 방법이 나오는데 뒤에서 사용하니 저장해둡니다.
```
root@instance-3:~# sudo kubeadm init
(생략...)
Your Kubernetes control-plane has initialized successfully!
To start using your cluster, you need to run the following as a regular user:
  mkdir -p $HOME/.kube
  sudo cp -i /etc/kubernetes/admin.conf $HOME/.kube/config
  sudo chown $(id -u):$(id -g) $HOME/.kube/config
Alternatively, if you are the root user, you can run:
  export KUBECONFIG=/etc/kubernetes/admin.conf
You should now deploy a pod network to the cluster.
Run "kubectl apply -f [podnetwork].yaml" with one of the options listed at:
  https://kubernetes.io/docs/concepts/cluster-administration/addons/
Then you can join any number of worker nodes by running the following on each as root:
kubeadm join 10.182.0.5:6443 --token qwrwiq.e5swpracl8d6az93 \
        --discovery-token-ca-cert-hash sha256:e2078675607d5d92a4ca3e8c624e1f0413a493eae85ee0b9fa05dc9a8e2af401 
```

마스터 노드로 조인합니다.
```
kroot@instance-1:~# kubeadm join --control-plane
```

유저 설정합니다. (위에 kubeadm init 명령어 입력하면 나오는 노드 설정하는 방법에 유저 설정하는 명령어가 나와있으니 참고하시면 됩니다.)
```
root@instance-1:~# mkdir -p $HOME/.kube
root@instance-1:~# sudo cp -i /etc/kubernetes/admin.conf $HOME/.kube/config
root@instance-1:~# sudo chown $(id -u):$(id -g) $HOME/.kube/config
root@instance-1:~# export KUBECONFIG=/etc/kubernetes/admin.conf
```

weave net 설치합니다.
```
root@instance-1:~# kubectl apply -f "https://cloud.weave.works/k8s/net?k8s-version=$(kubectl version | base64 | tr -d '\n')"
```

노드 확인하는 명령어를 통해 마스터 노드가 보이는지 확인합니다.
```
root@instance-1:~# kubectl get nodes
NAME         STATUS   ROLES                  AGE    VERSION
instance-1   Ready    control-plane,master   2m5s   v1.21.1
```
<br><br><br><br>





### **워커 노드 초기화 및 설정**
워커 노드로 사용할 두번째, 세번째 VM 인스턴스에만 수행합니다.  

워커 노드로 조인합니다. (위에 kubeadm init 명령어 입력하면 나오는 노드 설정하는 방법에 워커 노드로 조인하는 명령어가 나와있으니 참고하시면 됩니다.)
```
root@instance-1:~# kubeadm join 10.182.0.5:6443 --token qwrwiq.e5swpracl8d6az93 \
        --discovery-token-ca-cert-hash sha256:e2078675607d5d92a4ca3e8c624e1f0413a493eae85ee0b9fa05dc9a8e2af401
```

첫번째 VM인스턴스에서 노드 확인하는 명령어를 통해 마스터 노드, 워커노드가 보이는지 확인합니다.
```
root@instance-1:~# kubectl get nodes
NAME         STATUS   ROLES                  AGE   VERSION
instance-1   Ready    control-plane,master   14m   v1.21.1
instance-2   Ready    <none>                 18s   v1.21.1
instance-3   Ready    <none>                 15s   v1.21.1
```
<br><br><br><br>





### **설정 초기화**
```
root@instance-1:~# kubeadm reset
```
<br><br>