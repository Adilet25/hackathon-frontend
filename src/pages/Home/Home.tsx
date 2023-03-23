import Footer from "../../components/Footer/Footer";
import { Pagination } from "../../components/UI/Pagination/Pagination";

const Home = () => {
  return (
    <div>
      <h1>Home page</h1>
      <p>text from bait branch</p>
      <Footer></Footer>
      <Pagination
        currentPage={0}
        onChangePage={function (page: number): void {
          throw new Error("Function not implemented.");
        }}
      />
    </div>
  );
};

export default Home;
