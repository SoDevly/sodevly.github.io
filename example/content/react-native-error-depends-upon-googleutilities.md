---
emoji: 💻
title: '[React Native] The Swift pod `FirebaseCoreInternal` depends upon `GoogleUtilities`'
created: 2022-09-29
modified: 2022-09-29
link: ''
tags:
  - React Native
---
<br></br>



# **❐ Error 로그** 
```
The Swift pod `FirebaseCoreInternal` depends upon `GoogleUtilities`, which does not define modules. To opt into those targets generating module maps (which is necessary to import them from Swift when building as static libraries), you may set `use_modular_headers!` globally in your Podfile, or specify `:modular_headers => true` for particular dependencies.
```
<br></br><br></br><br></br><br></br>



# **❐ 해결방법**
Podfile 파일에 아래 모듈을 추가한 후, 다시 pod install 합니다.
```
pod 'GoogleUtilities', :modular_headers => true
```
<br></br><br></br>
