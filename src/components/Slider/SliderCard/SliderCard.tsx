import { FC } from "react";
import Button from "../../UI/Button/Button";
import classes from "./SliderCard.module.scss";

interface SliderCardProps {
  data: any;
  owner: any;
}

const SliderCard: FC<SliderCardProps> = ({ data, owner }) => {
  console.log(owner);

  return (
    <div className="flex flex-row border-2 w-[40rem]  lg:w-[30rem] xl:w-card rounded-2xl border-solid border-ourLemonGreen border-opacity-60 p-5 justify-between   ">
      <div className="">
        <img src={data.image} width="200" className="rounded-2xl" />
      </div>
      <div className="flex flex-col justify-between w-1/2">
        <div>
          <img
            src={owner.avatar}
            width="30"
            alt={data.title}
            className="rounded-50"
          />
        </div>
        <div className="">
          <div>
            <span>Продаю</span>
          </div>
          <div className="flex flex-row justify-between">
            <span>Количество</span>
            <span className="text-ourViolet">{data.owner} шт</span>
          </div>
          <div className=" flex flex-row justify-between text-our2grey">
            <span>Цена</span>
            <span>{data.price} сом</span>
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
