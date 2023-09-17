import React from "react";
import './fiveblock.scss';
import VkIcon from '../../img/vk-icon.svg';

const FiveBlock = () => {
    return (
        <div className="fiveblock" id='contacts'>
            <div className="fiveblock__block">
                <h2 className="fiveblock__block__title">КОНТАКТЫ</h2>
                <p className="fiveblock__block__secondarytitle">Телефон:</p>
                <p className="fiveblock__block__text">+7 (964) 836-15-55</p>
                <p className="fiveblock__block__secondarytitle">Адрес:</p>
                <p className="fiveblock__block__text">603087, Нижегородская область, г. Нижний Новгород. мкрн. Верхние-Печеры. ул. Верхне-Печерская 7Б, этаж 1</p>
                <div className="fiveblock__block__vkblock">
                    <a href='https://vk.com/fk_nnov'>
                        <img src={VkIcon} alt=''></img>
                    </a>
                    <a href='https://vk.com/fk_nnov'>
                        <p className="fiveblock__block__text">https://vk.com/fk_nnov</p>
                    </a>
                </div>
            </div>
            <div className="map" id='map' style={{width: '100%', height: '100%'}}></div>
        </div>
    )
}

export default FiveBlock;