"use client";
import { gsap } from "gsap";
import React from "react";
import { useGSAP } from "@gsap/react";
import useScrollSmooth from "@/hooks/use-scroll-smooth";
import { ScrollSmoother, ScrollTrigger, SplitText } from "@/plugins";
gsap.registerPlugin(ScrollTrigger, ScrollSmoother, SplitText);

// internal imports
import Wrapper from "@/layouts/wrapper";
import HeaderEleven from "@/layouts/headers/header-eleven";
import PricingArea from "@/components/pricing/pricing-area";
import FaqAreaTwo from "@/components/faq/faq-area-2";
import FooterTwo from "@/layouts/footers/footer-two";
// animation
import { charAnimation, titleAnimation } from "@/utils/title-animation";
import HeaderTwo from "@/layouts/headers/header-two";
import HeaderFour from "@/layouts/headers/header-four";
import FooterFour from "@/layouts/footers/footer-four";

const PricingMain = () => {
  useScrollSmooth();

  useGSAP(() => {
    const timer = setTimeout(() => {
      charAnimation();
      titleAnimation();
    }, 100);
    return () => clearTimeout(timer);
  });

  return (
    <Wrapper>
      {/* header area start */}
      <HeaderFour />
      {/* header area end */}

      <div id="smooth-wrapper">
        <div id="smooth-content">
          <div
            className="inner-bg"
            style={{
              backgroundImage:
                "url(/assets/img/home-01/team/team-details-bg.png)",
            }}
          >
            <main>
              {/* pricing hero */}
              <div className="tm-hero-area tm-hero-ptb p-relative">
                <div className="container">
                  <div className="row">
                    <div className="col-xl-12">
                      <div className="tm-hero-content">
                        <span className="tm-hero-subtitle">Publishing Packages</span>
                        <h4 className="tm-hero-title tp-char-animation">
                          Want to Publish Your Book at an Affordable Price?
                        </h4>
                      </div>
                      <div className="tm-hero-text">
                        <p className="tp_title_anim">
                          Pine Book Publishing is here to offer you top-notch publishing services at an affordable price.
                          <br />
                          We are offering more than just publishing. Explore our packages below!                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* pricing hero */}

              {/* pricing area */}
              <PricingArea />
              {/* pricing area */}

              {/* faq area */}
              <FaqAreaTwo />
              {/* faq area */}
            </main>

            {/* footer area */}
            <FooterFour />
            {/* footer area */}
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default PricingMain;
