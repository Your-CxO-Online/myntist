"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { FaBars } from "react-icons/fa";

const Navbars = () => {
  const isClient = typeof window !== "undefined";
  const [width, setWidth] = useState(isClient ? window.innerWidth : 0);
  const [scroll, setScroll] = useState(false);
  const [offcanvasOpen, setOffcanvasOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []); // Empty dependency array ensures the effect runs only once

  const toggleOffcanvas = () => {
    if (width < 992) {
      setOffcanvasOpen(!offcanvasOpen);
    }
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
            <Link href="/flow-fusion">
                <img src="/images/flowfusionLogo.svg" alt="logo" />
            </Link>
          </div>
          <button
            className="navbar-toggler d-lg-none"
            type="button"
            onClick={toggleOffcanvas}
          >
            <FaBars />
          </button>

          <div className={`navbarOffset ms-auto ${offcanvasOpen ? "show" : ""}`}>
            <div className="offset-header">
              <h5 className="offcanvas-title">
                <Image
                  src="/images/flowfusionLogo.svg"
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
                <Link href="/flow-fusion#features" onClick={toggleOffcanvas}>
                  Features
                </Link>
              </li>
              <li className="">
                <Link href="/flow-fusion#cases" onClick={toggleOffcanvas}>
                  Use Cases
                </Link>
              </li>
              <li className="">
                <Link href="/flow-fusion#community" onClick={toggleOffcanvas}>
                  Showcase
                </Link>
              </li>
              <li className="">
                <Link href="/#products" onClick={toggleOffcanvas}>
                  Other Products
                </Link>
              </li>
            </ul>
            <div className="nav-btn d-lg-none">
              <Link href="/pricing" className="nav_btn">
                Get started
              </Link>
            </div>
          </div>
          <div className="nav-btn d-none d-lg-block ms-auto">
            <Link href="/pricing" className="nav_btn">
              Get started
            </Link>
          </div>
          <div
            className={`${offcanvasOpen ? "show offcanvas-backdrop fade" : ""}`}
            onClick={toggleOffcanvas}
          ></div>
        </div>
      </div>

      <div className={scroll ? "scroll-navbar navScroll" : "scroll-navbar"}>
        <ul className="nav">
          <li className="">
            <Link href="/flow-fusion#features">Features</Link>
          </li>
          <li className="">
            <Link href="/flow-fusion#cases">Use Cases</Link>
          </li>
          <li className="">
            <Link href="/flow-fusion#community">Showcase</Link>
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
