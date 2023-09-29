import React from "react";
import './firsthalf.scss';
import ContactButton from "../contactbutton/contactbutton";
import AddressIcon from '../../../img/address-icon.svg';

const FirstHalf = () => {
    return (
        <div className="firsthalf">
            <div className="firsthalf__wrapper">
                <h1 className="firsthalf__wrapper__title">ШКОЛА ФЕХТОВАНИЯ ГОРЬКИЙ</h1>
                <p className="firsthalf__wrapper__text">Групповые и парные и персональные тренировки с лучшими тренерами Нижнего Новгорода для детей и взрослых, мастер классы, спортивные сборы, соревнования.</p>
                <ContactButton text='ЗАПИСАТЬСЯ'/>
                <h2 className="firsthalf__wrapper__address">НАШ АДРЕС</h2>
                <div className="firsthalf__wrapper__address-info">
                    <img src={AddressIcon} alt=""></img>
                    <p className="firsthalf__wrapper__address-info__area">Нижегородский район<br/>(г.Нижний Новгород, Нижегородский район, ул. Верхне-Печерская 7Б, напротив батутного центра "Прыгалки")</p>
                </div>
            </div>
        </div>
    )
}

export default FirstHalf;