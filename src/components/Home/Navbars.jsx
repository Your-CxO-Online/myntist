'use client';
import React, { useState, useEffect } from "react";   
import Image from 'next/image';
import Link from 'next/link'; 
import { FaBars } from "react-icons/fa";

const HomeNav = () => {
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
                    <Link href="/"><Image src='/images/myntist-logo.png' alt='main logo' width={170} height={50}/></Link>
                </div>
                <button className="navbar-toggler d-lg-none" type="button" onClick={toggleOffcanvas}>
                   <FaBars/>
                </button>
                
                <div className={`navbarOffset ms-auto ${offcanvasOpen ? "show" : ""}`}>
                    <div className="offset-header">
                        <h5 className="offcanvas-title" > 
                            <Image src='/images/myntist-logo.png' alt='main logo' width={130} height={45}/>
                         </h5>
                        <button type="button" className="btn-close" onClick={toggleOffcanvas} ></button>
                    </div>
                    <ul className="nav_list">
                        <li className="">
                            <Link href="#about" onClick={toggleOffcanvas}>About</Link> 
                        </li> 
                        <li className="">
                            <Link href="#products" onClick={toggleOffcanvas}>Our Products</Link> 
                        </li> 
                        <li className="">
                            <Link href="/treasurebox">Treasurebox</Link> 
                        </li> 
                        <li className="">
                            <Link href="/founders">Founders Pass</Link> 
                        </li>   
                        <li className="">
                            <Link href="/">NFT Marketplace</Link> 
                        </li> 
                    </ul>
                    <div className="nav-btn d-lg-none">
                        <a href="https://discord.gg/myntist" target="_blank" className='nav_btn'>Get started</a>
                    </div>
                </div>
               
                <div className="nav-btn d-none d-lg-block ms-auto">
                    <a href="https://discord.gg/myntist" target="_blank" className='nav_btn'>Get started</a>
                </div>
                <div className={`${offcanvasOpen ? "show offcanvas-backdrop fade" : ""}`} onClick={toggleOffcanvas}></div>
            </div>
        </div>  

        <div className={scroll ? "scroll-navbar home-scroll navScroll" : "scroll-navbar home-scroll"}> 
                <ul className="nav">
                    <li className="">
                        <Link href="#about">About</Link> 
                    </li> 
                    <li className="">
                        <Link href="#products">Our Products</Link> 
                    </li> 
                    <li className="">
                        <Link href="/treasurebox">Treasurebox</Link> 
                    </li> 
                    <li className="">
                        <Link href="/">Founders Pass</Link> 
                    </li>   
                    <li className="">
                        <Link href="/">NFT Marketplace</Link> 
                    </li>   
                </ul> 
        </div>

        </> 
    );
}

export default HomeNav;