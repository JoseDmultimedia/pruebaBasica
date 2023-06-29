import React from 'react'
import { View, Text } from 'react-native'

export type props = {
    name: string,
    age: number
}

const Saludar = ({name, age} : props, {lastName = "otra cosa"} ) : JSX.Element =>{
  return (
    <View>
        <Text>Hola saludar a : {name} {lastName} tu edad es :{age}</Text>
    </View>
  )
}

Saludar.defaultProps = {
    name: "care perra",
    age: 3
}

export default Saludar;