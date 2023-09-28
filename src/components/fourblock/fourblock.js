import React from "react";
import './fourblock.scss';

const FourBlock = ({text1, text2, img1, img2, date1, date2}) => {
    return (
        <div className="fourblock" id='news'>
            <h2 className="fourblock__title">НОВОСТИ</h2>
            <div className="fourblock__news">   
                <img src={img1} alt=''></img>
                <div className="fourblock__news__content">
                    <div className="fourblock__news__content__textblock">
                        <h2 className="fourblock__news__content__textblock__title">{text1}</h2>
                        <p className="fourblock__news__content__textblock__time">{date1}</p>
                    </div>
                </div>
                <div className="fourblock__news__block">
                        <a href='https://vk.com/fk_nnov'><button className="fourblock__news__block__button">ПОДРОБНЕЕ</button></a>
                </div>
            </div>
            <div className="fourblock__news two">   
                <img src={img2} alt=''></img>
                <div className="fourblock__news__content">
                    <div className="fourblock__news__content__textblock">
                        <h2 className="fourblock__news__content__textblock__title">{text2}</h2>
                        <p className="fourblock__news__content__textblock__time">{date2}</p>
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