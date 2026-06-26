import React from "react";
import Image from "next/image";
import { Hand } from "../svg";

// images
import shape from "@/assets/img/inner-about/about/shape-1.png";
import ab_1 from "@/assets/img/inner-about/about/about-1.webp";
// import ab_2 from "@/assets/img/inner-about/about/about-3.webp";
import ab_3 from "@/assets/img/inner-about/about/about-3.webp";
import BrandThree from "../brand/brand-three";

export default function AboutUsArea() {
  return (
    <div className="ab-about-area ab-about-mt pb-90 z-index-5">
      <div className="container container-1480">
        <div className="ab-about-thumb-wrap mb-180">
          <div className="row align-items-end">
            <div className="col-xl-6 col-lg-6 col-md-6">
              <div className="ab-about-left-thumb">
                <Image
                  data-speed=".7"
                  src={ab_1}
                  alt="about-img"
                  style={{ height: "auto" }}
                />
              </div>
            </div>
            <div className="col-xl-6 col-lg-6 col-md-6">
              <div className="ab-about-right-thumb p-relative">
                {/* <Image
                  data-speed="1.1"
                  className="inner-img z-index-5"
                  src={ab_2}
                  alt="about-img"
                  style={{ height: "auto" }}
                /> */}
                <Image
                  data-speed="0.9"
                  src={ab_3}
                  alt="about-img"
                  style={{ height: "auto" }}
                />
              </div>
            </div>
          </div>
        </div>
        <div id="about-info" className="row">
          <div className="col-xxl-9">
            <div className="ab-about-content p-relative">
              <span>
                {/* <Hand /> */}
                About Us
              </span>
              <p className="tp-dropcap tp_fade_bottom">
                Pine Book Publishing
              </p>
              <div className="ab-inner-hero-title-box">
                <h5>Have you ever tried publishing a book but don’t know where to start? Did you ever plan to consult a book publishing company? We get it – there are more book publishing companies out there than stars in the sky (okay, maybe not that many, but you get the idea). <br></br>

                  Don’t feel overwhelmed; Pine Book Publishing is here to help you meet your publishing needs. We have self-published hundreds of books since our inception on 22nd February 2023. Our experts have 10-15 years of experience and are masters in their fields, even though we haven't been in the market long. We know the difficulties faced by authors worldwide and understand how frustrating the writing journey can be! So, we are here to fill this gap and simplify the entire editing and publishing process, offering customized solutions specifically to your needs and requirements. <br></br>

                  Whether you need help with book publishing, editing, or marketing, Pine Book Publishing is here to guide you through it with ease. Our experienced team is not just here to assist you; we're here to walk alongside you every step of the way. So, don't let this chance slip away. Connect with us, share your story idea, and let's transform it into a masterpiece together. We'll ensure that your book successfully makes its way to Amazon, Kindle, Lulu, and other publishing platforms.</h5>
              </div>
            </div>
          </div>
        </div>
        <BrandThree />
        {/* <div className="row">
          <div className="col-xl-9">
            <div className="row">
              <div className="col-xl-5 col-lg-5 col-md-4 mb-40">
                <div className="ab-about-category-title-box p-relative">
                  <h4 className="ab-about-category-title">
                    Something <br />
                    <span>WHAT I DO</span>
                  </h4>
                  <Image
                    className="ab-about-shape-1 d-none d-md-block"
                    src={shape}
                    alt="shape"
                  />
                </div>
              </div>
              <div className="col-xl-7 col-lg-7 col-md-8">
                <div className="row">
                  <div className="col-xl-6 col-lg-6 col-md-6 mb-40">
                    <div className="ab-about-category-list category-space-1 tp_fade_bottom">
                      <ul>
                        <li>Art direction</li>
                        <li>Branding</li>
                        <li>Content Production</li>
                        <li>User Interface Design</li>
                        <li>Animation</li>
                      </ul>
                    </div>
                  </div>
                  <div className="col-xl-6 col-lg-6 col-md-6 mb-40">
                    <div className="ab-about-category-list category-space-2 tp_fade_bottom">
                      <ul>
                        <li>Brand Identity</li>
                        <li>User Interface</li>
                        <li>User Experience</li>
                        <li>Responsive Design</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div> */}
      </div>
    </div>
  );
}
