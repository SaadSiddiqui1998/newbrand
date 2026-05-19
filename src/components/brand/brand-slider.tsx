"use client";
import React from "react";
import Image from "next/image";
import Marquee from "react-fast-marquee";

// brand images
import b_1 from "@/assets/img/home-04/logo1.webp";
import b_2 from "@/assets/img/home-04/logo2.webp";
import b_3 from "@/assets/img/home-04/logo3.jpeg";
import b_4 from "@/assets/img/home-04/logo4.png";
import b_5 from "@/assets/img/home-04/logo5.webp";
import b_6 from "@/assets/img/home-04/logo6.webp";
import b_7 from "@/assets/img/home-04/logo8.webp";


const brand_images = [b_1, b_2, b_3, b_4, b_5, b_6, b_7, b_1, b_2, b_3, b_4, b_5, b_6, b_7];

export default function BrandSlider() {
  return (
    <div className="tp-brand-slider-active fix">
      <Marquee
        speed={100}
        loop={0}
        className="brand-wrapper"
      >
        {brand_images.map((b, i) => (
          <div key={i} className="tp-brand-item" style={{ height: "auto", width: "200px" }}>
            <Image src={b} alt="" />
          </div>
        ))}
      </Marquee>
      {/* <Swiper
        {...slider_setting}
        modules={[Autoplay, FreeMode]}
        className="brand-wrapper"
      >
        {brand_images.map((b, i) => (
          <SwiperSlide key={i}>
            <div className="tp-brand-item">
              <Image src={b} alt="" />
            </div>
          </SwiperSlide>
        ))}
      </Swiper> */}
    </div>
  );
}
