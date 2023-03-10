import React, { FC, ReactNode } from "react";

import "./Button.css";

type ButtonProps = {
    children: ReactNode;
    color?: string;
    big?: boolean;
};

const Button: FC<ButtonProps> = (props) => {
    const {children, color, big, ...rest} = props;

    const classes = ["button"]
    if (big) classes.push("button_big");

    return (
        <button {...rest} className={classes.join(" ")} style={{ color }}>{children}</button>
    );
};

export default Button;