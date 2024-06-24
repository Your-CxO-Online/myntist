import Link from "next/link";
import { BsChevronRight } from "react-icons/bs";

const ProductCard = [
  {
    id: 0,
    id_name: "Treasure-Box",
    title: "Treasure Box",
    desc: "An interface to build communities, upload content and share ideas which can return significant rewards and digital assets portfolios.",
    image: "/images/products1.png",
    button: "Discover Treasure Box",
    url: "https://treasurebox.arhamsoft.org/",
    target: "_blank",
  },
  {
    id: 1,
    id_name: "Staking-app",
    title: "Staking app",
    desc: "A utility to sustainably acquire further rewards and incentives from keeping your $MYNT tokens within the Myntist ecosystem.",
    image: "/images/products2.png",
    button: "Coming Soon ",
    target: "_self",
  },
  {
    id: 2,
    id_name: "Founders-Pass",
    title: "Founders Pass",
    desc: "An NFT that can be purchased on the ETH blockchain to get access to upgraded benefits of Myntist and become a founding member of the Myntist ecosystem.",
    image: "/images/products3.png",
    button: "GET Your Founder Pass",
    url: "/founder-pass",
    target: "_self",
  },
  {
    id: 3,
    id_name: "Myntist-AI",
    title: "FlowFusion",
    desc: "The ultimate combination of highly advanced Discord bots with AI driven image generation that can be utilised to further fuel your digital asset creation.",
    image: "/images/products4.png",
    button: "Discover Myntist AI",
    url: "/flow-fusion",
    target: "_self",
  },
  {
    id: 4,
    id_name: "NFT-Marketplace",
    title: "Artflow",
    desc: "A d-commerce platform and NFT marketplace where users can sell, exchange and store their generated content or collectibles with their Web3 wallets",
    image: "/images/products5.png",
    button: "Coming Soon",
    url: "https://hex-nft.arhamsoft.org/",
    target: "_blank",
  },
  {
    id: 5,
    id_name: "Goods-Marketplace",
    title: "Everflow",
    desc: "A physical goods marketplace which leverages blockchain technology to help users build income waves through perpetual royalty sharing features ",
    image: "/images/products6.png",
    button: "Discover Goods Marketplace",
    url: "https://everflow.myntist.com/",
    target: "_blank",
  },
  {
    id: 6,
    id_name: "Myntist GPT",
    title: "Myntist GPT",
    desc: "Your AI-powered wealth companion. Effortlessly create content, optimize investments, and tap into lucrative income streams. Join our community and unlock the full potential of your assets today!",
    image: "/images/products6.png",
    button: "Discover Goods Marketplace",
    url: "https://everflow.myntist.com/",
    target: "_blank",
  },
  {
    id: 7,
    id_name: "Oracle/LLM Service",
    title: "Oracle/LLM Service",
    desc: "A physical goods marketplace which leverages blockchain technology to help users build income waves through perpetual royalty sharing features ",
    image: "/images/products6.png",
    button: "Discover Goods Marketplace",
    url: "https://everflow.myntist.com/",
    target: "_blank",
  },
];

const Products = () => {
  return (
    <section className="products-area" id="products">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="product-title">
              <div className="h2">
                Our <span className="text-p">products</span>
              </div>
              <p>
                We offer a diverse range of{" "}
                <b>
                  industry disrupting products all tied together by our token:
                  $MYNT.
                </b>
                <br />
                We’re mixing traditional marketplace features with modern
                blockchain commerce; AI technology and community building to
                bring together buyers, sellers, investors, and resellers with
                the goal of removing traditional barriers and helping everyone
                build wealth.
              </p>
            </div>
            <div className="products-content">
              {ProductCard.map((record) => {
                return (
                  <div
                    className="products-item"
                    key={record.id}
                    id={record.id_name}
                  >
                    <div className="products-text">
                      <div
                        className="h2 title"
                        data-aos="fade-right"
                        data-aos-duration="1000"
                      >
                        <img src="/images/logo-i.png" alt="" /> {record.title}
                      </div>
                      <p data-aos="fade-right" data-aos-duration="1200">
                        {record.desc}
                      </p>
                      <div className={record.button}>
                        <Link
                          target={record.target}
                          href={`${record.url}`}
                          className={`btn-lg ${record.button}`}
                          data-aos="fade-right"
                          data-aos-duration="1400"
                        >
                          {record.button} <BsChevronRight />
                        </Link>
                      </div>
                    </div>
                    <div
                      className="products-img"
                      data-aos="fade-left"
                      data-aos-duration="1000"
                    >
                      <img src={record.image} alt="product" />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Products;
