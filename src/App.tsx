import "./App.scss";
import Layout from "./components/Layout/Layout";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import MainRoutes from "./MainRoutes";

function App() {
  return (
    <div className="App">
      <Layout>
        <MainRoutes />
      </Layout>
    </div>
  );
}

export default App;
