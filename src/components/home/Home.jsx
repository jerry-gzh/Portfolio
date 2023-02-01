import React from 'react';
import './Home.css';
import Me from '../../assets/profile.png';
import HeaderSocials from './HeaderSocials';
import ScrollDown from './ScrollDown';
import Shapes from './Shapes';

const Home = () => {
    return (
        <section className="home container" id='home'>
            <div className="intro">
                <img src={Me} alt="" className='home__img' width='120' />
                <h1 className="home__name">Gerardo Guzmán Hernández</h1>
                <span className="home__education">Jr Web Developer</span>

                <HeaderSocials />

                <a href="#contact" className="btn">Contáctame</a>

                <ScrollDown />
            </div>

            <Shapes />
        </section>
    )
}

export default Home