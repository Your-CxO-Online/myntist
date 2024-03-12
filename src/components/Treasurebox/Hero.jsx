import { BsChevronRight } from "react-icons/bs";

const Hero = () => {
	return (
		<div className="treasurebox_hero-area">
			<div className="container">
				<div className="row">
					<div className="col-lg-12">
						<div className="treasurebox_hero-text text-center">
							<h1 data-aos="fade-up" data-aos-duration="1000">
								The best tool to create a community that helps you grow
								<img src="/images/rocket.png" className="ms-3" alt="" />
							</h1>
							<p data-aos="fade-up" data-aos-duration="1200">
								A fast and easy way to incentivize user activity by
								rewarding them with custom ranks, tokens and games.
							</p>
							<div data-aos="fade-up" data-aos-duration="1400">
								<a href="#products" className="btn-lg">
									Explore now <BsChevronRight />{" "}
								</a>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Hero;
