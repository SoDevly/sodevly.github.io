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
컴포넌트를 import하는 방식이 잘못되서 발생한 오류입니다.
<br></br><br></br><br></br><br></br>





# **❐ 해결방법**
컴포넌트를 export default한 경우, import할 때 { }를 사용하지 않습니다.  
컴포넌트를 export한 경우, import할 때 { }를 사용합니다.  

저 같은 경우는 PropsComponent를 export default했기 때문에 import할 때 { }를 사용하면 안되는데 { }를 사용했기 때문에 오류가 발생한 것 입니다.
{ }를 사용하지 않도록 수정하니 오류가 해결되었습니다.
```javascript addLine={2} removeLine={1}
import { PropsComponent } from "../component/PropsComponent";
import PropsComponent from "../component/PropsComponent";
```
<br></br><br></br><br></br><br></br>





# **❐ Error가 발생했던 소스**
### **PropsComponent.js**
```javascript highlightLine={23}
import React from "react";
import { StyleSheet, View, Text } from 'react-native'; 

function PropsComponent(props) {
  return (
    <View style={styles.view}>
      <Text style={styles.text}>Product : {props.product}</Text>
      <Text style={styles.text}>Price : {props.price}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  view: {
    backgroundColor: '#00ffff',
    margin: 5
  },
  text: {
    fontSize: 20
  }
})

export default PropsComponent
```
<br></br>

### **PropsScreen.js**
```javascript highlightLine={3}
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

