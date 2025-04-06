import React from "react";
import CheckBox from "../checkBox/check";
import DeletaBotao from "../delBotao/botao";

const TaskList = ({ tarefas, toggleTarefa, removerTarefa }) => {
    return (
        <div>
            {tarefas.map((tarefa, index) => (
                <div key={index}>
                    <CheckBox
                        checked={tarefa.concluida}
                        onToggle={() => toggleTarefa(index)}
                    />
                    <span style={{ textDecoration: tarefa.concluida ? "line-through" : "none" }}>
                        {tarefa.titulo}
                    </span>
                    <DeletaBotao onDelete={() => removerTarefa(index)} />
                </div>
            ))}
        </div>
    );
};

export default TaskList;