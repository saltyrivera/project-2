import React from "react";
import ImgNewsOne from '../../img/news-one.png';
import './fourblock.scss';

const FourBlock = () => {
    return (
        <div className="fourblock" id='news'>
            <h2 className="fourblock__title">НОВОСТИ</h2>
            <div className="fourblock__news">   
                <img src={ImgNewsOne} alt=''></img>
                <div className="fourblock__news__content">
                    <div className="fourblock__news__content__textblock">
                        <h2 className="fourblock__news__content__textblock__title">В нашем центре Тушино прошёл открытый турнир Центра фехтования Ильгара Мамедова по фехтованию на шпагах среди девочек 2011-2013 г. р.</h2>
                        <p className="fourblock__news__content__textblock__time">29 января 2023 года</p>
                    </div>
                </div>
                <div className="fourblock__news__block">
                        <a href='https://vk.com/fk_nnov'><button className="fourblock__news__block__button">ПОДРОБНЕЕ</button></a>
                </div>
            </div>
            <div className="fourblock__news two">   
                <img src={ImgNewsOne} alt=''></img>
                <div className="fourblock__news__content">
                    <div className="fourblock__news__content__textblock">
                        <h2 className="fourblock__news__content__textblock__title">В нашем центре Тушино прошёл открытый турнир Центра фехтования Ильгара Мамедова по фехтованию на шпагах среди девочек 2011-2013 г. р.</h2>
                        <p className="fourblock__news__content__textblock__time">29 января 2023 года</p>
                    </div>
                </div>
                <div className="fourblock__news__block">
                        <a href='https://vk.com/fk_nnov'><button className="fourblock__news__block__button">ПОДРОБНЕЕ</button></a>
                </div>
            </div>
        </div>
    )
}

export default FourBlock;