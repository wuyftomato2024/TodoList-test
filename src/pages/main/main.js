import React, { useState } from "react";
import { TextBar } from "../../components/textBar/textBar";


export const Main = () => {


    const [todos, setTodos] = useState([
        { id: 1, name: "aaaaaado1", completed: false },
        { id: 2, name: "todoaaaa2", completed: false },
    ]);

    return (<>
        <div>
            {todos.map((e, i) => {
                return (<TextBar props={e} />)
            })}
            <input type="text" />
            <button>タスクを追加</button>
            <button>完了したタスク</button>
            <div>残りのタスク:0</div>

            <TextBar props={todos[0]}/>
        </div>
    </>)


}