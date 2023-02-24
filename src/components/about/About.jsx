import React from 'react';
import './About.css';
import Image from '../../assets/profile.png';
import Resume from '../../assets/GeradoGuzmanH_CV.pdf';
//import AboutBox from './AboutBox';

const About = () => {
    const downloadResume = async () => {
        window.open(Resume, '_blank');
    }


    return (
        <section className="about container section" id="about">
            <h2 className="section__title">Acerca de mi</h2>

            <div className="about__container grid">
                <img src={Image} alt="" className='about__img' />

                <div className="about__data grid">
                    <div className="about__info">
                        <p className="about__description">
                            


                        Hola! Mi nombre es Gerardo Guzmán, soy egresado de Ingeniería Electrónica donde me especialicé en Biomédica, área en la cual me 
                        desarrollé profesionalmente durante 3 años como ingeniero de servicio y capacitación.<br/><br/>
                        La curiosidad y oportunidades me llevaron 
                        a la implementación de software en diferentes empresas sumergiendome en los sistemas de gestión de mantenimiento computarizados 
                        "CMMS" y los sistemas de planificación de recursos empresariales "ERP" donde encontré una de mis pasiones estructurando datos, 
                        automatizando procedimientos y ofreciendo soluciones a los usuarios.<br/><br/>
                        Decidí entrar en el desarrollo de software retomando mis conocimientos en programación y aprendiendo nuevos lenguajes y 
                        herramientas. <br /><br />
                            Algunas de las tecnologías con las que he trabajado recientemente son: 
                        </p>
                        <ul className="about__list">
                            <li>JavaScript (ES6+)</li>
                            <li>React</li>
                            <li>Node.js</li>
                            <li>Bootstrap</li>
                            <li>Sass</li>
                            <li>GitHub</li>
                        </ul>
                        <button className="btn" onClick={downloadResume}>Donwload CV</button>
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