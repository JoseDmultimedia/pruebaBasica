import { useNavigation } from '@react-navigation/native';
import { StackScreenProps } from '@react-navigation/stack';
import React from 'react'
import { Button, SafeAreaView, StyleSheet, Text, View } from 'react-native'
import { RootStackParamList } from '../../navigation/types';

type HomeScreenProps = StackScreenProps<RootStackParamList, "Home">;

export default function HomeScreen({route, navigation}:HomeScreenProps) {
  const goToPage = () => {
    navigation.navigate("Settings");
  }

  return (
    <SafeAreaView style={styles.container}>
        <Text>Home Screen</Text>
        <Button title='go to Settings' onPress={goToPage}></Button>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
    alignItems: 'center',
    justifyContent: 'center',
    color: "ffffff"
  },
});