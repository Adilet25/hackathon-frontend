import classes from "./Login.module.scss";
import rectangle from "../../../assets/rectangle.png";
import google from "../../../assets/google.png";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useAuth } from "../../../components/context/AuthContextProvider";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { login, error } = useAuth();

  return (
    <>
      <div className="flex flex-col justify-center container m-auto">
        <h1 className="font-bold text-2xl text-ourGrey ">Добро пожаловать</h1>
        <div className="flex flex-row  justify-between mt-10">
          <div className="flex flex-col">
            <div className="flex flex-col ">
              <h3
                className="text-ourLemonGreen font-semibold"
                onChange={(e) => setEmail(e.target.value)}>
                Email
              </h3>
              <input
                type="text"
                className="px-4 py-2 border border-our2grey rounded mb-7"
                placeholder="Asel_Asylbekova@gmail.com"
              />
              <h3
                className="text-ourLemonGreen font-semibold "
                onChange={(e) => setPassword(e.target.value)}>
                Пароль
              </h3>
              <input
                type="password"
                className="px-4 py-2 border border-our2grey rounded mb-7"
                placeholder="*********"
              />
              <div className="flex flex-row ">
                <input
                  type="checkbox"
                  className="px-4 py-2 border border-our2grey rounded"
                />
                <h1 className="{classes.spa">Запомнить меня</h1>
                <a
                  className="underline underline-offset-2 cursor-pointer text-[#705491]"
                  onClick={() => navigate("/restore")}>
                  Забыли пароль?
                </a>
              </div>
            </div>
            <div className="flex flex-col items-center">
              <button className="bg-ourDarkGreen font-semibold text-white h-12 w-10/12 mt-7 rounded-[25px]">
                Далее
              </button>
              <h1 className="mt-7">Или войдите с помощью</h1>
              <img
                src={google}
                alt="google"
                className="m-5"
                onClick={() => navigate("/gaccount")}
              />
              <h1
                className="cursor-pointer"
                onClick={() => login(email, password)}>
                Создать аккаунт
              </h1>
            </div>
          </div>

          <div>
            <img src={rectangle} alt="picture" className="{classes.pic" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
