"use client";
import React from "react";
import { NextIcon, PrevIcon } from "../svg";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { SwiperOptions } from "swiper/types";

const testimonial_data = [
  {
    id: 1,
    desc: `Aside from issues on what I wanted regarding cover art and stuff regarding my first PM, I have been enjoying working with Pine Book. Thanks to my new PM Amara I am feeling more confident about my book once it is done as like with any soon to be publisher/author they will wonder if their work will do well and make many want to read it. Whatever happens I am confident that things will go well especially with my continued partnership with Pine Book.`,
    name: "EvanF",
    designation: "Oct 16, 2024",
  },
  {
    id: 2,
    desc: `I came to Pine Book Writing to re-launch my books. My project manager was Lia and she helped me so much with the editing process which is by far the hardest thing to do. She then helped me with my covers and I know it was not easy but Lia knew I had a vision and she helped me recreate it. Thank you to everyone that assisted on this project.`,
    name: "Unique Spencer",
    designation: "Oct 16, 2024",
  },
  {
    id: 3,
    desc: `After two disappointing experiences with other publishers, I finally found Pine Book Writing, and it was a game-changer. Their professionalism was outstanding, and working with them was a pleasure. Steve, Ryan, and Fiona were exceptional, guiding me through every step of the project with expertise and care. I highly recommend Pine Book Writing for anyone seeking a top-notch publishing experience.`,
    name: "Mary Gunn",
    designation: "Sep 5, 2024",
  },
  {
    id: 4,
    desc: `Top notch from beginning to end. Finally found a publishing company who does what they promise. Lia and the group at Pine Book is the real deal. I am not easy to work with, because I expect to get what I pay for. I got everything and more. They delivered my book when they said they would and followed up even after the release to make sure I was still happy with everything. They made this more enjoyable by keeping me in the loop the whole time. Also they were not pushy, they did it the way I asked. Will definitely turn to them for my second book. If you want a fair price and the best service look no further.`,
    name: "BigKid Gamez",
    designation: "Sep 13, 2024",
  },
  {
    id: 5,
    desc: `This is John Bowman. I would just love to give a shout out to Pine Book Writing, my experience with them has really been beyond words. From Lia Sinclair, Damon Peters for taking me on. I am a Christian and it has been an answer to my prayers after 4 1/2 years looking for an honest publisher thank you all so much.`,
    name: "John Bowman",
    designation: "May 30, 2024",
  },
  {
    id: 6,
    desc: `I had a great experience because as a first-time author I did not really know the process. They helped walk me through the process step by step. Whenever I needed to talk with them, they made time for me. We had a big project, and they helped me finish it. My time spent with Pine Book Publishing produced results. They helped me finish my project and for that I am very thankful.`,
    name: "kyle climer",
    designation: "Jul 21, 2024",
  },
];

const slider_setting: SwiperOptions = {
  slidesPerView: 1,
  loop: true,
  autoplay: true,
  speed: 1000,
  breakpoints: {
    "1400": {
      slidesPerView: 1,
    },
    "1200": {
      slidesPerView: 1,
    },
    "992": {
      slidesPerView: 1,
    },
    "768": {
      slidesPerView: 1,
    },
    "576": {
      slidesPerView: 1,
    },
    "0": {
      slidesPerView: 1,
    },
  },
  navigation: {
    prevEl: ".tp-testimonial-prev",
    nextEl: ".tp-testimonial-next",
  },
};
const TestimonialOne = () => {
  return (
    <div className="tp-testimonial-area pb-40">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xl-10">
            <div className="tp-testimonial-slider-wrapper p-relative">
              <div className="tp-testimonial-arrow-box d-none d-lg-block">
                <button className="tp-testimonial-prev">
                  <span>
                    <PrevIcon />
                  </span>
                </button>
                <button className="tp-testimonial-next">
                  <span>
                    <NextIcon />
                  </span>
                </button>
              </div>
              <Swiper
                {...slider_setting}
                modules={[Navigation]}
                className="swiper-container tp-testimonial-slider-active fix"
              >
                {testimonial_data.map((item) => (
                  <SwiperSlide key={item.id}>
                    <div className="tp-testimonial-item text-center">
                      <p>{item.desc}</p>
                      <span>
                        <em>{item.name}</em> - {item.designation}
                      </span>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialOne;
