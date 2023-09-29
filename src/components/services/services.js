import React, {useEffect} from "react";
import ContactButton from "../welcomeblock/contactbutton/contactbutton";
import ServicesImgOne from '../../img/services-one.jpg';
import ServicesImgTwo from '../../img/services-two.jpg';
import ServicesImgThree from '../../img/services-three.jpg';
import './services.scss';

const Services = () => {
    useEffect(() => {
        const miniCardImg = document.querySelectorAll('.service-block__card-wrapper__mini-card'),
                mainCardImg = document.querySelector('.service-block__card-wrapper__main-card__img'),
                mainCardTitle = document.querySelector('.service-block__card-wrapper__main-card__title'),
                mainCardText = document.querySelector('.service-block__card-wrapper__main-card__text');

        const CardTexts = {
            firstCard: 'Оборудован современными тренажерами для всех групп мышц. Дает возможность проведения силового, функционального и других видов тренинга. Персональный фитнес-тренинг.',
            secondCard: 'Инновационные интенсивные тренировки, направленные на проработку всех мышц спортсмена.',
            thirdCard: 'Фехтование – это престижный, красивый, динамичный, изящный, интеллектуальный, благородный олимпийский вид спорта с многовековыми традициями.'
        };

        mainCardText.innerHTML = CardTexts.firstCard;

        miniCardImg.forEach((e) => {
            e.addEventListener('click', () => {
                mainCardImg.style.transition = '.5s'
                const prevPropMainCard = {
                    img: mainCardImg.style.backgroundImage,
                    title: mainCardTitle.innerHTML,
                    text: mainCardText.innerHTML
                };
                mainCardImg.style.backgroundImage = e.style.backgroundImage;
                e.style.backgroundImage = prevPropMainCard.img;
                mainCardTitle.innerHTML = e.firstChild.innerHTML;
                e.firstChild.innerHTML = prevPropMainCard.title;
                
                 if (mainCardTitle.innerHTML === 'Мама+малыш (развивашки)') {
                    mainCardText.innerHTML = CardTexts.firstCard;
                    } else if(mainCardTitle.innerHTML === 'Мастер-класс по фехтованию') {
                        mainCardText.innerHTML = CardTexts.secondCard;
                    } else if (mainCardTitle.innerHTML === 'Фехтование для детей и взрослых') {
                        mainCardText.innerHTML = CardTexts.thirdCard;
                    }
            });
        });
    });


    return (
        <div className="service-block">
            <div className="service-block__title">НАПРАВЛЕНИЯ И УСЛУГИ</div>
            <div className="service-block__text">
                В отделении Центра в Новогорске проводятся групповые и персональные тренировки под руководством и контролем профессиональных тренеров, занятия в мини-группах, мастер классы с олимпийскими чемпионами, победителями и призерами Чемпионатов мира и Европы, спортивные сборы, trainingcamp, обучение начинающих, уроки любителям, спарринг мастерам.
            </div>
            <div className="service-block__card-wrapper">
                <div className="service-block__card-wrapper__main-card">
                    <div className="service-block__card-wrapper__main-card__img" style={{backgroundImage: `url(${ServicesImgOne})`}}></div>
                    <div className="service-block__card-wrapper__main-card__title">Мама+малыш (развивашки)</div>
                    <div className="service-block__card-wrapper__main-card__text">
                    
                    </div>
                    <ContactButton text='ЗАПИСАТЬСЯ'/>
                </div>
                <div className="service-block__card-wrapper__mini-card one" style={{backgroundImage: `url(${ServicesImgTwo})`}}>
                    <div className="service-block__card-wrapper__mini-card__text">Мастер-класс по фехтованию</div>
                </div>
                <div className="service-block__card-wrapper__mini-card two" style={{backgroundImage: `url(${ServicesImgThree})`}}>
                    <div className="service-block__card-wrapper__mini-card__text">Фехтование для детей и взрослых</div>
                </div>
            </div>
        </div>
    )
}

export default Services;