import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import TextForm from './src/components/TextForm/TextForm';
import Saludar from './src/components/Saludar/Saludar';

function App(): JSX.Element {
  return (
    <View style={styles.container}>
      <Text>Hola mundo esta es una app</Text>
      <TextForm variable='1' varible2={2}/>
      <Saludar name={"jose dav"} age={3}/>
      <Saludar/>
    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    // backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
    // color: "black"
  }
});



export default App;