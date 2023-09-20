import React from 'react'
import './Features.css'

function Features() {
    return (
        <section id="services" className="services">
            <div className="container">

                <div className="section-title" data-aos="fade-up">
                    <h2 className='feat-name'>Features</h2>
                </div>

                <div className="row">
                    <div className="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0">
                        <div className="icon-box" data-aos="fade-up" data-aos-delay="100">
                            <div className="icon"><i className="bx bxl-dribbble"></i></div>
                            <h4 className="title"><a href="">Aptitude Test</a></h4>
                            <p className="description">Aptitude tests helps to determine a person's logical thinking , potential skills and chance of succeeding at a particular field</p>
                        </div>
                    </div>

                    <div className="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0">
                        <div className="icon-box" data-aos="fade-up" data-aos-delay="200">
                            <div className="icon"><i className="bx bx-file"></i></div>
                            <h4 className="title"><a href="">AI-based counselling</a></h4>
                            <p className="description">Career based counselling using AI provides personalized career guidance</p>
                        </div>
                    </div>

                    <div className="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0">
                        <div className="icon-box" data-aos="fade-up" data-aos-delay="300">
                            <div className="icon"><i className="bx bx-tachometer"></i></div>
                            <h4 className="title"><a href="">Detailed-Career paths</a></h4>
                            <p className="description">This platform provides detailed career path on the basis of result</p>
                        </div>
                    </div>

                    <div className="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0">
                        <div className="icon-box" data-aos="fade-up" data-aos-delay="400">
                            <div className="icon"><i className="bx bx-world"></i></div>
                            <h4 className="title"><a href="">Result Analysis</a></h4>
                            <p className="description">This platform will analyze the result of the test , after analyzing it through AI it suggests the user with  various career options</p>
                        </div>
                    </div>

                </div>

            </div>
        </section>
    )
}

export default Features