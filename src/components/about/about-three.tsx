import React from "react";
import Image from "next/image";
import Link from "next/link";
// internal imports
import AboutImg from '@/assets/img/home-04/About-us-img.webp';
import shape from '@/assets/img/home-03/about/ab-shape-img.png';
import { ArrowBg, RightArrowTwo, FirstBracket, FirstBracketTwo } from "../svg";

export default function AboutThree() {

  return (
    <div className="tp-about-3-area pt-120 pb-110">
      <div className="container">
        <div className="row">
          <div className="col-xl-11">
            <div className="tp-about-3-title-box">
              <span className="tp-section-subtitle-2 tp_fade_bottom">
                <span>
                  <FirstBracket />
                </span>
                <span className="tp-subtitle-text tp_text_invert">
                  What we do
                </span>
                <span>
                  <FirstBracketTwo />
                </span>
              </span>
              <h4 className="tp-section-title-90 tp_text_invert tp_fade_bottom">
                About Us
                Pine Book Publishing{" "}
                <span>
                  {" "}
                  <br />& fluid Website
                </span>
                {/* <div className="tp-about-3-shape text-lg-end">

                  <Image src={shape} alt="shape" style={{ height: "auto" }} />
                </div> */}
              </h4>
            </div>
          </div>
        </div>
        <div className="row align-items-center">
          <div className="col-xl-6 col-lg-6 col-md-4">
            <div>
              <Image src={AboutImg} alt="shape" style={{ height: "auto" }} />
            </div>

          </div>
          <div className="col-xl-6 col-lg-6 col-md-8">
            <div className="tp-about-3-content">

              <p className="mb-30 tp_fade_bottom">
                Have you ever tried publishing a book but don’t know where to start? Did you ever plan to consult a book publishing company? We get it – there are more <a href="#" style={{ fontWeight: 'bold' }}>book publishing companies</a> out there than stars in the sky (okay, maybe not that many, but you get the idea).
              </p>
              <p className="mb-45 tp_fade_bottom">
                Don’t feel overwhelmed; Pine Book Publishing is here to help you meet your publishing needs. We have self-published hundreds of books since our inception on 22nd February 2023. Our experts have 10-15 years of experience and are masters in their fields, even though we haven't been in the market long. We know the difficulties faced by authors worldwide and understand how frustrating the writing journey can be! So, we are here to fill this gap and simplify the entire editing and publishing process, offering customized solutions specifically to your needs and requirements.
              </p>
              <Link className="tp-btn-black-2 tp_fade_bottom" href="/about-us">
                READ MORE
                <span className="p-relative">
                  <RightArrowTwo />
                  <ArrowBg />
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
