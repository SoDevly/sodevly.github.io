---
emoji: 💻
title: '[MariaDB] DBeaver에서 LocalHost서버의 MariaDB에 연결하기'
created: 2021-11-27
modified: 2021-11-27
link: ''
tags:
  - DB
---
<br></br>





# **❐ MariaDB Server 설치**
```
brew install mariadb
```
<br></br><br></br><br></br><br></br>





# **❐ MariaDB Server 구동**
```
mysql.server start
```
<br></br><br></br><br></br><br></br>





# **❐ MariaDB 보안 설정**
```
sudo mariadb-secure-installation
```
<br></br>

root계정에 대한 현재 암호를 입력 : (설치 후 최초 접근이니 비밀번호가 없을 것입니다. 그냥 enter를 누릅니다.)
```
NOTE: RUNNING ALL PARTS OF THIS SCRIPT IS RECOMMENDED FOR ALL MariaDB
      SERVERS IN PRODUCTION USE!  PLEASE READ EACH STEP CAREFULLY!

In order to log into MariaDB to secure it, we'll need the current
password for the root user. If you've just installed MariaDB, and
haven't set the root password yet, you should just press enter here.

Enter current password for root (enter for none): 
```
<br></br>

unix socket 인증 방식으로 전환 : Y
```
Setting the root password or using the unix_socket ensures that nobody
can log into the MariaDB root user without the proper authorisation.

You already have your root account protected, so you can safely answer 'n'.

Switch to unix_socket authentication [Y/n]
```
<br></br>

루트 암호를 변경하시겠습니까? Y
새로운 패스워드 입력
새로운 패스워드 다시 입력
```
You already have your root account protected, so you can safely answer 'n'.

Change the root password? [Y/n]
New password: 
Re-enter new password: 
```
<br></br>

익명 사용자를 제거하시겠습니까? Y
```
By default, a MariaDB installation has an anonymous user, allowing anyone
to log into MariaDB without having to have a user account created for
them.  This is intended only for testing, and to make the installation
go a bit smoother.  You should remove them before moving into a
production environment.

Remove anonymous users? [Y/n]
```
<br></br>

원격으로 root계정 로그인을 허용하지 않으시겠습니까? Y
```
Normally, root should only be allowed to connect from 'localhost'.  This
ensures that someone cannot guess at the root password from the network.

Disallow root login remotely? [Y/n]
```
<br></br>

테스트 데이터베이스를 제거하고 액세스하시겠습니까? Y
```
By default, MariaDB comes with a database named 'test' that anyone can
access.  This is also intended only for testing, and should be removed
before moving into a production environment.

Remove test database and access to it? [Y/n]
```
<br></br>

권한 테이블을 지금 다시 로드하시겠습니까? Y
```
Reloading the privilege tables will ensure that all changes made so far will take effect immediately.

Reload privilege tables now? [Y/n]
```
<br></br><br></br><br></br><br></br>





# **❐ root계정으로 MariaDB 접속**
password는 위에서 설정한 password를 입력한다.
```
mysql -u root -p

Enter password: 
Welcome to the MariaDB monitor.  Commands end with ; or \g.
Your MariaDB connection id is 33
Server version: 10.6.4-MariaDB Homebrew

Copyright (c) 2000, 2018, Oracle, MariaDB Corporation Ab and others.

Type 'help;' or '\h' for help. Type '\c' to clear the current input statement.

MariaDB [(none)]>
```
<br></br><br></br><br></br><br></br>





# **❐ DB 생성**
mysql 접속
```
MariaDB [(none)]> use mysql
Reading table information for completion of table and column names
You can turn off this feature to get a quicker startup with -A

Database changed
MariaDB [mysql]> 
```
<br></br>

데이터베이스 생성
```
MariaDB [mysql]> create database localDB;
Query OK, 1 row affected (0.001 sec)
```
<br></br>

데이터베이스 조회
```
MariaDB [mysql]> show databases;
+--------------------+
| Database           |
+--------------------+
| information_schema |
| localDB            |
| mysql              |
| performance_schema |
| sys                |
+--------------------+
5 rows in set (0.000 sec)
```
<br></br><br></br><br></br><br></br>





# **❐ DBeaver 설치**
> DBeaver 사이트 : https://dbeaver.io/download/

<br></br><br></br><br></br><br></br>





# **❐ DBeaver에서 MariaDB 연결하기**
데이터베이스 > 새 데이터베이스 연결 > MariaDB 선택  
![](/assets/db-mariadb1.png)
<br></br>

DB 접속 정보 입력
- Server Host: localhost
- Database: localDB (DB 이름 입력)
- Username: root
- Password: (root계정의 비밀번호 입력)
![](/assets/db-mariadb2.png)
<br></br>

연결된 DB 확인  
![](/assets/db-mariadb3.png)
<br></br><br></br>
