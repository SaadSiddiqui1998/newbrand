"use client";
import { gsap } from "gsap";
import React, { useEffect, useRef, useState } from "react";
import useScrollSmooth from "@/hooks/use-scroll-smooth";
import { ScrollSmoother, ScrollTrigger, SplitText } from "@/plugins";
import { useGSAP } from "@gsap/react";
gsap.registerPlugin(useGSAP, ScrollTrigger, ScrollSmoother, SplitText);
import { bounceAnimation, heroBgAnimation, heroTitleAnim } from "@/utils/title-animation";

// internal imports
import Wrapper from "@/layouts/wrapper";
import HeaderFour from "@/layouts/headers/header-four";
import HeroBannerFour from "@/components/hero-banner/hero-banner-four";
import GalleryOne from "@/components/gallery/gallery-one";
import AboutThree from "@/components/about/about-three";
import BrandThree from "@/components/brand/brand-three";
import ProjectFour from "@/components/project/project-four";
import VideoThree from "@/components/video/video-three";
import ServiceFour from "@/components/service/service-four";
import ContactOne from "@/components/contact/contact-one";
import FooterFour from "@/layouts/footers/footer-four";
import { textInvert } from "@/utils/text-invert";
import { fadeAnimation, revelAnimationOne, charAnimation } from "@/utils/title-animation";
import { projectThreeAnimation } from "@/utils/project-anim";
import { ctaAnimation } from "@/utils/cta-anim";
import ServiceSix from "@/components/service/service-six";
import { servicePanel } from "@/utils/panel-animation";
import ServiceTwo from "@/components/service/service-two";
import ProjectTwo from "@/components/project/project-two";
import AwardTwo from "@/components/award/award-two";
import { videoAnimTwo } from "@/utils/video-anim";
import { panelOneAnimation } from "@/utils/panel-animation";
import { awardAnimOne } from "@/utils/award-anim";
import { instagramAnim } from "@/utils/instagram-anim";
import { hoverBtn } from "@/utils/hover-btn";
import { aboutAnim } from "@/utils/about-anim";
import VideoTwo from "@/components/video/video-two";
import TestimonialOne from "@/components/testimonial/testimonial-one";
import FooterFive from "@/layouts/footers/footer-five";
import ContactTwo from "@/components/contact/contact-two";
import LineText from "@/components/line-text/line-text";

const HomeFourMain = () => {
  const [showPopup, setShowPopup] = useState(false);
  const popupOverlayRef = useRef<HTMLDivElement | null>(null);
  const popupCardRef = useRef<HTMLDivElement | null>(null);

  useScrollSmooth();
  useEffect(() => {
    document.body.classList.add("tp-smooth-scroll");
    return () => {
      document.body.classList.remove("tp-smooth-scroll");
    };
  }, []);

  useGSAP(() => {
    const timer = setTimeout(() => {
      fadeAnimation();
      revelAnimationOne();
      projectThreeAnimation();
      ctaAnimation();
      textInvert();
    }, 100);
    return () => clearTimeout(timer);
  });

  useGSAP(() => {
    const timer = setTimeout(() => {
      // hero animation
      // heroTitleAnim();
      // heroBgAnimation();
      // about animation
      // aboutAnim()
      // bounce animation
      bounceAnimation();
      // video anim
      videoAnimTwo();
      // panel animation
      panelOneAnimation();
      // award animation
      awardAnimOne();
      // instagram animation
      // instagramAnim();
      hoverBtn();
    }, 100);
    return () => clearTimeout(timer);
  });

  useGSAP(() => {
    const timer = setTimeout(() => {
      charAnimation();
      fadeAnimation();
      servicePanel();
    }, 100);
    return () => clearTimeout(timer);
  });

  useEffect(() => {
    const popupTimer = setTimeout(() => {
      setShowPopup(true);
    }, 450);

    return () => clearTimeout(popupTimer);
  }, []);

  useGSAP(
    () => {
      if (!showPopup) return;

      gsap.set(popupOverlayRef.current, { autoAlpha: 0 });
      gsap.set(popupCardRef.current, { y: 40, scale: 0.94, autoAlpha: 0 });

      gsap.to(popupOverlayRef.current, {
        autoAlpha: 1,
        duration: 0.35,
        ease: "power2.out",
      });

      gsap.to(popupCardRef.current, {
        y: 0,
        scale: 1,
        autoAlpha: 1,
        duration: 0.6,
        ease: "power3.out",
      });

      gsap.fromTo(
        ".home4-popup-anim",
        { y: 24, autoAlpha: 0 },
        {
          y: 0,
          autoAlpha: 1,
          duration: 0.55,
          stagger: 0.1,
          ease: "power2.out",
          delay: 0.2,
        }
      );
    },
    { dependencies: [showPopup] }
  );

  const closePopup = () => {
    gsap.to(popupCardRef.current, {
      y: 26,
      scale: 0.96,
      autoAlpha: 0,
      duration: 0.3,
      ease: "power2.inOut",
    });

    gsap.to(popupOverlayRef.current, {
      autoAlpha: 0,
      duration: 0.3,
      ease: "power2.inOut",
      onComplete: () => setShowPopup(false),
    });
  };

  return (
    <Wrapper>
      {showPopup && (
        <div className="home4-popup-overlay" ref={popupOverlayRef}>
          <div className="home4-popup-card" ref={popupCardRef}>
            <button type="button" className="home4-popup-close" aria-label="Close popup" onClick={closePopup}>
              x
            </button>
            <div className="home4-popup-grid">
              <div
                className="home4-popup-media home4-popup-anim"
                style={{ backgroundImage: "url(/assets/img/home-04/service-3.webp)" }}
              >
                <div className="home4-popup-media-overlay">
                  <p className="home4-popup-kicker">Talk to an Expert</p>
                  <h4>Bring Your Story to Life</h4>
                  <span>Share your details and get a custom roadmap for your publishing goals.</span>
                </div>
              </div>
              <div className="home4-popup-form-wrap">
                <h3 className="home4-popup-title home4-popup-anim">Avail Discount</h3>
                <p className="home4-popup-subtitle home4-popup-anim">
                  Exclusive Offer: Expert Book Publishing at 50% Off –
                  Your Story Deserves to be Heard!
                </p>
                <form className="home4-popup-form">
                  <input className="home4-popup-anim" type="text" placeholder="Name" name="name" />
                  <input className="home4-popup-anim" type="email" placeholder="Email" name="email" />
                  <input className="home4-popup-anim" type="tel" placeholder="Phone" name="phone" />
                  <textarea className="home4-popup-anim" placeholder="Message" name="message" rows={4} />
                  <button className="home4-popup-anim" type="submit">
                    SUBMIT
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* header area start */}
      <HeaderFour />
      {/* header area end */}

      <div id="smooth-wrapper">
        <div id="smooth-content">
          <main>
            {/* hero area start */}
            <HeroBannerFour />
            {/* hero area end */}

            {/* gallery area start */}
            <GalleryOne />
            {/* gallery area end */}

            {/* about area start */}
            <AboutThree />
            {/* about area end */}

            {/* brand area start */}
            <BrandThree />
            {/* brand area end */}

            {/* project area start */}
            <ProjectFour />
            {/* project area end */}

            <ServiceSix />

            {/* video area start */}
            {/* <VideoThree /> */}
            <ServiceFour />

            {/* video area end */}

            {/* service area start */}

            {/* service area end */}
            <ProjectTwo />

            {/* award area */}
            <AwardTwo />
            {/* contact area start */}

            <LineText />
            <VideoTwo />
            <ServiceTwo />
            {/* contact area end */}
            <TestimonialOne />
            <div className="tm-hero-area p-relative">
              <div className="container">
                <div className="row">
                  <div className="col-xl-12">
                    <div className="tm-hero-content">
                      <span className="tm-hero-subtitle">Connect with Publishing Experts Now!
                      </span>
                      <h4 className="tm-hero-title-big tp-char-animation">
                        Get in touch
                      </h4>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* hero area end */}

            {/* contact area */}
            <ContactTwo />
            <ContactOne />
          </main>
          {/* <FooterFive /> */}
          {/* footer area */}
          <FooterFour />
          {/* footer area */}
        </div>
      </div>

      <style jsx>{`
        .home4-popup-overlay {
          position: fixed;
          inset: 0;
          z-index: 99999;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 20px;
          background: rgba(8, 15, 30, 0.62);
          backdrop-filter: blur(3px);
        }
        .home4-popup-card {
          width: 100%;
          max-width: 920px;
          border-radius: 20px;
          background: #ffffff;
          box-shadow: 0 24px 60px rgba(12, 25, 55, 0.28);
          border: 1px solid rgba(12, 25, 55, 0.12);
          position: relative;
          overflow: hidden;
          font-family: inherit;
        }
        .home4-popup-grid {
          display: grid;
          grid-template-columns: 1fr 1.15fr;
          min-height: 520px;
        }
        .home4-popup-media {
          background-position: center;
          background-size: cover;
          position: relative;
        }
        .home4-popup-media::before {
          content: "";
          position: absolute;
          inset: 0;
          background: linear-gradient(165deg, rgba(8, 15, 30, 0.78) 0%, rgba(8, 15, 30, 0.35) 70%);
        }
        .home4-popup-media-overlay {
          position: absolute;
          left: 0;
          right: 0;
          bottom: 0;
          padding: 34px 28px;
          color: #ffffff;
        }
        .home4-popup-kicker {
          display: inline-block;
          background: rgba(255, 255, 255, 0.18);
          border: 1px solid rgba(255, 255, 255, 0.24);
          border-radius: 999px;
          padding: 6px 12px;
          font-size: 12px;
          letter-spacing: 0.06em;
          text-transform: uppercase;
          margin-bottom: 14px;
        }
        .home4-popup-media-overlay h4 {
          color: #fff;
          font-size: 34px;
          line-height: 1.12;
          margin-bottom: 10px;
        }
        .home4-popup-media-overlay span {
          display: block;
          color: rgba(255, 255, 255, 0.92);
          font-size: 15px;
          line-height: 1.55;
        }
        .home4-popup-form-wrap {
          padding: 34px 30px 30px;
          background: linear-gradient(140deg, #ffffff 0%, #f4f7ff 100%);
        }
        .home4-popup-title {
          font-size: 30px;
          line-height: 1.1;
          margin-bottom: 10px;
          color: #0d1a33;
        }
        .home4-popup-subtitle {
          margin-bottom: 20px;
          color: #4c5a78;
        }
        .home4-popup-form input,
        .home4-popup-form textarea {
          width: 100%;
          border: 1px solid #d7dfef;
          border-radius: 10px;
          padding: 14px 14px;
          margin-bottom: 13px;
          font-size: 15px;
          color: #0d1a33;
          background: #fff;
          outline: none;
          transition: border-color 0.25s ease, box-shadow 0.25s ease;
          font-family: inherit;
        }
        .home4-popup-form input:focus,
        .home4-popup-form textarea:focus {
          border-color: #1e3a8a;
          box-shadow: 0 0 0 3px rgba(30, 58, 138, 0.14);
        }
        .home4-popup-form textarea {
          resize: vertical;
          min-height: 120px;
        }
        .home4-popup-form button {
          width: 100%;
          border: 0;
          border-radius: 10px;
          padding: 13px 14px;
          background: #111111;
          color: #fff;
          font-weight: 600;
          transition: transform 0.25s ease, opacity 0.25s ease;
          font-family: inherit;
        }
        .home4-popup-form button:hover {
          transform: translateY(-2px);
          opacity: 0.92;
        }
        .home4-popup-close {
          position: absolute;
          top: 12px;
          right: 12px;
          width: 34px;
          height: 34px;
          border-radius: 50%;
          border: 0;
          background: rgba(17, 17, 17, 0.9);
          color: #fff;
          line-height: 1;
          font-size: 18px;
          z-index: 2;
        }
        @media (max-width: 991px) {
          .home4-popup-grid {
            grid-template-columns: 1fr;
          }
          .home4-popup-media {
            min-height: 260px;
          }
        }
        @media (max-width: 767px) {
          .home4-popup-card {
            max-height: calc(100vh - 30px);
            overflow: auto;
          }
          .home4-popup-media-overlay h4 {
            font-size: 26px;
          }
          .home4-popup-form-wrap {
            padding: 24px 16px 18px;
          }
          .home4-popup-title {
            font-size: 24px;
          }
        }
      `}</style>
    </Wrapper>
  );
};

export default HomeFourMain;
