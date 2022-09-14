import * as React  from 'react';
import { Text, View, StyleSheet, Button, TextInput} from 'react-native';
import Constants from 'expo-constants';
import {useState} from 'react'


// You can import from local files
import AssetExample from './components/AssetExample';

// or any pure javascript modules available in npm
import { Card } from 'react-native-paper';

 function App() {

  const [name, setName] = useState ('kb')
  const [count, setCount] = useState (0)
  const [text, setText] = useState('')
  const [todos, setTodods] = useState([1, 2, 3, 4])

  const ChangeName = (() =>{
    setName('kb')
  })

  const ChangeCount = (() => {
    setCount(count + 1)
  })

  return (
    <View style={styles.container}>
    <Text>{name}</Text>

    <Text>{count}</Text>

        <TextInput placeholder='enter name' onChangeText={(name) => setName(name)}/>

        <Button
        title="Change Name"
        onPress={ChangeName}
        />

        <Button
        title="Change Count"
        onPress={ChangeCount}
        />

        {todos.map((n) =>(
          <View>
          <Text>{n}</Text>
          </View>
        ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default App;