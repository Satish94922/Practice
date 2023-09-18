import React from 'react'
import {View,Text,Image} from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialTopTabNav from './MaterialTopTabNav';
import CardLayout from './CardLayout';
import { DrawerNav } from './DrawerNav';
import { Header } from './Header';
import { createStackNavigator } from '@react-navigation/stack';

const Tab=createBottomTabNavigator();
const Stack = createStackNavigator();


const settings=()=>{
    return(
        <View>
        {/* <Header name='Settings'/> */}
        <View style={{justifyContent:'center',alignItems:'center',height:'100%'}}>
            <Text>Settings! Screen</Text>
        </View>
      </View>
    )
  }
  const Chats=()=>{
    return(
      <View>
        {/* <Header name='Chat'/> */}
        <View style={{justifyContent:'center',alignItems:'center',height:'100%'}}>
            <Text>Chat! Screen</Text>
        </View>
      </View>
    )
  }

export const BottomTabNav = () => {
  return (
    <Tab.Navigator>
        <Tab.Screen name='Draw' component={DrawerNav} options={{tabBarIcon:({focused})=>(
        <Image source={require('Myproject/assets/home.png')} style={{width:24,height:24}}/>
      ),tabBarBadge:3,tabBarBadgeStyle:{color:'#fff',backgroundColor:'#2266cc'}}}/>

      <Tab.Screen name='Chat' component={Chats} options={{tabBarIcon:()=>(
          <Image source={require('Myproject/assets/chat.png')} style={{width:24,height:24}}/>
        ),tabBarVisible:false}} />

        <Tab.Screen name='Settings' component={settings} options={{tabBarIcon:()=>(
          <Image source={require('Myproject/assets/settings.png')} style={{width:24,height:24}}/>
        ),tabBarVisible:false}}/>
      </Tab.Navigator>
  )
}
