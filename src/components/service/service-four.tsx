import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FirstBracket, FirstBracketTwo, RightArrow, SvgBg } from "../svg";
import icon from '@/assets/img/home-03/service/sv-icon-1.png';

const service_data = [
  {
    id: 1,
    title: "Editing:",
    desc: "Elevate your manuscript with our editing service that ensures every word tells your story the way you intended.",
    category: ["1"],
  },
  {
    id: 2,
    title: "Formatting:",
    desc: "From font choice to margins, our formatting service makes sure your book is dressed to impress.",
    category: ["2"],
  },
  {
    id: 3,
    title: "Proofreading:",
    desc: "Our proofreading team is your safety net, catching every slip-up to make your writing flawless.",
    category: ["3"],
  },
  {
    id: 4,
    title: "Typesetting & Layout:",
    desc: "Expert typesetting that makes your book as easy on the eyes as it is engaging for the mind.",
    category: ["4"],
  },
  {
    id: 5,
    title: "Cover Design:",
    desc: "We create covers that speak to readers, inviting them into the world you've created.",
    category: ["5"],
  },
  {
    id: 6,
    title: "Publishing:",
    desc: "Your literary journey culminates with our publishing service, placing your book in the spotlight it deserves.",
    category: ["6"],
  },
];
export default function ServiceFour() {

  return (
    <div className="tp-service-3-area pt-130 pb-130">
      <div className="container">
        <div className="row">
          <div className="col-xl-9">
            <div className="tp-service-3-title-box mb-60 p-relative">
              <div className="tp-service-3-icon">
                <Image src={icon} alt="icon" />
              </div>
              <span className="tp-section-subtitle-2 tp_fade_bottom">
                <span>
                  <FirstBracket />
                </span>
                <span className="tp-subtitle-text tp_text_invert">
                  HOW WE WORK
                </span>
                <span>
                  <FirstBracketTwo />
                </span>
              </span>
              <h4 className="tp-section-title-90 tp_text_invert tp_fade_bottom">
                OUR
                <br /> PROCESS
              </h4>
            </div>
          </div>
        </div>

        {service_data.map((item) => (
          <div key={item.id} className="tp-service-3-wrap tp_fade_bottom">
            <div className="row align-items-start">
              <div className="col-xl-3 col-lg-3">
                <div className="tp-service-3-title-box">
                  <h4 className="tp-service-3-title">
                    <Link href="/service">{item.title}</Link>
                  </h4>
                </div>
              </div>
              <div className="col-xl-7 col-lg-7">
                <div className="tp-service-3-content">
                  <p dangerouslySetInnerHTML={{ __html: item.desc }}></p>
                  {/* <div className="tp-service-3-category">
                    {item.category.map((c, i) => (
                      <span key={i}>{c}</span>
                    ))}
                  </div> */}
                </div>
              </div>
              <div className="col-xl-2 col-lg-2">
                <div className="tp-service-3-btn-box text-start text-md-end">
                  <Link
                    className="tp-btn-zikzak-sm p-relative"
                    href="#"
                  >
                    <span className="zikzak-content">
                      {item.category.map((c, i) => (
                        <span key={i}>{c}</span>
                      ))}
                    </span>
                    <span>
                      <SvgBg />
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
