---
emoji: 💻
title: '[AWS] aws-cli 설치하고 사용하기 (Mac OS 기준)'
created: 2022-07-23
modified: 2022-07-23
link: ''
tags:
- Infra
---
<br></br>

# **❐ aws-cli 란?**
AWS 커맨드 라인 인터페이스(AWS Command Line Interface, aws cli)는 AWS 서비스를 관리하는 통합 도구입니다.  
여러 AWS 서비스를 명령줄에서 제어하고 스크립트를 통해 자동화할 수 있습니다.
<br></br><br></br><br></br><br></br>





# **❐ aws-cli 설치**
brew를 이용하여 aws-cli를 설치합니다.
```
brew install awscli
```

aws-cli 설치 경로를 확인합니다.
```
which aws
```

aws-cli 버전을 확인합니다.
```
aws --version
```
<br></br><br></br><br></br><br></br>





# **❐ 인증 설정**
### **configure 생성**
```
$ aws configure
$ aws configure --profile <PROFILE NAME>
AWS Access Key ID [None] : {발급받은 IAM의 Access Key ID}
AWS Secret Access Key [None] : {발급받은 IAM의 Secret Access Key}
Default region name [None] : {리전}
Default output format [None] :
```

### **자격 증명 프로파일 확인**
자격 증명 프로파일에 설정된 데이터를 확인합니다.
```
cd $HOME/.aws
vi credentials

[default]
aws_access_key_id=AKIAIOSFODNN7EXAMPLE
aws_secret_access_key=wJalrXUtnFEMI/K7MDENG/bPxRfiCYEXAMPLEKEY

[user1]
aws_access_key_id=AKIAI44QH8DHBEXAMPLE
aws_secret_access_key=je7MtGbClwBF/2Zp9Utk/h3yCo8nvbEXAMPLEKEY
```

### **구성 프로파일 확인**
구성 프로파일에 설정된 데이터를 확인합니다.
```
cd %HOME/.aws
vi config

[default]
region=us-west-2
output=json

[profile user1]
region=us-east-1
output=text
```
<br></br><br></br><br></br><br></br>





# **❐ aws-cli 명령어**
### **S3의 버킷 목록 조회하기**
```
aws s3 ls
aws s3 ls --configure={PROFILE NAME}
<br></br><br></br>
```

### **S3에 파일 업로드**
```
aws s3 cp {업로드할 파일 경로} {복사할 S3 경로}
```
<br></br><br></br>
