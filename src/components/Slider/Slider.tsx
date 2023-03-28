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
  //   console.log(users);

  return (
    <div className="w-[75vmax]">
      <h1 className="text-our2grey font-semibold text-lg">Новинки</h1>
      <Swiper
        autoplay={{
          delay: 500,
          disableOnInteraction: false,
        }}
        breakpoints={{
          // when window width is >= 640px
          1024: {
            width: 1024,
            slidesPerView: 1.6,
          },
          // when window width is >= 768px
          0: {
            width: 0,
            slidesPerView: 1,
          },
        }}
        spaceBetween={0}>
        {sliderData.map((item) => {
          const owner = users.find((i) => i.id === item.owner);
          const ownerName = users.find((i) => console.log(i));

          console.log(ownerName);

          console.log(item.owner);

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
