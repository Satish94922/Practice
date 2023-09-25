// import React,{useState,useEffect} from 'react';
// import {LogBox,StatusBar } from 'react-native';
// import { StackNav } from './components/StackNav';
// import { NavigationContainer } from '@react-navigation/native';
// import MaterialTopTabNav from './components/MaterialTopTabNav';
// import Example from './components/Example';

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
//     <NavigationContainer linking={linking}>
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

// import React, { useState } from 'react';
// import { View, Text, TextInput, Button, StyleSheet, TouchableOpacity} from 'react-native';
// import axios from 'axios';

// function App() {
//   const [weatherData, setWeatherData] = useState(null);
//   const [location, setLocation] = useState('');

//   const handleLocationChange = (text) => {
//     setLocation(text);
//   };

//   const handleLoading=()=>{

//     const apiKey = '6fe3df670d5a40a6acf70526231909';
//     const apiUrl = `http://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${location}`;
//     axios.get(apiUrl)
//       .then((response) => {
//         setWeatherData(response.data);

//       })
//       .catch((error) => {
//         console.error('Error fetching weather data:', error);

//       });

//   }

//   return (
//     <View>
//       <Text  style={styles.heading}>Weather App</Text>
//       <TextInput
//         placeholder="Enter location"
//         value={location}
//         onChangeText={handleLocationChange}
//         style={styles.testinput}
//       />
//       <TouchableOpacity onPress={handleLoading} style={styles.btn} placeholder="Enter Location..."><Text style={styles.test}>Get Weather</Text></TouchableOpacity>
//         <View>
//           {weatherData &&(
//             <View>
//               <Text style={styles.test1}>Weather in {location}</Text>
//               <View style={styles.container}>
//               <Text style={styles.test2}>Temperature: {weatherData.current.temp_c}°C</Text>
//               <Text style={styles.test2}>Humidity: {weatherData.current.humidity}%</Text>
//               <Text style={styles.test2}>Condition: {weatherData.current.condition.text}</Text>
//               <Text style={styles.test2}>Feel Like : {weatherData.current.feelslike_c}°C</Text>
//               <Text style={styles.test2}>Wind Speed : {weatherData.current.wind_kph}km/hr</Text>
//               </View>
//             </View>
//           )}
//         </View>
//     </View>
//   );
// }

// const styles=StyleSheet.create({
//   heading:{
//     fontSize:32,
//     fontWeight:'bold',
//     color:'green',
//     textDecorationLine:'underline',
//     margin:20,
//     textAlign:'center'
//   },
//   test1:{
//     fontSize:25,
//     fontWeight:'800',
//     textAlign:'center',
//     margin:10
//   },
//   test2:{
//     fontSize:20,
//     textAlign:'center',
//   },
//   container:{
//     borderWidth:1,
//     backgroundColor:'#e9e9e9'
//   },
//   testinput:{
//     borderWidth:1,
//     borderRadius:10,
//     width:"90%",
//     padding:10,
//     margin:10
//   },
//   btn:{
//     borderRadius:10,
//     borderWidth:1,
//     width:"90%",
//     backgroundColor:'black',
//     padding:10,
//     marginLeft:10

//   },
//   test:{
//     color:'white',
//     fontSize:20,
//     textAlign:'center'
//   }
// })

// export default App;


// ProductList.js

import React, { useEffect, useState} from 'react';
import { View, Text, FlatList, ActivityIndicator, SectionList } from 'react-native';
import axios from 'axios';
import { StyleSheet } from 'react-native';

const App = () => {
  const [products, setProducts] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchData();
  }, [page]);

  const fetchData = async () => {
    setLoading(true)

    try {
      
      const response = await axios.get(`https://jsonplaceholder.typicode.com/comments?_page=${page}`);
      const newData = response.data;
      
      if (page === 1) {
      
        setProducts(newData);
      } else {
        
        setProducts((prevProducts) => [...prevProducts, ...newData]);
      }
    } catch (error) {
      console.error('Error fetching data:', error);
    } finally {
      setLoading(false);
    }
  };

  const loadMoreData = () => {
    setPage(page + 1);

  };

  const MyListItem=React.memo(({item})=>{
    return(
      <View style={styles.productItem}>
      <Text>{item.id}</Text>
      <Text>{item.name}</Text>
      <Text>{item.email}</Text>
    </View>

    )
  })

  return (
    <View style={styles.container}>
      <SectionList
        sections={products}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => <MyListItem item={item} />}
        onEndReached={loadMoreData}
        ListFooterComponent={!loading && <ActivityIndicator size="large" />}
      />
    </View>
  );
};

const styles=StyleSheet.create({
  container:{
    justifyContent:'center',
    alignItems:'center'
    
  },
  productItem: {
    padding: 16,
    borderWidth: 1,
    borderRadius:10,
    width:"95%",
    borderBottomColor: '#ccc',
    margin:5
  },
})
export default App;















