import React from "react";
import classes from "./CardList.module.scss";
import ProductCard from "../../components/ProductCard/ProductCard";

type Props = {};

const CardList = (props: Props) => {

  return (
    <div className={classes.container}>
      <div>
        Последние товары
        <div>
          <ProductCard />
        </div>
      </div>
    </div>
  );
};

export default CardList;
