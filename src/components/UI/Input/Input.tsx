import inpBlock from "./Input.module.scss";

const Input = () => {
  return (
    <div>
      <input
        className={inpBlock.Input}
        type="text"
        name="text"
        pattern="\d+"
        placeholder=""></input>
    </div>
  );
};

export default Input;
