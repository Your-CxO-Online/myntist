import Link from "next/link";
import { BsChevronRight } from "react-icons/bs";

const Benefits = () => {
	return (
		<div className="treasurebox-area benefits-area" id="Benefits">
			<div className="container">
				<div className="row">
					<div className="col-lg-12">
						<div
							className="section-title"
							data-aos="fade-up"
							data-aos-duration="1000"
						>
							<div className="h2">
								Discover Premium benefits for Founders Pass holders
							</div>
						</div>
					</div>
					<div className="col-lg-12">
						<div className="treasurebox-content">
							<div
								className="tt1"
								data-aos="fade-right"
								data-aos-duration="1000"
							>
								<div className="row g-3">
									<div className="col-12">
										<div className="treasurebox-item">
											<div className="treasurebox-text">
												<div className="h3 title">Golden Pass</div>
												<p>
													Get exclusive access to all of the tools Myntist offers to help sellers skyrocket the growth of their projects.
												</p>
											</div>
											<div className="treasurebox-img">
												<img className="d-none d-lg-block"
													src="/images/benefits1.png"
													alt="image"
												/> 
												<img className="d-lg-none"
													src="/images/benefits1-phone.png"
													alt="image"
												/> 
											</div>
										</div>
									</div>
									<div className="col-12">
										<div className="treasurebox-item ">
											<div className="treasurebox-text">
												<div className="h3 title">
													Token Rewards
												</div>
												<p>
													A fast and easy way to incentivize user activity by rewarding them with custom ranks, tokens and games.
												</p>
											</div>
											<div className="treasurebox-img">
												<img className="d-none d-lg-block"
													src="/images/benefits2.png"
													alt="image"
												/>
												<img className="d-lg-none"
													src="/images/benefits2-phone.png"
													alt="image"
												/>
											</div>
										</div>
									</div>
								</div>
							</div>
							<div
								className="tt2"
								data-aos="fade-right"
								data-aos-duration="1200"
							>
								<div className="treasurebox-item">
									<div className="treasurebox-img">
										<img className="d-none d-lg-block" src="/images/benefits3.png" alt="image" />
										<img className="d-lg-none" src="/images/benefits3-phone.png" alt="image" />
									</div>
									<div className="treasurebox-text">
										<div className="h3 title">Launch Pass</div>
										<p>
											In addition to ecosystem access, Launch Pass will give you the marketing tools you need to take your project off the ground.
										</p>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="col-lg-12">
						<div className="benefits-button">
							<div
								className="h4"
								data-aos="fade-up"
								data-aos-duration="1000"
							>
								+ Dozens more -{" "}
								<span className="d-inline-flex d-sm-inline">
									<Link href="">View the whitepaper</Link>
									<img src="/images/icon/view.svg" alt="" />
								</span>
							</div>
							<a
								href="#products"
								className="btn-lg"
								data-aos="fade-up"
								data-aos-duration="1200"
							>
								Become a founder <BsChevronRight />{" "}
							</a>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Benefits;
