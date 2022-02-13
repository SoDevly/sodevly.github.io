---
emoji: 💻
title: '[실습] Replicaset 설정해보기'
created: 2020-08-28
modified: 2020-08-28
link: ''
tags:
  - Docker/Kubernetes
---
<br></br>





# **❐ 실습 내용**
yaml 파일을 이용하여 파드를 생성하고, 레플리카셋을 설정해봅시다.
<br></br><br></br><br></br><br></br>





### **파드 확인**
```
root@instance-1:~# kubectl get pod
No resources found in default namespace.
```
<br></br><br></br>

### **yaml 파일 생성**
rs.yaml 파일을 생성합니다.
```
root@instance-1:/etc/kubernetes/manifests# vi rs.yaml
```
<br></br><br></br>

### **yaml 파일 작성**
rs.yaml 파일에 아래와 같이 작성합니다.
```
apiVersion: apps/v1
kind: ReplicaSet
metadata:
  name: nginx-rs
spec:
  template:
    metadata:
      name: nginx-rs
      labels:
        app: nginx-rs
    spec:
      containers:
      - name: nginx-rs
        image: nginx
        ports:
        - containerPort: 80
  replicas: 3
  selector:
    matchLabels:
      app: nginx-rs
```
<br></br><br></br>

### **yaml 파일 적용**
rs.yaml 파일 내용을 적용합니다.
```
root@instance-1:/etc/kubernetes/manifests# kubectl create -f rs.yaml
```
<br></br><br></br>

### **파드 확인**
파드가 3개 생성된 것을 볼 수 있습니다.
```
root@instance-1:/etc/kubernetes/manifests# kubectl get pod
NAME             READY   STATUS    RESTARTS   AGE
nginx-rs-kxtmx   1/1     Running   0          6s
nginx-rs-plnqp   1/1     Running   0          6s
nginx-rs-xs9pp   1/1     Running   0          6s
```
<br></br><br></br>

### **파드 갯수 확인**
파드 갯수를 조회할 수 있습니다.
```
root@instance-1:/etc/kubernetes/manifests# kubectl get rs
NAME       DESIRED   CURRENT   READY   AGE
nginx-rs   3         3         3       90s
```
<br></br><br></br><br></br><br></br>





### **레플리카셋 갯수 변경**
nginx-rs 파드의 레플리카셋를 5개로 변경합니다.
변경 후 파드를 조회해보면 5개로 변경된 것을 볼 수 있습니다.
```
root@instance-1:/etc/kubernetes/manifests# kubectl scale rs/nginx-rs --replicas=5
replicaset.apps/nginx-rs scaled

root@instance-1:/etc/kubernetes/manifests# kubectl get pod
NAME             READY   STATUS    RESTARTS   AGE
nginx-rs-kppgm   1/1     Running   0          10s
nginx-rs-kxtmx   1/1     Running   0          2m55s
nginx-rs-plnqp   1/1     Running   0          2m55s
nginx-rs-xs9pp   1/1     Running   0          2m55s
nginx-rs-zc26r   1/1     Running   0          10s

root@instance-1:/etc/kubernetes/manifests# kubectl get rs
NAME       DESIRED   CURRENT   READY   AGE
nginx-rs   5         5         5       2m51s
```
<br></br><br></br><br></br><br></br>





### **파드 삭제하기**
nginx-rs-kppgm 파드를 삭제합니다.
파드 1개를 삭제했지만 자동으로 새로운 파드 1개를 생성하여 5개를 유지하는 것을 볼 수 있습니다.
```
root@instance-1:/etc/kubernetes/manifests# kubectl delete pod nginx-rs-kppgm
pod "nginx-rs-kppgm" deleted

root@instance-1:/etc/kubernetes/manifests# kubectl get pod
NAME             READY   STATUS    RESTARTS   AGE
nginx-rs-kxtmx   1/1     Running   0          7m57s
nginx-rs-plnqp   1/1     Running   0          7m57s
nginx-rs-xs9pp   1/1     Running   0          7m57s
nginx-rs-zc26r   1/1     Running   0          5m12s
nginx-rs-zdjmf   1/1     Running   0          9s
```
<br></br><br></br><br></br><br></br>





### **레플리카셋의 상태 확인**
레플리카셋의 상태를 확인할 수 있다.
```
root@instance-1:/etc/kubernetes/manifests# kubectl describe rs/nginx-rs
Name:         nginx-rs
Namespace:    default
Selector:     app=nginx-rs
Labels:       <none>
Annotations:  <none>
Replicas:     5 current / 5 desired
Pods Status:  5 Running / 0 Waiting / 0 Succeeded / 0 Failed
Pod Template:
  Labels:  app=nginx-rs
  Containers:
   nginx-rs:
    Image:        nginx
    Port:         80/TCP
    Host Port:    0/TCP
    Environment:  <none>
    Mounts:       <none>
  Volumes:        <none>
Events:
  Type    Reason            Age   From                   Message
  ----    ------            ----  ----                   -------
  Normal  SuccessfulCreate  21m   replicaset-controller  Created pod: nginx-rs-kxtmx
  Normal  SuccessfulCreate  21m   replicaset-controller  Created pod: nginx-rs-plnqp
  Normal  SuccessfulCreate  21m   replicaset-controller  Created pod: nginx-rs-xs9pp
  Normal  SuccessfulCreate  18m   replicaset-controller  Created pod: nginx-rs-zc26r
  Normal  SuccessfulCreate  18m   replicaset-controller  Created pod: nginx-rs-kppgm
  Normal  SuccessfulCreate  13m   replicaset-controller  Created pod: nginx-rs-zdjmf
  ```
<br></br><br></br><br></br><br></br>





### **레플리카셋 삭제**
레플리카셋을 삭제합니다.
단, 여기에서 관리하는 pod은 삭제되지 않습니다.
파드 1개를 삭제 후 파드를 조회해보면 자동으로 새로운 파드를 생성하지 않는 것을 볼 수 있습니다.
```
root@instance-1:/etc/kubernetes/manifests# kubectl delete rs/nginx-rs --cascade=false
warning: --cascade=false is deprecated (boolean value) and can be replaced with --cascade=orphan.
replicaset.apps "nginx-rs" deleted

root@instance-1:/etc/kubernetes/manifests# kubectl get pod
NAME             READY   STATUS    RESTARTS   AGE
nginx-rs-kxtmx   1/1     Running   0          26m
nginx-rs-plnqp   1/1     Running   0          26m
nginx-rs-xs9pp   1/1     Running   0          26m
nginx-rs-zc26r   1/1     Running   0          23m
nginx-rs-zdjmf   1/1     Running   0          18m

root@instance-1:/etc/kubernetes/manifests# kubectl delete pod nginx-rs-kxtmx
pod "nginx-rs-kxtmx" deleted

root@instance-1:/etc/kubernetes/manifests# kubectl get pod
NAME             READY   STATUS    RESTARTS   AGE
nginx-rs-plnqp   1/1     Running   0          27m
nginx-rs-xs9pp   1/1     Running   0          27m
nginx-rs-zc26r   1/1     Running   0          24m
nginx-rs-zdjmf   1/1     Running   0          19m
```
<br></br><br></br>