import React from "react";
import CheckBox from "../checkBox/check";
import DeletaBotao from "../delBotao/botao";
import "./tasklist.css"; 

const TaskList = ({ tarefas, toggleTarefa, removerTarefa }) => {
    return (
        <div className="lista-tarefas">
            {tarefas.map((tarefa, index) => (
                <div className="tarefa" key={index}>
                    <p className="titulo">{tarefa.titulo}</p>
                    <div className="acoes">
                        <CheckBox
                            checked={tarefa.concluida}
                            onToggle={() => toggleTarefa(index)}
                        />
                        <DeletaBotao onDelete={() => removerTarefa(index)} />
                    </div>
                </div>
            ))}
        </div>
    );
};

export default TaskList;
