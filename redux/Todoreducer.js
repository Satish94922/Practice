import { ADD_TODO, REMOVE_TODO,CHANGE_COLOR,REMOVE_USER} from './Todoactions';

const Data=[
    {id:0,name:'Neha Agarwal'},
    {id:1,name:'Pahul preet singh gulati'},
    {id:2,name:'Satish Karanam'},
    {id:3,name:'Chaitanya Pasupuleti'},
    {id:4,name:'Vineeth Simhadri'},
    {id:5,name:'Virat Kohli'},
    {id:6,name:'Rohit Sharma'},
    {id:7,name:'Hardik Pandya'},
    {id:8,name:'Chahal'},
    {id:9,name:'Suryakumar Yadav'}

] 

const initialState = {
  todos: [],
  color:[],
  users:Data
};

export default function Todoreducer(state = initialState, action) {
  switch (action.type) {
    case ADD_TODO:
      return {
        ...state,
        todos: [...state.todos, action.payload],
      };
    case REMOVE_TODO:
      console.log('enter2')
      return {
        ...state,
        todos: state.todos.filter((todo) => todo.id !== action.payload),
      };
    case CHANGE_COLOR:
      return{
        ...state,
        color:action.payload
      }
    case REMOVE_USER:
        return{
            ...state,
            users:state.users.filter((user)=>user.id !== action.payload)

        }
    default:
      return state;
  }
}
