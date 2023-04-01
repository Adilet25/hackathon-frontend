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
// import { FC } from "react";
// import classes from "./Button.module.scss";

// type Props = {
//   children: React.ReactNode;
//   onClick?: any;
//   className?: any;
// };

// const Button: FC<Props> = ({ children }) => {
//   return <button className={classes.Button}>{children}</button>;
// };

// export default Button;
