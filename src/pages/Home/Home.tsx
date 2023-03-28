import Footer from "../../components/Footer/Footer";
import { Pagination } from "../../components/UI/Pagination/Pagination";

import axios from "axios";
import { useEffect } from "react";
import { api } from "../../api";
import Slider from "../../components/Slider/Slider";
import CardList from "../CardList/CardList";

const Home = () => {
  return (
    <div>
      <Slider />
      <CardList />
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
