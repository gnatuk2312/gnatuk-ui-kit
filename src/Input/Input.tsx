import React, { FC } from "react";

import "./Input.css";

type InputProps = {
    placeholder?: string;
    big?: boolean;
    type?: string;
}

const Input: FC<InputProps> = (props) => {
    const { placeholder, big, type = "text", ...rest } = props;
    
    const classes = ["input"];
    if (big) classes.push("input_big");
    
    return (
        <input {...rest} className={classes.join(" ")} type={type} placeholder={placeholder} />
    )
}

export default Input;