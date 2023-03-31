import classes from "./Login.module.scss";
import rectangle from "../../../assets/rectangle.png";
import google from "../../../assets/google.png";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="classes.loginForm">
        <h1 className={classes.welcome}>Добра пожаловать</h1>
        <div className={classes.container}>
          <h3 className={classes.titleEmail}>Email</h3>
          <input type="text" className={classes.input1} />
          <h3 className={classes.titlePassword}>Пароль</h3>
          <input type="password" className={classes.input2} />
          <input type="checkbox" className={classes.checkbox} />
          <span className={classes.span}>Запомнить меня</span>
          <img
            style={{
              position: "absolute",
              top: "20px",
              left: "680px",
            }}
            src={rectangle}
            alt="picture"
            className={classes.picture}
          />
          <a onClick={() => navigate("/restore")}>Забыли пароль?</a>
        </div>
        <button className={classes.btn}>Далее</button>
        <span className={classes.span2}>Или войдите с помощью</span>
        <img
          style={{
            position: "absolute",
            width: "24px",
            height: "24px",
            left: "350px",
            top: "525px",
          }}
          src={google}
          alt="google"
          className={classes.google}
          onClick={() => navigate("/gaccount")}
        />
        <span className={classes.span3}>Создать аккаунт</span>
      </div>
    </>
  );
};

export default Login;
