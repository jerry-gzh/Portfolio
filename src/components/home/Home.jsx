import React from 'react';
import './Home.css';
import Me from '../../assets/profile.png';
import HeaderSocials from './HeaderSocials';
import ScrollDown from './ScrollDown';
import Shapes from './Shapes';
import { useTranslation } from "react-i18next";

const Home = () => {

    const [t] = useTranslation("global");

    return (
        <section className="home container" id='home'>
            <div className="intro">
                <img src={Me} alt="" className='home__img' width='120' />
                <h1 className="home__name">Gerardo Guzmán Hernández</h1>
                <span className="home__education">{t('Home.education')}</span>

                <HeaderSocials />


                <ScrollDown />
            </div>

            <Shapes />
        </section>
    )
}

export default Home