// import React,{useState,useEffect} from 'react';
// import {LogBox,StatusBar } from 'react-native';
// import { StackNav } from './components/StackNav';
// import { NavigationContainer } from '@react-navigation/native';
// import MaterialTopTabNav from './components/MaterialTopTabNav';
// import Example from './components/Example';
// import NativeUsage from './native/NativeUsage';
// import MyCustom from './native/MyCustom';
// import { MyView } from './native/MyView';

// const config={
//   screens:{
//     BottomTab:{
//       screens:{
//         Draw:{
//           screens:{
//             Home:{
//               path:'home'
//             },
//             About:{
//               path:'about'
//             }
//           }
//         },
//         Chat:{
//           path:'chat'
//         },
//         Settings:{
//           path:'settings'
//         }
//       }
//     },

//     Material:{
//       screens:{
//         Home1:{
//           path:'home1'
//         },
//         ScrollViewButton:{
//           path:'scroll'
//         },
//         HomeScreen:{
//           path:'hscreen'
//         }
//       }
//     }
//   }
// }

// const linking={

//   prefixes:['myapp://'],
//   config
// }
// const App=()=> {


//   LogBox.ignoreAllLogs();


//   return (
//     <NavigationContainer>
//       <StackNav/>
//     </NavigationContainer>

//   );
// }

// export default App;

// import React from 'react';
// import { Provider } from 'react-redux';
// import Store from './redux/Store';
// import Todolist from './redux/Todolist';
// import Users from './redux/Users';
// import { createStackNavigator } from '@react-navigation/stack';
// import { NavigationContainer } from '@react-navigation/native';


// function Home(){
//   return(

//       <Todolist/>
//   )
// }

// const Stack=createStackNavigator();
// function App() {
//   return (
//     <Provider store={Store}>
//     <NavigationContainer>
//       <Stack.Navigator>
//         <Stack.Screen name='Home' component={Home}/>
//         <Stack.Screen name='Users' component={Users}/>
//       </Stack.Navigator>
//     </NavigationContainer>
//     </Provider>
//   );
// }

// export default App;

import { View, Text } from 'react-native'
import React from 'react'
import NativeUsage from './native/NativeUsage'

const App = () => {
  return (
    <NativeUsage/> 
  )
}

export default App


















