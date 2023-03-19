import { FC } from "react";
import TestButton from "../../UI/Logo/TestButton";

interface SliderCardProps {
    
}
 
const SliderCard: FC<SliderCardProps> = ({}) => {
    return ( <div>
        <div><img/></div>
        <div>
            <div><img/></div>
            <div>
                <div><span>Продаю</span></div>
                <div>
                    <span>Количество</span>
                    <span>43 шт</span>
                </div>
                <div>
                    <span>Цена</span>
                    <span>430 сом</span>
                </div>
            </div>
            <div>
                <TestButton>Купить</TestButton>
            </div>
        </div>
    </div> );
}
 
export default SliderCard;