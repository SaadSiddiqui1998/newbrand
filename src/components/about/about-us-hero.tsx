import React from "react";
import { scroller } from "react-scroll";
import { ScrollDown } from "../svg";
import Link from "next/link";

export default function AboutUsHero() {
  const scrollTo = () => {
    scroller.scrollTo('about-info', {
      duration: 800,
      delay: 0,
      smooth: 'easeInOutQuart',
    });
  };
  return (
    <div
      className="ab-inner-hero-area ab-inner-hero-bg p-relative"
      style={{ backgroundImage: "url(/assets/img/home-04/banner-img.webp)" }}
    >
      <div className="breadcurmb-site d-none">
        <h6>About Us</h6>
      </div>
      <div className="ab-inner-hero-scroll smooth">
        <a className="pointer" onClick={scrollTo}>
          <span>
            Scroll to explore
            <ScrollDown />
          </span>
        </a>
      </div>
      <div className="container container-1480">
        <div className="row">
          <div className="col-xl-8">
            <div
              className="ab-inner-hero-title-box"
              data-lag="0.2"
              data-stagger="0.08"
            >
              <span className="ab-inner-hero-subtitle">
                About
                <br /> Us
              </span>
              <h1 className="ab-inner-hero-title tp-char-animation">
                Ready To Write Your Next Chapter?
              </h1>
              <p>Let Pine Book Publishing be your guide throughout this self-publishing journey. We believe in your story and want the world to read your narrative.</p>
            </div>
          </div>
        </div>
        {/* <div className="row justify-content-end">
          <div className="col-xl-5 col-lg-8">
            <div
              className="ab-inner-hero-content"
              data-lag="0.2"
              data-stagger="0.08"
            >
              <p>
                Liko develops, designs & delivers websites & creative campaigns
                that drive results,
              </p>
              <Link className="tp-btn-white-sm border-style" href="#">Our Story</Link>
            </div>
          </div>
        </div> */}
      </div>
    </div>
  );
}
