const featuresList = [
	{
		id: 0,
		image: "/images/features1.png",
		title: "D-Commerce",
	},
	{
		id: 1,
		image: "/images/features2.png",
		title: "ECommerce",
	},
	{
		id: 2,
		image: "/images/features3.png",
		title: "NFT Marketplace",
	},
	{
		id: 3,
		image: "/images/features4.png",
		title: "Treasurebox",
	},
	{
		id: 4,
		image: "/images/features5.png",
		title: "AI Bot ",
	},
	{
		id: 5,
		image: "/images/features6.png",
		title: "Staking",
	},
];

const Features = () => {
	return (
		<div className="feature_area" id="feature">
			<div className="container">
				<div className="row">
					<div className="col-lg-7 align-self-center">
						<div
							className="features-title"
							data-aos="fade-right"
							data-aos-duration="1000"
						>
							<div className="h2">
								Get access to the world’s most powerful Web3 features
							</div>
						</div>
					</div>
					<div className="col-lg-4 align-self-center ms-auto">
						<div
							className="features-title"
							data-aos="fade-right"
							data-aos-duration="1200"
						>
							<p>
								Myntist provides access to every tool entrepreneurs need
								to harness the capabilities of Web3.
							</p>
						</div>
					</div>
				</div>
				<div className="row row-gap justify-content-center">
					{featuresList &&
						featuresList.map((record) => {
							return (
								<>
									<div className="col-lg-4 col-md-6" id={record.id}>
										<div
											className="features-item"
											data-aos="fade-up"
											data-aos-duration="1000"
										>
											<div>
												<div className="features-img">
													<img src={record.image} alt="image" />
												</div>
												<div className="h3">{record.title}</div>
											</div>
										</div>
									</div>
								</>
							);
						})}
				</div>
			</div>
		</div>
	);
};

export default Features;
