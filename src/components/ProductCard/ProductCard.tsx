import { useState, useEffect } from "react";
import classes from "./ProductCard.module.scss";
import clothe1 from "./assets/Rectangle 4206.png";
import LikeOn from "./assets/LikeOn.svg";
import LikeOff from "./assets/LikeOff.svg";
import axios from "axios";
import { api } from "../../api";

type Props = {};

const ProductCard = (props: Props) => {
  const [Like, setLike] = useState(false);

  return (
    <div className={classes.cardBlock}>
      <div className={classes.Like}>
        {Like ? (
          <img
            src={LikeOn}
            alt=""
            onClick={() => {
              setLike(!Like);
            }}
          />
        ) : (
          <img
            src={LikeOff}
            alt=""
            onClick={() => {
              setLike(!Like);
            }}
          />
        )}
      </div>
      <img src={clothe1} alt="error" />
      <div>
        <h3>Свитшот</h3>
        <h3>20шт</h3>
      </div>
      <div>
        <h3>Цена</h3>
        <h3>500сом</h3>
      </div>
      <button>Подробнее</button>
    </div>
  );
};

export default ProductCard;
