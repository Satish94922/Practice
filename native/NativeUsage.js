// import { Button, StyleSheet, Text, View,NativeModules} from 'react-native'
// import React from 'react';
// import CalenderModule from './CalendarModule';

// const {DEFAULT_EVENT_NAME} = CalenderModule.getConstants();


// const NativeUsage = () => {

//     const handleNativeModule=async () => {
//         try {
//           const eventId = await CalenderModule.createCalenderEvent(
//             'Party',
//             'My House',
//           );
//           console.log(`Created a new event with id ${eventId}`);
//         } catch (e) {
//           console.error(e);
//         }
//       };

//   return (
//     <View>
//       <Button title='Click to invoke your native module' onPress={handleNativeModule}/>
//     </View>
//   )
// }

// export default NativeUsage

// const styles = StyleSheet.create({
//     container:{
//         flex:1,
//         justifyContent:'center',
//         alignItems:'center'
//     }
// })