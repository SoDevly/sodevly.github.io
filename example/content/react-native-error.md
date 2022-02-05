---
emoji: 💻
title: '[React Native] Error: Element type is invalid'
created: 2021-06-02
modified: 2021-06-02
link: ''
tags:
  - React Native
---
<br></br>





# **❐ Error 로그** 
ERROR  Error: Element type is invalid: expected a string (for built-in components) or a class/function (for composite components) but got: undefined. You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.
<br></br><br></br><br></br><br></br>





# **❐ 원인**  
PropsComponent 컴포넌트를 `export default PropsComponent`했는데 `import { PropsComponent }`를 통해 import 해서 발생한 오류 입니다.
<br></br><br></br><br></br><br></br>





# **❐ 해결방법**  
아래와 같이 수정해주니 Error가 해결되었습니다.  
```javascript
//import { PropsComponent } from "../component/PropsComponent";
import PropsComponent from "../component/PropsComponent";
```
<br></br><br></br><br></br><br></br>





# **❐ Error가 발생했던 소스**
### **PropsScreen.js**
```javascript
import React from "react";
import { StyleSheet, View } from 'react-native'; 
import {PropsComponent} from "../component/PropsComponent";

const PropsScreen = () => {

  return (
    <View style={styles.screen}>
      <PropsComponent product={'과자'} price={2000} />
      <PropsComponent product={'아이스크림'} price={1000} />
      <PropsComponent product={'빵'} price={2500} />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: '#ffffff'
  }
})

export default PropsScreen
```
<br></br><br></br>