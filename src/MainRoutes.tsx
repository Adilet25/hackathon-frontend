import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import Restore from "./pages/Restore/Restore";
import CardList from "./pages/CardList/CardList";
import GoogleAccount from "./pages/GoogleAccount/GoogleAccount";

type Props = {};

const MainRoutes = (props: Props) => {
  const PUBLIC_ROUTES = [
    {
      link: "/",
      element: <Home />,
      id: 1,
    },
    {
      link: "/login",
      element: <Login />,
      id: 2,
    },
    {
      link: "/cardlist",
      element: <CardList />,
      id: 3,
    },
    {
      link: "/register",
      element: <Register />,
      id: 4,
    },
    {
      link: "/restore",
      element: <Restore />,
      id: 5,
    },
    {
      link: "/gaccount",
      element: <GoogleAccount />,
      id: 66,
    },
    
  ];
  return (
    <Routes>
      {PUBLIC_ROUTES.map((item) => (
        <Route path={item.link} element={item.element} key={item.id} />
      ))}
    </Routes>
  );
};

export default MainRoutes;
