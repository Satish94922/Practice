import React,{useState,useRef} from 'react';
import {View,ScrollView,Text,StyleSheet,TouchableOpacity,Button,TextInput} from 'react-native';

const ScrollViewbutton = ({navigation}) => {
    const [focusedButton, setFocusedButton] = useState(null);

    const scroll=useRef(null);
    const scrollSubjects=[
      {id:0,name:'Popular'},
      {id:1,name:'Mathematics'},
      {id:2,name:'Physics'},
      {id:3,name:'Chemistry'},
      {id:4,name:'Biology'}
    ]
  
    const buttons=(item)=>{
      return(
      <TouchableOpacity key={item.id}
        onPress={() => handleButtonClick(item.id)}
        style={[styles.button,focusedButton==item.id && styles.focusedButton]}>
        
        <Text style={[styles.test,focusedButton==item.id && styles.focustest]}>{item.name}</Text>
          
        </TouchableOpacity>
      )
    }
  
    const handleButtonClick = (buttonIndex) => {
      setFocusedButton(buttonIndex);
  
      buttonIndex==4||buttonIndex==3 ? scroll.current.scrollTo({ x:90, y: 0, animated: true }):scroll.current.scrollTo({x:-90,y:0,animated:true});
  
    };


    const [postText, setPostText] = React.useState('');

    const Navigatorhandler=() =>{
      postText!=="" && navigation.navigate({
        name: 'Home',
      });
    }

    const button=()=>{
      return(
      <Button
            title="Done"
            onPress={Navigatorhandler}
        />
      )
      
      }
    
  
    return(
    <View style={styles.container}>
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} ref={scroll} >{scrollSubjects.map(buttons)}</ScrollView>


      <TextInput
        multiline
        placeholder="What's on your mind?"
        style={{ height: 200, padding: 10, backgroundColor: 'white' }}
        value={postText}
        onChangeText={setPostText}
        
      />
      {button()}
    </View>
    )
}
  
const styles = StyleSheet.create({
    container: {
      
    },
    button: {
      paddingHorizontal: 10,
      paddingVertical: 8,
      borderRadius: 8,
      borderWidth:1,
      margin:5,
    },
    focusedButton: {
      backgroundColor: 'black',
    },
    test:{
      color:'black'
    },
    focustest:{
      color:'white'
    }
});

export default ScrollViewbutton;
  

