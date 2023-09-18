import React from 'react'
import { View,Text,StyleSheet,Image, Pressable} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import {DrawerActions,useNavigation} from '@react-navigation/native';

export const Header = (props) => {

    const nav=useNavigation();

  const openDrawer=()=>{
    nav.dispatch(DrawerActions.openDrawer());
  }
  return (
    <View style={Styles.header}>
        <View>
            <Text style={Styles.headerText}>{props.name}</Text>
        </View>
    </View>
  )
}

const Styles=StyleSheet.create({
    header:{
        height:60,
        flexDirection:'row',
        backgroundColor:'skyblue',
    },
    headerText:{
        fontWeight:'700',
        letterSpacing:1,
        fontSize:20,
        padding:18
    }

})
