/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { BsChevronRight } from "react-icons/bs";

const Hero = () => {
	return (
		<div className="founder-hero">
			<div className="founders-shapes">
				<img src="/images/founder-shape.svg" alt="" />
			</div>
			<div className="container">
				<div className="row">
					<div className="col-lg-7 align-self-center">
						<div className="founder-content">
							<h1 data-aos="fade-right" data-aos-duration="1000">
								Get exclusive ownership rights in the first <br />{" "}
								D-Commerce ecosystem
							</h1>
							<p data-aos="fade-right" data-aos-duration="1200">
								Become a pioneer and join the Myntist founders club to gain exclusive access, benefits and continuous rewards within the ever growing Myntist ecosystem.
							</p>
							<Link
								href="#generating-free"
								className="btn-lg"
								data-aos="fade-right"
								data-aos-duration="1400"
							>
								Become a founder <BsChevronRight />
							</Link>
						</div>
					</div>
					<div className="col-lg-5 ms-auto align-self-center">
						<div
							className="founder-img"
							data-aos="fade-up"
							data-aos-duration="1000"
						>
							<img
								src="/images/founder.png"
								alt="image"
								className="img-fluid"
							/>
							<div className="founder-text">
								<div className="h4">Myntist Founder</div>
								<p>An all access pass to the power of Myntist.</p>
								<div className="founder-admin">
									<div className="admin-content">
										<img
											src="/images/founder-admin.png"
											alt="image"
										/>
										<div className="admin-text ">
											<p>Name of Founder</p>
											<div className="h6">Jonathon Jefferson</div>
										</div>
									</div>
									<div className="founder-value ms-auto">
										<p>Current value</p>
										<div className="h6">4.00 ETH</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Hero;
