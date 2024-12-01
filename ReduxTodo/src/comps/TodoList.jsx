import React, {useEffect} from 'react';
import { useSelector } from 'react-redux';
import Todos from './Todos';

function TodoList() {
    const todos = useSelector(state => state.todos);
    console.log(todos);

    useEffect(()=>{
        localStorage.setItem("todos", JSON.stringify(todos))
    }, [todos])
    return (
        <div className="flex flex-wrap gap-y-3">
            {todos.map((todo) => (
                <div key={todo.id} className="w-full text-white">
                    <Todos todo = {todo}/>
                </div>            
            ))}
        </div>
    )
}

export default TodoList
