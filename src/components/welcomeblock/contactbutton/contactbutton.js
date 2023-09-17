import React from "react";
import './contactbutton.scss';
import WhatsappIcon from '../../../img/whatsapp-icon.svg';
import VkIcon from '../../../img/vk-icon.svg';
import TelegramIcon from '../../../img/telegram-icon.svg';
import ViberIcon from '../../../img/viber-icon.svg';

const ContactButton = ({text}) => {

    return (
        <>
        <div className="button">
            <div className="button__button">{text}
            <ul className="button__content">
                <li><a href='https://wa.me/79648361555'><img src={WhatsappIcon} alt=''></img></a></li>
                <li><a href='https://vk.com/fk_nnov'><img src={VkIcon} alt=''></img></a></li>
                <li><a href='https://t.me/+79648361555'><img src={TelegramIcon} alt=''></img></a></li>
                <li><a href='https://viber.click/79648361555'><img src={ViberIcon} alt=''></img></a></li>
            </ul>
            </div>
        </div>
        </>
    )
}

export default ContactButton;