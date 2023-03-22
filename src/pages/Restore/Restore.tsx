import classes from "./Restore.module.scss";
import rectangle2 from'../../assets/rectangle2.png';

const Restore = () => {
  return (
    <>
    <div className="classes.registerForm">
        <h1 className={classes.restore}>Востановить пароль</h1>
        <input placeholder="Email" type="text" className={classes.input}/>
        <span>Введите email  и мы вышлем вам   инструкции по получению нового пароля</span>
        <button className={classes.btn}>Далее</button>
        <img src={rectangle2} alt="picture" className={classes.picture}/>
        <img src={rectangle2} alt="picture2" className={classes.picture2}/>
      </div>
    </>
  )
}

export default Restore