import "./App.scss";
import AuthContextProvider from "./components/context/AuthContextProvider";
import Layout from "./components/Layout/Layout";
import ProductContextProvider from "./components/context/ProductContextProvider";
import MainRoutes from "./MainRoutes";

function App() {
  return (
    <div className="App">
      <ProductContextProvider>
        <AuthContextProvider>
          <Layout>
            <MainRoutes />
          </Layout>
        </AuthContextProvider>
      </ProductContextProvider>
    </div>
  );
}

export default App;
