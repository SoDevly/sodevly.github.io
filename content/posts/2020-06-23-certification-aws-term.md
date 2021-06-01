---
template: post
title: AWS 자격증 용어 정리
slug: /posts/certification/aws-term
draft: false
priority: 0
date: 2020-06-23T00:46:37.121Z
description: >-
  AWS 자격증 공부를 위해 AWS 용어 정리하였습니다.
category: Certification
tags:
  - AWS
---

<br></br>

# **❐ Amazon EC2 (Elastic Compute Cloud)**
크기 조정이 가능한 컴퓨팅 파워를 클라우드에서 제공하는 웹 서비스  
Amazon EC2를 사용하면 하드웨어에 선투자할 필요가 없어 더 빠르게 애플리케이션을 개발하고 배포할 수 있습니다.  
https://aws.amazon.com/ko/ec2/pricing/  
https://docs.aws.amazon.com/ko_kr/AWSEC2/latest/UserGuide/concepts.html  

**[구매 옵션]**
* 온디맨드 인스턴스 요금
  - 필요할 때 바로 생성하여 사용하는 방식
  - 사용한 인스턴스에 대해 지정된 시간당 요금만 지불
  - 적합한 Case  
    : 선결제 금액이나 장기 약정 없이 저렴하고 유연하게 Amazon EC2를 사용하기 원하는 사용자<br></br>
* 예약 인스턴스 요금
  - 비용을 미리 지불하고, 인스턴스를 1년 또는 3년 동안 예약하여 사용하는 방식
  - 온디맨드 인스턴스 요금과 비교하여 상당한 할인 혜택(최대 75%)을 제공
  - 결제 옵션은 선결제없음/부분선결제/전체선결제 3가지로 구분됨
  - 적합한 Case  
    : 수요가 꾸준한 애플리케이션
    : 총 컴퓨팅 비용을 절감하기 위해 1년 또는 3년 동안 EC2를 사용하기로 장기 약정할 수 있는 고객<br></br>
* 예약된 인스턴스 요금
  - 1년 동안 지정된 시작 시간 및 기간에 따라 매일, 매주 또는 매월 반복적으로 용량 예약하여 사용하는 방식
  - 적합한 Case  
  : 업무 시간 중에 실행되는 애플리케이션
  : 주말에 실행되는 일괄 처리 작업<br></br>
* 스팟 인스턴스 요금
  - AWS 클라우드에서 미사용 EC2 인스턴스를 경매로 구매하는 방식
  - 가격은 수요와 공급을 기반으로 AWS에서 결정함
  - 인스턴스의 스펙을 설정하고 원하는 가격을 입력하여 입찰하면 수요와 공급에 따라 가격이 결정되고 높게 입찰한 사람한테 인스턴스가 할당됨. 해당 스펙의 인스턴스를 다른 사람이 더 높은 가격으로 입찰했다면 내가 가지고 있는 인스턴스는 중단됨
  - 스팟 인스턴스가 중단되면 Amazon EC2가 최대 절전 모드로 전환할 것인지, 중지시킬 것인지 또는 종료시킬 것인지 지정할 수 있음. (기본값은 중단된 스팟 인스턴스를 종료하는 것)
  - 최대 절전 모드로 전환 또는 중지하도록 설정하면, 루트 볼륨은 인스턴스 스토어 볼륨이 아니라 EBS 볼륨이어야 함
  - 온디맨드 요금보다 최대 90% 저렴한 금액
  - 적합한 Case
    : 시작 및 종료 시간이 자유로운 애플리케이션
    : 컴퓨팅 가격이 매우 저렴해야만 수익이 나는 애플리케이션
    : 대량의 서버 용량 추가로 긴급히 컴퓨팅 파워가 필요한 사용자
    : 데이터 분석, 배치 작업, 백그라운드 프로세싱 및 선택적 작업<br></br>
* 전용 호스트
  - 고객 전용의 물리적 EC2 서버
  - Windows Server, SQL Server, SUSE Linux Enterprise Server(라이선스 약관에 따름)를 비롯한 기존 서버 한정 소프트웨어 라이선스를 사용할 수 있으므로 비용을 절감할 뿐 아니라 규정 준수 요구 사항도 충족할 수 있음<br></br>
<br></br>





# **❐ Amazon VPC (Amazon Virtual Private Cloud)**
사용자의 AWS 계정 전용 가상 네트워크  
Amazon EC2의 네트워킹 계층  
https://docs.aws.amazon.com/ko_kr/vpc/latest/userguide/what-is-amazon-vpc.html  
<br></br>
​




# **❐ VPC 흐름 로그**
VPC의 네트워크 인터페이스에서 전송되고 수신되는 IP 트래픽에 대한 정보를 수집할 수 있는 기능  
흐름 로그 데이터를 Amazon CloudWatch Logs 또는 Amazon S3으로 게시할 수 있습니다. 플로우 로그를 생성한 다음 선택된 대상의 데이터를 가져와 확인할 수 있습니다.  
<br></br>
​




# **❐ VPC Endpoint**
VPC Endpoint는 가상 장치로서 VPC 엔드포인트를 통해 인터넷 게이트웨이, NAT 디바이스, VPN 연결 또는 AWS Direct Connect 연결을 필요로 하지 않고 VPC와 AWS 서비스를 전용 연결(private connection)할 수 있습니다.  
VPC의 인스턴스는 서비스의 리소스와 통신하는 데 퍼블릭 IP 주소를 필요로 하지 않습니다. VPC와 기타 서비스 간의 트래픽은 Amazon 네트워크를 벗어나지 않습니다.  
https://docs.aws.amazon.com/ko_kr/vpc/latest/userguide/endpoint-services-overview.html
<br></br>
​
​



# **❐ AWS PrivateLink**
VPC 내부에서 외부에 있는 다른 서비스를 연결하기 위한 기술  
PrivateLink를 이용하면, 퍼블릭 네트워크(인터넷)을 거치지 않고도 AWS의 서비스와 다른 서비스(다른 계정의 네트워크, 다른 VPC에 존재하는)를 호출 할 수 있다.
​<br></br>

​



# **❐ VPC peering connection**
프라이빗 IPv4 주소 또는 IPv6 주소를 사용하여 두 VPC 간에 트래픽을 라우팅할 수 있도록 하기 위한 두 VPC 사이의 네트워킹 연결입니다. 동일한 네트워크에 속하는 경우와 같이 VPC의 인스턴스가 서로 통신할 수 있습니다. VPC는 다른 리전에 있을 수 있습니다(리전 간 VPC 피어링 연결이라고도 함).  
https://docs.aws.amazon.com/ko_kr/vpc/latest/peering/what-is-vpc-peering.html
<br></br>
​

​

​
# **❐ AWS Direct Connect**
AWS Direct Connect는 온프레미스에서 AWS로 전용 네트워크 연결을 쉽게 설정할 수 있는 클라우드 서비스 솔루션입니다.  
AWS Direct Connect를 사용하면 AWS와 사용자의 데이터 센터, 사무실, 또는 코로케이션 환경 사이에 프라이빗 연결을 설정할 수 있습니다. 따라서 많은 경우 네트워크 비용을 줄이고, 대역폭 처리량을 늘리며, 인터넷 기반 연결보다 일관된 네트워크 경험을 제공할 수 있습니다.  
AWS Direct Connect를 통해 사용자의 네트워크와 AWS Direct Connect 위치 중 하나 사이에 전용 네트워크 연결을 설정할 수 있습니다. 업계 표준의 802.1q VLAN을 사용하여 이 전용 연결을 여러 가상 인터페이스로 나눌 수 있습니다. 이렇게 하면 퍼블릭 환경과 프라이빗 환경 간의 네트워크 분리를 유지하면서 동일한 연결을 사용하여 퍼블릭 리소스(예: 퍼블릭 IP 주소 공간을 사용하는 Amazon S3에 저장된 객체)뿐 아니라 프라이빗 리소스(예: 프라이빗 IP 공간을 사용하는 Amazon Virtual Private Cloud(VPC)에서 실행되고 있는 Amazon EC2 인스턴스)에도 액세스할 수 있습니다.  
https://aws.amazon.com/ko/directconnect/  
https://docs.aws.amazon.com/ko_kr/directconnect/latest/UserGuide/Welcome.html
<br></br>
​

​

​

# **❐ 서브넷**
VPC의 IP 주소 범위  

* 퍼블릭 서브넷  
서브넷의 기본 트래픽이 인터넷 게이트웨이로 라우팅되는 경우 이 서브넷을 퍼블릭 서브넷이라고 합니다. 예를 들어 이 서브넷에서 시작된 인스턴스에 탄력적 IP 주소 또는 퍼블릭 IP가 연결된 경우 이러한 인스턴스에 공개적으로 액세스할 수 있습니다.  

* 프라이빗 서브넷  
서브넷의 기본 트래픽이 NAT 인스턴스/게이트웨이로 라우팅되거나 기본 라우팅이 전혀 없는 경우 이 서브넷을 프라이빗 서브넷이라고 합니다. 예를 들어 이 서브넷에서 시작된 인스턴스는 탄력적 IP 주소 또는 퍼블릭 IP가 연결된 경우라도 공개적으로 액세스할 수 없습니다.
<br></br>
​

​


# **❐ Route tables 라우팅 테이블**
네트워크 트래픽을 전달할 위치를 결정하는 데 사용되는 라우팅이라는 규칙 집합  
https://docs.aws.amazon.com/ko_kr/vpc/latest/userguide/VPC_Route_Tables.html
<br></br>
​

​

​
# **❐ Internet gateways 인터넷 게이트웨이**
인터넷 게이트웨이는 수평 확장되고 가용성이 높은 중복 VPC 구성 요소로, VPC와 인터넷 간에 통신할 수 있게 해줍니다.  
인터넷 게이트웨이에는 인터넷 라우팅 가능 트래픽에 대한 VPC 라우팅 테이블에 대상을 제공하고, 퍼블릭 IPv4 주소가 할당된 인스턴스에 대해 NAT(네트워크 주소 변환)를 수행하는 두 가지 목적이 있습니다.  
인터넷 게이트웨이는 IPv4 및 IPv6 트래픽을 지원합니다.  
https://docs.aws.amazon.com/ko_kr/vpc/latest/userguide/VPC_Internet_Gateway.html
<br></br>
​

​


# **❐ egress-only internet gateway 외부 전용 인터넷 게이트웨이**
외부 전용 인터넷 게이트웨이는 수평 확장되고 가용성이 높은 중복 VPC 구성 요소로서, VPC의 인스턴스에서 인터넷으로 IPv6을 통한 아웃바운드 통신을 가능케 하되 인터넷에서 해당 인스턴스와의 IPv6 연결을 시작하지 못하게 할 수 있습니다.  
외부 전용 인터넷 게이트웨이는 IPv6 트래픽에만 사용됩니다. IPv4를 통한 아웃바운드 전용 인터넷 통신을 사용하려면 NAT 게이트웨이를 사용하십시오.  
https://docs.aws.amazon.com/ko_kr/vpc/latest/userguide/egress-only-internet-gateway.html
<br></br>
​

​

​
# **❐ Network Address Translation(NAT)**
VPC의 인스턴스가 인터넷으로 아웃바운드 연결을 시작할 수 있도록 하되 인터넷으로부터의 원치 않는 인바운드 연결은 차단하려면 IPv4 트래픽용 네트워크 주소 변환(NAT) 디바이스를 사용하면 됩니다. NAT는 여러 개의 프라이빗 IPv4 주소를 하나의 퍼블릭 IPv4 주소에 매핑합니다. NAT 디바이스는 탄력적 IP 주소를 가지며, 인터넷 게이트웨이를 통해 인터넷에 연결됩니다. 프라이빗 서브넷의 인스턴스를 NAT 디바이스를 통해 인터넷에 연결할 수 있으며, 이렇게 하면 인스턴스의 트래픽이 인터넷 게이트웨이로 라우팅되고, 모든 응답은 인스턴스로 라우팅됩니다.  
https://docs.aws.amazon.com/ko_kr/vpc/latest/userguide/vpc-nat.html  

**※ NAT 게이트웨이와 NAT 인스턴스 차이**

|속성|NAT 게이트웨이|NAT 인스턴스|
|------|------|-------|
|가용성|고가용성. 각 가용 영역의 NAT 게이트웨이는 중복적으로 구현됩니다. 각 가용 영역에 하나의 NAT 게이트웨이를 만들어 아키텍처가 영역에 종속되지 않도록 합니다.|스크립트를 사용하여 인스턴스 간의 장애 조치를 관리합니다.
|대역폭|최대 45Gbps까지 확장할 수 있습니다.|인스턴스 유형의 대역폭에 따라 다릅니다.
|유지 관리|AWS에서 관리합니다. 유지 관리 작업을 수행할 필요가 없습니다.|사용자가 관리합니다(예: 인스턴스에 소프트웨어 업데이트 또는 운영 체제 패치 설치).
|성능|소프트웨어가 NAT 트래픽 처리에 최적화되어 있습니다.|NAT를 수행하도록 구성된 일반 Amazon Linux AMI입니다.
|비용|사용하는 NAT 게이트웨이 수, 사용 기간, NAT 게이트웨이를 통해 보내는 데이터의 양에 따라 요금이 청구됩니다.|사용하는 NAT 인스턴스 수, 사용 기간, 인스턴스 유형과 크기에 따라 요금이 청구됩니다.
|유형 및 크기|균일하게 제공되므로, 유형 또는 크기를 결정할 필요가 없습니다.|예상 워크로드에 따라 적합한 인스턴스 유형과 크기를 선택합니다.
|퍼블릭 IP 주소|생성할 때 NAT 게이트웨이와 연결할 탄력적 IP 주소를 선택합니다.|탄력적 IP 주소 또는 퍼블릭 IP 주소를 NAT 인스턴스와 함께 사용합니다. 새 탄력적 IP 주소를 인스턴스와 연결하여 언제든지 퍼블릭 IP 주소를 변경할 수 있습니다.
|프라이빗 IP 주소|게이트웨이를 만들 때 서브넷의 IP 주소 범위에서 자동으로 선택됩니다.|인스턴스를 시작할 때 서브넷의 IP 주소 범위에서 특정 프라이빗 IP 주소를 할당합니다.
|보안 그룹|NAT 게이트웨이와 연결할 수 없습니다. 보안 그룹을 NAT 게이트웨이 뒤의 리소스와 연결하여 인바운드 및 아웃바운드 트래픽을 제어할 수 있습니다.|NAT 인스턴스 뒤의 리소스 및 NAT 인스턴스와 연결하여 인바운드 및 아웃바운드 트래픽을 제어합니다.
|네트워크 ACL|네트워크 ACL을 사용하여 NAT 게이트웨이가 위치하고 있는 서브넷에서 보내고 받는 트래픽을 제어합니다.|네트워크 ACL을 사용하여 NAT 인스턴스가 위치하고 있는 서브넷에서 보내고 받는 트래픽을 제어합니다.
|흐름 로그|흐름 로그를 사용하여 트래픽을 캡처합니다.|흐름 로그를 사용하여 트래픽을 캡처합니다.
|포트 전달|지원하지 않음.|포트 전달을 지원하려면 구성을 수동으로 사용자 지정합니다.
|접속 서버|지원하지 않음.|접속 서버로 사용합니다.
|트래픽 지표|NAT 게이트웨이의 CloudWatch 지표를 확인합니다.|인스턴스의 CloudWatch 지표를 확인합니다.
|제한 시간 초과 동작|연결 제한 시간이 초과하면 NAT 게이트웨이는 연결을 계속하려고 하는 NAT 게이트웨이 뒤의 리소스로 RST 패킷을 반환합니다(FIN 패킷을 보내지 않음).|연결 제한 시간이 초과하면 NAT 인스턴스는 NAT 인스턴스 뒤의 리소스로 FIN 패킷을 전송하여 연결을 닫습니다.
|IP 조각화|UDP 프로토콜에서 IP 조각화된 패킷의 전달을 지원합니다.|TCP 및 ICMP 프로토콜에 대해서는 조각화를 지원하지 않습니다. 이러한 프로토콜의 조각화된 패킷은 삭제됩니다.|UDP, TCP 및 ICMP 프로토콜에 대해 IP 조각화된 패킷의 재수집을 지원합니다.
<br></br>
​

​

​
# **❐ Security groups 보안 그룹**
보안 그룹은 연결된 Amazon EC2 인스턴스에 대한 방화벽 역할을 하여 인스턴스 수준에서 인바운드 트래픽과 아웃바운드 트래픽을 모두 제어합니다.  
https://docs.aws.amazon.com/ko_kr/vpc/latest/userguide/VPC_SecurityGroups.html
<br></br>​

​

​

# **❐ ACL**
네트워크 ACL(액세스 제어 목록)은 1개 이상의 서브넷 내부와 외부의 트래픽을 제어하기 위한 방화벽 역할을 하는 VPC를 위한 선택적 보안 계층입니다.  
네트워크 ACL은 연결된 서브넷에 대해 방화벽 역할을 하여 서브넷 수준에서 인바운드 트래픽과 아웃바운드 트래픽을 모두 제어합니다.  
https://docs.aws.amazon.com/ko_kr/vpc/latest/userguide/vpc-network-acls.html

​
**※ 보안 그룹과 ACL의 차이**

|보안 그룹|네트워크 ACL|
|------|------|
|인스턴스 레벨에서 운영됩니다.|서브넷 레벨에서 운영됩니다.
|허용 규칙만 지원|허용 및 거부 규칙 지원
|상태 저장: 규칙에 관계없이 반환 트래픽이 자동으로 허용됨|상태 비저장: 반환 트래픽이 규칙에 의해 명시적으로 허용되어야 함
|트래픽 허용 여부를 결정하기 전에 모든 규칙을 평가함|트래픽 허용 여부를 결정할 때 번호가 가장 낮은 규칙부터 순서대로 규칙을 처리합니다.
|인스턴스 시작 시 누군가 보안 그룹을 지정하거나, 나중에 보안 그룹을 인스턴스와 연결하는 경우에만 인스턴스에 적용됨|연결된 서브넷의 모든 인스턴스에 자동 적용됨(보안 그룹 규칙이 지나치게 허용적일 경우 추가 보안 계층 제공)

ex) 
사용자의 보안 그룹 규칙 및 네트워크 ACL 규칙이 원격 컴퓨터의 IP 주소(172.31.1.2/32)로부터의 액세스를 허용합니다. 인터넷 또는 다른 네트워크로부터의 다른 모든 트래픽은 거부됩니다.
![](/media/study_aws1.png)
<br></br>
​

​


# **❐ Amazon EC2 Instance Store**
인스턴스의 블록 수준의 임시 스토리지  
호스트 컴퓨터에 물리적으로 연결됩니다.  
인스턴스 스토어 볼륨의 데이터는 연결된 인스턴스를 중지하거나 종료하면 더 이상 보관되지 않습니다.  
버퍼, 캐시, 스크래치 데이터 및 기타 임시 콘텐츠와 같이 자주 변경되는 정보의 임시 스토리지나 로드가 분산된 웹 서버 풀과 같은 여러 인스턴스상에서 복제되는 데이터에 가장 적합합니다.  
인스턴스 스토어는 비용 부담 없이 사용할 수 있는 임시 스토리지입니다.  
https://docs.aws.amazon.com/ko_kr/AWSEC2/latest/UserGuide/InstanceStorage.html
<br></br>
​

​


# **❐ ELB (Elastic Load Balancing)**
로드 밸런서는 여러 가용 영역에서 EC2 인스턴스 같은 여러 대상에 수신 애플리케이션 트래픽을 분산합니다. 이렇게 하면 애플리케이션의 가용성이 향상됩니다.  

* 가용 영역  
로드 밸런서는 등록된 대상의 상태를 모니터링하고 정상 대상으로만 트래픽이 라우팅되도록 합니다. 로드 밸런서가 비정상 대상을 감지하면, 해당 대상으로 트래픽 라우팅을 중단합니다. 그런 다음 대상이 다시 정상으로 감지되면 트래픽을 해당 대상으로 다시 라우팅합니다.  

* 교차 영역 로드 밸런싱  
교차 영역 로드 밸런싱을 활성화하면 각 로드 밸런서 노드가 활성화된 모든 가용 영역에 있는 등록된 대상에 트래픽을 분산합니다.  
교차 영역 로드 밸런싱을 비활성화하면 각 로드 밸런서 노드가 해당 가용 영역에 있는 등록된 대상에만 트래픽을 분산합니다.  
Application Load Balancer에서는 교차 영역 로드 밸런싱이 항상 활성화되어 있습니다.  
Network Load Balancer에서는 교차 영역 로드 밸런싱이 기본적으로 비활성화되어 있습니다. Network Load Balancer를 생성하면 언제든지 교차 영역 로드 밸런싱을 활성화 또는 비활성화할 수 있습니다.  
![](/media/study_aws2.png)  
https://aws.amazon.com/ko/elasticloadbalancing/  
https://docs.aws.amazon.com/ko_kr/elasticloadbalancing/latest/userguide/what-is-load-balancing.html  

**[종류]**
* Application Load Balancer
  - 개방형 시스템 간 상호 연결(OSI) 모델의 일곱 번째 계층인 애플리케이션 계층에서 작동  
  - HTTP, HTTPS을 지원  
  - 경로 기반 라우팅을 지원합니다.  
  - 호스트 기반 라우팅을 지원합니다.  
​
* Network Load Balancer
  - 개방형 시스템 간 상호 연결(OSI) 모델의 네 번째 계층에서 작동합니다.  
  - TCP, TLS를 지원  
  - Static IP, Elastic IP 주소 지원  

* Classic Load Balancer
  - TCP, SSL/TLS, HTTP, HTTPS을 지원

**[옵션]**
* 액세스 로그  
  - 로드 밸런서에 전송된 요청에 대한 자세한 정보를 캡처
  - 각 로그에는 요청을 받은 시간, 클라이언트의 IP 주소, 지연 시간, 요청 경로 및 서버 응답과 같은 정보가 포함되어 있습니다.
  - 액세스 로그를 사용하여 트래픽 패턴을 분석하고 문제를 해결할 수 있습니다.
  - 기본적으로 비활성화되어 있음
  - 활성화하면 Elastic Load Balancing은 로그를 캡처하여 지정한 Amazon S3 버킷에 저장함
<br></br>
​

​

​
# **❐ Amazon EC2 Auto Scaling**
인스턴스에 장애가 발생하더라도 원하는 수의 인스턴스를 실행하고 인스턴스의 수요가 변경되면 자동으로 인스턴스 수를 늘리거나 줄일 수 있게 해 줍니다.
https://docs.aws.amazon.com/ko_kr/autoscaling/ec2/userguide/what-is-amazon-ec2-auto-scaling.html

**[기본 종료 정책]**  
기본 종료 정책은 인스턴스를 고르게 분포시켜 가용 영역을 높이도록 설계되었습니다.  
인스턴스가 가장 많은 가용 영역을 선택하고 가장 오래된 시작 구성을 시작하는 인스턴스를 종료합니다. 인스턴스가 동일한 시작 구성에서 시작된 경우 Auto Scaling 그룹은 다음 번 결제 시간에 가장 근접한 인스턴스를 선택한 후 이를 종료합니다.  

**[그룹 조정]**
* Manual Scaling  
언제든지 기존 Auto Scaling 그룹의 크기를 수동으로 변경할 수 있습니다. 또한 Auto Scaling 그룹의 용량을 원하는 대로 업데이트하거나 Auto Scaling 그룹에 연결된 인스턴스를 업데이트할 수도 있습니다. 자동 조정이 필요하지 않거나 일정한 수의 인스턴스로 용량을 유지해야 할 경우 그룹을 수동으로 조정하는 것이 유용할 수 있습니다.  

* Scheduled Scaling(예약 조정)  
Application Auto Scaling이 특정 시간에 조정 활동을 수행하도록 설정할 수 있습니다.

* Dynamic Scaling(동적 조정) 중 Step Scaling policy(단계 조정)  
조정 프로세스를 트리거하는 CloudWatch 경보에 대한 조정 지표 및 임계 값을 선택하고 지정된 수의 평가에 대한 임계 값이 위반 될 때 확장 가능한 대상의 조정 방법을 정의 할 수 있습니다  
단계 조정 정책은 단계 조절이라고 하는 일련의 조정 조절을 기반으로 확장 가능한 대상의 용량을 늘리거나 줄입니다. 조정은 경보 위반의 크기에 따라 다릅니다. 위반된 모든 경보는 경보 메시지를 수신할 때 Application Auto Scaling에서 평가됩니다.  
<br></br>
​

​

​
# **❐ Amazon Simple Storage Service(S3)**
어디서나 원하는 양의 데이터를 저장하고 검색할 수 있도록 구축된 객체 스토리지 서비스  
https://aws.amazon.com/ko/s3/  
https://docs.aws.amazon.com/ko_kr/AmazonS3/latest/dev/Welcome.html  

**[스토리지 클래스]**
* Amazon S3 Standard(S3 Standard)  
S3 Standard는 자주 액세스하는 데이터를 위해 높은 내구성, 가용성 및 성능을 갖춘 객체 스토리지를 제공합니다.  
S3 Standard는 짧은 지연 시간과 많은 처리량을 제공하므로 클라우드 애플리케이션, 동적 웹 사이트, 콘텐츠 배포, 모바일 및 게임 애플리케이션, 빅 데이터 분석 등의 다양한 사용 사례에 적합합니다.  
짧은 지연 시간 및 높은 처리량 성능  
여러 가용 영역에 걸쳐 99.999999999%의 객체 내구성을 제공하도록 설계  

* Amazon S3 Standard-Infrequent Access(S3 Standard-IA)  
자주 액세스하지 않지만 필요할 때 빠르게 액세스해야 하는 데이터에 적합합니다.  
낮은 비용과 높은 성능의 조합을 제공하는 S3 Standard-IA는 장기 스토리지, 백업 및 재해 복구 파일용 데이터 스토어에 이상적입니다.  
S3 Standard와 동일한 짧은 지연 시간과 높은 처리량 성능  
여러 가용 영역에 걸쳐 99.999999999%의 객체 내구성을 제공하도록 설계  

* Amazon S3 One Zone-Infrequent Access(S3 One Zone-IA)  
자주 액세스하지 않지만 필요할 때 빠르게 액세스해야 하는 데이터에 적합합니다. 최소 3개의 가용 영역(AZ)에 데이터를 저장하는 다른 S3 스토리지 클래스와는 달리, S3 One Zone-IA는 단일 AZ에 데이터를 저장하며 비용이 S3 Standard-IA보다 20% 적게 듭니다.  
S3 One Zone-IA는 자주 액세스하지 않는 데이터에 대한 저렴한 옵션을 원하지만 S3 Standard 또는 S3 Standard-IA 스토리지와 같은 가용성 및 복원력이 필요 없는 고객에게 적합합니다.  
S3 Standard와 동일한 짧은 지연 시간과 높은 처리량 성능  
단일 가용 영역에서 99.999999999%의 객체 내구성을 제공하도록 설계  

* Amazon S3 Glacier(S3 Glacier)  
S3 Glacier는 데이터 보관을 위한 안전하고 내구력 있으며 저렴한 스토리지 클래스입니다.  
여러 가용 영역에 걸쳐 99.999999999%의 객체 내구성을 제공하도록 설계  
몇 분부터 몇 시간까지 구성 가능한 검색 시간  
아카이브는 영속적으로 저장되는 정보 블록입니다. Amazon S3 Glacier에서는 데이터를 아카이브로 저장합니다. Amazon S3 Glacier에 저장된 아카이브는 변경할 수 없습니다. 즉, 아카이브를 업로드하고 삭제할 수는 있지만 수정하거나 덮어쓸 수는 없습니다.  

* Amazon S3 Glacier Deep Archive(S3 Glacier Deep Archive)   
Amazon S3에서 가장 저렴한 비용의 스토리지 클래스이며 1년에 한두 번 정도 액세스할 수 있는 데이터의 장기 보관 및 디지털 보존을 지원합니다.  
이 서비스는 규제 규정 준수 요건을 충족하기 위해 7-10년 이상 데이터 세트를 보관하는 고객(특히 금융 서비스, 의료, 공공 부문과 같이 엄격하게 규제되는 산업의 고객)을 위해 설계되었습니다. 또한 S3 Glacier Deep Archive는 백업 및 재해 복구 사용 사례에도 사용할 수 있습니다.  
여러 가용 영역에 걸쳐 99.999999999%의 객체 내구성을 제공하도록 설계  
7-10년 동안 유지되는 데이터의 장기 보관을 위해 설계된 최저 비용 스토리지 클래스  
12시간 이내의 검색 시간  

**※ S3 스토리지 클래스별 차이**

| |S3 Standard|S3 Intelligent-Tiering|S3 스탠다드-IA|S3 One Zone-IA|S3 Glacier|S3 Glacier Deep Archive|
|------|------|------|------|------|------|------|
|내구성을 위한 설계|99.999999999% (11개의 9)|99.999999999% (11개의 9)|99.999999999% (11개의 9)|99.999999999% (11개의 9)|99.999999999% (11개의 9)|99.999999999% (11개의 9)|
|가용성을 위한 설계|99.99%|99.9%|99.9%|99.5%|99.99%|99.99%|
|가용성 SLA|99.9%|99%|99%|99%|99.9%|99.9%|
|가용 영역|≥3|≥3|≥3|1|≥3|≥3|
|객체당 최소 용량 요금|해당 사항 없음|해당 사항 없음|128KB|128KB|40KB|40KB|
|최소 스토리지 기간 요금|해당 사항 없음|30일|30일|30일|90일|180일|
|검색 요금|해당 사항 없음|해당 사항 없음|검색한 GB당|검색한 GB당|검색한 GB당|검색한 GB당|
|첫 번째 바이트 지연 시간|밀리초|밀리초|밀리초|밀리초|분 또는 시간 선택|시간 선택|
|스토리지 유형|객체|객체|객체|객체|객체|객체|
|수명 주기 전환|예|예|예|예|예|예|
<br></br>

**[보안]**
* 서버 측 암호화  
데이터 센터의 디스크에 저장하기 전에 객체를 암호화하고 객체를 다운로드할 때 이를 해독하도록 Amazon S3에 요청합니다.
- SSE-S3 : Amazon S3 관리형 키를 사용한 서버 측 암호화
- SSE-KMS : AWS KMS에 저장된 고객 마스터 키(CMK)를 사용한 서버 측 암호화
- SSE-C : 고객 제공 키를 사용한 서버 측 암호화  

* 클라이언트 측 암호화  
클라이언트 측 데이터를 암호화하여 암호화된 데이터를 Amazon S3에 업로드합니다. 이 경우 사용자가 암호화 프로세스, 암호화 키 및 관련 도구를 관리합니다.
- AWS KMS에 저장된 고객 마스터 키(CMK)를 사용한 서버 측 암호화
- 애플리케이션 내에 저장된 마스터 키 사용  

**[옵션]**
* Amazon S3 서버 액세스 로깅
서버 액세스 로깅은 버킷에 대해 이루어진 요청에 따른 상세 레코드를 제공합니다. 서버 액세스 로그는 많은 애플리케이션에 있어 유용합니다. 예를 들어 액세스 로그 정보는 보안 및 액세스 감사에 유용할 수 있습니다. 또한 고객층을 파악하고 Amazon S3 결제 요금을 확인할 수 있습니다.
​<br></br>

​



# **❐ Amazon Elastic Block Store(Amazon EBS)**
동일한 가용 영역에서 실행 중인 인스턴스에 연결할 수 있는 가용성이 높고 안정적인 스토리지 볼륨  
인스턴스 수명에 관계없이 지속됩니다.  
https://aws.amazon.com/ko/ebs/?ebs-whats-new.sort-by=item.additionalFields.postDateTime&ebs-whats-new.sort-order=desc  
https://docs.aws.amazon.com/ko_kr/AWSEC2/latest/UserGuide/AmazonEBS.html  

**[볼륨 유형]**

||SSD(Solid State Drive)||하드 디스크 드라이브(HDD)||
|------|------|------|------|------|
|볼륨 유형|EBS 프로비저닝된 IOPS SSD(io1)|EBS 범용 SSD(gp2)*|처리량 최적화 HDD(st1)|콜드 HDD(sc1)
|간략한 설명|고성능 SSD 볼륨은 지연 시간에 민감한 트랜잭션 워크로드를 위해 설계됨|범용 SSD 볼륨은 다양한 트랜잭션 워크로드를 위해 가격과 성능의 균형을 맞춤|저비용 HDD 볼륨은 자주 액세스하고 처리량 집약적인 워크로드를 위해 설계됨|최저비용 HDD 볼륨은 액세스 빈도가 낮은 워크로드를 위해 설계됨
|사용 사례|I/O 집약적 NoSQL 및 관계형 데이터베이스|부트 볼륨, 짧은 지연 시간의 대화형 앱, 개발 및 테스트|빅 데이터, 데이터 웨어하우스, 로그 처리|일별 스캔 횟수가 적은 콜드 데이터
|API 이름|io1|gp2|st1|sc1
|볼륨 크기|4GB – 16TB|1GB – 16TB|500GB – 16TB|500GB – 16TB
|볼륨당 최대 IOPS**|64,000|16,000|500|250
|볼륨당 최대 처리량***|1,000MB/초|250MB/초|500MB/초|250MB/초
|인스턴스당 최대 IOPS|80,000|80,000|80,000|80,000
|인스턴스당 최대 처리량|2,375MB/초|2,375MB/초|2,375MB/초|2,375MB/초
|요금|월별 GB당 0.125 USD|프로비저닝된 IOPS당 0.065 USD|월별 GB당 0.10 USD|월별 GB당 0.045 USD|월별 GB당 0.025 USD
|주요 성능 특성|IOPS|IOPS|MB/초|MB/초
​<br></br>
​




# **❐ 프로비저닝(provisioning)**
사용자의 요구에 맞게 시스템 자원을 할당, 배치, 배포해 두었다가 필요 시 시스템을 즉시 사용할 수 있는 상태로 미리 준비해 두는 것을 말한다.
​<br></br>
​




# **❐ Amazon Elastic File System(Amazon EFS)**
AWS 클라우드 서비스와 온프레미스 리소스에서 사용할 수 있는 간단하고 확장 가능하며 탄력적인 완전 관리형 탄력적 NFS 파일 시스템을 제공합니다.
Linux 워크로드에 대한 공유 파일 시스템 스토리지를 제공하는 완전 관리형 서비스  
애플리케이션을 중단하지 않고 온디맨드 방식으로 페타바이트 규모까지 확장되도록 구축되어, 사용자가 파일을 추가하고 제거할 때 자동으로 확장/축소되므로 데이터 증가에 맞춰 용량을 프로비저닝 및 관리할 필요가 없습니다.  
강력한 데이터 일관성 및 파일 잠금 등 파일 시스템 액세스 의미 체계를 제공  
Amazon EFS를 사용해 POSIX(Portable Operating System Interface) 권한을 통해 파일 시스템에 대한 액세스를 정밀하게 제어  
https://aws.amazon.com/ko/efs/  
https://docs.aws.amazon.com/ko_kr/efs/latest/ug/whatisefs.html
​<br></br>
​




# **❐ Amazon CloudFront**
.html, .css, .js 및 이미지 파일과 같은 정적 및 동적 웹 콘텐츠를 사용자에게 더 빨리 배포하도록 지원하는 웹 서비스  
CloudFront는 엣지 로케이션이라고 하는 데이터 센터의 전 세계 네트워크를 통해 콘텐츠를 제공합니다. CloudFront를 통해 서비스하는 콘텐츠를 사용자가 요청하면 지연 시간이 가장 낮은 엣지 로케이션으로 라우팅되므로 콘텐츠 전송 성능이 뛰어납니다.  
컨텐츠가 이미 지연 시간이 가장 낮은 엣지에 있는 경우 CloudFront가 콘텐츠를 즉시 제공합니다.  
콘텐츠가 엣지 로케이션에 없는 경우 CloudFront는 콘텐츠의 최종 버전에 대한 소스로 지정된 오리진에서 콘텐츠를 검색합니다.  
https://docs.aws.amazon.com/ko_kr/AmazonCloudFront/latest/DeveloperGuide/Introduction.html
​
* CloudFront Geo Restriction  
특정 지리적 위치에 있는 사용자가 CloudFront 웹 배포를 통해 배포한 콘텐츠에 액세스하는 것을 차단할 수 있습니다.  

* CloudFront presigned URL  
인증된 사용자만 접근 가능하도록 제어하는 방법  
서명된 URL에는 만료 날짜 및 시간 같은 추가 정보가 포함되므로 콘텐츠에 대한 액세스를 보다 세부적으로 제어할 수 있습니다.
​
* CloudFront origin access identity (OAI)  
Cloudfront를 제외한 다른 경로로 접근하는 것을 막는 방법
​
* 파일 무효화  
CloudFront 엣지 캐시에서 파일이 만료되기 전에 파일을 제거해야 할 경우, 다음 방법 중 하나를 사용하면 됩니다.  
  - 파일을 무효화합니다.  
  - 파일 버전 관리를 사용합니다.
​<br></br>
​




# **❐ AWS Lambda**
서버를 프로비저닝하거나 관리하지 않고도 코드를 실행할 수 있게 해주는 컴퓨팅 서비스  
함수의 동시성은 특정 시각에 요청을 처리하는 인스턴스의 수입니다. 초기 트래픽 버스트의 경우, 리전에서 함수의 누적 동시성은 500 ~ 3000의 최초 레벨에 도달할 수 있으며, 이는 리전에 따라 달라집니다.  
https://aws.amazon.com/ko/lambda/  
https://docs.aws.amazon.com/ko_kr/lambda/latest/dg/welcome.html
​<br></br>





# **❐ Amazon API Gateway**
규모와 관계 없이 REST 및 WebSocket API를 생성, 게시, 유지, 모니터링 및 보호하기 위한 AWS 서비스
API Gateway는 최대 수십 만 개의 동시 API 호출을 수락하고 처리하는 데 관련된 모든 작업을 처리합니다. 여기에는 트래픽 관리, 권한 부여 및 액세스 제어, 모니터링, API 버전 관리가 포함됩니다.
https://aws.amazon.com/ko/api-gateway/
https://docs.aws.amazon.com/ko_kr/apigateway/latest/developerguide/welcome.html
​<br></br>
​




# **❐ AWS Storage Gateway**
온프레미스 소프트웨어 어플라이언스를 클라우드 기반 스토리지에 연결하여 데이터 보안 기능으로 온프레미스 IT 환경과 AWS 스토리지 인프라 사이에 원활한 통합이 이루어지도록 지원합니다. 이 서비스를 사용하면 AWS 클라우드에 데이터를 저장하여 데이터 보안 유지에 도움이 되는 확장 가능하면서 비용 효율적인 스토리지를 구현할 수 있습니다.
Storage Gateway는 iSCSI, SMB 및 NFS와 같은 표준 스토리지 프로토콜 세트를 제공하므로 기존 애플리케이션을 다시 작성하지 않고 AWS 스토리지를 사용할 수 있습니다
https://aws.amazon.com/ko/storagegateway/?whats-new-cards.sort-by=item.additionalFields.postDateTime&whats-new-cards.sort-order=desc
https://docs.aws.amazon.com/ko_kr/storagegateway/latest/userguide/WhatIsStorageGateway.html
​<br></br>
​




# **❐ 파일 게이트웨이**
네트워크 파일 공유로 표시되는 파일 기반 인터페이스를 Amazon S3에 제공하며, 표준 파일 스토리지 프로토콜을 통해 Amazon S3 객체를 저장 및 검색할 수 있게 지원합니다.
​<br></br>
​




# **❐ 테이프 게이트웨이**
클라우드 기반 가상 테이프 라이브러리(VTL)로서, 백업 애플리케이션에 미디어 체인저와 테이프 드라이브로 구성된 VTL 인터페이스를 제공합니다.
​<br></br>
​




# **❐ 볼륨 게이트웨이**
iSCSI 대상을 제공합니다.  
이를 통해 블록 스토리지 볼륨을 생성하고 온프레미스 또는 EC2 애플리케이션 서버에서 이를 iSCSI 디바이스로서 탑재할 수 있습니다. 볼륨 게이트웨이는 캐싱 모드 또는 저장 모드로 실행됩니다.  

* 캐싱 모드  
기본 데이터가 S3에 작성되는 반면, 자주 액세스하는 데이터는 액세스 지연 시간을 줄이기 하기 위해 로컬로 캐시에 보존합니다.  

* 저장 모드  
기본 데이터가 로컬로 저장되고 액세스 지연 시간을 짧게 유지하기 위해 전체 데이터 세트가 제공되고 AWS에 비동기식으로 백업됩니다.
​<br></br>
​




# **❐ CloudTrail**
계정의 거버넌스, 규정 준수, 운영 및 위험 감사를 활성화하도록 도와주는 서비스입니다.  
CloudTrail은 AWS Management Console, AWS SDK, 명령줄 도구 및 기타 AWS 서비스를 통해 수행된 작업을 비롯하여 AWS 계정 활동의 이벤트 기록을 제공합니다.
누가 또는 무엇이 어떤 작업을 수행했는지, 어떤 리소스에 대해 조치가 취해졌는지, 언제 이벤트가 발생했는지, AWS 계정에서 활동 분석 및 응답에 도움이 되는 기타 세부 정보를 식별할 수 있습니다.  
https://aws.amazon.com/ko/cloudtrail/  
https://docs.aws.amazon.com/ko_kr/awscloudtrail/latest/userguide/cloudtrail-user-guide.html
​<br></br>




​
# **❐ AWS Trusted Advisor**
AWS 모범 사례에 따라 리소스를 프로비저닝하는 데 도움이 되도록 실시간 지침을 제공하는 온라인 도구입니다.  
https://aws.amazon.com/ko/premiumsupport/technology/trusted-advisor/
​<br></br>
​




# **❐ Amazon CloudWatch**
Amazon Web Services(AWS) 리소스와 AWS에서 실시간으로 실행 중인 애플리케이션을 모니터링합니다.  
CloudWatch를 사용하여 리소스 및 애플리케이션에 대해 측정할 수 있는 변수인 지표를 수집하고 추적할 수 있습니다.  
CloudWatch를 사용하면 시스템 전체의 리소스 사용률, 애플리케이션 성능 및 운영 상태를 파악할 수 있습니다.  
https://docs.aws.amazon.com/ko_kr/AmazonCloudWatch/latest/monitoring/WhatIsCloudWatch.html
​<br></br>
​




# **❐ CloudWatch Logs**
Amazon Elastic Compute Cloud(Amazon EC2) 인스턴스, AWS CloudTrail, Route 53 및 기타 소스에서 로그 파일을 모니터링, 저장 및 액세스할 수 있습니다.
​​<br></br>





# **❐ AWS CloudFormation**
AWS CloudFormation은 개발자와 기업이 손쉽게 관련 AWS 및 타사 리소스의 모음을 쉽게 생성하고 순서에 따라 예측 가능한 방식으로 프로비저닝할 수 있는 방법을 제공하는 서비스입니다.  
https://aws.amazon.com/ko/cloudformation/  
https://docs.aws.amazon.com/ko_kr/AWSCloudFormation/latest/UserGuide/Welcome.html
​​<br></br>





# **❐ Amazon Route 53**
가용성과 확장성이 우수한 DNS(도메인 이름 시스템) 웹 서비스입니다.  
https://aws.amazon.com/ko/route53/  
https://docs.aws.amazon.com/ko_kr/Route53/latest/DeveloperGuide/Welcome.html
​​<br></br>

**[주요 기능]**
* 도메인 이름 등록  
웹사이트에는 example.com 같은 이름이 필요합니다. Route 53을 통해 도메인 이름이라고 하는 웹사이트 또는 웹 애플리케이션의 이름을 등록할 수 있습니다.  

* 인터넷 트래픽을 도메인의 리소스로 라우팅  
사용자가 웹 브라우저를 열어 주소 표시줄에 도메인 이름(example.com) 또는 하위 도메인 이름(acme.example.com)을 입력한 경우 Route 53은 브라우저를 웹 사이트 또는 웹 애플리케이션에 연결하도록 돕습니다.

* 리소스의 상태 확인  
Route 53은 인터넷을 통해 웹 서버 같은 리소스로 자동화된 요청을 보내어 접근 및 사용이 가능하고 정상 작동 중인지 확인합니다. 리소스를 사용할 수 없게 될 때 알림을 수신하고 비정상 리소스가 아닌 다른 곳으로 인터넷 트래픽을 라우팅할 수도 있습니다.  

**[장애 조치 구성]**
* 액티브-액티브 장애 조치  
모든 리소스를 대부분의 시간 동안 사용 가능하도록 하려면 이 장애 조치 구성을 사용하십시오. 리소스를 사용할 수 없을 때는 Route 53이 비정상 상태임을 판별하여 쿼리에 응답할 때 그 리소스를 포함하지 않습니다.  
액티브-액티브 장애 조치에서 동일한 이름, 동일한 유형(예: A 또는 AAAA) 및 동일한 라우팅 정책(예: 가중치 또는 지연 시간)를 보유한 모든 레코드는 Route 53이 이를 비정상으로 간주하지 않는 이상 활성 상태입니다. Route 53은 정상 레코드를 사용하여 DNS 쿼리에 응답할 수 있습니다.

* 액티브-패시브 장애 조치  
기본 리소스 또는 리소스 그룹이 대부분의 시간 동안 사용 가능하도록 하고 보조 리소스 또는 리소스 그룹은 기본 리소스가 사용 불가능할 경우를 대비해 대기 중에 있도록 하고 싶다면 이 장애 조치 구성을 사용하십시오. 쿼리에 응답할 때 Route 53은 정상적인 1차 리소스만을 포함합니다. 모든 1차 리소스가 비정상이라면, Route 53은 DNS 쿼리에 응답할 때 정상적인 2차 리소스만을 포함시키기 시작합니다.  

**[라우팅 정책]**
* 단순 라우팅 정책(Simple routing policy)  
도메인에 대해 특정 기능을 수행하는 하나의 리소스만 있는 경우(예: example.com 웹 사이트의 콘텐츠를 제공하는 하나의 웹 서버)에 사용합니다.

* 장애 조치 라우팅 정책(Failover routing policy)  
액티브-패시브 장애 조치를 구성하려는 경우에 사용합니다.  

* 지리 위치 라우팅 정책(Geolocation routing policy)  
사용자의 위치에 기반하여 트래픽 라우팅하려는 경우에 사용합니다.
​
* 지리 근접 라우팅 정책(Geoproximity routing policy)  
리소스의 위치를 기반으로 트래픽을 라우팅하고 필요에 따라 한 위치의 리소스에서 다른 위치의 리소스로 트래픽을 보내려는 경우에 사용합니다.

* 지연 시간 라우팅 정책(Latency routing policy)  
여러 AWS 리전에 리소스가 있고 최상의 지연 시간을 제공하는 리전으로 트래픽을 라우팅하려는 경우에 사용합니다.

* 다중 응답 라우팅 정책(Multivalue answer routing policy)  
Route 53이 DNS 쿼리에 무작위로 선택된 최대 8개의 정상 레코드로 응답하게 하려는 경우에 사용합니다.

* 가중치 기반 라우팅 정책  
사용자가 지정하는 비율에 따라 여러 리소스로 트래픽을 라우팅하려는 경우에 사용합니다.
<br></br>
​




# **❐ Elastic Beanstalk**
애플리케이션을 실행하는 인프라에 대한 염려 없이 AWS 클라우드에서 애플리케이션을 신속하게 배포 및 관리할 수 있습니다.  
AWS Elastic Beanstalk는 Java, .NET, PHP, Node.js, Python, Ruby, Go, Docker를 사용하여 Apache, Nginx, Passenger, IIS와 같은 친숙한 서버에서 개발된 웹 애플리케이션 및 서비스를 간편하게 배포하고 조정할 수 있는 서비스입니다.  
https://aws.amazon.com/ko/elasticbeanstalk/  
https://docs.aws.amazon.com/ko_kr/elasticbeanstalk/latest/dg/Welcome.html
<br></br>
​




# **❐ Amazon Elastic Container Service**
클러스터에서 도커 컨테이너를 손쉽게 실행, 중지 및 관리할 수 있게 해주는 컨테이너 관리 서비스  
Amazon ECS를 사용하면 일관된 배포 및 구축 환경을 생성하고, 배치 및 ETL(Extract-Transform-Load) 워크로드를 관리 및 크기 조정하고, 마이크로 서비스 모델에 정교한 애플리케이션 아키텍처를 구축할 수 있습니다.  
https://docs.aws.amazon.com/ko_kr/AmazonECS/latest/developerguide/Welcome.html
<br></br>
​




# **❐ ​Amazon ECS 클러스터**
작업 또는 서비스의 논리적 그룹  
EC2 시작 유형을 사용하는 작업이나 서비스를 실행하는 경우, 클러스터는 컨테이너 인스턴스의 그룹화이기도 합니다. 용량 제공자를 사용하는 경우 클러스터는 용량 제공자의 논리적 그룹이기도 합니다. Amazon ECS를 처음 사용하면 기본 클러스터가 생성되지만, 한 계정에서 여러 클러스터를 생성하여 리소스를 분리할 수 있습니다.  
https://docs.aws.amazon.com/ko_kr/AmazonECS/latest/developerguide/clusters.html
<br></br>
​




# **❐ Amazon Simple Queue Service(SQS)**
마이크로 서비스, 분산 시스템 및 서버리스 애플리케이션을 쉽게 분리하고 확장할 수 있도록 지원하는 완전관리형 메시지 대기열 서비스  
메시지를 손실하거나 다른 서비스를 가동할 필요 없이 소프트웨어 구성 요소 간에 어떤 볼륨의 메시지든 전송, 저장 및 수신할 수 있음  
Amazon SQS는 최대 메시지 보존 기간을 넘겨 대기열에 존재해온 메시지를 삭제합니다. 기본 메시지 보존 기간은 4일입니다. 그러나 SetQueueAttributes 작업을 사용하면 메시지 보존 기간을 60초에서 1,209,600초(14일) 사이로 설정할 수 있습니다.  
https://aws.amazon.com/ko/sqs/  
https://docs.aws.amazon.com/ko_kr/AWSSimpleQueueService/latest/SQSDeveloperGuide/welcome.html  

* Dead Letter Queue  
다른 대기열이 처리하지 못한 메시지를 보낼 수 있는 Dead Letter Queue을 지원합니다.
문제가 있는 메시지를 구분하여 처리가 실패한 이유를 확인할 수 있으므로 애플리케이션 또는 메시징 시스템을 디버깅하는 데 유용합니다.
<br></br>
​




# **❐ AWS Device Farm**
테스트 인프라를 프로비저닝하고 관리하지 않아도 다양한 데스크톱 브라우저 및 실제 모바일 디바이스에서 테스트를 진행하여 웹 및 모바일 앱 품질을 향상시키는 애플리케이션 테스트 서비스  
https://aws.amazon.com/ko/device-farm/  
https://docs.aws.amazon.com/ko_kr/devicefarm/latest/developerguide/welcome.html
<br></br>
​




# **❐ Amazon Kinesis Data Streams**
고도로 확장 가능하고 내구력 있는 실시간 데이터 스트리밍 서비스
Amazon Kinesis Data Streams를 사용하여 대규모 데이터 레코드 스트림을 실시간으로 수집하고 처리할 수 있습니다.
https://aws.amazon.com/ko/kinesis/data-streams/?nc=sn&loc=0
https://docs.aws.amazon.com/ko_kr/streams/latest/dev/introduction.html  
​
**[관련 용어]**
* Shard  
스트림에서 고유하게 식별되는 데이터 레코드 시퀀스입니다.  
샤드는 Amazon Kinesis 데이터 스트림의 기본 처리량 단위입니다.  
샤드 1개는 초당 1MB의 데이터 입력 및 2MB의 데이터 출력 용량을 제공하며 샤드 1개는 초당 최대 1,000개의 PUT 레코드를 지원합니다. 데이터 스트림을 생성할 때 필요한 샤드 수를 지정하게 됩니다. 예를 들어, 샤드가 2개 있는 데이터 스트림을 생성할 수 있습니다. 이 데이터 스트림은 초당 2MB의 데이터 입력 및 초당 4MB의 데이터 출력을 처리할 수 있으며 초당 최대 2,000개의 PUT 레코드를 허용합니다. Amazon Kinesis Data Streams에서 샤드 수준 지표를 모니터링하고, 데이터 스트림 리샤딩을 통해 데이터 처리량이 변경됨에 따라 샤드를 동적으로 스트림에 추가하거나 스트림에서 제거할 수 있습니다.<br></br>
샤드 분할과 샤드 병합이라는 두 가지 유형의 리샤딩 작업이 있습니다.  
  - Shard 분할 : 단일 샤드를 샤드 두 개로 나눕니다
  - Shard 병합 : 샤드 두 개를 단일 샤드로 결합합니다.
<br></br>
​




# **❐ Amazon Kinesis Data Firehose**
실시간 스트리밍 데이터를 Amazon Simple Storage Service(Amazon S3), Amazon Redshift, Amazon Elasticsearch Service(Amazon ES) 및 Splunk 등의 대상으로 전송하기 위한 완전 관리형 서비스  
https://aws.amazon.com/ko/kinesis/data-firehose/?nc=sn&loc=0  
https://docs.aws.amazon.com/ko_kr/firehose/latest/dev/what-is-this-service.html
<br></br>
​




# **❐ Amazon Kinesis Data Analytics**
스트리밍 데이터를 분석하고, 실행 가능한 통찰력을 확보하며, 비즈니스 및 고객 요구 사항에 실시간으로 대응할 수 있는 가장 쉬운 방법입니다.  
https://aws.amazon.com/ko/kinesis/data-analytics/?nc=sn&loc=0  
https://docs.aws.amazon.com/ko_kr/kinesisanalytics/latest/dev/what-is.html
<br></br>
​




# **❐ AWS Data Pipeline**
데이터 이동 및 변환을 손쉽게 자동화할 수 있습니다.  
https://aws.amazon.com/ko/datapipeline/  
https://docs.aws.amazon.com/ko_kr/datapipeline/latest/DeveloperGuide/what-is-datapipeline.html
<br></br>
​




# **❐ CodePipeline**
빠르고 안정적인 애플리케이션 및 인프라 업데이트를 위해 릴리스 파이프라인을 자동화하는 데 도움이 되는 완전관리형 지속적 전달 서비스입니다.  
코드 변경이 발생할 때마다 사용자가 정의한 릴리스 모델을 기반으로 릴리스 프로세스의 빌드, 테스트 및 배포 단계를 자동화합니다. 따라서 기능과 업데이트를 신속하고 안정적으로 제공할 수 있습니다.  
https://aws.amazon.com/ko/codepipeline/  
https://docs.aws.amazon.com/ko_kr/codepipeline/latest/userguide/welcome.html
<br></br>
​




# **❐ Amazon ES (Amazon Elasticsearch Service)**
AWS 클라우드에서 Elasticsearch 클러스터를 쉽게 배포, 운영 및 조정할 수 있는 관리형 서비스입니다. Elasticsearch는 로그 분석, 실시간 애플리케이션 모니터링, 클릭 스트림 분석 같은 사용 사례를 위한 인기 있는 오픈 소스 검색 및 분석 엔진입니다. Amazon ES를 사용하면 Elasticsearch API에 바로 액세스해 기존 코드 및 애플리케이션을 서비스를 통해 원활하게 사용할 수 있습니다.  
https://aws.amazon.com/ko/elasticsearch-service/  
https://docs.aws.amazon.com/ko_kr/elasticsearch-service/latest/developerguide/what-is-amazon-elasticsearch-service.html
<br></br>



​

# **❐ Amazon DynamoDB**
종합 관리형 NoSQL 데이터베이스 서비스  
어떤 규모에서도 10밀리초 미만의 성능을 제공하는 키-값 및 문서 데이터베이스  
스키마와 상관없이 데이터를 추가하는 게 가능하기 때문에 스키마를 복잡하게 잡지 않아도 되는 장점이 있음  
https://aws.amazon.com/ko/dynamodb/  
https://docs.aws.amazon.com/ko_kr/amazondynamodb/latest/developerguide/Introduction.html  

* DynamoDB with global tables  
복제 솔루션을 직접 구축하여 관리하지 않고도 다중 리전의 다중 마스터 데이터베이스를 배포할 수 있는 종합 관리형 솔루션을 제공합니다.  
DynamoDB 전역 테이블은 전역적으로 사용자가 분산된 대규모 애플리케이션에 유용합니다.  
예를 들어, 미국 동부 해안, 미국 서부 해안, 서부 유럽의 세 지역에 대규모의 고객이 있다고 가정합니다. 고객은 해당 애플리케이션을 사용하는 동안 프로필 정보를 업데이트할 수 있습니다. 이 사용 사례의 요건을 채우기 위해 고객이 있는 세 개의 다른 AWS 리전에 CustomerProfiles라는 이름의 동일한 세 개의 DynamoDB 테이블을 생성해야 합니다. 이러한 세 개의 테이블은 서로 완전히 별개입니다. 한 테이블의 데이터를 변경해도 다른 테이블에 반영되지 않습니다. 관리형 복제 솔루션 없이 이러한 테이블 간에 데이터 변경을 복제하는 코드를 작성할 수 있지만, 이렇게 하려면 시간과 노동력이 많이 필요합니다.  
코드를 직접 작성하는 대신 세 개의 리전별 CustomerProfiles 테이블로 구성된 전역 테이블을 만들 수 있습니다. DynamoDB는 자동으로 데이터 변경을 이러한 테이블 간에 복제하므로 한 리전에서 CustomerProfiles 데이터가 변경되면 다른 리전으로 자동 전파됩니다. 또한 AWS 리전 중 하나가 일시적으로 사용 불가 상태가 될 경우에도 고객은 다른 리전에서 동일한 CustomerProfiles 데이터를 액세스할 수 있습니다.  

* Amazon DynamoDB Accelerator(DAX)  
DynamoDB용 완전관리형 인 메모리 캐시
DAX는 DynamoDB를 위한 가용성이 뛰어난 완전관리형 인 메모리 cache로서, 초당 요청 수가 몇 백만 개인 경우에도 몇 밀리초에서 몇 마이크로초까지 최대 10배의 성능을 제공합니다.
<br></br>





# **❐ Amazon Aurora**
MySQL 및 PostgreSQL과 호환되는 완전 관리형 관계형 데이터베이스 엔진  
고성능 상용 데이터베이스의 성능과 가용성에 오픈 소스 데이터베이스의 간편성과 비용 효율성을 결합  
표준 MySQL 데이터베이스보다 최대 5배 빠르고 표준 PostgreSQL 데이터베이스보다 3배 빠릅니다.   
1/10의 비용으로 상용 데이터베이스의 보안, 가용성 및 안정성을 제공합니다.  
내결함성을 갖춘 자가 복구 분산 스토리지 시스템으로, 데이터베이스 인스턴스당 최대 64TB까지 자동으로 확장됩니다.  
데이터베이스가 읽기 전용 복제본을 사용하는지 여부에 관계 없이 Aurora는 항상 3개의 가용 영역에서 데이터를 복제합니다.  
https://aws.amazon.com/ko/rds/aurora/  
https://docs.aws.amazon.com/ko_kr/AmazonRDS/latest/AuroraUserGuide/CHAP_AuroraOverview.html  

**[Aurora endpoint 유형]**
* Cluster endpoint  
해당 DB 클러스터의 현재 기본 DB 인스턴스에 연결됩니다. 이 엔드포인트는 DDL 문 등의 쓰기 작업을 수행할 수 있는 유일한 엔드포인트입니다. 이 때문에 클러스터 엔드포인트는 클러스터를 처음 설정하거나 클러스터에 단일 DB 인스턴스만 포함된 경우에 연결하는 엔드포인트입니다.  
각 Aurora DB 클러스터에는 클러스터 엔드포인트 하나와 기본 DB 인스턴스 하나가 있습니다.  
이러한 클러스터 엔드포인트는 DB 클러스터에 대한 읽기/쓰기 연결 시 장애 조치를 지원합니다. DB 클러스터의 현재 기본 DB 인스턴스에 장애가 발생하면 Aurora가 자동으로 새로운 기본 DB 인스턴스로 장애 조치합니다. 장애 조치가 이루어지는 동안에도 DB 클러스터가 새로운 기본 DB 인스턴스의 클러스터 엔드포인트 연결 요청을 처리하여 서비스 중단 시간을 최소화합니다.  

 * Reader endpoint  
DB 클러스터에 대한 읽기 전용 연결 시 로드 밸런싱을 지원합니다. 쿼리와 같은 읽기 작업에 리더 엔드포인트를 사용합니다. 이 엔드포인트는 읽기 전용 Aurora 복제본에서 이러한 문을 처리하여 기본 인스턴스에 대한 오버헤드를 줄입니다.  
각 Aurora DB 클러스터에는 리더 엔드포인트가 1개씩 있습니다.  

 * Custom endpoint  
선택한 DB 인스턴스 집합을 나타냅니다. 엔드포인트에 연결하면 Aurora가 로드 밸런싱을 수행하고 그룹에서 연결을 처리할 인스턴스 중 하나를 선택합니다. 이 엔드포인트가 참조하는 인스턴스를 정의하고, 이 엔드포인트가 어떤 목적으로 사용되는지 결정합니다.  
사용자 지정 엔드포인트를 만들기 전까지 Aurora DB 클러스터에는 사용자 지정 엔드포인트가 없습니다. 프로비저닝된 각 Aurora 클러스터에 대해 최대 다섯 개의 사용자 지정 엔드포인트를 만들 수 있습니다. Aurora Serverless 클러스터에는 사용자 지정 엔드포인트를 사용할 수 없습니다.  

* Instance endpoint  
Aurora 클러스터에 있는 특정 DB 인스턴스에 연결됩니다. DB 클러스터의 DB 인스턴스에는 각각 고유한 인스턴스 엔드포인트가 있습니다. 그러므로 DB 클러스터의 현재 기본 DB 인스턴스에 대해 인스턴스 엔드포인트 하나가 있고, DB 클러스터의 각 Aurora 복제본마다 인스턴스 엔드포인트 하나가 있습니다.
<br></br>
​




# **❐ Amazon Redshift**
클라우드에서 완벽하게 관리되는 페타바이트급 데이터 웨어하우스 서비스  
작게는 수백 기가바이트부터 시작하여 페타바이트 이상까지 데이터를 확장할 수 있습니다.  
유연하게 콘솔 내에서 쿼리를 실행하거나 SQL 클라이언트 도구, 라이브러리 또는 비즈니스 인텔리전스 도구에 연결할 수 있습니다.  
https://aws.amazon.com/ko/redshift/  
https://docs.aws.amazon.com/ko_kr/redshift/latest/mgmt/welcome.html
<br></br>




​
# **❐ Amazon Athena**
표준 SQL을 사용해 Amazon S3에 저장된 데이터를 간편하게 분석할 수 있는 대화식 쿼리 서비스  
서버리스 서비스이므로 설정하거나 관리할 인프라가 없음  
Athena에서는 쿼리를 동시에 실행하여 규모를 자동으로 조절합니다. 따라서 많은 데이터 세트와 복잡한 쿼리가 있더라도 결과를 빠르게 도출합니다.  
https://aws.amazon.com/ko/athena/?whats-new-cards.sort-by=item.additionalFields.postDateTime&whats-new-cards.sort-order=desc
https://docs.aws.amazon.com/ko_kr/athena/latest/ug/what-is.html
<br></br>
​




# **❐ Amazon ElastiCache**
Redis 또는 Memcached와 호환되는 완전관리형 인 메모리 데이터 스토어  
분산된 캐시 환경의 배포 및 관리와 관련된 복잡성을 해소할 수 있음  
https://aws.amazon.com/ko/elasticache/  
https://docs.aws.amazon.com/ko_kr/AmazonElastiCache/latest/mem-ug/WhatIs.html  

* Redis Auth  
Redis 인증 토큰은 Redis가 클라이언트의 명령 실행을 허용하기 전에 토큰(암호)을 요구할 수 있게 함으로써 데이터 보안을 개선합니다.
<br></br>
​




# **❐ KMS (AWS Key Management Service)**
데이터 암호화에 사용하는 암호화 키인 고객 마스터 키(CMK)를 쉽게 생성하고 제어할 수 있게 해주는 관리형 서비스  
https://aws.amazon.com/ko/kms/  
https://docs.aws.amazon.com/ko_kr/kms/latest/developerguide/overview.html  

* 고객 마스터 키(CMK)  
고객 마스터 키는 AWS KMS의 기본 리소스입니다.  
고객 마스터 키(CMK)는 마스터 키의 논리적 표현입니다. CMK에는 키 ID, 생성 날짜, 설명 및 키 상태와 같은 메타데이터가 포함됩니다. 또한 CMK에는 데이터를 암호화 및 암호화 해제하는 데 사용되는 키 구성 요소도 포함됩니다.  

**[CMK 유형]**
* 고객 관리형 CMK  
사용자가 생성, 소유 및 관리하는 AWS 계정의 CMK

* AWS 관리형 CMK  
고객 대신 생성, 관리 및 사용하는 CMK

* AWS 소유 CMK  
AWS 서비스가 여러 AWS 계정에서 사용하기 위해 소유하고 관리하는 CMK 모음입니다.

**※ CKM 유형별 차이**

|CMK 유형|CMK 메타데이터를 볼 수 있음|CMK를 관리할 수 있음|내 AWS 계정에서만 사용|자동 회전
|------|------|------|------|------|
|고객 관리형 CMK|예|예|예|선택. 365일(1년)마다.
|AWS 관리형 CMK|예|아니요|예|필수. 1,095일(3년)마다.
|AWS 소유 CMK|아니요|아니요|아니요|다양
<br></br>
​

​


# **❐ AWS Systems Manager Parameter Store**
구성 데이터 관리 및 암호 관리를 위한 안전한 계층적 스토리지를 제공합니다. 암호, 데이터베이스 문자열, Amazon Machine Image(AMI) ID 및 라이선스 코드와 같은 데이터를 파라미터 값으로 저장할 수 있습니다. 값을 일반 텍스트 또는 암호화된 데이터로 저장할 수 있습니다.  
https://docs.aws.amazon.com/ko_kr/systems-manager/latest/userguide/systems-manager-parameter-store.html
<br></br>
​




# **❐ AWS WAF**
AWS WAF는 고객이 정의한 조건에 따라 웹 요청을 허용, 차단 또는 모니터링(계수)하는 규칙을 구성하여 공격으로부터 웹 애플리케이션을 보호하는 웹 애플리케이션 방화벽입니다.
AWS WAF는 SQL 명령어 주입과 교차 사이트 스크립팅(XSS)과 같은 일반적인 공격 기술로부터 웹 사이트를 보호할 수 있습니다.  
https://aws.amazon.com/ko/waf/  
https://docs.aws.amazon.com/ko_kr/waf/latest/developerguide/waf-chapter.html
<br></br>





# **❐ AWS Shield**
AWS에서 실행되는 애플리케이션을 보호하는 디도스(DDoS) 보호 서비스입니다.  
https://aws.amazon.com/ko/shield/  
https://docs.aws.amazon.com/ko_kr/waf/latest/developerguide/shield-chapter.html
<br></br>
​




# **❐ Amazon Cognito**
웹과 모바일 앱에 빠르고 손쉽게 사용자 가입, 로그인 및 액세스 제어 기능을 추가할 수 있습니다.  
Amazon Cognito의 두 가지 주요 구성 요소는 사용자 풀과 자격 증명 풀입니다. 사용자 풀은 앱 사용자의 가입 및 로그인 옵션을 제공하는 사용자 디렉터리입니다. 자격 증명 풀을 통해 기타 AWS 서비스에 대한 사용자 액세스 권한을 부여할 수 있습니다. 자격 증명 풀과 사용자 풀을 별도로 또는 함께 사용할 수 있습니다.  
https://aws.amazon.com/ko/cognito/  
https://docs.aws.amazon.com/ko_kr/cognito/latest/developerguide/what-is-amazon-cognito.html
<br></br>



​

# **❐ SNS (Amazon Simple Notification Service)**
마이크로서비스, 분산 시스템 및 서버리스 애플리케이션을 쉽게 분리할 수 있게 해 주는 내구적이고 안전한 고가용성의 완전 관리형 게시/구독 메시징 서비스  
Amazon SNS 주제를 사용하면 게시자 시스템에서 Amazon SQS 대기열, AWS Lambda 함수 및 HTTP/S Webhook를 비롯한 병렬 프로세싱을 위해 대규모의 구독자 엔드포인트로 메시지를 팬아웃할 수 있습니다. 또한, SNS는 모바일 푸시, SMS 및 이메일을 사용하여 최종 사용자에게 알림을 팬아웃하는 데 사용될 수 있습니다.  
https://aws.amazon.com/ko/sns/?whats-new-cards.sort-by=item.additionalFields.postDateTime&whats-new-cards.sort-order=desc  
https://docs.aws.amazon.com/ko_kr/sns/latest/dg/welcome.html
<br></br>
​




# **❐ AWS Marketplace**
고객이 솔루션 빌드 및 비즈니스 운영에 필요한 타사 소프트웨어, 데이터 및 서비스를 찾아보고 구입, 배포 및 관리를 쉽게 할 수 있도록 도와주는 엄선된 디지털 카탈로그  
https://docs.aws.amazon.com/ko_kr/marketplace/latest/userguide/what-is-marketplace.html
<br></br>



​

# **❐ Amazon MQ**
클라우드에서 메시지 브로커를 쉽게 설정하고 운영할 수 있는 Apache ActiveMQ용 관리형 메시지 브로커 서비스  
Amazon MQ는 JMS, NMS, AMQP, STOMP, MQTT 및 WebSocket 등을 비롯한 업계 표준 메시징 API와 프로토콜을 사용하므로 기존 애플리케이션을 쉽게 연결할 수 있습니다.   
https://aws.amazon.com/ko/amazon-mq/?amazon-mq.sort-by=item.additionalFields.postDateTime&amazon-mq.sort-order=desc  
https://docs.aws.amazon.com/ko_kr/amazon-mq/latest/developer-guide/welcome.html
<br></br>


​


# **❐ AWS DMS (AWS Database Migration Service)**
관계형 데이터베이스, 데이터 웨어하우스, NoSQL 데이터베이스 및 그 밖의 데이터 스토어 유형을 쉽게 마이그레이션하도록 해주는 클라우드 서비스  
https://docs.aws.amazon.com/ko_kr/dms/latest/userguide/Welcome.html
<br></br>
​




# **❐ AWS Batch**
AWS Batch는 개발자, 과학자 및 엔지니어가 AWS에서 수많은 배치 컴퓨팅 작업을 효율적으로 손쉽게 실행할 수 있게 해주는 배치 관리 기능 세트입니다.  
배치 컴퓨팅은 수동 개입 없이 하나 이상의 컴퓨터에서 일련의 프로그램("작업")을 실행하는 것을 말합니다.  
https://aws.amazon.com/ko/batch/  
https://docs.aws.amazon.com/ko_kr/batch/latest/userguide/what-is-batch.html
<br></br>
​




# **❐ AWS Config**
AWS Config는 AWS 리소스 구성을 측정, 감사 및 평가할 수 있는 서비스입니다.  
AWS Config는 AWS 계정에 있는 AWS 리소스의 구성을 자세히 보여 줍니다. 이러한 보기에는 리소스 간에 어떤 관계가 있는지와 리소스가 과거에 어떻게 구성되었는지도 포함되므로, 시간이 지나면서 구성과 관계가 어떻게 변하는지 확인할 수 있습니다.  
https://aws.amazon.com/ko/config/  
https://docs.aws.amazon.com/ko_kr/config/latest/developerguide/WhatIsConfig.html
<br></br>
​




# **❐ AWS Organizations**
AWS Organizations는 사용자가 생성해 중앙에서 관리하는 조직으로 여러 AWS 계정을 통합할 수 있는 계정 관리 서비스입니다. AWS Organizations는 비즈니스의 예산, 보안과 규정 준수 요건을 충족할 수 있는 계정 관리 및 통합 결제 기능을 포함합니다. 조직의 관리자로서 조직에서 계정을 생성하고 기존 계정을 조직에 초대할 수 있습니다.  
https://docs.aws.amazon.com/ko_kr/organizations/latest/userguide/orgs_introduction.html
​<br></br>



​

# **❐ IAM (AWS Identity and Access Management)**
IAM는 AWS 리소스에 대한 액세스를 안전하게 제어할 수 있는 웹 서비스입니다. IAM을 사용하여 리소스를 사용하도록 인증(로그인) 및 권한 부여(권한 있음)된 대상을 제어합니다.  
https://docs.aws.amazon.com/ko_kr/IAM/latest/UserGuide/introduction.html
<br></br>
​
​



# **❐ MFA (Multi-Factor Authentication)**
MFA는 사용자가 AWS 웹 사이트 또는 서비스에 액세스할 때 사용자의 정규 로그인 자격 증명 외에도 AWS가 지원되는 MFA 메커니즘의 고유 인증을 제출하라고 요청함으로써 보안을 더욱 강화합니다.  
https://docs.aws.amazon.com/ko_kr/IAM/latest/UserGuide/id_credentials_mfa.html  

**[종류]**
* 가상 MFA 디바이스  
스마트폰 또는 기타 디바이스에서 실행되며 물리적 디바이스를 에뮬레이션하는 소프트웨어 애플리케이션입니다. 디바이스가 동기화된 1회 암호 알고리즘에 따라 여섯 자리 숫자 코드를 생성합니다. 사용자는 로그인할 때 두 번째 웹페이지에서 디바이스의 유효 코드를 입력해야 합니다. 사용자에게 할당된 각 가상 MFA 디바이스는 고유해야 합니다. 사용자는 다른 사용자의 가상 MFA 디바이스의 코드를 입력하여 인증할 수 없습니다.  

* U2F 보안 키  
컴퓨터의 USB 포트에 연결하는 디바이스입니다.  

* 하드웨어 MFA 디바이스  
동기화된 1회 암호 알고리즘에 따라 여섯 자리 숫자 코드를 생성하는 하드웨어 디바이스입니다. 사용자는 로그인할 때 두 번째 웹페이지에서 디바이스의 유효 코드를 입력해야 합니다. 사용자에게 할당된 각 MFA 디바이스는 고유해야 합니다. 사용자는 다른 사용자의 디바이스의 코드를 입력하여 인증받을 수 없습니다.  

* SMS 문자 메시지 기반 MFA  
IAM 사용자 설정이 해당 사용자의 SMS 호환 모바일 디바이스의 전화번호를 포함하는 MFA 유형입니다. 사용자가 로그인하면 AWS가 SMS 문자 메시지로 여섯 자리 숫자 코드를 사용자의 모바일 디바이스로 전송합니다. 사용자는 로그인 시 두 번째 웹 페이지에서 이 코드를 입력해야 합니다. SMS 기반 MFA는 IAM 사용자만 사용할 수 있습니다. AWS 계정 루트 사용자에서는 이러한 유형의 MFA를 사용할 수 없습니다.  

<br></br>