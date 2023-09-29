import { StyleSheet, Text, View ,FlatList} from 'react-native'
import React from 'react';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import { useDispatch ,useSelector} from 'react-redux';
import {RemoveUser} from './Todoactions';


const Users = () => {

    const dispatch = useDispatch();
    const Users=useSelector((state)=>state.users)

    const handleRemoveTodo = (id) => {
        dispatch(RemoveUser(id));
      };

  return (
    <View>
      <FlatList
      data={Users}
      keyExtractor={(item)=>item.id}
      renderItem={({ item }) => (
        <View style={styles.container1}>
          <Text style={styles.test1}>{item.name}</Text>
          <EvilIcons name="trash" size={30} color="red" onPress={() => handleRemoveTodo(item.id)}/>
        </View>
      )}
      />
    </View>
  )
}

export default Users;

const styles = StyleSheet.create({
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
})