import React, {useEffect} from "react";
import './thirdblock.scss';
import ContactButton from "../welcomeblock/contactbutton/contactbutton";
import avatarImageOne from '../../img/avatar-image-one.png';
import avatarImageTwo from '../../img/avatar-image-two.png';





const ThirdBlock = () => {
    useEffect(() => {
        
        const avatarOne = document.querySelector('.thirdblock__table__avatarblock.one'),
                avatarTwo = document.querySelector('.thirdblock__table__avatarblock.two'),
                modal = document.querySelectorAll('.modal'),
                modalOne = document.querySelector('.modal.one'),
                modalTwo = document.querySelector('.modal.two'),
                modalClose = document.querySelectorAll('[data-close]');
        avatarOne.addEventListener('click', openModalOne);
        avatarTwo.addEventListener('click', openModalTwo);

        modalClose.forEach((e) => {
            e.addEventListener('click', closeModal);
        });

        modal.forEach((e) => {
            e.addEventListener('click', (elem) => {
                if(elem.target === e) {
                    closeModal()
                }
            });
        });

        document.addEventListener('keydown', (e) => {
            if (e.code === 'Escape' && modal.classList.contains('show')) {
                closeModal();
            }
        });


        function openModalOne() {
            modalOne.classList.add('show', 'fade');
            modalOne.classList.remove('hide');
            document.body.style.overflow = 'hidden';
        };

        function openModalTwo() {
            modalTwo.classList.add('show', 'fade');
            modalTwo.classList.remove('hide');
            document.body.style.overflow = 'hidden';
        }
        
        function closeModal() {
            modal.forEach((e) => {
                e.classList.remove('show', 'fade');
                e.classList.add('hide');
            });
            document.body.style.overflow = '';
        }
    }, []);
    
    return (
        <div className="thirdblock" id='schedule'>
            <h2 className="thirdblock__title">РАСПИСАНИЕ ЗАНЯТИЙ В ТЦ ОЛИМП ШКОЛЫ ФЕХТОВАНИЯ АНАСТАСТАСИИ СТЕПАНОВОЙ</h2>
            <div className="thirdblock__tablewrapper">
                <table className="thirdblock__table">
                    <tbody>
                        <tr>
                            <th></th>
                            <th>ПН</th>
                            <th>ВТ</th>
                            <th>СР</th>
                            <th>ЧТ</th>
                            <th>ПТ</th>
                            <th>СБ</th>
                            <th>ВС</th>
                        </tr>
                        <tr>
                            <td rowSpan='4' className="thirdblock__table__avatarblock one"><img src={avatarImageOne} alt=''></img><p>Степанова Анастасия Валерьевна</p></td>
                        </tr>
                        <tr>
                            <td></td>
                            <td>16:30 - 18:00<br/>Новички</td>
                            <td></td>
                            <td>16:30 - 18:00<br/>Новички</td>
                            <td></td>
                            <td>10:00 - 12:00<br/>Смешанная<br/>группа</td>
                            <td></td>
                        </tr>
                        <tr>
                            <td></td>
                            <td>18:00 - 20:00<br/>Старшая<br/>группа</td>
                            <td></td>
                            <td>18:00 - 20:00<br/>Старшая<br/>группа</td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr>
                            <td></td>
                            <td>20:00 - 21:00<br/>Взрослая(15+)<br/>группа</td>
                            <td></td>
                            <td>20:00 - 21:00<br/>Взрослая(15+)<br/>группа</td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                    </tbody>
                </table>
                <table className="thirdblock__table two">
                    <tbody>
                    <tr>
                        <th></th>
                        <th>ПН</th>
                        <th>ВТ</th>
                        <th>СР</th>
                        <th>ЧТ</th>
                        <th>ПТ</th>
                        <th>СБ</th>
                        <th>ВС</th>
                    </tr>
                    <tr>
                        <td rowSpan='4' className="thirdblock__table__avatarblock two"><img src={avatarImageTwo} alt=''></img><p>Степанова Ольга Валерьевна</p></td>
                        <td>9:00 - 11:00<br/>Смешанная <br/>группа</td>
                        <td></td>
                        <td>9:00 - 11:00<br/>Смешанная <br/>группа</td>
                        <td></td>
                        <td>9:00 - 11:00<br/>Смешанная <br/>группа</td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>19:00 - 20:00<br/>Новички</td>
                        <td></td>
                        <td>19:00 - 20:00<br/>Новички</td>
                        <td></td>
                        <td>19:00 - 20:00<br/>Новички</td>
                        <td></td>
                        <td></td>
                    </tr>
                    </tbody>
                </table>
            </div>
            <div className="thirdblock__learn">
                <h2 className="thirdblock__learn__title">СДЕЛАЙ ПЕРВЫЙ ШАГ К МЕЧТЕ</h2>
                <p className="thirdblock__learn__text">Запишись на пробное занятие к лучшим тренерам по фехтованию.</p>
                <ContactButton text='ЗАПИСАТЬСЯ'/>
            </div>

            <div className="modal one">
                <div className="modal__dialog">
                    <div className="modal__dialog__content">
                        <div data-close className="modal__dialog__content__close">&times;</div>
                        <img className="modal__dialog__content__img" src={avatarImageOne} alt='Фотография тренера'></img>
                        <p className="modal__dialog__content__title">Степанова Анастасия Валерьевна</p>
                        <p className="modal__dialog__content__text">Тренер по фехтованию на рапире и сабле, мастер спорта, призер первенства России среди кадетов, призер чемпионата России.</p>
                    </div>
                </div>
            </div>

            <div className="modal two">
                <div className="modal__dialog">
                    <div className="modal__dialog__content">
                        <div data-close className="modal__dialog__content__close">&times;</div>
                        <img className="modal__dialog__content__img" src={avatarImageTwo} alt='Фотография тренера'></img>
                        <p className="modal__dialog__content__title">Степанова Ольга Валерьевна</p>
                        <p className="modal__dialog__content__text">Тренер по рапире, кандидат в мастера спорта, Чемпионка Нижегородской области в течение 6 лет, призерка всероссийских турниров</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ThirdBlock;