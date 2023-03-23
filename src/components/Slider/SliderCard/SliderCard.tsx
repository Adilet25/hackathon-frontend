import { FC } from "react";
import Button from "../../UI/Button/Button";
import classes from "./SliderCard.module.scss";

interface SliderCardProps {
    data:any;
    owner:any;
}
 
const SliderCard: FC<SliderCardProps> = ({data, owner}) => {
    console.log(owner);
    
    return ( <div className={classes.SliderCard}>
        <div className={classes.preview}><img src={data.image} width='200' /></div>
        <div className={classes.cardInfo}>
            <div><img src={owner.avatar} width='30' alt={data.title}/></div>
            <div>   
                <div><span>Продаю</span></div>
                <div>
                    <span>Количество</span>
                    <span>{data.owner} шт</span>
                </div>
                <div>
                    <span>Цена</span>
                    <span>{data.price} сом</span>
                </div>
            </div>
            <div>
                <Button>Купить</Button>

            </div>
        </div>
    </div> );
}
 
export default SliderCard;