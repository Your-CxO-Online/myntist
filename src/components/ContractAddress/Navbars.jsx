"use client";
import Image from "next/image";
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
			<div className="main-navbar">
				<div className="container">
					<div className="logo" style={{"display":"flex"}}>
						<Link href="/">
							<Image
								src="/images/logo-i.png"
								alt="main logo"
								width={70}
								height={70}
							/>
						</Link>
						{/* <div className="flex justify-content-center align-items-center" style={{"display":"flex", "justify-content":"center", "align-items":"center", "height":"100%"}}></div><div style={{"display":"flex", "justify-content":"center", "align-items":"center", "height":"100%", "margin-top":"10%"}}>Contract Address</div> */}
					</div>
					<button
						className="navbar-toggler d-lg-none"
						type="button"
						onClick={toggleOffcanvas}
					>
						<FaBars />
					</button>

					<div
						className={`navbarOffset ms-auto ${offcanvasOpen ? "show" : ""
							}`}
					>
						<div className="offset-header">
							{/* <h5 className="offcanvas-title">
								<Image
									src="/images/logo-i.png"
									alt="main logo"
									width={45}
									height={45}
								/>
							</h5> */}
							<button
								type="button"
								className="btn-close"
								onClick={toggleOffcanvas}
							></button>
						</div>
						<ul className="nav_list">
							<li className="">
								<Link href="" onClick={toggleOffcanvas}>
									Contract
								</Link>
							</li>
							<li className="">
								<Link href="" onClick={toggleOffcanvas}>
									Tokens
								</Link>
							</li>
							<li className="">
								<Link href="#showcase" onClick={toggleOffcanvas}>
									Whitepaper
								</Link>
							</li>
							<li className="">
								<Link href="https://t.me/myntist_portal" target="_blank" onClick={toggleOffcanvas}>
									Telegram
								</Link>
							</li>

						</ul>
						<div className="nav-btn gap-3 d-lg-none">
							<div className="d-flex justify-content-center gap-3">
								<a href="" className="nav_btn login">
									Login
								</a>
								<a href="" className="nav_btn">
									Sign up
								</a>
							</div>
						</div>
					</div>

					<div className="nav-btn d-none d-lg-block ms-auto">
						<div className="d-flex gap-3">
							<a href="" className="nav_btn login">
								Login
							</a>
							<a href="" className="nav_btn">
								Sign up
							</a>
						</div>
					</div>
					<div
						className={`d-lg-none ${offcanvasOpen ? "show offcanvas-backdrop fade" : ""
							}`}
						onClick={toggleOffcanvas}
					></div>
				</div>
			</div>

			<div className={scroll ? "scroll-navbar navScroll" : "scroll-navbar"}>
				<ul className="nav">
					<li className="">
						<Link href="" onClick={toggleOffcanvas}>
							Contract
						</Link>
					</li>
					<li className="">
						<Link href="" onClick={toggleOffcanvas}>
							Tokens
						</Link>
					</li>
					<li className="">
						<Link href="#showcase" onClick={toggleOffcanvas}>
							Whitepaper
						</Link>
					</li>
					<li className="">
						<Link href="https://t.me/myntist_portal" target="_blank" onClick={toggleOffcanvas}>
							Telegram
						</Link>
					</li>
				</ul>
			</div>
		</>
	);
};

export default Navbars;
