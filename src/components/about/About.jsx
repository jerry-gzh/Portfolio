import React from 'react';
import './About.css';
import Image from '../../assets/profile.png';
import Resume from '../../assets/GeradoGuzmanH_CV.pdf';
import { useTranslation } from "react-i18next";

//import AboutBox from './AboutBox';

const About = () => {
    const downloadResume = async () => {
        window.open(Resume, '_blank');
    }

    const [t, i18n] = useTranslation("global");


    return (
        <section className="about container section" id="about">
            <h2 className="section__title">{t('About.about-me')}</h2>

            {/* Botones de prueba */}
                <br></br>

            {/* Botones de prueba */}

            <div className="about__container grid">
                <img src={Image} alt="" className='about__img' />

                <div className="about__data grid">
                    <div className="about__info">
                        <p className="about__description">
                            {t('About.text_1')}
                            <br/><br/>
                            {t('About.text_2')}
                            <br/><br/>
                            {t('About.text_3')}
                            <br/><br/>
                            {t('About.text_4')}
                        </p>
                        <ul className="about__list">
                            <li>JavaScript (ES6+)</li>
                            <li>React</li>
                            <li>Node.js</li>
                            <li>Bootstrap</li>
                            <li>Sass</li>
                            <li>GitHub</li>
                        </ul>
                        <button className="btn" onClick={downloadResume}>{t('About.download_btn')}</button>
                    </div>

{/*                     <div className="about__skills grid">
                        <div className="skills__data">
                            <div className="skills__titles">
                                <h3 className="skills__name">Development</h3>
                                <span className="skills__number">90%</span>
                            </div>

                            <div className="skills__bar">
                                <span className="skills__percentage development">

                                </span>
                            </div>
                        </div>

                        <div className="skills__data">
                            <div className="skills__titles">
                                <h3 className="skills__name">UI/UX Design</h3>
                                <span className="skills__number">80%</span>
                            </div>

                            <div className="skills__bar">
                                <span className="skills__percentage ui__design">

                                </span>
                            </div>
                        </div>

                        <div className="skills__data">
                            <div className="skills__titles">
                                <h3 className="skills__name">Photography</h3>
                                <span className="skills__number">60%</span>
                            </div>

                            <div className="skills__bar">
                                <span className="skills__percentage photography">

                                </span>
                            </div>
                        </div>
                    </div> */}
                </div>
            </div>

            {/* <AboutBox /> */}
        </section>
    )
}

export default About