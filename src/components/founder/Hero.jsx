/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { BsChevronRight } from "react-icons/bs";
import React from 'react';
const styles = {
	container: {
	  display: 'flex',
	  justifyContent: 'center',
	  alignItems: 'center',
	  textAlign: 'center',
	  textAlign: 'justify',

	},
	heading: {
	  fontSize: '2em', // Adjust font size as needed
	  margin: 0, // Remove default margin
	  
	},
	paragraph: {
	  fontSize: '1em', // Adjust font size as needed
	  margin: '10px 0 0 0', // Adjust margin for paragraph spacing
	  
	},
  };
  const ProfileSection = ({img}) => {
	return (
	  <div className={`profileSection text-center`}>
		<div className="d-inline-block">
		  <img
			src={img}
			alt="Brandon Semenuk"
			className="rounded-circle img-fluid"
			width={200}
			height={200}
		  />
		  <div className="overlay">
			<span className="text-white">BRANDON</span>
			<br />
			<span className="text-white">SEMENUK</span>
		  </div>
		</div>
	  </div>
	);
  };
  const ProfileSection2 = ({img}) => {
	return (
	  <div className={`profileSection text-center`}>
		<div className="d-inline-block">
		  <img
			src={img}
			alt="Brandon Semenuk"

			width={500}
			height={500}
		  />
		  <div className="overlay">
			<span className="text-white">GEOFF</span>
			<br />
			<span className="text-white">BROOMHEAD</span>
		  </div>
		</div>
	  </div>
	);
  };

const Hero = () => {
	return (
		<div className="founder-only-hero">
			<div className="founders-shapes">
				<img src="/images/founder-shape.svg" alt="" />
			</div>
			<div className="container">
				<div className="row">
					<div className="col-lg-7 align-self-center" style={styles.container}>
						<div className="founder-content">
							<h1 data-aos="fade-right" data-aos-duration="1000">
							Geoff Broomhead 
							</h1>
							<p data-aos="fade-right" data-aos-duration="1200">
							leads the charge in economic innovation, creating ecosystems where users harness behavioral science, economics, AI, blockchain, and complexity science to transform wealth creation. His work introduces contribution-verified asset classes and employs open-source, programmable financial logics, challenging traditional inequities and fostering financial inclusion and community growth. His commitment to decentralization breaks down barriers to meritocratic capital, advocating for systems where economic stability and community development are powered by peer-validated competencies. Geoff’s vision is one where individuals and communities mutually prosper, turning personal goals into collective successes. Join Geoff in revolutionizing economic participation, where you can contribute, grow, and shape a future of shared prosperity. Be part of this transformative journey towards a world brimming with opportunities for all. Let’s build this together.
							</p>
				
						</div>
					</div>
					{/* <div className="col-lg-5 ms-auto align-self-center">
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
					</div> */}
					{/* <ProfileSection img={"/images/founder-admin.png"}/> */}
					<ProfileSection2 img={"/images/geff.jpg"}/>
				</div>
			</div>
			<div className="container">
				<div className="row">
				{/* <ProfileSection2 img={"/images/founder.png"}/>
					<div className="col-lg-7 align-self-center" style={styles.container}>
						<div className="founder-content">
			
							<p data-aos="fade-right" data-aos-duration="1200">
								Become a pioneer and join the Myntist founders club to gain exclusive access, benefits and continuous rewards within the ever growing Myntist ecosystem.
							</p>
				
						</div>
					</div> */}
					{/* <div className="col-lg-5 ms-auto align-self-center">
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
					</div> */}
					
				</div>
			</div>
		</div>
	);
};

export default Hero;
