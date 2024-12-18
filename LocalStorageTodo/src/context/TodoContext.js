import {useContext, createContext} from 'react';

export const TodoContext = createContext({
    todos: [
        {
            id: 1,
            todoMsg: "This is todo msg",
            completed: false 
        }
    ], 

    addTodo: (todo) => {},
    updateTodo: (id, todo) => {},
    deleteTodo: (id) => {},
    toggleComplete: (id) => {} 
});

export const TodoContextProvider = TodoContext.Provider;

export default function useTodo(){
    return useContext(TodoContext)
};