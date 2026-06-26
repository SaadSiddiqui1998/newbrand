import React from "react";
import Image from "next/image";
import FaqItem from "./faq-item";
import shape from '@/assets/img/home-02/service/sv-shape-1.png';

const faqData = [
  {
    id: 1,
    question: "How long does the book publishing process typically take?",
    answer: "Whether you choose Amazon kindle publishing or want to get your book on any other online retailer. The publishing process may take a few weeks to months. It depends on factors like manuscript complexity and the service package chosen.",
  },
  {
    id: 2,
    question: "What genres of books do you specialize in publishing?",
    answer: "We specialize in publishing a wide range of genres, including fiction, non-fiction, memoirs, poetry, and more on a variety of platforms, such as kindle and lulu self publishing, etc. Our goal is to accommodate diverse author interests and reader preferences.",
  },
  {
    id: 3,
    question: "Do you offer editing and proofreading services as part of your publishing packages?",
    answer: "Yes, we offer comprehensive editing and proofreading services to ensure your manuscript meets professional standards before publication. These services are typically included in our publishing packages.",
  },
  {
    id: 4,
    question: "Can I choose my own cover design, or do you provide options?",
    answer: "You have the option to choose your own cover design from our selection of pre-designed templates or work with our team to create a custom cover that reflects your book's essence and resonates with your target audience.",
  },
  {
    id: 5,
    question: "What distribution channels do you use to get my book into readers' hands?",
    answer: "We utilize various distribution channels, including online retailers like Amazon, Kindle, Lulu, Barnes & Noble, Kobo and our own platform, to make your book available to a wide audience globally. We also offer options for print-on-demand and eBook distribution.",
  },
  {
    id: 6,
    question: "How much control do I have over pricing and royalties for my published book?",
    answer: "As an author, you retain control over pricing and royalties for your book. We provide guidance and support in setting competitive prices and offer transparent royalty structures to ensure you receive fair compensation for your work.",
  },
];

export default function FaqAreaTwo() {
  return (
    <div className="tp-service-2-area tp-service-2-pt pb-150 faq-area-two">
      <div className="container">
        <div className="row align-items-start">
          <div className="col-xl-4 col-lg-5">
            <div className="tp-price-inner-faq">
              <div className="tp-service-2-title-box pt-25 pb-120">
                <h4 className="tp-service-2-title mb-20 tp_title_anim">
                  Frequently Asked Question
                </h4>
              </div>
              <div className="tp-service-2-shape-img text-center text-lg-start">
                <Image src={shape} alt="shape" />
              </div>
            </div>
          </div>
          <div className="col-xl-8 col-lg-7">
            <div className="tp-price-inner-faq-wrap">
              <div className="fq-faq-wrapper">
                <div className="tp-service-2-accordion-box">
                  <div className="accordion" id="accordionExample">
                    {faqData.map((item) => (
                      <FaqItem key={item.id} item={item} />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
