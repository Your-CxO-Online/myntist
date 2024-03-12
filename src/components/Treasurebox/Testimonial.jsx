import Link from "next/link";

const Logo = [
	{
		id: 1,
		image: "/images/google.png",
	},
	{
		id: 2,
		image: "/images/google.png",
	},
	{
		id: 3,
		image: "/images/google.png",
	},
	{
		id: 4,
		image: "/images/google.png",
	},
	{
		id: 5,
		image: "/images/google.png",
	},
	{
		id: 6,
		image: "/images/google.png",
	},
];

const Testimonial = () => {
	return (
		<div className="testimonial-area">
			<div className="container">
				<div className="row justify-content-center">
					<div className="col-lg-10">
						<div className="testimonial-content">
							<div
								className="h3 text-center"
								data-aos="fade-up"
								data-aos-duration="1000"
							>
								Used to grow by
							</div>
							<div
								className="blockchain-logo"
								data-aos="fade-up"
								data-aos-duration="1200"
							>
								{Logo.map((i) => {
									return (
										<>
											<Link href="/" key={i.id}>
												<img src={i.image} alt="google" />
											</Link>
										</>
									);
								})}
							</div>
							<div className="testimonial-slid row">
								<div className="col-lg-6">
									<div className="testimonial-item">
										<div className="t-bg">
											<div className="testimonial-header">
												<img src="/images/qu.png" alt="icon" />
												<img src="/images/google.png" alt="image" />
											</div>
											<div className="testimonial-body">
												<p>
													We’ve been using Myntist TreasureBox to
													incentivize activity in our community,
													and our growth has gone 10x as a result!
												</p>
											</div>
											<div className="testimonial-footer">
												<img src="/images/user.png" alt="image" />
												<div className="text">
													<div className="h4 name">
														Jaydon Bator
													</div>
													<p className="dre">Sr. Marketer</p>
												</div>
											</div>
										</div>
									</div>
								</div>
								<div className="col-lg-6">
									<div className="testimonial-item">
										<div className="t-bg">
											<div className="testimonial-header">
												<img src="/images/qu.png" alt="icon" />
												<img src="/images/google.png" alt="image" />
											</div>
											<div className="testimonial-body">
												<p>
													We’ve been using Myntist TreasureBox to
													incentivize activity in our community,
													and our growth has gone 10x as a result!
												</p>
											</div>
											<div className="testimonial-footer">
												<img src="/images/user.png" alt="image" />
												<div className="text">
													<div className="h4 name">
														Jaydon Bator
													</div>
													<p className="dre">Sr. Marketer</p>
												</div>
											</div>
										</div>
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

export default Testimonial;
