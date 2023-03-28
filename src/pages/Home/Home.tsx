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
    </div>
  );
};

export default Home;
