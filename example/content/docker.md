---
emoji: 💻
title: '[실습] Docker 사용해보기'
created: 2020-08-22
modified: 2020-08-22
link: ''
tags:
  - Docker/Kubernetes
---
<br></br>





# **❐ 실습 내용**
도커를 사용하여 tomcat을 설치해봅시다  
- 도커 허브에서 tomcat 도커 이미지 다운로드
- 컨테이너에 tomcat 도커 이미지를 실행
<br></br><br></br><br></br><br></br>





### **VM 인스턴스 1개 만들기**
- 부팅디스크 > 변경 버튼 클릭  
    운영체제 : centOS  
    부팅디스크 유형 : 표준 영구디스크  
    크기 : 100  
- 방화벽 : HTTP 트래픽 허용 체크박스 체크  
<br></br>

### **VM 인스턴스 터미널 창 열기**
연결 SSH 버튼 클릭하면 터미널 창이 열립니다.
<br></br><br></br><br></br><br></br>





### **sudo 권한 얻기**
```
sudo -i
```
<br></br>

### **yum 패키지 업데이트**
```
[root@instance-1 ~]# yum -y update
[root@instance-1 ~]# netstat -nap | grep LISTEN | grep 80
```
<br></br>

### **Docker, Docker registry 설치**
```
[root@instance-1 ~]# yum -y install docker dcoker-registry
```
<br></br>

### **부팅시 실행하도록 등록**
```
[root@instance-1 ~]# systemctl enable docker.service
Created symlink from /etc/systemd/system/multi-user.target.wants/docker.service to /usr/lib/systemd/system/docker.service.
```
<br></br>

### **도커 실행**
```
[root@instance-1 ~]# systemctl start docker.service
```
<br></br>

### **도커 상태 확인**
```
[root@instance-1 ~]# systemctl status docker.service
● docker.service - Docker Application Container Engine
   Loaded: loaded (/usr/lib/systemd/system/docker.service; enabled; vendor preset: disabled)
   Active: active (running) since Sun 2021-08-22 13:56:23 UTC; 4s ago
     Docs: http://docs.docker.com
 Main PID: 24385 (dockerd-current)
   CGroup: /system.slice/docker.service
           ├─24385 /usr/bin/dockerd-current --add-runtime docker-runc=/usr/libexec/docker/docker-runc-current --...
           └─24391 /usr/bin/docker-containerd-current -l unix:///var/run/docker/libcontainerd/docker-containerd....
Aug 22 13:56:21 instance-1 dockerd-current[24385]: time="2021-08-22T13:56:21.663686441Z" level=info msg="lib...391"
Aug 22 13:56:22 instance-1 dockerd-current[24385]: time="2021-08-22T13:56:22.761257418Z" level=info msg="Gra...nds"
Aug 22 13:56:22 instance-1 dockerd-current[24385]: time="2021-08-22T13:56:22.762622579Z" level=info msg="Loa...rt."
Aug 22 13:56:22 instance-1 dockerd-current[24385]: time="2021-08-22T13:56:22.797334396Z" level=info msg="Fir...rue"
Aug 22 13:56:23 instance-1 dockerd-current[24385]: time="2021-08-22T13:56:23.032767459Z" level=info msg="Def...ess"
Aug 22 13:56:23 instance-1 dockerd-current[24385]: time="2021-08-22T13:56:23.229234931Z" level=info msg="Loa...ne."
Aug 22 13:56:23 instance-1 dockerd-current[24385]: time="2021-08-22T13:56:23.248999778Z" level=info msg="Dae...ion"
Aug 22 13:56:23 instance-1 dockerd-current[24385]: time="2021-08-22T13:56:23.249041522Z" level=info msg="Doc...13.1
Aug 22 13:56:23 instance-1 systemd[1]: Started Docker Application Container Engine.
Aug 22 13:56:23 instance-1 dockerd-current[24385]: time="2021-08-22T13:56:23.265311787Z" level=info msg="API...ock"
Hint: Some lines were ellipsized, use -l to show in full.
```
<br></br><br></br><br></br><br></br>





### **도커 허브에서 tomcat 도커 이미지 검색**
```
[root@instance-1 ~]# docker search tomcat
INDEX       NAME                                    DESCRIPTION                                     STARS     OFFICIAL   AUTOMATED
docker.io   docker.io/tomcat                        Apache Tomcat is an open source implementa...   3099      [OK]       
docker.io   docker.io/tomee                         Apache TomEE is an all-Apache Java EE cert...   92        [OK]       
docker.io   docker.io/kubeguide/tomcat-app          Tomcat image for Chapter 1                      30                   
docker.io   docker.io/consol/tomcat-7.0             Tomcat 7.0.57, 8080, "admin/admin"              18                   [OK]
docker.io   docker.io/cloudesire/tomcat             Tomcat server, 6/7/8                            15                   [OK]
docker.io   docker.io/aallam/tomcat-mysql           Debian, Oracle JDK, Tomcat & MySQL              13                   [OK]
docker.io   docker.io/arm32v7/tomcat                Apache Tomcat is an open source implementa...   11                   
docker.io   docker.io/andreptb/tomcat               Debian Jessie based image with Apache Tomc...   10                   [OK]
docker.io   docker.io/maluuba/tomcat7-java8         Tomcat7 with java8.                             6                    
docker.io   docker.io/rightctrl/tomcat              CentOS , Oracle Java, tomcat application s...   6                    [OK]
docker.io   docker.io/unidata/tomcat-docker         Security-hardened Tomcat Docker container.      5                    [OK]
docker.io   docker.io/arm64v8/tomcat                Apache Tomcat is an open source implementa...   4                    
docker.io   docker.io/amd64/tomcat                  Apache Tomcat is an open source implementa...   3                    
docker.io   docker.io/cfje/tomcat-resource          Tomcat Concourse Resource                       2                    
docker.io   docker.io/fabric8/tomcat-8              Fabric8 Tomcat 8 Image                          2                    [OK]
docker.io   docker.io/jelastic/tomcat               An image of the Tomcat Java application se...   2                    
docker.io   docker.io/oobsri/tomcat8                Testing CI Jobs with different names.           2                    
docker.io   docker.io/99taxis/tomcat7               Tomcat7                                         1                    [OK]
docker.io   docker.io/camptocamp/tomcat-logback     Docker image for tomcat with logback integ...   1                    [OK]
docker.io   docker.io/chenyufeng/tomcat-centos      tomcat基于centos6的镜像                              1                    [OK]
docker.io   docker.io/picoded/tomcat7               tomcat7 with jre8 and MANAGER_USER / MANAG...   1                    [OK]
docker.io   docker.io/ppc64le/tomcat                Apache Tomcat is an open source implementa...   1                    
docker.io   docker.io/s390x/tomcat                  Apache Tomcat is an open source implementa...   0                    
docker.io   docker.io/secoresearch/tomcat-varnish   Tomcat and Varnish 5.0                          0                    [OK]
docker.io   docker.io/softwareplant/tomcat          Tomcat images for jira-cloud testing            0                    [OK]
```
<br></br>

### **도커 허브에서 tomcat 도커 이미지 다운로드**
도커 허브에서 검색되는 많은 tomcat 도커 이미지 중 아무거나 하나 다운로드 받습니다.
```
[root@instance-1 ~]# docker pull consol/tomcat-7.0
Using default tag: latest
Trying to pull repository docker.io/consol/tomcat-7.0 ... 
latest: Pulling from docker.io/consol/tomcat-7.0
e5ad7970bc69: Pull complete 
a3ed95caeb02: Pull complete 
d1bc08d19aa0: Pull complete 
e4b877670a03: Pull complete 
7fe52da169a9: Pull complete 
dd8c3151a5a5: Pull complete 
70eb33b1a032: Pull complete 
878a118528b8: Pull complete 
1c0747c147d5: Pull complete 
0d0d0f226ce8: Pull complete 
56357e7ea3fa: Pull complete 
3c3554f7c62d: Pull complete 
23de17079739: Pull complete 
Digest: sha256:8256b5e8e01fc4f6c1913e1fd70dea95ae656400f70fb1c12157d0e89e1ccaf7
Status: Downloaded newer image for docker.io/consol/tomcat-7.0:latest
```
<br></br>

### **다운로드받은 도커 이미지 리스트 확인**
위에서 다운로드 받은 tomcat 도커 이미지가 추가된 것을 볼 수 있습니다.
```
[root@instance-1 ~]# docker images
REPOSITORY                    TAG                 IMAGE ID            CREATED             SIZE
docker.io/consol/tomcat-7.0   latest              7c34bafd1150        6 years ago         601 MB
```
<br></br>

### **컨테이너에 도커 이미지 실행**
컨테이너에 tomcat 도커 이미지를 실행합니다. 이 컨테이너의 이름을 tc라고 지었습니다.
```
[root@instance-1 ~]# docker run -d -p 80:8080 --name tc consol/tomcat-7.0
c9ab95a12cd85520cb42994efaceb4090d24a3389d2ff7165f764d45c5242566
```
<br></br>

### **실행중인 컨테이너 리스트 확인**
tomcat 이미지가 실행중인 tc 컨테이너 1개가 출력된 것을 확인할 수  있습니다.
```
[root@instance-1 ~]# docker ps
CONTAINER ID        IMAGE               COMMAND                  CREATED             STATUS              PORTS                            NAMES
c9ab95a12cd8        consol/tomcat-7.0   "/bin/sh -c /opt/t..."   About an hour ago   Up About an hour    8778/tcp, 0.0.0.0:80->8080/tcp   tc
```
<br></br>

### **컨테이너에 도커 이미지가 잘 실행됬는지 확인**
VM 인스턴스 사이트 > 외부IP 클릭하면, 해당 외부 IP로 tomcat 사이트가 열립니다.  
![](/assets/tomcat1.png)
<br></br><br></br><br></br><br></br>





### **컨테이너 또는 도커 이미지 정보 확인**
```
[root@instance-1 ~]# docker inspect consol/tomcat-7.0
[
    {
        "Id": "sha256:7c34bafd11507bff45ed89ae7b2d56da68abd6b0f373c5e2a90393057785cca6",
        "RepoTags": [
            "docker.io/consol/tomcat-7.0:latest"
        ],
        "RepoDigests": [
            "docker.io/consol/tomcat-7.0@sha256:8256b5e8e01fc4f6c1913e1fd70dea95ae656400f70fb1c12157d0e89e1ccaf7"
        ],
        "Parent": "",
        "Comment": "",
        "Created": "2015-06-06T05:54:45.287323113Z",
        "Container": "5544910d974f121a6630b9676fe3469ae3cf9656b7263eb05066f31a99fd32b0",
        "ContainerConfig": {
            "Hostname": "eadddbb61a32",
            "Domainname": "",
            "User": "",
            "AttachStdin": false,
            "AttachStdout": false,
            "AttachStderr": false,
(생략...)
```
<br></br><br></br><br></br><br></br>





### **컨테이너 중지**
tc 컨테이너를 중지시킵니다.
tc 컨테이너가 중지되었기 때문에 실행중인 컨테이너 리스트에서 삭제된 것을 볼 수 있습니다.
```
[root@instance-1 ~]# docker ps
CONTAINER ID        IMAGE               COMMAND                  CREATED             STATUS              PORTS                            NAMES
c9ab95a12cd8        consol/tomcat-7.0   "/bin/sh -c /opt/t..."   About an hour ago   Up About an hour    8778/tcp, 0.0.0.0:80->8080/tcp   tc
[root@instance-1 ~]# docker stop tc
tc
[root@instance-1 ~]# docker ps
CONTAINER ID        IMAGE               COMMAND             CREATED             STATUS              PORTS               NAMES
```
<br></br><br></br><br></br><br></br>





### **컨테이너 실행**
tc 컨테이너를 실행시킵니다.
tc 컨테이너가 실행되었기 때문에 실행중인 컨테이너 리스트에 추가된 것을 볼 수 있습니다.
```
[root@instance-1 ~]# docker ps
CONTAINER ID        IMAGE               COMMAND             CREATED             STATUS              PORTS               NAMES
[root@instance-1 ~]# docker start tc
tc
[root@instance-1 ~]# docker ps
CONTAINER ID        IMAGE               COMMAND                  CREATED             STATUS              PORTS                            NAMES
c9ab95a12cd8        consol/tomcat-7.0   "/bin/sh -c /opt/t..."   About an hour ago   Up 5 seconds        8778/tcp, 0.0.0.0:80->8080/tcp   tc
```
<br></br><br></br><br></br><br></br>





### **컨테이너 삭제**
컨테이너를 삭제하기 전에 꼭 중지를 시켜야합니다.
tc 컨테이너를 중지 시킨 후 삭제합니다.
```
root@instance-1:~# docker ps -a
CONTAINER ID   IMAGE                    COMMAND                  CREATED             STATUS                         PORTS                                             NAMES
c0c75a32dfb9   consol/tomcat-7.0        "/bin/sh -c /opt/tom…"   4 minutes ago       Up 10 seconds                  8778/tcp, 0.0.0.0:80->8080/tcp, :::80->8080/tcp   tc
[root@instance-1 ~]# docker stop tc
tc
[root@instance-1:~]# docker ps -a
CONTAINER ID   IMAGE                    COMMAND                  CREATED             STATUS                         PORTS     NAMES
c0c75a32dfb9   consol/tomcat-7.0        "/bin/sh -c /opt/tom…"   3 minutes ago       Exited (137) 2 minutes ago               tc
[root@instance-1 ~]# docker rm tc
tc
```
<br></br><br></br><br></br><br></br>





### **도커 이미지 삭제**
도커 이미지를 삭제합니다.
```
[root@instance-1 ~]# docker images
REPOSITORY                           TAG        IMAGE ID       CREATED         SIZE
consol/tomcat-7.0                    latest     7c34bafd1150   6 years ago     601MB
[root@instance-1:~]# docker rmi consol/tomcat-7.0:latest
Untagged: consol/tomcat-7.0:latest
Untagged: consol/tomcat-7.0@sha256:8256b5e8e01fc4f6c1913e1fd70dea95ae656400f70fb1c12157d0e89e1ccaf7
Deleted: sha256:7c34bafd11507bff45ed89ae7b2d56da68abd6b0f373c5e2a90393057785cca6
Deleted: sha256:b05e06ec1dac4f6c15055c157237a8e15e83a6fd092cb223b40a1842813b85f3
(생략...)
[root@instance-1 ~]# docker images
REPOSITORY                           TAG        IMAGE ID       CREATED         SIZE
```
<br></br><br></br>
