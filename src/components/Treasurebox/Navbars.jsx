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
					<div className="logo">
						<Link href="/">
							<Image
								src="/images/logo.svg"
								alt="main logo"
								width={200}
								height={70}
							/>
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
								<Image
									src="/images/logo.svg"
									alt="main logo"
									width={130}
									height={45}
								/>
							</h5>
							<button
								type="button"
								className="btn-close"
								onClick={toggleOffcanvas}
							></button>
						</div>
						<ul className="nav_list">
							<li className="">
								<Link href="" onClick={toggleOffcanvas}>
									Features
								</Link>
							</li>
							<li className="">
								<Link href="" onClick={toggleOffcanvas}>
									Use Cases
								</Link>
							</li>
							<li className="">
								<Link href="#showcase" onClick={toggleOffcanvas}>
									Showcase
								</Link>
							</li>
							<li className="">
								<Link href="/#products" onClick={toggleOffcanvas}>
									Other Products
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
						className={`d-lg-none ${
							offcanvasOpen ? "show offcanvas-backdrop fade" : ""
						}`}
						onClick={toggleOffcanvas}
					></div>
				</div>
			</div>

			<div className={scroll ? "scroll-navbar navScroll" : "scroll-navbar"}>
				<ul className="nav">
					<li className="">
						<Link href="">Features</Link>
					</li>
					<li className="">
						<Link href="">Use Cases</Link>
					</li>
					<li className="">
						<Link href="#showcase">Showcase</Link>
					</li>
					<li className="">
						<Link href="/#products">Other Products</Link>
					</li>
				</ul>
			</div>
		</>
	);
};

export default Navbars;
