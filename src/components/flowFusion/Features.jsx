
import FeaturesCard from './features.json'

const Features = () => {
    return (
        <section className='features-area' id='features'>
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="section-title text-center">
                            <div className="h5 d-flex align-items-center justify-content-center gap-2" data-aos="fade-up">
                                <img src="/images/icon/star.svg" alt="icon" width={13} height={13} /> 
                                <span>FEATURES</span>
                            </div>
                            <div className="h2" data-aos="fade-up" data-aos-duration="1200">Built for professionals</div>
                        </div>
                    </div>
                </div>
                <div className="features-content">
                    {FeaturesCard && FeaturesCard.map((record, i) => {
                        return <SingleFeatures key={i} record={record}/>;
                    })}
                </div> 
            </div>
        </section>
    )
}

export default Features;

const SingleFeatures = ({record})=> {
    return(
        <div className="row" key={record.id}>
            <div className="col-lg-6 align-self-center features-order">
                <div className="features-text">
                    <div className="" data-aos="fade-up" data-aos-duration="1000">
                        <img src={record.icon} alt="icon" /> 
                    </div> 
                    <div className="h4" data-aos="fade-up" data-aos-duration="1200">{record.title}</div> 
                    <p data-aos="fade-up" data-aos-duration="1400">{record.desc}</p>   
                </div>    
            </div>
            <div className="col-lg-6 align-self-center" >
                <div className="features-image" data-aos="zoom-in" data-aos-duration="1000">
                    <img src={record.image} alt="images" />
                </div>
            </div>
        </div>
    )
}