import React from "react";
import TitleIcon from '../../../img/title-icon.png';
import WhatsappIcon from '../../../img/whatsapp-icon.svg';
import './header.scss';
import ContactButton from "../contactbutton/contactbutton";

const Header = () => {
    return (
        <div className="header">
                <div className="header__wrapper">
                    <div className="header__wrapper__img"><img src={TitleIcon} alt=''></img></div>
                    <div className="header__wrapper__wrapper">
                        <a href='https://wa.me/79648361555'><div className="header__wrapper__wrapper__contact"><img src={WhatsappIcon} alt=''></img><p className="header__wrapper__wrapper__contact__number">+7 (964) 836-15-55</p></div></a>
                        <ContactButton text='ЗАПИСЬ ОНЛАЙН'/>
                    </div>
                </div>
        </div>
    )
}

export default Header;