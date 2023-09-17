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
        <FourBlock/>
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
