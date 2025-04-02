import React from "react";


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
