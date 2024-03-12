import { BsChevronRight } from "react-icons/bs";

const Myntist = () => {
	return (
		<div className="myntist-area" id="echosystem">
			<div className="container">
				<div className="row row-gap">
					<div className="col-lg-5 align-self-center">
						<div
							className="myntist-img me-lg-4"
							data-aos="fade-right"
							data-aos-duration="1000"
						>
							<img src="/images/myntst.png" alt="image" />
						</div>
					</div>
					<div className="col-lg-7 align-self-center">
						<div className="myntist-text">
							<div
								className="date text-p"
								data-aos="fade-up"
								data-aos-duration="1000"
							>
								31/2222 SOLD
							</div>
							<div
								className="h2"
								data-aos="fade-up"
								data-aos-duration="1200"
							>
								Become a founder in the Myntist Ecosystem
							</div>
							<p data-aos="fade-up" data-aos-duration="1400">
								Founder series NFT release is to cultivate an initial
								community of high quality early access founders to act
								as an initial community for Myntist
							</p>
							<form
								action="/"
								data-aos="fade-up"
								data-aos-duration="1600"
							>
								<input type="text" placeholder="Enter quantity*" />
								<button type="submit">Purchase now</button>
							</form>
							<div
								className="h6"
								data-aos="fade-up"
								data-aos-duration="1700"
							>
								See contract address <BsChevronRight />{" "}
							</div>
							<div
								className="token-number"
								data-aos="fade-up"
								data-aos-duration="1800"
							>
								Token Standard : ERC-1155
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Myntist;
