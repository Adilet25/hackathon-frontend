import React, { useEffect, useState } from "react";
import classes from "./CardList.module.scss";
import ProductCard from "../../components/ProductCard/ProductCard";
import axios from "axios";
import { api } from "../../api";

type Props = {};

const CardList = (props: Props) => {
  const [sliderData, setSliderData] = useState<any[]>([]);
  const [users, setUsers] = useState<any[]>([]);

  useEffect(() => {
    axios
      .get(api + "account/")
      .then((res) => {
        setUsers(res.data.results);
        console.log(users);
      })
      .catch((e) => console.log(e));
    axios
      .get(api + "products/")
      .then((res) => {
        setSliderData(res.data.results);
        console.log(res.data.results);
      })
      .catch((e) => console.log(e));
  }, []);
  return (
    <div className="w-[75vmax]">
      <h1 className="font-semibold text-our2grey text-lg my-7">Все товары</h1>
      <div className="grid grid-cols-3 gap-7">
        {sliderData.map((item) => {
          const owner = users.find((i) => i.id === item.owner);
          const ownerName = users.find((i) => console.log(i));

          return <ProductCard data={item} owner={owner} />;
        })}
      </div>
    </div>
  );
};

export default CardList;
