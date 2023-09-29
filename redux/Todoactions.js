export const ADD_TODO = 'ADD_TODO';
export const REMOVE_TODO = 'REMOVE_TODO';
export const CHANGE_COLOR='CHANGE_COLOR';
export const REMOVE_USER='REMOVE_USER'


export function addTodo(task) {
  return {
    type: ADD_TODO,
    payload: task,
  };
}

export function removeTodo(id) {
  return {
    type: REMOVE_TODO,
    payload: id,
  };
}

export const changeColor = (newColor) => {
  return {
    type: CHANGE_COLOR,
    payload: newColor,
    
  };
};

export const RemoveUser=(id)=>{
    return{
        type:REMOVE_USER,
        payload:id,
    }
}
