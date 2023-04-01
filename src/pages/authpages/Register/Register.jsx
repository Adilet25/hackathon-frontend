import classes from "./Register.module.scss";
import rectangle2 from "../../../assets/rectangle2.png";
import rectangle3 from "../../../assets/rectangle3.png";
import React, { useState } from "react";
import { useAuth } from "../../../components/context/AuthContextProvider";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");

  const { register } = useAuth();

  const navigate = useNavigate();

  function createUser() {
    if (!email || !password || !passwordConfirm || !username) {
      alert("You have empty inputs!");
      return;
    }

    let formData = new FormData();
    formData.append("username", username);
    formData.append("password", password);
    formData.append("password2", passwordConfirm);
    formData.append("email", email);
    register(formData, navigate("/login"));
    navigate("/login");
    console.log(formData);
  }

  return (
    <>
      <div className="flex justify-around p-0  h-[30vmax] w-[75vmax] ml-[10vmax]">
        <div className="flex flex-row justify-between items-center">
          <img src={rectangle2} alt="picture" className={classes.picture} />
          <div className="flex flex-col justify-evenly items-center">
            <div className="flex items-start">
              <h1 className="font-semibold text-our2grey items-start mb-10">
                Регистрация
              </h1>
            </div>
            <input
              placeholder="Ваше имя"
              type="text"
              className={classes.input}
              onChange={(e) => setUsername(e.target.value)}
            />
            <input
              placeholder="Email"
              type="text"
              className={classes.input}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              placeholder="Пароль"
              type="password"
              className={classes.input}
              onChange={(e) => setPassword(e.target.value)}
            />
            <input
              placeholder="Подтвердить пароль"
              type="password"
              className={classes.input}
              onChange={(e) => setPasswordConfirm(e.target.value)}
            />

            <div className="flex items-center">
              <button className={classes.btn} onClick={createUser}>
                Далее
              </button>
            </div>
          </div>
          <img src={rectangle3} alt="picture3" className={classes.picture3} />
        </div>
      </div>
    </>
  );
};

export default Register;
