import { FC, useState, useEffect } from "react";
import classes from "./ProductCard.module.scss";
import clothe1 from "./assets/Rectangle 4206.png";
import LikeOn from "./assets/LikeOn.svg";
import LikeOff from "./assets/LikeOff.svg";
import axios from "axios";
import { api } from "../../api";
import { useNavigate } from "react-router-dom";

interface ProdCardProps {
  data: any;
  owner: any;
}
const ProductCard: FC<ProdCardProps> = ({ owner, data }) => {
  const [Like, setLike] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    console.log(data.price);
  }, []);

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
      <img src={data.image} className="max-w-[25rem]" alt="error" />
      <div>
        <h3>{data.title}</h3>
        <h3>{data.stock == "in_stock" ? "В наличии" : "Нет в наличии"}</h3>
      </div>
      <div>
        <h3>Цена</h3>
        <h3>{data.price}</h3>
      </div>
      <button onClick={() => navigate(`/details/${data.owner}`)}>
        Подробнее
      </button>
    </div>
  );
};

export default ProductCard;
