import React from "react";
import Header from "../welcomeblock/header/header";
import ButtonBlock from "../welcomeblock/buttonblock/buttonblock";
import './tickets.scss';
import Table from "./table/table";
import Footer from '../footer/footer';


const Tickets = () => {
    return (
        <>
            <Header/>
            <ButtonBlock/>
            <div className="tickets-block">
                <div className="tickets-block__title"><p>АБОНЕМЕНТЫ</p></div>
                <div className="tickets-block__subtitle"><p>СТОИМОСТЬ ЗАНЯТИЙ В ШКОЛЕ ФЕХТОВАНИЯ ГОРЬКИЙ</p></div>
                <div className="tickets-block__main-table">
                    <div className="tickets-block__main-table__header">
                        <p className="tickets-block__main-table__header__title">ФЕХТОВАНИЕ</p>
                        <p className="tickets-block__main-table__header__text">(шпага, рапира, сабля)</p>
                    </div>
                    <div className="tickets-block__main-table__main-block">
                        <p className="tickets-block__main-table__main-block__age">Спортсмены до 14 лет:</p>
                        <Table price="3000 ₽" text="Абонемент (8 занятий в месяц)" style={{marginTop: '15px'}}/>
                        <p className="tickets-block__main-table__main-block__age">Спортсмены от 15 лет и старше:</p>
                        <Table price="3500 ₽" text="Абонемент (8 занятий в месяц)" style={{marginTop: '15px', borderBottom: 0}}/>
                        <Table price="500 ₽" text="1 занятие с группой" style={{borderTop: 0, borderBottom: 0}}/>
                        <Table price="1000 ₽" text="Индивидуальное занятие(45 минут)" style={{borderTop: 0, borderBottom: 0}}/>
                        <Table price="1500 ₽" text="Парное занятие (1 час)" style={{borderTop: 0}}/>
                    </div>
                </div>
            </div>
            <Footer/>
        </>
    )
}

export default Tickets;