import React from "react";
import Image from "next/image";

// images
import ser_img_1 from "@/assets/img/home-04/service-1.webp";
import ser_img_2 from "@/assets/img/home-04/service-2.webp";
import ser_img_3 from "@/assets/img/home-04/service-3.webp";
import ser_img_4 from "@/assets/img/home-04/service-4.webp";
import ser_img_5 from "@/assets/img/home-04/service-5.webp";
import ser_img_6 from "@/assets/img/home-04/service-6.webp";
import ser_img_7 from "@/assets/img/home-04/service-7.webp";
import ser_img_8 from "@/assets/img/home-04/service-8.webp";
import { RightArrow, ShapeTwo } from "../svg";
import Link from "next/link";

const service_data = [
  {
    id: 1,
    img: ser_img_1,
    subtitle: "",
    title: "Book Publishing",
    text: "Get your book published without all the confusion and stress. We help authors prepare, publish, and distribute books across trusted online and print platforms.",
    lists: [
      "Self Publishing",
      "Amazon KDP Publishing",
      "Print & eBook Publishing",
    ],
  },
  {
    id: 2,
    img: ser_img_2,
    subtitle: "",
    title: "Book Editing",
    text: "A good story deserves clean writing too. Our editors help improve flow, clarity, grammar, and structure while keeping your original voice natural.",
    lists: [
      "Developmental Editing",
      "Copy Editing",
      "Line Editing",
    ],
  },
  {
    id: 3,
    img: ser_img_3,
    subtitle: "",
    title: "Proofreading",
    text: "Small mistakes can affect the reader’s experience badly. We carefully proofread your manuscript and fix spelling, punctuation, grammar, and consistency issues.",
    lists: [
      "Grammar Review",
      "Spelling Correction",
      "Final Manuscript Check",
    ],
  },
  {
    id: 4,
    img: ser_img_4,
    subtitle: "",
    title: "Book Formatting",
    text: "We format books properly for print and digital reading so your pages look clean, readable, and professionally prepared for publishing platforms.",
    lists: [
      "Kindle Formatting",
      "EPUB Formatting",
      "Print Formatting",
    ],
  },
  {
    id: 5,
    img: ser_img_5,
    subtitle: "",
    title: "Typesetting & Layout Adjustment",
    text: "Good layout makes reading easier. We adjust spacing, typography, margins, and page structure to give your book a balanced and polished appearance.",
    lists: [
      "Page Layout Design",
      "Typography Setup",
      "Chapter Styling",
    ],
  },
  {
    id: 6,
    img: ser_img_6,
    subtitle: "",
    title: "Print-On-Demand",
    text: "Print books only when readers order them. It helps authors avoid huge printing costs while keeping books available worldwide anytime.",
    lists: [
      "Paperback Printing",
      "Hardcover Printing",
      "POD Setup",
    ],
  },
  {
    id: 7,
    img: ser_img_7,
    subtitle: "",
    title: "Audiobook",
    text: "Turn your written book into an audiobook with clear narration, editing, mastering, and production support made for modern listening platforms.",
    lists: [
      "Audiobook Narration",
      "Audio Editing",
      "Voice Selection",
      "Print to Audio Conversion",
    ],
  },
  {
    id: 8,
    img: ser_img_8,
    subtitle: "",
    title: "ISBN & Barcode",
    text: "We help authors get ISBN registration and barcode setup done properly so books are ready for online stores, libraries, and retail systems.",
    lists: [
      "ISBN Registration",
      "Barcode Creation",
      "Metadata Setup",
    ],
  },
];

export default function ServiceSix() {
  return (
    <div className="sv-service-area project-panel-area-2">
      <div className="container-fluid p-0">
        {service_data.map((item) => (
          <div key={item.id} className="sv-service-item project-panel-2">
            <div className="row g-0">
              <div className="col-xl-6 col-lg-6">
                <div className="sv-service-thumb">
                  <Image
                    src={item.img}
                    alt="service-img"
                    style={{ height: "auto" }}
                  />
                </div>
              </div>
              <div className="col-xl-6 col-lg-6">
                <div className="sv-service-content-wrap d-flex align-items-center">
                  <div className="sv-service-content">
                    <div className="sv-service-title-box">
                      <span className="sv-service-subtitle">
                        <i>{item.id < 9 ? "0" + item.id : item.id}</i>
                        {item.subtitle}
                      </span>
                      <h4 className="sv-service-title">{item.title}</h4>
                    </div>
                    <div className="sv-service-space-wrap">
                      <div className="sv-service-text">
                        <p>{item.text}</p>
                      </div>
                      <div className="sv-service-list">
                        <ul>
                          {item.lists.map((list, i) => (
                            <li key={i}>{list}</li>
                          ))}
                        </ul>
                      </div>
                      <div className="sv-service-btn">
                        <Link
                          className="tp-btn-zikzak zikzak-inner p-relative"
                          href="/service-details"
                        >
                          <span className="zikzak-content">
                            See <br /> Details
                            <RightArrow clr="currentColor" />
                          </span>
                          <ShapeTwo />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
