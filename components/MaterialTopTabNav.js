import * as React from 'react';
import { Text, View ,TouchableOpacity,Linking} from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import {NavigationContainer} from '@react-navigation/native'
import CardLayout from './CardLayout';
import ScrollViewbutton from './ScrollViewbutton';
import { Link } from '@react-navigation/native';





function HomeScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>HomeScreeen</Text>
    </View>
  );
}

function Home() {

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>HomeScreen</Text>
      <TouchableOpacity style={{backgroundColor:'skyblue',borderRadius:5,padding:10,margin:5}}>
        <Text>Click to Home</Text>
      </TouchableOpacity>
      <TouchableOpacity style={{backgroundColor:'skyblue',borderRadius:5,padding:10,margin:5}} >
        <Text>Click to Material Tabs</Text>
      </TouchableOpacity>
      <TouchableOpacity style={{backgroundColor:'skyblue',borderRadius:5,padding:10,margin:5}} onPress={()=>Linking.openURL("http://open.spotify.com/user/yourusername")}>
        <Text>Click to open react nat
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const Tab = createMaterialTopTabNavigator();


export default function MaterialTopTabNav() {

  
  return (
      <Tab.Navigator tabBarOptions={{pressColor:'skyblue'}}>
        <Tab.Screen name="Home1" component={Home} />
        <Tab.Screen name="ScrollViewButton" component={ScrollViewbutton} />
        <Tab.Screen name="HomeScreen" component={HomeScreen} />
      </Tab.Navigator>
  );
}

