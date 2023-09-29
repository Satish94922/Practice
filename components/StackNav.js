import { createStackNavigator } from '@react-navigation/stack';
import React from 'react'
import { DrawerNav } from './DrawerNav';
import MaterialTopTabNav from './MaterialTopTabNav';
import { BottomTabNav } from './BottomTabNav';
import ScrollViewbutton from './ScrollViewbutton';

const Stack = createStackNavigator();

export const StackNav = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown:false}}>
        <Stack.Screen name="BottomTab" component={BottomTabNav}/>
        <Stack.Screen name="Material" component={MaterialTopTabNav}/>
    </Stack.Navigator>
  )
}
