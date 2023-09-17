import React from "react";
import Header from "./header/header";
import ButtonBlock from "./buttonblock/buttonblock";
import './welcomeBlock.scss';
import FirstHalf from "./firsthalf/firsthalf";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import imgOne from '../../img/swiper-1.jpg';
import imgTwo from '../../img/swiper-2.jpg';
import imgThree from '../../img/swiper-3.jpg';
import imgFour from '../../img/swiper-4.jpg';

const WelcomeBlock = () => {

    return (
        <div className="welcomeblock">
            <Header/>
            <ButtonBlock/>
            <div className="welcomeblock__wrapper">
                <FirstHalf/>
                <Swiper
                    modules={[Navigation, Pagination, Autoplay]}
                    loop={true}
                    pagination={{ 
                        clickable: true,
                        el: '.swiper-pagination' 
                    }}
                    autoplay={{
                        delay: 10000,
                        disableOnInteraction: false
                    }}
                    className='mySwiper'>
                    <SwiperSlide><img src={imgOne} alt=''></img></SwiperSlide>
                    <SwiperSlide><img src={imgTwo} alt=''></img></SwiperSlide>
                    <SwiperSlide><img src={imgThree} alt=''></img></SwiperSlide>
                    <SwiperSlide><img src={imgFour} alt=''></img></SwiperSlide>
                    <div className="swiper-pagination"></div>
                </Swiper>
            </div>
            
            <span className="welcomeblock__downarrow"></span>
        </div> 
    )
}

export default WelcomeBlock;