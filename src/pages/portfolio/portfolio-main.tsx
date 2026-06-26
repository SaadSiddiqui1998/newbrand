"use client";
import { gsap } from "gsap";
import React from "react";
import Image from "next/image";
import useScrollSmooth from "@/hooks/use-scroll-smooth";
import { ScrollSmoother, ScrollTrigger, SplitText } from "@/plugins";
import { useGSAP } from "@gsap/react";
import Wrapper from "@/layouts/wrapper";
import HeaderFour from "@/layouts/headers/header-four";
import FooterFour from "@/layouts/footers/footer-four";
import { Dots } from "@/components/svg";
import { charAnimation } from "@/utils/title-animation";
gsap.registerPlugin(ScrollTrigger, ScrollSmoother, SplitText);

const portfolioSections = [
  {
    number: "01",
    title: "Editing, Formatting & Proofreading",
    desc: "A closer look at manuscript improvements, formatting structure, proofreading detail, and production-ready interior layouts.",
    services: "Editing, Formatting, Proofreading",
    deliverables: "Before / After Manuscript Pages",
    images: [
      "/assets/img/home-04/Editing Portfolio 1.jpg",
      "/assets/img/home-04/Editing Portfolio 2.jpg",
      "/assets/img/home-04/Editing Portfolio 3.jpg",
      "/assets/img/home-04/Editing Portfolio 4.jpg",
    ],
  },
  {
    number: "02",
    title: "Book Cover Design",
    desc: "Professional cover concepts and finished designs created for print, digital stores, and reader appeal.",
    services: "Cover Design, Print Layout",
    deliverables: "Paperback, Hardcover, eBook Covers",
    images: [
      "/assets/img/home-04/full cover-01.png",
      "/assets/img/home-04/Jean Bosco N. Ruhashya Full cover.png",
      "/assets/img/home-04/Hardcover lulu.png",
      "/assets/img/home-04/the phonics-01.png",
    ],
  },
  {
    number: "03",
    title: "Author Websites",
    desc: "Author-focused web experiences designed to present books, build credibility, and guide readers toward action.",
    services: "Website Design, Author Branding",
    deliverables: "Responsive Author Websites",
    images: [
      "/assets/img/home-04/portfolio/port-1.jpg",
      "/assets/img/home-04/portfolio/port-2.jpg",
      "/assets/img/home-04/portfolio/port-3.jpg",
      "/assets/img/home-04/portfolio/port-4.jpg",
    ],
  },
  {
    number: "04",
    title: "Illustrations",
    desc: "Children’s book visuals, character artwork, and illustrated pages prepared for polished storytelling.",
    services: "Children’s Illustration, Character Art",
    deliverables: "Illustrated Pages & Spreads",
    images: [
      "/assets/img/home-04/illus.png",
      "/assets/img/home-04/im a boy-01 (1).png",
      "/assets/img/home-04/im a girl-01 (1).png",
      "/assets/img/home-04/Untitled-1-01 (2).png",
    ],
  },
  {
    number: "05",
    title: "Book Publishing",
    desc: "Published books prepared for online retailers, print-on-demand platforms, and global distribution.",
    services: "Publishing, Distribution",
    deliverables: "Published Book Listings",
    images: [
      "/assets/img/home-04/Published-Books-Section/David Van FleetNot.png",
      "/assets/img/home-04/Published-Books-Section/Evan M Franzen.png",
      "/assets/img/home-04/Published-Books-Section/Edward Agbai.png",
      "/assets/img/home-04/Published-Books-Section/Katie Loftis.png",
    ],
  },
];

type PortfolioSection = (typeof portfolioSections)[number];

function PortfolioSliderSection({ section }: { section: PortfolioSection }) {
  const [activeIndex, setActiveIndex] = React.useState(0);
  const activeImage = section.images[activeIndex];

  const showPrev = () => {
    setActiveIndex((prev) => (prev === 0 ? section.images.length - 1 : prev - 1));
  };

  const showNext = () => {
    setActiveIndex((prev) => (prev === section.images.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="project-details-1-area">
      <div className="container-fluid p-0">
        <div className="row g-0">
          <div className="col-xl-7">
            <div className="project-details-1-left pine-portfolio-slider">
              <div className="project-details-1-thumb">
                <Image
                  key={activeImage}
                  src={activeImage}
                  alt={`${section.title} ${activeIndex + 1}`}
                  width={1000}
                  height={820}
                />
              </div>
            </div>
          </div>
          <div className="col-xl-5">
            <div className="project-details-1-right-wrap">
              <div className="project-details-1-right p-relative">
                <div className="project-details-1-title-box">
                  <span className="project-details-1-subtitle">
                    <i>{section.number}</i>
                    Portfolio
                  </span>
                  <h4 className="project-details-1-title">{section.title}</h4>
                  <p>{section.desc}</p>
                </div>
                <div className="project-details-1-info-wrap">
                  <div className="project-details-1-info">
                    <span>Client</span>
                    <h4>Pine Book Publishing Authors</h4>
                  </div>
                  <div className="project-details-1-info">
                    <span>Services</span>
                    <h4>{section.services}</h4>
                  </div>
                  <div className="project-details-1-info">
                    <span>Deliverables</span>
                    <h4>{section.deliverables}</h4>
                  </div>
                </div>
              </div>
              <div className="project-details-1-navigation d-flex justify-content-between align-items-center">
                <button type="button" className="project-details-1-prev" onClick={showPrev}>
                  <i className="fa-sharp fa-regular fa-arrow-left"></i>
                  <span>Prev</span>
                </button>
                <span className="pine-portfolio-slider__count">
                  {activeIndex + 1} / {section.images.length}
                </span>
                <span className="pine-portfolio-slider__dots">
                  <Dots />
                </span>
                <button type="button" className="project-details-1-next" onClick={showNext}>
                  <span>Next</span>
                  <i className="fa-sharp fa-regular fa-arrow-right"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const PortfolioMain = () => {
  useScrollSmooth();

  useGSAP(() => {
    const timer = setTimeout(() => {
      charAnimation();
    }, 100);
    return () => clearTimeout(timer);
  });

  return (
    <Wrapper>
      <HeaderFour />

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
              <div className="tm-hero-area tm-hero-ptb p-relative">
                <div className="container">
                  <div className="row">
                    <div className="col-xl-12">
                      <div className="tm-hero-content">
                        <span className="tm-hero-subtitle">Our Portfolio</span>
                        <h4 className="tm-hero-title-big pine-portfolio-hero-title tp-char-animation">
                          Peek Behind the Curtains to Our Proud Achievements
                        </h4>
                      </div>
                      <div className="tm-hero-text">
                        <p className="tp_title_anim">
                          Take a closer look at the hard work and dedication that lie behind each of our proud achievements.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="pine-portfolio-details">
                {portfolioSections.map((section) => (
                  <PortfolioSliderSection key={section.number} section={section} />
                ))}
              </div>
            </main>

            <FooterFour />
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default PortfolioMain;
