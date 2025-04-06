import React, { useState } from "react";
import "./input.css";

const InputTask = ({ adicionarTarefa }) => {
    const [task, setTask] = useState("");

    const handleAdicionar = () => {
        if (task.trim() === "") return;
        adicionarTarefa(task);
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
            <button className="criar" onClick={handleAdicionar}>Criar</button>
        </div>
    );
};

export default InputTask;