import React, { useState } from "react";
import InputTask from "./components/inputTarefa/inputBotao";
import TaskList from "./components/taskList/taskLista";

const App = () => {
    const [tarefas, setTarefas] = useState([]);
    const [filtro, setFiltro] = useState("todas");
    
    const removerTarefa = (index) => {
        const novas = tarefas.filter((_, i) => i !== index);
        setTarefas(novas);
    };
    
    const adicionarTarefa = (titulo) => {
        setTarefas(prev => [...prev, { titulo, concluida: false }]);
    };

    const toggleTarefa = (index) => {
        const novasTarefas = [...tarefas];
        novasTarefas[index].concluida = !novasTarefas[index].concluida;
        setTarefas(novasTarefas);
    };

    const tarefasFiltradas = tarefas.filter(tarefa => {
        if (filtro === "concluidas") return tarefa.concluida;
        if (filtro === "pendentes") return !tarefa.concluida;
        return true;
    });
    

    const pendentes = tarefas.filter(t => !t.concluida).length;


    return (
        <div>
            <h2>Você tem {pendentes} tarefa pendente</h2>

            <InputTask adicionarTarefa={adicionarTarefa} />

            <div>
                <button onClick={() => setFiltro("todas")}>Todas</button>
                <button onClick={() => setFiltro("pendentes")}>Pendentes</button>
                <button onClick={() => setFiltro("concluidas")}>Concluídas</button>
            </div>

            <TaskList 
                tarefas={tarefasFiltradas} 
                toggleTarefa={toggleTarefa}
                removerTarefa={removerTarefa}
            />
        </div>
    );
};

export default App;