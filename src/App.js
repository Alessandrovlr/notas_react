import React, { useState } from "react";
import InputTask from "./components/inputTarefa/inputBotao";
import TaskList from "./components/taskList/taskLista";
import './index.css';

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
        <div className="body">
            <h2 className="tarefas">Você tem {pendentes} tarefa pendente</h2>

            <InputTask adicionarTarefa={adicionarTarefa} />

            <div className="filtros">
                <button className={filtro === "todas" ? "filtro ativo" : "filtro"} onClick={() => setFiltro("todas")}>Todas</button>
                <button className={filtro === "pendentes" ? "filtro ativo" : "filtro"} onClick={() => setFiltro("pendentes")}>Pendentes</button>
                <button className={filtro === "concluidas" ? "filtro ativo" : "filtro"} onClick={() => setFiltro("concluidas")}>Concluídas</button>
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
