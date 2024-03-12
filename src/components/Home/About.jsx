import React, { useEffect, useState } from "react";
import ReactPlayer from "react-player";

const About = () => {
    const [isTrure, setIsTrue] = useState(false);

    // import ReactPlayer from "react-player";  
    setTimeout(() => {
        setIsTrue(true);
    }, 10);
    return (
        <section className="about-area" id="about">
            <div className="container">
                <div className="row row-gap">
                    <div className="col-lg-6 align-self-center">
                        <div className="about-text">
                            <div className="h5" data-aos="fade-up" data-aos-duration="1000">ABOUT MYNTIST</div>
                            <div className="h2" data-aos="fade-up" data-aos-duration="1200">Myntist helps people trade digital assets and unlock growth opportunities.</div>
                            <p data-aos="fade-up" data-aos-duration="1400">
                            The Myntist ecosystem is filled with applications that users can leverage to assetize their skills, passions, household items and more to create communities, content and businesses
                            </p>
                        </div>
                    </div>
                    <div className="col-lg-6 align-self-center">
                        <div className="about-text" data-aos="fade-up" data-aos-duration="1000">
                            <img src="/images/about-video.png" alt="Thumbnail" className="img-fluid" />
                            {/* {isTrure && (
                                <ReactPlayer
                                    playing
                                    controls
                                    url="https://www.youtube.com/watch?v=wnHW6o8WMas"
                                    className="react-player"
                                    light={
                                        <img src="/images/about-video.png" alt="Thumbnail" className="img-fluid" />
                                    }
                                />
                            )}  */}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default About;