import Accordion from 'react-bootstrap/Accordion';

const FaqItem = [
    {
        id: "0",
        title: "How do I find out more about Myntist?",
        desc: "Join our Telegram community and follow our other social channels. You can also MyntistGPT as a personal Al generated guide to the ecosystem.", 
    },
    {
        id: "1",
        title: "When will other Myntist products be released?",
        desc: "Myntist is an incredibly expansive ecosystem focused on covering all aspects of autonomous wealth creation in the digital age. We plan on releasing and improving more products regularly - updates on our roadmap dates will be visible on our social channels.", 
    },
    {
        id: "2",
        title: "How do I buy $MYNT? ",
        desc: "Load up your MetaMask wallet with ETH and then go to our UniSwap link and swap from ETH to our MYNT contract address. Our staking website will have full guidance on how to purchase our token and we will also release a trailer of which exchanges we will be listed on closer to the time.", 
    },
    {
        id: "3",
        title: "What ties all these products together?",
        desc: "The $MYNT token is the ultimate sustainable supply and demand dynamic between all these products. Our products have many cross-utilities that can benefit each other. For instance, digital assets can be generated via AI and sold as NFTs on the NFT marketplace. You can find out more about how to leverage Myntist holistically via MyntistGPT.", 
    } 
]
 
const Faq = () => {
    return (
        <section className="faq-area">
            <div className="shape-faq"></div>
            <div className="shape-faq2"></div>
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="faq-title text-center">
                            <div className="h5" data-aos="fade-up" data-aos-duration="1000">MYNTIST FAQ</div>
                            <div className="h2" data-aos="fade-up" data-aos-duration="1200">Frequently Asked Questions</div>
                        </div>
                    </div>
                    <div className="col-lg-12">
                        <div className="faq-content" >
                            <Accordion >
                                {FaqItem.map((record)=>{
                                    return(
                                        <>
                                        <Accordion.Item eventKey={record.id} data-aos="fade-up" data-aos-duration="1000">
                                            <Accordion.Header>{record.title}</Accordion.Header>
                                            <Accordion.Body>
                                                <p>{record.desc}</p>
                                            </Accordion.Body>
                                        </Accordion.Item>
                                        </>
                                    )
                                })} 
                            </Accordion>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Faq;