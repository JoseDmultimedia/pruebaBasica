import { View, Text } from 'react-native'
import React from 'react'
import { createDrawerNavigator } from "@react-navigation/drawer";
import { RootStackParamList } from './types';
import HomeScreen from '../screens/HomeScreen/HomeScreen';
import SettingsScreen from '../screens/SettingsScreen/SettingsScreen';


const Drawer = createDrawerNavigator<RootStackParamList>();

export default function NavigationDrawer() {
  return (
    <Drawer.Navigator>
        <Drawer.Screen name='Home' component={HomeScreen}/>
        <Drawer.Screen name='Settings' component={SettingsScreen}/>
    </Drawer.Navigator>
  )
}