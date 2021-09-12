---
template: post
title: '[실습] VM 인스턴스 만들어보기'
slug: /posts/infra/vminstance-create
draft: false
priority: 0
date: 2020-08-21T00:46:37.121Z
description: >-
category: Infra
tags:
  - Docker
  - Kubernetes
---

<br>

### **Compute Engine > VM 인스턴스 메뉴 선택**
![](/media/vminstance-create1.png)
<br><br>

### **인스턴스 만들기 버튼 클릭**  
![](/media/vminstance-create2.png)
<br><br>

### **VM 인스턴스 환경 선택 > 만들기 버튼 클릭**
- 이름 : instance-1  
- 부팅디스크 > 변경 버튼 클릭  
    운영체제 : centOS  
    부팅디스크 유형 : 표준 영구디스크  
    크기 : 100  
- 방화벽 : HTTP 트래픽 허용 체크박스 체크  
![](/media/vminstance-create3.png)
![](/media/vminstance-create4.png)
<br><br>

### **연결 SSH 버튼 클릭 > 터미널 창 열림**  
![](/media/vminstance-create5.png)

<br><br>