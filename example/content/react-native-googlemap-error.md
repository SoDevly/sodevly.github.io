---
emoji: 💻
title: '[React Native] CocoaPods could not find compatible versions for pod "GoogleMaps"'
created: 2022-03-15
modified: 2022-03-15
link: ''
tags:
  - React Native
---
<br></br>





# **❐ Error 로그** 
<pre>
[!] CocoaPods could not find compatible versions for pod "GoogleMaps":<br></br>
　　In Podfile:<br></br>
　　　　react-native-google-maps (from `../node_modules/react-native-maps`) was resolved to 0.30.1, which depends on<br></br>
　　　　　　Google-Maps-iOS-Utils (= 3.10.3) was resolved to 3.10.3, which depends on<br></br>
　　　　　　　　GoogleMaps<br></br>

<br></br>
　　　　react-native-google-maps (from `../node_modules/react-native-maps`) was resolved to 0.30.1, which depends on<br></br>
　　　　　　GoogleMaps (= 5.1.0)<br></br>
<br></br>

Specs satisfying the `GoogleMaps (= 5.1.0), GoogleMaps` dependency were found, but they required a higher minimum deployment target.<br></br>
error Command failed with exit code 1.<br></br>
</pre>
<br></br><br></br><br></br><br></br>





# **❐ 해결방법**  
Podfile 파일에서 platform 버전을 10.0 -> 11.0으로 업데이트했습니다.
```undefined filename=Podfile addLine={2} removeLine={1}
platform :ios, '10.0'
platform :ios, '11.0'

target 'rnstudy' do
  (생략...)
  rn_maps_path = '../node_modules/react-native-maps'
  pod 'react-native-google-maps', :path => rn_maps_path
  (생략...)
end
```
<br></br><br></br>
