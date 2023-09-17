import React from "react";
import './thirdblock.scss';
import ContactButton from "../welcomeblock/contactbutton/contactbutton";
import avatarImageOne from '../../img/avatar-image-one.png';
import avatarImageTwo from '../../img/avatar-image-two.png';

const ThirdBlock = () => {
    return (
        <div className="thirdblock" id='schedule'>
            <h2 className="thirdblock__title">РАСПИСАНИЕ ЗАНЯТИЙ В ТЦ ОЛИМП ШКОЛЫ ФЕХТОВАНИЯ АНАСТАСТАСИИ СТЕПАНОВОЙ</h2>
            <div className="thirdblock__tablewrapper">
            <table className="thirdblock__table">
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
                    <td rowSpan='4' className="thirdblock__table__avatarblock"><img src={avatarImageOne} alt=''></img><p>Степанова Анастасия Валерьевна</p></td>
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
                    <td>18:00 - 20:00<br/>Смешанная<br/>группа</td>
                    <td></td>
                    <td>18:00 - 20:00<br/>Смешанная<br/>группа</td>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
            </table>
            <table className="thirdblock__table two">
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
                    <td rowSpan='4' className="thirdblock__table__avatarblock"><img src={avatarImageTwo} alt=''></img><p>Степанова Анастасия Валерьевна</p></td>
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
            </table>
            </div>
            <div className="thirdblock__learn">
                <h2 className="thirdblock__learn__title">УЧИСЬ У ЛУЧШЕЙ</h2>
                <p className="thirdblock__learn__text">Только в нашем центре вам предоставляется уникальная возможность записаться на персональный урок к лучшему тренеру по фехтованию.</p>
                <ContactButton text='ЗАПИСАТЬСЯ'/>
            </div>
        </div>
    )
}

export default ThirdBlock;