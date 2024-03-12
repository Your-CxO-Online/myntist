"use client";
import { BsChevronRight } from "react-icons/bs";
import Slider from "react-slick";

const TrandingPosts = () => {
	const settings = {
		dots: false,
		arrows: false,
		infinite: true,
		slidesToShow: 5.5,
		slidesToScroll: 1,
		autoplay: true,
		speed: 4000,
		autoplaySpeed: 0,
		cssEase: "linear",
		responsive: [
			{
				breakpoint: 1324,
				settings: {
					slidesToShow: 4.5,
				},
			},
			{
				breakpoint: 991,
				settings: {
					slidesToShow: 3.5,
				},
			},
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 2.5,
					speed: 5000,
				},
			},
			{
				breakpoint: 480,
				settings: {
					speed: 5000,
					cssEase: false,
					className: "center",
					centerPadding: "60px",
					slidesToShow: 1,
					speed: 2000,
				},
			},
		],
	};
	return (
		<div className="community-area" id="showcase">
			<div className="container-fluid">
				<div className="row">
					<div className="col-lg-12">
						<div className="section-title text-center">
							<div
								className="h2"
								data-aos="fade-up"
								data-aos-duration="1000"
							>
								Trending Creations 🔥
							</div>
						</div>
					</div>
				</div>
				<div className="row" data-aos="fade-up">
					<Slider {...settings} className="community-slider">
						<div className="creations-img">
							<img
								src="/images/creations1.png"
								alt="creations"
								width={313}
								height={323}
							/>
						</div>
						<div className="creations-img">
							<img
								src="/images/creations2.png"
								alt="creations"
								width={313}
								height={323}
							/>
						</div>
						<div className="creations-img">
							<img
								src="/images/creations3.png"
								alt="creations"
								width={313}
								height={323}
							/>
						</div>
						<div className="creations-img">
							<img
								src="/images/creations4.png"
								alt="creations"
								width={313}
								height={323}
							/>
						</div>
						<div className="creations-img">
							<img
								src="/images/creations5.png"
								alt="creations"
								width={313}
								height={323}
							/>
						</div>
						<div className="creations-img">
							<img
								src="/images/creations6.png"
								alt="creations"
								width={313}
								height={323}
							/>
						</div>
						<div className="creations-img">
							<img
								src="/images/creations3.png"
								alt="creations"
								width={313}
								height={323}
							/>
						</div>
						<div className="creations-img">
							<img
								src="/images/creations4.png"
								alt="creations"
								width={313}
								height={323}
							/>
						</div>
						<div className="creations-img">
							<img
								src="/images/creations5.png"
								alt="creations"
								width={313}
								height={323}
							/>
						</div>
						<div className="creations-img">
							<img
								src="/images/creations3.png"
								alt="creations"
								width={313}
								height={323}
							/>
						</div>
						<div className="creations-img">
							<img
								src="/images/creations4.png"
								alt="creations"
								width={313}
								height={323}
							/>
						</div>
						<div className="creations-img">
							<img
								src="/images/creations5.png"
								alt="creations"
								width={313}
								height={323}
							/>
						</div>
					</Slider>
				</div>
				<div className="row">
					<div className="col-lg-12">
						<div className="text-center" data-aos="fade-up">
							<a href="" className="btn-lg">
								Browse communities <BsChevronRight />
							</a>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default TrandingPosts;
