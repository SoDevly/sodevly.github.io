---
emoji: 💻
title: '[React Native] useMemo'
created: 2021-06-13
modified: 2021-06-13
link: ''
tags:
  - React Native
---
<br></br>





**<Highlight>useMemo</Highlight>**는 <Underline>메모이즈된 값을 return하는 hook입니다.</Underline>  
useMemo는 특정 state값이 변했을 경우에만 새로운 값을 리턴하고, 그렇지 않으면 캐싱되어 있는 값을 리턴합니다.  

기본적으로 state값 중 하나라도 변하면 모든 컴포넌트를 새로 렌더링합니다.  
따라서 업데이트가 필요없는 컴포넌트까지 새로 렌더링 되는 경우가 있습니다.  
이런 경우 성능이 떨어지게 되므로 성능 최적화를 위해 useMemo를 사용합니다.  
<br></br><br></br><br></br><br></br>





# **❐ 예시**
### 예시 설명
숫자를 등록하고, 등록한 숫자들의 평균을 구해주는 로직을 구현해봅시다.  
useMemo를 적용한 버전과 적용하지 않은 버전을 둘 다 구현하여 비교해봅시다.
<br></br><br></br><br></br><br></br>





### UseMemoScreen.js 파일 작성
```javascript
import React, { useState, useMemo } from "react";
import { StyleSheet, View, Text, TextInput, Button } from 'react-native';

const UseMemoScreen = () => {
  const [number, setNumber] = useState('');
  const [list, setList] = useState([]);

  const onInsert = () => {
    const nextList = list.concat(parseInt(number));
    setList(nextList);
    setNumber('');
  };

  const getAverage = numbers => {
    console.log('평균값 계산중...');
    if (numbers.length === 0) return 0;
    const sum = numbers.reduce((a, b) => a + b);
    return sum / numbers.length;
  };

  //useMemo 미사용
  const avg = getAverage(list);

  //useMemo 사용
  //const avg = useMemo(() => getAverage(list), [list]);

  return (
    <View style={styles.screen}>
      <TextInput
        style={styles.textInput}
        onChangeText={setNumber}
        value={number}
      />
      <Button
        title="등록"
        onPress={onInsert}
      />

      {list.map((value, index) => (
        <Text style={styles.text}>{value}  </Text>
      ))}

      <Text style={styles.text}>평균 : {avg}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: '#ffffff'
  },
  textInput: {
    fontSize: 20,
    borderWidth: 1,
    borderColor: '#000000',
    margin: 10
  },
  text: {
    fontSize: 20
  }
})

export default UseMemoScreen
```
`useMemo 미사용하는 경우`  
TextInput에 숫자를 입력할 때, getAverage() 함수가 호출되는 것을 볼 수 있습니다.  
즉, 평균을 디스플레이하는 컴포넌트가 다시 렌더링된다는 의미입니다.  
입력한 숫자를 등록하기 전까지는 평균을 다시 계산할 필요가 없습니다.  
즉, 숫자를 입력할 때 <Underline>불필요한 컴포넌트를 다시 렌더링하고 있다는 의미입니다.</Underline>
![](/assets/react-native-usememo-before.gif)
<br></br>

`useMemo 사용하는 경우`  
메모이즈하고 싶은 상태값을 useMemo로 감싸주면 됩니다.
```javascript
//useMemo 미사용
//const avg = getAverage(list);

//useMemo 사용
const avg = useMemo(() => getAverage(list), [list]);
```
TextInput에 숫자를 입력할 때, getAverage() 함수가 호출되지 않는 것을 볼 수 있습니다.  
즉, 숫자를 입력할 때 <Underline>불필요한 컴포넌트를 다시 렌더링하고 있지 않다는 것을 의미합니다.</Underline>
![](/assets/react-native-usememo-after.gif)

<br></br><br></br>