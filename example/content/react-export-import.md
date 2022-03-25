---
emoji: 💻
title: '[React] 컴포넌트 import할 때 { }  있고 없고 차이'
created: 2022-03-13
modified: 2022-03-13
link: ''
tags:
  - React
  - React Native
---
<br></br>


import할 때 어떤 것은 { }를 사용하고 어떤 것은 사용하지 않는걸까?   
그 차이는 바로 `export 방식의 차이`입니다.
```javascript
import React, { useState, useCallback } from "react";
```
<br></br><br></br>




### export default
컴포넌트를 export default한 경우, import할 때 { }를 사용하지 않습니다.
```javascript highlightLine={4}
function sampleComponent(props) {
    (생략...)
}
export default sampleComponent
```
```javascript highlightLine={1}
import sampleComponent from "../component/sampleComponent";

const sampleScreen = () => {
    (생략...)
}
```
<br></br>

### export
컴포넌트를 export한 경우, import할 때 { }를 사용합니다.
```javascript highlightLine={4}
function sampleComponent(props) {
    (생략...)
}
export sampleComponent
```
```javascript highlightLine={1}
import { sampleComponent } from "../component/sampleComponent";

const sampleScreen = () => {
    (생략...)
}
```

<br></br><br></br>
