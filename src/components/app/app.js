import React from "react";
import './app.scss';
import WelcomeBlock from "../welcomeblock/welcomeBlock";
import SecondBlock from "../secondblock/secondblock";
import ThirdBlock from "../thirdblock/thirdblock";
import FourBlock from "../fourblock/fourblock";
import FiveBlock from "../fiveblock/fiveblock";
import Footer from "../footer/footer";
import Tickets from "../tickets/tickets";
import {Route, Routes} from 'react-router-dom';
import ScrollToHashElement from "../scrollToHash/scrollToHash";


const MainPage = () => {
    return (
        <>
        <WelcomeBlock/>
        <SecondBlock/>
        <ThirdBlock/>
        <FourBlock 
            img1={'https://catherineasquithgallery.com/uploads/posts/2021-03/1614680816_59-p-fon-fekhtovanie-65.jpg'} text1={'любой текст'} date1={'любая дата'}
            img2={'https://catherineasquithgallery.com/uploads/posts/2021-03/1614680816_59-p-fon-fekhtovanie-65.jpg'} text2={'любой текст'} date2={'любая дата'}
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
