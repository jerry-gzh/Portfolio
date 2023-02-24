import React from 'react';
import './Blog.css';

import Image1 from '../../assets/DiplomaDEVF.png';

const Blog = () => {
    return (
        <section className="blog container section" id="blog">
            <h2 className="section__title">Diplomas</h2>

            <div className="blog__container grid">
                <div className="blog__card">
                    <div className="blog__thumb">
                        {/* <a href="#"><span className="blog__category">Example</span></a> */}
                        <a href="https://photos.google.com/share/AF1QipP5le-0OJWopnThXriSN9uxccWYKBvrIBp9GbYp8DVcLH-QVp507lYLQXsbxGOruw/photo/AF1QipP7TEOGbw4QHI_jguhZ2y6Kv79lpQli1QBrhGki?key=UnVpVmR3ejB0bkhRYTFNeFVHRWg2TGJ2bG16Tkp3">
                            <img src={Image1} alt="" className='blog__img' /></a>
                    </div>
                    <div className="blog__details">
                        <h3 className="blog__title">Master en coding</h3>
                        <div className="blog__meta">
                            <span>Julio, 2022</span>
                            <span className="blog__dot">.</span>
                            <span>DevF</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Blog