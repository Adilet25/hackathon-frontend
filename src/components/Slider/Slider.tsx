import { FC, useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import SliderCard from "./SliderCard/SliderCard";
// import { Products } from "../../modules/Products";
import axios from "axios";
import { api } from "../../api";
interface SliderProps {}

const Slider: FC<SliderProps> = () => {
  const [sliderData, setSliderData] = useState<any[]>([]);
  const [users, setUsers] = useState<any[]>([]);

  useEffect(() => {
    axios
      .get(api + "account/")
      .then((res) => {
        setUsers(res.data.results);
        console.log(res.data.results);
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
  //   console.log(users);

  return (
    <div>
      <Swiper
        autoplay={{
          delay: 500,
          disableOnInteraction: false,
        }}
        spaceBetween={50}
        slidesPerView={1.5}>
        {sliderData.map((item) => {
          const owner = users.find((i) => i.id === item.owner);
          console.log(users);

          console.log(owner, item.owner);

          return (
            <SwiperSlide key={Math.random() * 1000}>
              <SliderCard data={item} owner={owner} />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default Slider;
