import React, { useContext, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { api } from "../../api";

export const authContext = React.createContext();
export const useAuth = () => useContext(authContext);
const API = "http://34.142.184.29/api/v1";

const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const config = {
    headers: { "Content-Type": "multipart/form-data" },
  };

  const register = async (username, password, email, passwordConfirm) => {
    let formData = new FormData();
    formData.append("email", email);
    formData.append("username", username);
    formData.append("password", password);
    formData.append("password2", passwordConfirm);
    console.log(passwordConfirm);

    try {
      const res = await axios.post(
        `${API}/account/register/`,
        formData,
        config
      );
      console.log(res);
      navigate("/login");
    } catch (error) {
      console.log(error);
      setError("Error occured");
    }
  };

  const login = async (username, password, email, passwordConfirm) => {
    let formData = new FormData();
    formData.append("email", email);
    formData.append("username", username);
    formData.append("password", password);
    formData.append("password2", passwordConfirm);
    try {
      let res = await axios.post(`${API}/account/refresh/`, formData, config);
      console.log(res.data);
      navigate("/");
      localStorage.setItem("token", JSON.stringify(res.data));
      localStorage.setItem("username", username);
      setUser(username);
      setError("");
    } catch (e) {
      console.log(e);
      setError("Wrong username or password!");
    }
  };

  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("username");
    setUser("");
    navigate("/");
  };

  const checkAuth = async () => {
    console.log("CHECK TOKEN FUNC WORKED");
    let token = JSON.parse(localStorage.getItem("token"));

    try {
      const Authorization = `Bearer ${token.access}`;

      let res = await axios.post(
        `${API}api/token/refresh/`,
        { refresh: token.refresh },
        { headers: { Authorization } }
      );

      localStorage.setItem(
        "token",
        JSON.stringify({
          refresh: token.refresh,
          access: res.data.access,
        })
      );

      let username = localStorage.getItem("username");
      setUser(username);
    } catch (error) {
      console.log(error);
      logout();
    }
  };

  return (
    <authContext.Provider
      value={{
        user,
        error,
        loading,

        register,
        login,
        logout,
        checkAuth,
      }}>
      {children}
    </authContext.Provider>
  );
};

export default AuthContextProvider;
