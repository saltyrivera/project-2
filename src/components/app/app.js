import React from "react";
import './app.scss';
import WelcomeBlock from "../welcomeblock/welcomeBlock";
import SecondBlock from "../secondblock/secondblock";
import ThirdBlock from "../thirdblock/thirdblock";
import FAQ from '../faq/faq';
import FourBlock from "../fourblock/fourblock";
import FiveBlock from "../fiveblock/fiveblock";
import Footer from "../footer/footer";
import Tickets from "../tickets/tickets";
import {Route, Routes} from 'react-router-dom';
import ScrollToHashElement from "../scrollToHash/scrollToHash";

const Text1 = () => {
    return (
        <>10.00 -12.00 - фехтование для 6-8 лет; <br/>12.00-13.00 - фехтование для Взрослых +15</>
        
    )
}


const MainPage = () => {
    return (
        <>
        <WelcomeBlock/>
        <SecondBlock/>
        <ThirdBlock/>
        <FAQ/>
        <FourBlock 
            img1={'https://catherineasquithgallery.com/uploads/posts/2021-03/1614680816_59-p-fon-fekhtovanie-65.jpg'} title1={'🔥День открытых дверей объявляется открытым!🔥'} date1={'21 октября 2023'}
            text1={<Text1/>} url1={'https://vk.com/fk_nnov?w=wall-169328458_930'}
            img2={'https://catherineasquithgallery.com/uploads/posts/2021-03/1614680816_59-p-fon-fekhtovanie-65.jpg'} title2={'любой текст'} date2={'любая дата'}

        />
        <FiveBlock/>
        <Footer/>
        </>
    )
}

const App = () => {
    return (
        <>
        <ScrollToHashElement/>
        <Routes>
            <Route path='/' element={<MainPage/>}/>
            <Route path='/tickets' element={<Tickets/>}/>
        </Routes> 
        </>
    )
}

export default App;
