import React, { useEffect, useState } from "react";
import ReactPlayer from "react-player";
import { BsChevronRight } from "react-icons/bs";
import Link from "next/link";

const Hero = () => {
    const [isTrure, setIsTrue] = useState(false);

    // import ReactPlayer from "react-player";  
    setTimeout(() => {
        setIsTrue(true);
    }, 10);

    return (
        <section className="bot-hero-area">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-11">
                        <div className="bot-hero-content text-center">
                            <h1>
                                <span data-aos="fade-up">
                                    The bot combining conversational usability{" "}
                                </span>
                                <br />
                                <span data-aos="fade-up" data-aos-duration="1200" >
                                    {" "}
                                    with{" "}
                                    <span className="text-p bold">powerful AI image-generation</span>
                                </span>
                            </h1>
                            <div className="video-paly" data-aos="zoom-in">
                                {isTrure && (
                                    <ReactPlayer
                                        playing
                                        controls
                                        url="https://youtu.be/6NTgbfJduRU"
                                        className="react-player"
                                        light={
                                        <img src="/images/bot-hero-bg.png" alt="Thumbnail" />
                                        }
                                    />
                                )}
                            </div>
                            <Link href="/pricing" className="btn-lg" data-aos="fade-up">
                                Get Started <BsChevronRight/>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
      </section>
    )
}

export default Hero