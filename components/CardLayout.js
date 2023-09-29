import React,{useEffect} from 'react'
import {View,Text,TouchableOpacity,StyleSheet,Image,ImageBackground,Button,BackHandler,ToastAndroid, ScrollView, Linking} from 'react-native'


const CardLayout = ({navigation,route}) => {

    let i=0

    const backbutton=()=>{
      if (i<1){
        ToastAndroid.show('Press again to exit',ToastAndroid.SHORT);
        console.log('clicked1')
        i=1;
  
        setTimeout(()=>{
          i=0;
          console.log("clicked")
        },2000);
        return true
      }
      else{
        BackHandler.exitApp();
      }
    }
  
    useEffect(()=>{
      BackHandler.addEventListener('hardwareBackPress',backbutton);
      return()=>{
        BackHandler.removeEventListener('hardwareBackPress',backbutton)
      }
    },[])
      


    const Data=[
        {id:0,subject:'Mathematics',test:'Practice on 3D',name:'by Neha Agarwal   '},
        {id:1,subject:'Chemistry',test:'Preparations and Reactions of Ether',name:'by Pahul preet singh gulati'},
        {id:2,subject:'physics',test:'Practice on 3D',name:'by Satish Karanam'},
        {id:3,subject:'English',test:'Preparation and Tasks on Grammer',name:'by Chaitanya Pasupuleti'},
        {id:4,subject:'Hindi',test:'Preparation of Grammer',name:'by Vineeth Simhadri'},

    ]
    
    const URL_A='myapp://scroll';

    const cards=(item)=>{
        return(
        <TouchableOpacity key={item.id} onPress={()=>navigation.navigate('Material',{
            screen:'HomeScreen',
        })}>
            <View style={styles.container}>
                <View style={styles.container1}>
                    <ImageBackground source={require('Myproject/assets/background.jpg')} style={styles.imageBackground}>
                        <View><Image source={require('Myproject/assets/playbutton.png')} style={styles.playbutton}></Image></View>
                        <View><Image source={require('Myproject/assets/teacher.png')} style={styles.tinyLogo}></Image></View>
                    </ImageBackground>
                </View>
                <View style={styles.container2}>
                    <View style={styles.testContainer1}><Text style={styles.test1}>{item.subject}</Text></View>
                    <View style={styles.testContainer2}><Text style={styles.test2}>{item.test}</Text></View>
                    <View style={styles.testContainer3}><Text style={styles.test3}>{item.name}</Text></View>
                </View>
            </View>
        </TouchableOpacity>
        )
    }


  return(
<View>
    <ScrollView>
    
    {Data.map(cards)}  
    </ScrollView>
    
</View>  
  )
}

const styles=StyleSheet.create({
    container:{
        flexDirection:'row',
        marginTop:30,
        
    },
    container1:{
        height:80,
        width:120,
        backgroundColor:'lightgreen',
        marginLeft:20,
        borderRadius:10,
        flexDirection:'row'
        
        
    },
    imageBackground: {
        width: 120,
        height: 80,
        borderRadius: 10, 
        overflow: 'hidden',
    },
    tinyLogo: {
        width: 50,
        height: 60,
        marginLeft:55
    },
    playbutton:{
        width:20,
        height:20,
        marginLeft:45,
        top:30
    },
    container2:{
        marginLeft:10,
    },
    testContainer1:{
        
        
    },
    test1:{
        color:'#009300',
        fontSize:11,
        fontFamily:'Poppins-Medium',
    },
    testContainer2:{
        
        flexGrow:1,
        flexDirection:'row'
        
    },
    test2:{
        fontSize:14,
        fontFamily:'Poppins-Medium',
        flex:1,
        width:1
        
    },
    testContainer3:{
        
        
    },
    test3:{
        fontSize:12,
        opacity:0.5,
        fontFamily:'Poppins-ExtraLight'
    }
})

export default CardLayout