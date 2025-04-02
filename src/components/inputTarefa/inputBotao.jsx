import React, { useState } from "react";
import "./inputStyle.css";

const InputTask = (props) => {
    const [task, setTask] = useState("");

    const adicionarTarefa = () => {
        if (task.trim() === "") return; 

        if(!props.arrayTask.includes(task)){
            props.setArrayTask(prevTasks => [...prevTasks, task]);
        }

        setTask("");
    };

    return (
        <div className="input">
            <input
                type="text"
                placeholder="Digite o título da tarefa"
                value={task}
                onChange={(e) => setTask(e.target.value)}
            />
            <button onClick={adicionarTarefa}>Criar</button>
        </div>
    );
};

export default InputTask;
