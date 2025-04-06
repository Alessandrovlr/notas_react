import React from "react";
import './check.css';

const CheckBox = ({ checked, onToggle }) => {
    return (
        <input
            type="checkbox"
            checked={checked}
            onChange={onToggle}
            className="custom-checkbox"
        />
    );
};

export default CheckBox;