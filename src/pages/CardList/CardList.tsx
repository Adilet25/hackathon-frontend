import React from "react";
import classes from "./CardList.module.scss";
import ProductCard from "../../components/ProductCard/ProductCard";

type Props = {};

const CardList = (props: Props) => {
  return (
    <div>
      <div>
        <h1 className="font-semibold text-our2grey text-lg">Все товары</h1>
        <div>
          <ProductCard />
        </div>
      </div>
    </div>
  );
};

export default CardList;
