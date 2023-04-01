import classes from "./Restore.module.scss";
import rectangle2 from "../../../assets/rectangle2.png";
import rectangle3 from "../../../assets/rectangle3.png";

const Restore = () => {
  return (
    <>
      <div className="flex justify-around p-0 items-center h-[30vmax] w-[75vmax] ml-[10vmax]">
        <div className="flex flex-row justify-between">
          <img src={rectangle2} alt="picture" className={classes.picture} />
          <div className="flex flex-col justify-evenly items-center">
            <h1 className={classes.restore}>Востановить пароль</h1>
            <input placeholder="Email" type="text" className={classes.input} />
            <h1 className="">
              Введите email и мы вышлем вам инструкции по получению нового
              пароля
            </h1>
            <div className="flex items-center">
              <button className={classes.btn}>Далее</button>
            </div>
          </div>
          <img src={rectangle3} alt="picture3" className={classes.picture3} />
        </div>
      </div>
    </>
  );
};

export default Restore;
