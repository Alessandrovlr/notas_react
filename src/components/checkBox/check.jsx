import React, { useState } from "react";

const CheckBox = ({ label }) => {
    const [checked, setChecked] = useState(false);

    const toggleCheck = () => {
        setChecked(!checked);
    };

    return (
        <div>
            <label>
                <input 
                    type="checkbox" 
                    checked={checked} 
                    onChange={toggleCheck} 
                />
                {label}
            </label>
        </div>
    );
};

export default CheckBox;
