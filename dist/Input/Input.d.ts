import { FC } from "react";
import "./Input.css";
type InputProps = {
    placeholder?: string;
    big?: boolean;
    type?: string;
};
declare const Input: FC<InputProps>;
export default Input;
