const Treasurebox = () => {
	return (
		<div className="treasurebox-area">
			<div className="container">
				<div className="row">
					<div className="col-lg-12">
						<div className="treasurebox-content">
							<div
								className="tt1"
								data-aos="fade-right"
								data-aos-duration="1000"
							>
								<div className="treasurebox-item">
									<div className="treasurebox-text">
										<div className="h3 title">
											Incentivize activity
										</div>
										<p>
											A fast and easy way to incentivize user
											activity by rewarding them with custom ranks,
											tokens and games.
										</p>
									</div>
									<div className="treasurebox-img">
										<img src="/images/activity.png" alt="image" />
									</div>
								</div>
								<div className="treasurebox-item">
									<div className="treasurebox-text">
										<div className="h3 title">Upload Content</div>
										<p>
											Upload threads, blogs and images to share with
											the Myntist community and build your digital
											asset portfolio.
										</p>
									</div>
									<div className="treasurebox-img">
										<img src="/images/platform.png" alt="image" />
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
										<img src="/images/engage.png" alt="image" />
									</div>
									<div className="treasurebox-text">
										<div className="h3 title">Grow a community</div>
										<p>
											Cultivate your communities by building
											followings or dedicated forums around your
											unique ideas.
										</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="ui-img" data-aos="fade-up" data-aos-duration="1000">
					<img src="/images/ui-img.png" alt="images" className="mw-100" />
				</div>
			</div>
		</div>
	);
};

export default Treasurebox;
