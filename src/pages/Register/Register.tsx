import classes from "./Register.module.scss";
import rectangle2 from'../../assets/rectangle2.png';

const Register = () => {
  return (
    <>
    <div className="classes.registerForm">
        <h1 className={classes.register}>Регистрация</h1>
        <div className={classes.container2}>
        <input placeholder="Ваше имя" type="text" className={classes.input}/>
        <input placeholder="Email" type="text" className={classes.input}/>
        <input placeholder="Пароль" type="password" className={classes.input}/>
        <input placeholder="Подтвердить пароль" type="password" className={classes.input}/>
        </div>
        <button className={classes.btn}>Далее</button>
        <img src={rectangle2} alt="picture" className={classes.picture}/>
        <img src={rectangle2} alt="picture2" className={classes.picture2}/>
      </div>
    </>
  )
}

export default Register