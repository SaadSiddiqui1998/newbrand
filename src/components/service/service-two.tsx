import React from "react";
import { Leaf } from "../svg";
import Image from "next/image";
// service icon
import ser_1 from "@/assets/img/home-02/service/sv-icon-1.png";
import ser_2 from "@/assets/img/home-02/service/sv-icon-2.png";
import ser_3 from "@/assets/img/home-02/service/sv-icon-3.png";
import ser_4 from "@/assets/img/home-02/service/sv-icon-4.png";
// shape
import shape from "@/assets/img/home-02/service/sv-shape-1.png";

const service_accordion = [
  {
    id: 1,
    icon: ser_1,
    title: "How long does the book publishing process typically take?",
    desc: "Whether you choose Amazon kindle publishing or want to get your book on any other online retailer. The publishing process may take a few weeks to months. It depends on factors like manuscript complexity and the service package chosen. ",
  },
  {
    id: 2,
    icon: ser_2,
    title: "What genres of books do you specialize in publishing?",
    desc: "We specialize in publishing a wide range of genres, including fiction, non-fiction, memoirs, poetry, and more on a variety of platforms, such as kindle and lulu self publishing, etc. Our goal is to accommodate diverse author interests and reader preferences.",
  },
  {
    id: 3,
    icon: ser_3,
    title: "Do you offer editing and proofreading services as part of your publishing packages?",
    desc: "Yes, we offer comprehensive editing and proofreading services to ensure your manuscript meets professional standards before publication. These services are typically included in our publishing packages.",
  },
  {
    id: 4,
    icon: ser_4,
    title: "Can I choose my own cover design, or do you provide options?",
    desc: "You have the option to choose your own cover design from our selection of pre-designed templates or work with our team to create a custom cover that reflects your book's essence and resonates with your target audience.",
  },
  {
    id: 5,
    icon: ser_4,
    title: "What distribution channels do you use to get my book into readers' hands?",
    desc: "We utilize various distribution channels, including online retailers like Amazon, Kindle, Lulu, Barnes & Noble, Kobo and our own platform, to make your book available to a wide audience globally. We also offer options for print-on-demand and eBook distribution.",
  },
  {
    id: 6,
    icon: ser_4,
    title: "How much control do I have over pricing and royalties for my published book?",
    desc: "As an author, you retain control over pricing and royalties for your book. We provide guidance and support in setting competitive prices and offer transparent royalty structures to ensure you receive fair compensation for your work.",
  },
];
export default function ServiceTwo() {
  return (
    <div className="tp-service-2-area tp-service-2-pt  pb-150 z-index-5">
      <div className="container container-1480">
        <div className="row">
          <div className="col-xl-8">
            <div className="tp-service-2-title-box mb-70">
              <span className="tp-section-subtitle-3">
                <span>
                  <Leaf />
                </span>
                Q&A
              </span>
              <h4 className="tp-section-title-40">
                Frequently Asked Questions
              </h4>
            </div>
          </div>
        </div>
        <div className="row align-items-center">
          <div className="col-xxl-6 col-xl-4 col-lg-4">
            <div className="tp-service-2-shape-img text-center text-lg-start">
              <Image src={shape} alt="" />
            </div>
          </div>
          <div className="col-xxl-6 col-xl-8 col-lg-8">
            <div className="tp-service-2-accordion-box">
              <div className="accordion" id="accordionExample">
                {service_accordion.map((s) => (
                  <div key={s.id} className="accordion-items">
                    <h2 className="accordion-header">
                      <button
                        className={`accordion-buttons ${s.id !== 1 ? "collapsed" : ""}`}
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target={`#collapse-${s.id}`}
                        aria-expanded="false"
                        aria-controls={`collapse-${s.id}`}
                      >
                        {/* <span>
                          <Image src={s.icon} alt="icon" />
                        </span> */}
                        {s.title}
                        <span className="accordion-icon"></span>
                      </button>
                    </h2>
                    <div
                      id={`collapse-${s.id}`}
                      className={`accordion-collapse collapse ${s.id === 1 ? "show" : ""}`}
                      data-bs-parent="#accordionExample"
                    >
                      <div className="accordion-body">
                        <p>{s.desc}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
