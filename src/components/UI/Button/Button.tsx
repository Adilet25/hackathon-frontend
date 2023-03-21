import btnBlock from "./Button.module.scss";
import { FC } from "react";

interface ButtonProps {
  children: any;
}

const Button: FC<ButtonProps> = ({ children }) => {
  return (
    <div>
      <button className={btnBlock.Button}>{children}</button>
    </div>
  );
};

export default Button;
