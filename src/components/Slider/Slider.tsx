import { FC } from "react";
import {Swiper, SwiperSlide} from "swiper/react";
import 'swiper/css';
import SliderCard from "./SliderCard/SliderCard";
interface SliderProps {
}
 
const Slider: FC<SliderProps> = ({}) => {
    return ( <div>
        <Swiper
        loop={true}
        autoplay={{
            delay: 500,
            disableOnInteraction: false
        }}
        spaceBetween={50}
        slidesPerView={3}
        
        
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}>
            <SwiperSlide>
                <SliderCard/>
            </SwiperSlide>
            
            <SwiperSlide>
                <SliderCard/>
            </SwiperSlide>
            
            <SwiperSlide>
                <SliderCard/>
            </SwiperSlide>
            <SwiperSlide>
                <SliderCard/>
            </SwiperSlide>
            
            <SwiperSlide>
                <SliderCard/>
            </SwiperSlide>
            
            <SwiperSlide>
                <SliderCard/>
            </SwiperSlide>
            <SwiperSlide>
                <SliderCard/>
            </SwiperSlide>
            
            <SwiperSlide>
                <SliderCard/>
            </SwiperSlide>
            
            <SwiperSlide>
                <SliderCard/>
            </SwiperSlide>
        </Swiper>
    </div> );
}
 
export default Slider;