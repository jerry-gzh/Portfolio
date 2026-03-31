import React from 'react';
import './Blog.css';

import DevfDiploma from '../../assets/certs/DiplomaDEVF.png';
import AiDatosDiploma from '../../assets/certs/AI Datos.png';
import GcpDiploma from '../../assets/certs/VM_GCP.png';

const Blog = () => {
    const diplomas = [
        {
            id: 1,
            image: DevfDiploma,
            title: "Master en coding",
            date: "Julio, 2022",
            org: "DevF",
            link: "https://photos.google.com/share/AF1QipP5le-0OJWopnThXriSN9uxccWYKBvrIBp9GbYp8DVcLH-QVp507lYLQXsbxGOruw/photo/AF1QipP7TEOGbw4QHI_jguhZ2y6Kv79lpQli1QBrhGki?key=UnVpVmR3ejB0bkhRYTFNeFVHRWg2TGJ2bG16Tkp3",
        },
        {
            id: 2,
            image: AiDatosDiploma,
            title: "Fundamentos de AI para Manejo de Datos",
            date: "Enero, 2026",
            org: "Platzi",
            link: "https://platzi.com/p/gerardo-guzman943/curso/12254-course/diploma/detalle/",
        },
        {
            id: 3,
            image: GcpDiploma,
            title: "Máquinas Virtuales con Google Cloud Platform",
            date: "Febrero, 2026",
            org: "Google Cloud",
            link: "https://platzi.com/p/gerardo-guzman943/curso/2470-course/diploma/detalle/",
        },
    ];

    return (
        <section className="blog container section" id="blog">
            <h2 className="section__title">Diplomas</h2>

            <div className="blog__container grid">
                {diplomas.map(({ id, image, title, date, org, link }) => (
                    <div className="blog__card" key={id}>
                        <div className="blog__thumb">
                            {link ? (
                                <a href={link} target="_blank" rel="noreferrer">
                                    <img src={image} alt={title} className='blog__img' />
                                </a>
                            ) : (
                                <img src={image} alt={title} className='blog__img' />
                            )}
                        </div>
                        <div className="blog__details">
                            <h3 className="blog__title">{title}</h3>
                            {(date || org) && (
                                <div className="blog__meta">
                                    {date && <span>{date}</span>}
                                    {date && org && <span className="blog__dot">.</span>}
                                    {org && <span>{org}</span>}
                                </div>
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default Blog
