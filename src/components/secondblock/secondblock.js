import React from "react";
import './secondblock.scss';
import imgOne from '../../img/secondblock-li1.svg';
import imgTwo from '../../img/secondblock-li2.svg';
import imgThree from '../../img/secondblock-li3.svg';
import imgFour from '../../img/secondblock-li4.svg';
import img from '../../img/secondblock-image.png';

const SecondBlock = () => {
    return (
        <div className="secondblock">
            <h2 className="secondblock__title">О ЦЕНТРЕ ФЕХТОВАНИЯ</h2>
            <div className="secondblock__wrapper">
                <p className="secondblock__wrapper__text">Наш клуб официально зарегистрирован в федерации фехтования, это дает возможность нашим спортсменам:</p>
                <img src={img} alt=''></img>
            </div>
            <ul className="secondblock__cards">
                <li className="secondblock__cards__card">
                    <img src={imgOne} alt=''></img>
                    <p className="secondblock__cards__card__text">Обучаем всех, независимо от возраста и спортивной подготовки</p>
                </li>
                <li className="secondblock__cards__card">
                    <img src={imgTwo} alt=''></img>
                    <p className="secondblock__cards__card__text">Получать разряды</p>
                </li>
                <li className="secondblock__cards__card">
                    <img src={imgThree} alt=''></img>
                    <p className="secondblock__cards__card__text">Входить во всероссийскую систему отбора</p>
                </li>
                <li className="secondblock__cards__card">
                    <img src={imgFour} alt=''></img>
                    <p className="secondblock__cards__card__text">Участвовать в соревнованиях</p>
                </li>
            </ul>
        </div>
    )
}

export default SecondBlock;