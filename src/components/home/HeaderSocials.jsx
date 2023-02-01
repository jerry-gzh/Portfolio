import React from 'react';
import { FaGithub, FaLinkedinIn, FaEnvelope, FaWhatsapp } from 'react-icons/fa';

const HeaderSocials = () => {
    return (
        <div className='home__socials'>
            <a href='https://github.com/jerry-gzh' className='home__social-link' target='_blank' rel='noreferrer'>
                <FaGithub />
            </a>

            <a href='https://www.linkedin.com/in/gerardo-a-guzman-h/' className='home__social-link' target='_blank' rel='noreferrer'>
                <FaLinkedinIn />
            </a>

            <a href='mailto:contacto@gerardoguzmanh.com' className='home__social-link' target='_blank' rel='noreferrer'>
                <FaEnvelope />
            </a>

            <a href='https://api.whatsapp.com/send?phone=5214431981444&text=Hola%20Gerardo!%20' className='home__social-link' target='_blank' rel='noreferrer'>
                <FaWhatsapp />
            </a>

        </div>
    );
};

export default HeaderSocials;
