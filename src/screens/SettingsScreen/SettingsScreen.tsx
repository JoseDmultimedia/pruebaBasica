import { StackScreenProps } from '@react-navigation/stack';
import React from 'react'
import { Button, SafeAreaView, StyleSheet, Text, View } from 'react-native'
import { RootStackParamList } from '../../navigation/types';

type SettingsScreenProps = StackScreenProps<RootStackParamList, "Settings">;

export default function SettingsScreen({route, navigation} : SettingsScreenProps) {

    const goToPage = () => {
        navigation.navigate("Home");
    }

  return (
    <SafeAreaView style={styles.container}>
        <Text>Settings Screen</Text>
        <Button title='go to Home' onPress={goToPage}></Button>
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
  