import Link from "next/link"; 
 

const Testimonial = () => {
    return (
        <div className="testimonial-area testimonial-founder">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-10">
                        <div className="testimonial-content">
                            <div className="h2 text-center" data-aos="fade-up" data-aos-duration="1000">
                                Myntist is trusted by ecommerce founders globally
                            </div>
                           
                            <div className="testimonial-slid row">
                                <div className="col-lg-6" >
                                    <div className="testimonial-item">
                                        <div className="t-bg">
                                            <div className="testimonial-header">
                                                <img src="/images/qu.png" alt="icon" /> 
                                            </div>
                                            <div className="testimonial-body">
                                                <p>We’ve been using Myntist TreasureBox to incentivize activity in our community, and our growth has gone 10x as a result!</p>
                                            </div>
                                            <div className="d-flex align-items-center">
                                                <div className="testimonial-footer">
                                                    <img src="/images/user.png" alt="image" />
                                                    <div className="text">
                                                        <div className="h4 name">Jaydon Bator</div>
                                                        <p className="dre">Sr. Marketer</p>
                                                    </div>
                                                </div>
                                                <div className="ms-auto">
                                                    <img src="/images/google2.png" alt="image" />    
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6" >
                                    <div className="testimonial-item">
                                        <div className="t-bg">
                                            <div className="testimonial-header">
                                                <img src="/images/qu.png" alt="icon" />
                                                
                                            </div>
                                            <div className="testimonial-body">
                                                <p>We’ve been using Myntist TreasureBox to incentivize activity in our community, and our growth has gone 10x as a result!</p>
                                            </div>
                                            <div className="d-flex align-items-center">
                                                <div className="testimonial-footer">
                                                    <img src="/images/user.png" alt="image" />
                                                    <div className="text">
                                                        <div className="h4 name">Jaydon Bator</div>
                                                        <p className="dre">Sr. Marketer</p>
                                                    </div>
                                                </div>
                                                <div className="ms-auto">
                                                    <img src="/images/google2.png" alt="image" />    
                                                </div>
                                            </div>
                                            
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Testimonial;