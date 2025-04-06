import React from "react";

const CheckBox = ({ checked, onToggle }) => {
    return (
        <input
            type="checkbox"
            checked={checked}
            onChange={onToggle}
        />
    );
};

export default CheckBox;