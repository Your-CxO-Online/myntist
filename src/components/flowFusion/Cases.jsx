import Link from "next/link";
import { BsChevronRight } from "react-icons/bs";
const Cases = () => {
    return (
        <div className="cases-area" id="cases">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="section-title text-center">
                            <div className="h5 d-flex align-items-center justify-content-center gap-2" data-aos="fade-up">
                                <img src="/images/icon/cases.svg" alt="icon" width={13} height={13} /> 
                                <span>USE CASES</span>
                            </div>
                            <div className="h2" data-aos="fade-up" data-aos-duration="1200">Increase your productivity</div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-12">
                        <div className="cases-content">
                            <div className="cases-item" >
                                <div className="" data-aos="zoom-in" data-aos-duration="1000"> 
                                    <img src="/images/c1.png" alt="images" width={519} height={296} />
                                </div>
                                <div className="h4" data-aos="fade-up" data-aos-duration="1200">Generate content</div>
                                <p data-aos="fade-up" data-aos-duration="1400">Hyper efficient generation via granular editing stable diffusion AI models.</p>
                            </div>
                            <div className="cases-item">
                                <div className="" data-aos="zoom-in" data-aos-duration="1000"> 
                                    <img src="/images/c2.png" alt="images" width={519} height={296} />
                                </div>
                                <div className="h4" data-aos="fade-up" data-aos-duration="1200">Make real-time edits</div>
                                <p data-aos="fade-up" data-aos-duration="1400">Generate high quality images and text which can become assetized in the Myntist ecosystem.</p>
                            </div>
                        </div>
                    </div> 
                    <div className="col-lg-12">
                        <div className="cases-btn text-center">
                            <Link href="/pricing" className="btn-lg">Get Started <BsChevronRight/></Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Cases; 
