import React, { useState, useRef } from "react";
import { TextBar } from "../../components/textBar/textBar";
import {v4 as uuidv4} from 'uuid';
import {Stylebutton,Mainstyle} from "./styled";



export const Main = () => {
    // const [input, setInput] = useState("");


    const [todos, setTodos] = useState([
        { id: 1, name: "react勉強", completed: false },
        { id: 2, name: "マナー教育", completed: false },
    ]);
    //todosはuseState初期値、setTodosはuseState更新する値


    const todoNameRef = useRef();
    //値を取得するHook、<input>で
    
    const handleAddTodo = () =>{
        const name = todoNameRef.current.value;
        //current.valueは現在の値

        
        setTodos([...todos,{id:uuidv4(), name:name,completed:false}]);
        todoNameRef.current.value =null;
        //<...todos>はtodosのuseState中に新しい配列を作ることです,もとのtodo中のものは保持されます。
        // uuidはシステム内で重複することのない値を作るため使います,v4を選ぶ理由はセキュリティが高いかも
        // null;: 新しいToDoが追加された後、ToDo名を入力するinput要素の値を null に設定しています。これにより、ToDoを追加した後に入力フィールドがクリアされます。
        
    };



    const toggleCheckbox = (id) => {
        // チェックボックスの状態を切り替えるためのロジック
        setTodos((prevTodos) =>
            prevTodos.map((todo) =>
                todo.id === id ? { ...todo, completed: !todo.completed } : todo
            )
        );
    };

    const handleDelTodo = () => {
        const newtodos = todos.filter(todo => todo.completed === false);
        setTodos(newtodos);
      };



    return (
        <Mainstyle>
            <h1>やること</h1>
            <div>
               <input type="text" ref={todoNameRef} style={{width:"100%"}}/>
               {todos.map((todo) => (
                    <div key={todo.id} style={{ display: "flex",alignItems: "center" }} >
                        <input
                            type="checkbox"
                            checked={todo.completed}
                            onChange={() => toggleCheckbox(todo.id)}
                        />


                       <TextBar props={todo} />
                       {/* 別のコンポーネントに値を渡す方法は
                       コンポーネント名＋props名={渡す値}
                       　　TextBar　　＋ props= {todo} 
                       todosではなくtodoの理由は、ここは前useStateのtodosを渡すではなくこのmapに宣言したtodoを渡すため。
                       */}
                    </div>
                ))}
                
                    <Stylebutton onClick={handleAddTodo}>タスクを追加</Stylebutton>
               
                    <Stylebutton onClick={handleDelTodo}>完了したタスク削除</Stylebutton>
                
                <div>
                    残りのタスク:
                    {todos.filter((todo) => !todo.completed).length}
                </div>
            </div>
        </Mainstyle>
    );

}