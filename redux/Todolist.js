import React, { useState } from 'react';
import { View, Text, TextInput, Button, FlatList ,StyleSheet, TouchableOpacity} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { addTodo,removeTodo } from './Todoactions';
import Icon from 'react-native-vector-icons/Feather';
import { changeColor } from './Todoactions';
import { useNavigation } from '@react-navigation/native';




function Todolist() {
  const [task, setTask] = useState('');
  const todos = useSelector((state) => state.todos);
  const color=useSelector((state)=>state.color);
  const dispatch = useDispatch();
  const navigation=useNavigation();

  const handleAddTodo = () => {
    if (task.trim()) {
      dispatch(addTodo({ id: Date.now(), text: task }));
      setTask('');
    }
  };

  const handleRemoveTodo = (id) => {
    dispatch(removeTodo(id));
  };

  const handleColor=(newcolor)=>{
    dispatch(changeColor(newcolor))
  }

  return (
    <View style={{backgroundColor:color,flex:1}}>
      <Text style={styles.title}>ToDo List</Text>
      <View style={styles.conatainer}>
        <TextInput
        placeholder="Enter a task"
        value={task}
        onChangeText={setTask}
        style={styles.testInput}
      />
      </View>
      <View style={styles.conatainer}>
        <TouchableOpacity style={styles.testbtn} onPress={handleAddTodo}><Text>ADD</Text></TouchableOpacity>

        <TouchableOpacity onPress={()=>handleColor('red')} style={styles.colorbtn}><Text>Red Button</Text></TouchableOpacity>
        <TouchableOpacity onPress={()=>handleColor('green')} style={styles.colorbtn}><Text>Green Button</Text></TouchableOpacity>

        <TouchableOpacity onPress={()=>navigation.navigate('Users')} style={styles.colorbtn}><Text>Go To Users</Text></TouchableOpacity>

    </View>
    
    
      <FlatList
        
        data={todos}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.container1}>
            <Text style={styles.test1}>{item.text}</Text>
            <Icon name="trash-2" size={30} color="red" onPress={() => handleRemoveTodo(item.id)}/>
          </View>
        )}
      />
    </View> 
  );
}

const styles=StyleSheet.create({
    title:{
        fontSize:30,
        fontWeight:'bold',
        textAlign:'center',
        marginTop:20

    },
    testInput:{
        borderWidth:1,
        borderColor:'grey',
        borderRadius:5,
        width:'90%',
        margin:10,
        padding:10
    },
    conatainer:{
        justifyContent:'center',
        alignItems:'center'
    },
    testbtn:{
        width:'90%',
        borderWidth:2,
        borderRadius:5,
        backgroundColor:'grey',
        height:50,
        alignItems:'center',
        justifyContent:'center'
    },
    container1:{
        flexDirection:'row',
        backgroundColor:'#e9e9e9',
        width:"90%",
        justifyContent:'space-between',
        alignItems:'center',
        margin:10,
        marginLeft:20,
        padding:10
    },
    test1:{
        fontSize:20
    },
    colorbtn:{
      width:'90%',
      borderWidth:2,
      borderRadius:5,
      backgroundColor:'skyblue',
      height:50,
      alignItems:'center',
      justifyContent:'center',
      marginTop:10
    }
})

export default Todolist;
