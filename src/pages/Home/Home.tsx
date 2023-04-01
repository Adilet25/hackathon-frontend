import Footer from "../../components/Footer/Footer";
import { Pagination } from "../../components/UI/Pagination/Pagination";

import axios from "axios";
import { useEffect } from "react";
import { api } from "../../api";
import Slider from "../../components/Slider/Slider";
import CardList from "../CardList/CardList";
import Sidebar from "../../components/Sidebar/Sidebar";

const Home = () => {
  return (
    <div className="flex flex-row">
      <Sidebar />

      <div>
        <Slider />
        <CardList />
        {/* <Pagination
        currentPage={0}
        onChangePage={function (page: number): void {
          throw new Error("Function not implemented.");
        }}
      /> */}
      </div>
    </div>
  );
};

export default Home;
