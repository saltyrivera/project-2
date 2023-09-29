import React from "react";
import Title from '../../img/title-icon.png';
import WhatsappIcon from '../../img/whatsapp-icon.svg';
import VkIcon from '../../img/vk-icon.svg';
import TelegramIcon from '../../img/telegram-icon.svg';
import ViberIcon from '../../img/viber-icon.svg';
import {Link} from 'react-router-dom';
import './footer.scss';

const Footer = () => {
    return (
        <div className="footer">
            <div className="footer__privacy">
                <img src={Title} alt=''></img>
                <p className="footer__privacy__text">© 2023 ООО «Школа Фехтования "Горький"» | Все права защищены</p>
            </div>
            <div className="footer__nav">
                <ul className="footer__nav__ul">
                    <li><Link to={`/#schedule`}>Расписание</Link></li>
                    <li><Link to={`/tickets`}>Абонементы</Link></li>
                    <li><Link to={`/#faq`}>Частые вопросы</Link></li>
                    <li><Link to={`/#news`}>Новости</Link></li>
                    <li><Link to={`/`}>Фотографии</Link></li>
                    <li><Link to={`/#contacts`}>Контакты</Link></li>
                </ul>
            </div>
            <div className="footer__contact">
                <div className="footer__contact__whatsapp">
                    <a href='https://wa.me/79648361555'><img src={WhatsappIcon} alt=''></img></a>
                    <a href='https://wa.me/79648361555'><p className="footer__contact__whatsapp__number">+7 (964) 836-15-55</p></a>
                </div>
                <div className="footer__contact__icons">
                    <a href='https://vk.com/fk_nnov'><img src={VkIcon} alt=''></img></a>
                    <a href='https://t.me/+79648361555'><img src={TelegramIcon} alt=''></img></a>
                    <a href='https://viber.click/79648361555'><img src={ViberIcon} alt=''></img></a>
                </div>
            </div>
        </div>
    )
}

export default Footer;