import React from "react";

const DeletaBotao = ({ onDelete }) => {
    return (
        <button onClick={onDelete} style={{ marginLeft: "10px", color: "red" }}>
            deletar
        </button>
    );
};

export default DeletaBotao;
