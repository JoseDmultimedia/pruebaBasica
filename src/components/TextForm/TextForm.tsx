import React from 'react';
import {Button, Text, TextInput, View} from 'react-native';

export type Variables = {
    variable:string,
    varible2:number
}

export default function TextForm({variable, varible2}: Variables) {
  return (
    <View>
      <Text>Otro texto {variable} {varible2}</Text>
      <TextInput placeholder='Email'></TextInput>
      <TextInput placeholder='Password' secureTextEntry={true}></TextInput>
      <Button title='Enviar' onPress={() => console.log("enviado")}></Button>
    </View>
  );
}
