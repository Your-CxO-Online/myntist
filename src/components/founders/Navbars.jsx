"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { FaBars } from "react-icons/fa";

const Navbars = () => {
	const [scroll, setScroll] = useState(false);
	const [offcanvasOpen, setOffcanvasOpen] = useState(false);

	const toggleOffcanvas = () => {
		setOffcanvasOpen(!offcanvasOpen);
	};
	useEffect(() => {
		window.addEventListener("scroll", () => {
			setScroll(window.scrollY > 50);
		});
	}, []);
	return (
		<>
			<div className="main-navbar founder-nav">
				<div className="container">
					<div className="logo">
						<Link href="/">
							<img src="/images/founder-logo.svg" alt="main logo" />
						</Link>
					</div>
					<button
						className="navbar-toggler d-lg-none"
						type="button"
						onClick={toggleOffcanvas}
					>
						<FaBars />
					</button>

					<div
						className={`navbarOffset ms-auto ${
							offcanvasOpen ? "show" : ""
						}`}
					>
						<div className="offset-header">
							<h5 className="offcanvas-title">
								<img src="/images/founder-logo.svg" alt="main logo" />
							</h5>
							<button
								type="button"
								className="btn-close"
								onClick={toggleOffcanvas}
							></button>
						</div>
						<ul className="nav_list">
							<li className="">
								<Link href="#echosystem" onClick={toggleOffcanvas}>
									Ecosystem
								</Link>
							</li>
							<li className="">
								<Link href="#Benefits" onClick={toggleOffcanvas}>
									Benefits
								</Link>
							</li>
							<li className="">
								<Link href="#feature" onClick={toggleOffcanvas}>
									Features
								</Link>
							</li>
							<li className="">
								<Link
									href="https://discord.gg/myntist"
									target="_blank"
									onClick={toggleOffcanvas}
								>
									Discord
								</Link>
							</li>
						</ul>
						<div className="nav-btn d-lg-none">
							<a href="#generating-free" className="nav_btn">
								Become a founder
							</a>
						</div>
					</div>
					<div className="nav-btn d-none d-lg-block ms-auto">
						<a href="#generating-free" className="nav_btn">
							Become a founder
						</a>
					</div>
					<div
						className={`${
							offcanvasOpen ? "show offcanvas-backdrop fade" : ""
						}`}
						onClick={toggleOffcanvas}
					></div>
				</div>
			</div>

			<div className={scroll ? "scroll-navbar navScroll" : "scroll-navbar"}>
				<ul className="nav">
					<li className="">
						<Link href="#echosystem" onClick={toggleOffcanvas}>
							Ecosystem
						</Link>
					</li>
					<li className="">
						<Link href="#Benefits" onClick={toggleOffcanvas}>
							Benefits
						</Link>
					</li>
					<li className="">
						<Link href="#feature" onClick={toggleOffcanvas}>
							Feature
						</Link>
					</li>
					<li className="">
						<Link
							href="https://discord.gg/myntist"
							target="_blank"
							onClick={toggleOffcanvas}
						>
							Discord
						</Link>
					</li>
				</ul>
			</div>
		</>
	);
};

export default Navbars;
