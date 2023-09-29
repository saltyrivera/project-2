import React from "react";
import './fiveblock.scss';
import VkIcon from '../../img/vk-icon.svg';
import { YMaps, Map, Placemark,} from '@pbe/react-yandex-maps';

const FiveBlock = () => {
    return (
        <div className="fiveblock" id='contacts'>
            <div className="fiveblock__block">
                <h2 className="fiveblock__block__title">КОНТАКТЫ</h2>
                <p className="fiveblock__block__secondarytitle">Телефон:</p>
                <p className="fiveblock__block__text">+7 (964) 836-15-55</p>
                <p className="fiveblock__block__secondarytitle">Адрес:</p>
                <p className="fiveblock__block__text">603087, Нижегородская область, г. Нижний Новгород. мкрн. Верхние-Печеры. ул. Верхне-Печерская 7Б, этаж 1, напротив батутного центра "Прыгалки"</p>
                <div className="fiveblock__block__vkblock">
                    <a href='https://vk.com/fk_nnov'>
                        <img src={VkIcon} alt=''></img>
                    </a>
                    <a href='https://vk.com/fk_nnov'>
                        <p className="fiveblock__block__text">https://vk.com/fk_nnov</p>
                    </a>
                </div>
            </div>
            <YMaps>
                <Map
                    instanceRef={ref => { ref && ref.behaviors.disable('scrollZoom'); }}
                    width={'100%'}
                    height={'100%'}
                    defaultState={{
                    center: [56.289028, 44.063395],
                    zoom: 17,
                    controls: ["zoomControl", "fullscreenControl"],
                    }}
                    modules={["control.ZoomControl", "control.FullscreenControl"]}
                    
                >
                    <Placemark
                    options={{
                        iconLayout: 'default#image',
                        iconImageHref: './market-icon.png',
                        iconImageSize: [100, 100],
                        iconImageOffset: [-60, -42]
                    }}
                    modules={["geoObject.addon.balloon"]}
                    defaultGeometry={[56.288987, 44.067374]}
                    />
                </Map>
            </YMaps>
        </div>
    )
}

export default FiveBlock;