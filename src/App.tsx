import "./App.scss";
import AuthContextProvider from "./components/context/AuthContextProvider";
import Layout from "./components/Layout/Layout";
import MainRoutes from "./MainRoutes";

function App() {
  return (
    <div className="App">
      <AuthContextProvider>
        <Layout>
          <MainRoutes />
        </Layout>
      </AuthContextProvider>
    </div>
  );
}

export default App;
