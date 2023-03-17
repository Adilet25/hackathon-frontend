import "./App.scss";
import Layout from "./components/Layout/Layout";
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
