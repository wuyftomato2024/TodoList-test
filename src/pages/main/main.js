import React, { useState, useRef } from "react";
import { TextBar } from "../../components/textBar/textBar";
import {v4 as uuidv4} from 'uuid';
export const Main = () => {
    const [input, setInput] = useState("");


    const [todos, setTodos] = useState([
        { id: 1, name: "todo1", completed: false },
        { id: 2, name: "todo2", completed: false },
    ]);

    const todoNameRef = useRef();
    const handleAddTodo = () =>{
        let name = todoNameRef.current.value;
        console.log(name);

        setTodos([...todos,{id:uuidv4(),name:name,completed:false}]);

        todoNameRef.current.value =null;
    };

    const toggleCheckbox = (id) => {
        // チェックボックスの状態を切り替えるためのロジック
        setTodos((prevTodos) =>
            prevTodos.map((todo) =>
                todo.id === id ? { ...todo, completed: !todo.completed } : todo
            )
        );
    };



    return (
        <div>
            {todos.map((todo) => (
                <div key={todo.id} style={{ display: "flex", alignItems: "center" }}>
                    <input
                        type="checkbox"
                        checked={todo.completed}
                        onChange={() => toggleCheckbox(todo.id)}
                    />
                    <TextBar props={todo} />
                </div>
            ))}
            <input type="text" ref={todoNameRef}/>
            <button onClick={handleAddTodo}>タスクを追加</button>
            <button>完了したタスク</button>
            <div>
                残りのタスク:
                {todos.filter((todo) => !todo.completed).length}
            </div>
        </div>
    );

}