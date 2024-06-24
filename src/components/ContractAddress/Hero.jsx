import { BsChevronRight } from "react-icons/bs";
import Image from "next/image";
const PromoCard = [
	{
		id: 1,
		img: "/images/coingecko.png",
		desc: "coingecko",

	},
	{
		id: 2,
		img: "/images/coinmarketcap.png",
		desc: "coinmarketcap",

	},
	{
		id: 3,
		img: "/images/dex screener.png",
		desc: "dex screener",

	},
	{
		id: 4,
		img: "/images/dextools.png",
		desc: "dextools",

	},
];
const Hero = () => {
	return (
		<div className="contractAddress_hero-area">
			<div className="container">
				<div className="row">
					<div className="col-lg-12">
						<div className="contractAddress_hero-text text-center">
							<h1 data-aos="fade-up" data-aos-duration="1000">
								THE FUTURE OF WEB3 JOURNALISM, POWERED BY AI AGENTS
								<img src="/images/rocket.png" className="ms-3" alt="" />
							</h1>
							<p data-aos="fade-up" data-aos-duration="1200">
							
								We strive to democratize access to concise news intelligence. The future of Web3 journalism, powered by Al. <br />
								Contract Address:<br />
								<a href="#products" style={{"color":"white"}}>
								0x9C2b4b0dA5ebD20c29ef207580645<br />
								54055A88B68
								</a>
							</p>
							<div data-aos="fade-up" data-aos-duration="1400">
								<a href="#products" className="btn-lg">
									Buy Now <BsChevronRight />{" "}
								</a>
							</div>
						</div>
					</div>
				</div>
			</div>

			<div className="promo-area-only mt-5">
				<div className="container">
					<div className="row">
						<div className="col-lg-12">
							<div className="promo-content-only ">
								{PromoCard.map((record) => {
									return (
										<div className="promo-item" key={record.id} ref={record.ref}>
											<div className="number">
											{
												(record.desc==="dex screener")?(<Image className="mt-3"
													src={record.img}
													alt="main logo"
													width={60}
													height={60}
												/>):(record.desc==="coinmarketcap")?(<Image className=""
													src={record.img}
													alt="main logo"
													width={80}
													height={80}
												/>):(<Image className="mt-3"
													src={record.img}
													alt="main logo"
													width={135}
													height={45}
												/>)
											}
											
											</div>
											{/* <p>{record.desc}</p> */}
										</div>
									);
								})}
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Hero;
