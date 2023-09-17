import React from "react";
import './firsthalf.scss';
import ContactButton from "../contactbutton/contactbutton";
import AddressIcon from '../../../img/address-icon.svg';

const FirstHalf = () => {
    return (
        <div className="firsthalf">
            <div className="firsthalf__wrapper">
                <h1 className="firsthalf__wrapper__title">ЦЕНТР ФЕХТОВАНИЯ ГОРЬКИЙ</h1>
                <p className="firsthalf__wrapper__text">Групповые и персональные тренировки с ведущими российскими тренерами для детей и взрослых, мастер-классы, спортивные сборы, летние лагеря</p>
                <ContactButton text='ЗАПИСАТЬСЯ'/>
                <h2 className="firsthalf__wrapper__address">НАШ АДРЕС</h2>
                <div className="firsthalf__wrapper__address-info">
                    <img src={AddressIcon} alt=""></img>
                    <p className="firsthalf__wrapper__address-info__area">Нижегородский район<br/>(г.Нижний Новгород, Нижегородский район, ул. Верхне-Печерская 7Б)</p>
                </div>
            </div>
        </div>
    )
}

export default FirstHalf;