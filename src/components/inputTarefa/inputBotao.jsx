import React, { useState } from "react";
import "./input.css";

const InputTask = (props) => {
    const [task, setTask] = useState("");

    const adicionarTarefa = () => {
        if (task.trim() === "") return; 

        props.setArrayTask(prevTasks => [...prevTasks, task]); 
        console.log([...props.arrayTask, task]); 

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
            <button onClick={adicionarTarefa} className="Enviar">Enviar</button>
        </div>
    );
};

export default InputTask;
