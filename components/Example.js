import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { TouchableOpacity,View,Text,Linking } from 'react-native';

const config={
    screens:{
      Home:{
        path:'home'
      },
      HomeScreen:{
        path:'hscreen'
      }
    },
  }

  const linking={
    prefixes:['myapp://'],
    config
  }

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
        <TouchableOpacity style={{backgroundColor:'skyblue',borderRadius:5,padding:10,margin:5}}>
          <Text>Click to Material Tabs</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{backgroundColor:'skyblue',borderRadius:5,padding:10,margin:5}} onPress={()=>Linking.openURL("http://open.spotify.com/user/yourusername")}>
          <Text>Click to open react nat
          </Text>
        </TouchableOpacity>
      </View>
    );
  }


const Stack=createStackNavigator();

const Example = () => {
  return (
    <NavigationContainer independent={true} linking={linking}>
    <Stack.Navigator>
        <Stack.Screen name="Home" component={Home}/>
        <Stack.Screen name="HomeScreen" component={HomeScreen}/>
    </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Example