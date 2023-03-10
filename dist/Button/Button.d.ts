import { FC, ReactNode } from "react";
import "./Button.css";
type ButtonProps = {
    children: ReactNode;
    color?: string;
    big?: boolean;
};
declare const Button: FC<ButtonProps>;
export default Button;
