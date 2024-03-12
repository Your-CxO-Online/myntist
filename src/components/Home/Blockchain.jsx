import Link from "next/link";

const Blockchain = () => {
    return (
        <section className="blockchain-area">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-10">
                        <div className="blockchain-content">
                            <div className="h3" data-aos="fade-up" data-aos-duration="1000">As featured on</div>
                            <div className="blockchain-logo" data-aos="fade-up" data-aos-duration="1200">
                                <Link href="/"><img src="/images/logo1.png" alt="logo" /></Link>
                                <Link href="/"><img src="/images/logo2.png" alt="logo" /></Link>
                                <Link href="/"><img src="/images/logo3.png" alt="logo" /></Link> 
                                <Link href="/"><img src="/images/logo4.png" alt="logo" /></Link>
                                <Link href="/"><img src="/images/logo5.png" alt="logo" /></Link>
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Blockchain;