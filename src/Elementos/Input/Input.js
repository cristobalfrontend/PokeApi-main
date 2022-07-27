import React from "react";

const Input = (props) => {

    return (
        <input type={props.type} onChange={props.onChange} placeholder={props.name} value={props.value} checked={props.checked} hidden={props.hidden}></input>
    )
};

export default Input;