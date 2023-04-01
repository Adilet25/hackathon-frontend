import { FC } from "react";
import Button from "../../UI/Button/Button";
import classes from "./SliderCard.module.scss";

interface SliderCardProps {
  data: any;
  owner: any;
}

const SliderCard: FC<SliderCardProps> = ({ data, owner }) => {
  // console.log(owner);
  // console.log(owner.avatar);

  return (
    <div className="flex flex-row border-2 max-w-[40rem]  lg:max-w-[30rem] xl:max-w-[38rem] h-[15rem]  rounded-2xl border-solid border-ourLemonGreen border-opacity-60 p-5 justify-around    ">
      <div className="flex items-center justify-center ">
        <img src={data.image} className="rounded-2xl w-36" />
      </div>
      <div className="flex flex-col justify-between w-1/2">
        <div>
          {/* <img
            src={owner.avatar}
            width="30"
            height="30"
            alt={data.title}
            className="rounded-50"
          /> */}
          {/* <div
            style={{
              width: "30px",
              height: "30px",
              borderRadius: "50%",
              backgroundColor: "black",
            }}></div> */}
        </div>
        <div>
          <div>
            <h1>Продаю</h1>
          </div>
          <div className="flex flex-row justify-between">
            <h1>Количество</h1>
            <h1 className="text-ourViolet">{data.owner} шт</h1>
          </div>
          <div className=" flex flex-row justify-between text-our2grey">
            <h1>Цена</h1>
            <h1>{data.price} сом</h1>
          </div>
        </div>
        <div className="flex justify-end">
          <button className={classes.button}>Подробнее</button>
        </div>
      </div>
    </div>
  );
};

export default SliderCard;
