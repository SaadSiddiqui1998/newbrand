import React from "react";
import Image from "next/image";

// image
import ser_hero from "@/assets/img/inner-service/hero/hero-1.jpg";
import ser_hero_shape from "@/assets/img/inner-service/hero/hero-shape-1.jpg";

export default function ServiceHero() {
  return (
    <div className="sv-hero-area sv-hero-ptb">
      <div className="container container-1530">
        <div className="row">
          <div className="col-xl-10">
            <div className="sv-hero-title-box">
              <h4 className="sv-hero-title tp-char-animation">
                Start Your Publishing
                <br /> Journey Now
              </h4>
              <p className="tp_fade_bottom">
                Are you searching for a company with a wide range of Book Publishing Services? You are at the right place. At <a href="https://pinebookpublishing.com/" className="font-bold">Pine Book Publishing</a>, we offer comprehensive services to cater to your needs. From editing to publishing, we have mastered everything. Explore everything you need to kick-start your publishing journey.
              </p>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-xl-12">
            <div className="sv-hero-thumb p-relative">
              <div className="sv-hero-thumb-box">
                <Image
                  data-speed=".7"
                  src={ser_hero}
                  alt="ser_hero-img"
                  style={{ height: "auto" }}
                />
              </div>
              <Image
                className="sv-hero-thumb-shape d-none d-lg-block"
                src={ser_hero_shape}
                alt="ser_hero-shape"
                style={{ height: "auto" }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
