import React from "react";
import "./delete.css";   


const DeletaBotao = ({ onDelete }) => {
    return (
        <button className="delete" onClick={onDelete} >
            deletar
        </button>
    );
};

export default DeletaBotao;
