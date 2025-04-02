import React from "react";
import './task.css';


const TaskList = (props) => {
    return (
        <div>
            {props.arrayTask.map((item) =>(
                <div key={item}>{item}</div>
            ))}
        </div>
    );
};

export default TaskList;
