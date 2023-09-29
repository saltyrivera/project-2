import React from "react";
import './buttonblock.scss';
import {Link} from 'react-router-dom';

const ButtonBlock = () => {
    return (
        <div className="buttonblock">
                <ul className="buttonblock__ul">
                    <li className="buttonblock__ul__li"><Link to={`/#schedule`}>Расписание</Link></li>
                    <li className="buttonblock__ul__li"><Link to={`/tickets`}>Абонементы</Link></li>
                    <li className="buttonblock__ul__li"><Link to={`/#faq`}>Частые вопросы</Link></li>
                    <li className="buttonblock__ul__li"><Link to={`/#news`}>Новости</Link></li>
                    <li className="buttonblock__ul__li"><Link to={`/`}>Фотографии</Link></li>
                    <li className="buttonblock__ul__li"><Link to={`/#contacts`}>Контакты</Link></li>
                </ul>
        </div>
    )
}

export default ButtonBlock;