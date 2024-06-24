import Link from "next/link";
import { FaDiscord, FaTelegram, FaTwitter } from "react-icons/fa";

const Footer = () => {
	return (
		<footer className="footer-area">
			<div className="footer-widget">
				<div className="container">
					<div className="row">
						<div className="col-lg-12">
							<div className="footer-nav">
								<div className="logo">
									<img
										src="/images/founder-only-logo.png"
										alt="logo"
										width={175}
										height={70}
									/>
								</div>
								<div className="nav">
									<Link href="#echosystem">Founder</Link>
									<Link href="#Benefits">Journey</Link>
									<Link href="#feature">Experience</Link>
									<Link
										href="https://t.me/myntist_portal"
										target="_blank"
									>
										Telegram
									</Link>
								</div>
								<div className="footer-btn">
									<Link
										href="https://t.me/myntist_portal"
										target="_blank"
										className="btn-footer"
									>
										Get started
									</Link>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="container">
				<div className="row">
					<div className="col-lg-12">
						<div className="copyright">
							<div className="copyright-text">
								<Link href="https://t.me/myntist_portal" target="_blank">
									<FaTelegram />
								</Link>
								<Link href="/">
									<FaTwitter />
								</Link>
								<p>© Myntist 2023</p>
							</div>
							<ul className="d-flex text-right gap-5">
								<li>
									<a href="">Terms and Conditions</a>
								</li>
								<li>
									<a href="">Privacy Policy</a>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
