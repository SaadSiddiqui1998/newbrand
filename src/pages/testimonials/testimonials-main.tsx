"use client";
import { gsap } from "gsap";
import React from "react";
import { useGSAP } from "@gsap/react";
import useScrollSmooth from "@/hooks/use-scroll-smooth";
import { ScrollSmoother, ScrollTrigger, SplitText } from "@/plugins";
gsap.registerPlugin(ScrollTrigger, ScrollSmoother, SplitText);

import Wrapper from "@/layouts/wrapper";
import HeaderFour from "@/layouts/headers/header-four";
import FaqAreaTwo from "@/components/faq/faq-area-2";
import FooterFour from "@/layouts/footers/footer-four";
import { charAnimation, titleAnimation } from "@/utils/title-animation";
import { videoClient } from "@/components/project/project-two";

const TestimonialsMain = () => {
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
                        <span className="tm-hero-subtitle">Pine Book Publishing</span>
                        <h4 className="tm-hero-title tp-char-animation">
                          Ready To Write Your Next Chapter?
                        </h4>
                      </div>
                      <div className="tm-hero-text">
                        <p className="tp_title_anim">
                          Let Pine Book Publishing be the compass for your narrative journey,
                          <br />
                          steering you toward literary success with every stroke of the pen.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <section className="client-video-testimonials client-video-testimonials--page">
                <div className="container">
                  <div className="client-video-testimonials__header text-center">
                    <h2>Our Success Stories</h2>
                    <p>
                      Explore our Success Stories to see how Pine Book Publishing has empowered authors
                      <br />
                      in their self-publishing journey and stands out among self-book publishers.
                    </p>
                  </div>

                  <div className="client-video-testimonials__grid">
                    {videoClient.map((item) => (
                      <article key={item.id} className="client-video-card">
                        <div className="client-video-card__media">
                          <iframe
                            src={item.src}
                            title={item.BookTitle}
                            loading="lazy"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            referrerPolicy="strict-origin-when-cross-origin"
                            allowFullScreen
                          />
                        </div>
                        <div className="client-video-card__content">
                          <span className="client-video-card__client">{item.clientname}</span>
                          <h4>{item.BookTitle}</h4>
                          <div className="client-video-card__meta">
                            <span>Consultant: {item.Consultant}</span>
                            <span>Project Manager: {item.ProjectManager}</span>
                          </div>
                        </div>
                      </article>
                    ))}
                  </div>
                </div>
              </section>

              <FaqAreaTwo />
            </main>

            <FooterFour />
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default TestimonialsMain;
