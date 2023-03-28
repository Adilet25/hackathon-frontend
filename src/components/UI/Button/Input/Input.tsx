import inpBlock from "./Input.module.scss";
import { FC } from "react";

interface InputProps {
  children: any;
}

const Input: FC<InputProps> = ({ children }) => {
  return (
    <div>
      <input
        className={inpBlock.Input}
        type="text"
        name="text"
        pattern="\d+"
        placeholder="">
        {children}
      </input>
    </div>
  );
};

export default Input;
