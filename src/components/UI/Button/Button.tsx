import { FC } from "react";
import classes from "./Button.module.scss";

type Props = {
  children: React.ReactNode;
  onClick?: any;
  className?: any;
};

const Button: FC<Props> = ({ children }) => {
  return <button className={classes.Button}>{children}</button>;
};

export default Button;
