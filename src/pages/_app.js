"use client";
import { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Aos from "aos";
import "aos/dist/aos.css";
import "@/styles/globals.css";
import "@/styles/style.css";

export default function App({ Component, pageProps }) {
  useEffect(() => {
    Aos.init({
      duration: 1500,
    });
  }, []);
  return <Component {...pageProps} />;
}
