import { View, Text } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { RootStackParamList } from './types';
import HomeScreen from '../screens/HomeScreen/HomeScreen';
import SettingsScreen from '../screens/SettingsScreen/SettingsScreen';


const Tab = createBottomTabNavigator<RootStackParamList>();

export default function NavigationTab() {
  return (
    <Tab.Navigator>
        <Tab.Screen name='Home' component={HomeScreen}/>
        <Tab.Screen name='Settings' component={SettingsScreen}/>
    </Tab.Navigator>
  )
}