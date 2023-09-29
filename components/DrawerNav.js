import React from 'react'
import {View,Text,Button} from 'react-native'
import {DrawerActions,useNavigation} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import { BottomTabNav } from './BottomTabNav';
import CardLayout from './CardLayout';

const Drawer=createDrawerNavigator();

const About=()=>{

  const nav=useNavigation();

  const open=()=>{
    nav.dispatch(DrawerActions.openDrawer());
  }
  return(
    <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
      <Text>About Screen</Text>
      <Button title='open' onPress={open}/>
    </View>
  )
}

const home=()=>{
  return(
    <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
      <Text>HomeStack</Text>
    </View>
  )
}

export const DrawerNav = () => {

  return (
    <Drawer.Navigator screenOptions={{headerShown:true,headerStyle:{backgroundColor:"skyblue"}}}>
        <Drawer.Screen name='Home' component={CardLayout}/>
        <Drawer.Screen name='About' component={About}/>
      </Drawer.Navigator>
  )
}
