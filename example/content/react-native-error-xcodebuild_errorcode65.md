---
emoji: 💻
title: '[React Native] error Failed to build iOS project. We ran "xcodebuild" command but it exited with error code 65.'
created: 2022-07-30
modified: 2022-07-30
link: ''
tags:
  - React Native
---
<br></br>





# **❐ Error 로그** 
error Failed to build iOS project. We ran "xcodebuild" command but it exited with error code 65.
<br></br><br></br>



# **❐ 해결방법**  
### **캐시 삭제**
```
watchman watch-del-all && rm -rf $TMPDIR/react-native-packager-cache-* && rm -rf $TMPDIR/metro-bundler-cache-* && yarn cache clean && cd ios && rm -rf ~/Library/Developer/Xcode/DerivedData/ && rm -rf ~/Library/Caches/CocoaPods && cd ..
```
<br></br>

### **.xcworkspace 파일 삭제**
.xcworkspace파일은 Xcode 프로젝트 파일로 ios폴더 안에 있습니다.  
pod install을 할 때 재생성됩니다.
<br></br>

### **Podfile.lock 파일 삭제**
pod install을 할 때 재생성됩니다.
<br></br>

### **node_modules, pod 재설치**
node_modules폴더, pod폴더를 삭제한 후, 다시 설치해줍니다.
```
rm -rf node_modules && yarn install && cd ios && rm -rf Pods && pod install && pod repo update && cd ..
```
<br></br><br></br>
