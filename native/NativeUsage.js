import { Button, StyleSheet, Text, View,NativeModules} from 'react-native'
import React from 'react';

const {CalenderModule} = NativeModules;
const {DEFAULT_EVENT_NAME} = CalenderModule.getConstants();


const NativeUsage = () => {

    
    const handleNativeModule = async () => {
        try {
          const data= await CalenderModule.createCalenderEventWithPromise(
            'Party',
            'My House',
          );
          console.log(`Created a new event :  ${data}`);
          CalenderModule.createCalenderEvent('testName', 'testLocation');
            console.log(DEFAULT_EVENT_NAME)
        } catch (e) {
          console.error(e);
        }
      };
        
        
    
  return (
    <View>
      <Button title='Click to invoke your native module' onPress={handleNativeModule}/>
    </View>
  )
}

export default NativeUsage

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    }
})