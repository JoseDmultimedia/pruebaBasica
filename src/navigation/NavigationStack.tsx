import React from 'react'
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from '../screens/HomeScreen/HomeScreen';
import SettingsScreen from '../screens/SettingsScreen/SettingsScreen';
import { RootStackParamList } from './types';

const Stack = createStackNavigator<RootStackParamList>();

export default function NavigationStack() {
    return (
        //For make a default inital route, add inside de Stack.Navigator initialRouteName=""
        <Stack.Navigator initialRouteName='Home'>
            <Stack.Screen name='Home' component={HomeScreen}></Stack.Screen>
            <Stack.Screen name='Settings' component={SettingsScreen}></Stack.Screen>
        </Stack.Navigator>
    )
}