import axios from "axios";
import React, { FC, useEffect, useState } from "react";
import { api } from "../api";

interface ProdDetProps {
  data?: any;
}

const ProductDetails: FC<ProdDetProps> = ({ data }) => {
  const [sliderData, setSliderData] = useState<any[]>([]);
  const [users, setUsers] = useState<any[]>([]);

  useEffect(() => {
    axios
      .get(api + `products/${data.owner}`)
      .then((res) => {
        setSliderData(res.data.results);
        // console.log(res.data.results);
      })
      .catch((e) => console.log(e));
  }, []);
  return <div>ProductDetails</div>;
};

export default ProductDetails;
