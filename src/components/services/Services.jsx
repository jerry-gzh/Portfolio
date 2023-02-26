import React from 'react';
import './Services.css';
import Image1 from '../../assets/service-1.svg'
import Image2 from '../../assets/service-2.svg'
import { useTranslation } from "react-i18next";
import i18next from "i18next";
//import Image3 from '../../assets/service-3.svg'


const es = [
    {
        id: 1,
        image: Image1,
        title: "Diseño Responsivo",
        description:
            "Disponibilidad del sitio en todos los dispositivos sin importar el tamaño o plataforma",
    },
    {
        id: 2,
        image: Image2,
        title: "Desarrollo Web",
        description:
            "Asgurar el correcto funcionamiento del sitio conforme a los estandarés promoviendo el correcto mantenimiento",
    }
];

const en = [
    {
        id: 1,
        image: Image1,
        title: "Responsive design",
        description:
            "Ensuring that the website/mobile app is responsive across all platforms",
    },
    {
        id: 2,
        image: Image2,
        title: "Web Development",
        description:
            "Ensuring that that a website meets the correct standards, and also ensuring it's well maintained",
    }
];

//🤖🤖



const Services = () => {

    const [t] = useTranslation("global");
    let data = [];
    (i18next.language === 'es')? data = es : data = en;
    
    return (
        <section className="services container section" id="services">
            <h2 className="section__title">{t('Services.services')}</h2>

            <div className="services__container grid">
                {data.map(({ id, image, title, description }) => {
                    return (
                        <div className="services__card" key={id}>
                            <img src={image} alt='' className='services__img' width="80" />

                            <h3 className="services__title">{title}</h3>
                            <p className="services__description">{description}</p>
                        </div>
                    )
                })}
            </div>
        </section>
    )
}

export default Services