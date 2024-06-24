'use client'; 
import Slider from "react-slick";
import { FaDiscord,FaTelegram } from "react-icons/fa";
import Link from "next/link";

const Community = () => {
    const settings = {
        dots: false,
        arrows: false,
        infinite: true,
        slidesToShow: 5.5,
        slidesToScroll: 1,
        autoplay: true,
        speed: 4000,
        autoplaySpeed: 0,
        cssEase: "linear",
        responsive: [
            {
              breakpoint: 1324,
              settings: {
                slidesToShow: 4.5, 
              }
            },
            {
              breakpoint: 991,
              settings: {
                slidesToShow: 3.5, 
              }
            },
            {
              breakpoint: 768,
              settings: {
                slidesToShow: 2.5, 
                speed: 5000,
              }
            },
            {
              breakpoint: 480,
              settings: { 
                speed: 5000,
                cssEase: false,
                className: "center",
                centerPadding: "60px",
                slidesToShow: 1,
                speed: 2000
              }
            }
          ]
      };
    return (
        <div className="community-area" id="community">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="section-title text-center">
                            <div className="h5 d-flex align-items-center justify-content-center gap-2" data-aos="fade-up" data-aos-duration="1000">
                                <img src="/images/icon/community.svg" alt="icon" width={13} height={13} /> 
                                <span>COMMUNITY</span>
                            </div>
                            <div className="h2" data-aos="fade-up" data-aos-duration="1200">Recent Creations</div>
                        </div>
                    </div>
                </div>
                <div className="row" data-aos="fade-up">
                    <Slider {...settings} className='community-slider'>
                        <div className='creations-img'><img src="/images/creations1.png" alt="creations" width={313} height={323} /></div>   
                        <div className='creations-img'><img src="/images/creations2.png" alt="creations" width={313} height={323} /></div>   
                        <div className='creations-img'><img src="/images/creations3.png" alt="creations" width={313} height={323} /></div>   
                        <div className='creations-img'><img src="/images/creations4.png" alt="creations" width={313} height={323} /></div>   
                        <div className='creations-img'><img src="/images/creations5.png" alt="creations" width={313} height={323} /></div>   
                        <div className='creations-img'><img src="/images/creations6.png" alt="creations" width={313} height={323} /></div>   
                        <div className='creations-img'><img src="/images/creations3.png" alt="creations" width={313} height={323} /></div>   
                        <div className='creations-img'><img src="/images/creations4.png" alt="creations" width={313} height={323} /></div>   
                        <div className='creations-img'><img src="/images/creations5.png" alt="creations" width={313} height={323} /></div> 
                        <div className='creations-img'><img src="/images/creations3.png" alt="creations" width={313} height={323} /></div>   
                        <div className='creations-img'><img src="/images/creations4.png" alt="creations" width={313} height={323} /></div>   
                        <div className='creations-img'><img src="/images/creations5.png" alt="creations" width={313} height={323} /></div>     
                    </Slider>
                </div>
                <div className="row">
                    <div className="col-lg-12">
                        <div className="text-center" data-aos="fade-up">
                            <Link href="https://t.me/myntist_portal" target="_blank" className="btn-discord"><span>Join Telegram and Test</span> <FaTelegram/></Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Community