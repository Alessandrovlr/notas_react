import React from "react";
import CheckBox from "../checkBox/check";


const TaskList = (props) => {
    return (
        <div>
            {props.arrayTask.map((item, index) =>(
                <div key={index}><CheckBox label={"tarefa concludida!"}/>{item}</div>
            ))}
        </div>
    );
};

export default TaskList;
