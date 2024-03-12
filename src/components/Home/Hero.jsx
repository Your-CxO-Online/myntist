import { BsChevronRight } from "react-icons/bs"


const Hero = () => {
    return (
        <div className="hero-area">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="hero-text text-center">
                            <h1 data-aos="fade-up">
                                A unique <span className="text-p">digital ecosystem</span> that transforms
                                the way people see assets.
                            </h1>
                            <div className="hero-images">
                                <div className="hero-img">
                                    <div data-aos="fade-right" >
                                        <img src="/images/hero1.png" alt="images" />
                                    </div> 
                                </div>
                                <div className="hero-img">
                                    <div data-aos="zoom-in" >
                                        <img src="/images/hero2.png" alt="images" />
                                    </div>
                                    
                                </div>
                                <div className="hero-img">
                                    <div data-aos="fade-left" >
                                        <img src="/images/hero3.png" alt="images" />
                                    </div>
                                    
                                </div> 
                            </div>
                            <p data-aos="fade-up">Myntist is your go to ecosystem to assetize and build cash flow by making the latest vehicles of wealth accessible to you forever.</p>
                            <div data-aos="fade-up"> 
                                <a href="#products" className="btn-lg">Discover our products <BsChevronRight/> </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero