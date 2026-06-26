"use client";
import React, { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { UpArrow } from "../svg";

type PackageSection = {
  title: string;
  items: string[];
};

type PackageData = {
  id: number;
  title: string;
  price: string;
  originalPrice?: string;
  intro?: string;
  sections: PackageSection[];
  paymentPlan?: string[];
};

const pricing_data: PackageData[] = [
  {
    id: 1,
    title: "Basic Package",
    price: "$700 USD",
    sections: [
      {
        title: "Preparing Your Manuscript",
        items: [
          "Editorial Support",
          "Proofreading",
          "Typesetting",
          "Layout Adjustment",
          "Basic Formatting",
          "2 Revisions Per Draft",
        ],
      },
      {
        title: "Book Publishing",
        items: [
          "Account Creation",
          "Account Verification",
          "Account Optimization",
          "Available on Kindle",
          "eBook Format",
        ],
      },
      {
        title: "Guarantees",
        items: ["No Royalties Share", "100% Ownership Rights", "100% Satisfaction"],
      },
    ],
  },
  {
    id: 2,
    title: "Start Up Package",
    price: "$2,000 USD",
    sections: [
      {
        title: "Preparing Your Manuscript",
        items: [
          "Editorial Support",
          "Proofreading",
          "Typesetting",
          "Layout Adjustment",
          "Publishing Standard Formatting",
          "3 Revisions Per Draft",
        ],
      },
      {
        title: "Designing Your Cover",
        items: [
          "Graphic OR Illustrated Design",
          "Cover Layout",
          "Cover Formatting",
          "Front, Back & Spine",
        ],
      },
      {
        title: "Book Publishing",
        items: [
          "Account Creation",
          "Account Verification",
          "Account Optimization",
          "Available on Amazon & Kindle",
          "eBook Format",
          "Paperback Format",
        ],
      },
      {
        title: "Guarantees",
        items: ["No Royalties Share", "100% Ownership Rights", "100% Satisfaction"],
      },
    ],
  },
  {
    id: 3,
    title: "Standard Package",
    price: "$3,000 USD",
    sections: [
      {
        title: "Preparing Your Manuscript",
        items: [
          "Editorial Support",
          "Proofreading",
          "Typesetting",
          "Layout Adjustment",
          "Publishing Standard Formatting",
          "5 Revisions Per Draft",
        ],
      },
      {
        title: "Designing Your Cover",
        items: [
          "Graphic OR Illustrated Design",
          "Cover Layout",
          "Cover Formatting",
          "Front, Back & Spine",
          "ISBN + Barcode (2X)",
        ],
      },
      {
        title: "Book Publishing",
        items: [
          "Account Creation",
          "Account Verification",
          "Account Optimization",
          "Available on Amazon & Kindle",
          "Available on Barnes & Noble",
          "eBook Format",
          "Paperback Format",
          "Hardcover Format",
        ],
      },
      {
        title: "Guarantees",
        items: ["No Royalties Share", "100% Ownership Rights", "100% Satisfaction"],
      },
    ],
  },
  {
    id: 4,
    title: "Expert Package",
    price: "$7,000 USD",
    sections: [
      {
        title: "Preparing Your Manuscript",
        items: [
          "Editorial Support",
          "Proofreading",
          "Typesetting",
          "Layout Adjustment",
          "Publishing Standard Formatting",
          "5 Revisions Per Draft",
        ],
      },
      {
        title: "Designing Your Cover",
        items: [
          "Graphic OR Illustrated Design",
          "Cover Layout",
          "Cover Formatting",
          "Front, Back & Spine",
          "ISBN + Barcode (2X)",
        ],
      },
      {
        title: "Book Publishing",
        items: [
          "Account Creation",
          "Account Verification",
          "Account Optimization",
          "Available on Amazon & Kindle",
          "Available on Barnes & Noble",
          "Available on Google Books",
          "eBook Format",
          "Paperback Format",
          "Hardcover Format",
        ],
      },
      {
        title: "Online Presence",
        items: [
          "3 - 5 Page Authors Website",
          "1 - Year Domain & Hosting",
          "30 - 60 Seconds Book Trailer",
        ],
      },
      {
        title: "Guarantees",
        items: ["No Royalties Share", "100% Ownership Rights", "100% Satisfaction"],
      },
    ],
    paymentPlan: [
      "50% payment upfront",
      "Remaining 50% in 2-3 months installments",
      "OR after the delivery of 3 chapters",
    ],
  },
  {
    id: 5,
    title: "Premium Package",
    price: "$15,000 USD",
    sections: [
      {
        title: "Preparing Your Manuscript",
        items: [
          "Editorial Support",
          "Proofreading",
          "Typesetting",
          "Layout Adjustment",
          "Publishing Standard Formatting",
          "5 Revisions Per Draft",
        ],
      },
      {
        title: "Designing Your Cover",
        items: [
          "Graphic OR Illustrated Design",
          "Cover Layout",
          "Cover Formatting",
          "Front, Back & Spine",
          "ISBN + Barcode (2X)",
        ],
      },
      {
        title: "Book Publishing",
        items: [
          "Account Creation",
          "Account Verification",
          "Account Optimization",
          "Available on Amazon & Kindle",
          "Available on Barnes & Noble",
          "Available on Google Books",
          "Available on Smashwords",
          "eBook Format",
          "Paperback Format",
          "Hardcover Format",
        ],
      },
      {
        title: "12 Months Brand Marketing",
        items: [
          "Logo Design (Complimentary)",
          "3 - 5 Page Authors Website",
          "1 - Year Domain & Hosting",
          "30 - 60 Seconds Book Trailer",
          "Organic Google Marketing",
          "Social Media Marketing (Facebook, Instagram & Twitter)",
        ],
      },
      {
        title: "Guarantees",
        items: ["No Royalties Share", "100% Ownership Rights", "100% Satisfaction"],
      },
    ],
    paymentPlan: [
      "50% payment upfront",
      "Remaining 50% in 2-3 months installments",
      "OR after the delivery of 3 chapters",
    ],
  },
  {
    id: 6,
    title: "Enterprise Package",
    price: "$25,000 USD",
    sections: [
      {
        title: "Preparing Your Manuscript",
        items: [
          "Editorial Support",
          "Proofreading",
          "Typesetting",
          "Layout Adjustment",
          "Publishing Standard Formatting",
          "5 Revisions Per Draft",
        ],
      },
      {
        title: "Designing Your Cover",
        items: [
          "Graphic OR Illustrated Design",
          "Cover Layout",
          "Cover Formatting",
          "Front, Back & Spine",
          "ISBN + Barcode (2X)",
        ],
      },
      {
        title: "Book Publishing",
        items: [
          "Account Creation",
          "Account Verification",
          "Account Optimization",
          "Available on Amazon & Kindle",
          "Available on Barnes & Noble",
          "Available on Google Books",
          "Available on Smashwords",
          "Available on Draft2Digital",
          "Available on ACX",
          "eBook Format",
          "Paperback Format",
          "Hardcover Format",
          "Audiobook Format",
        ],
      },
      {
        title: "24 Months Brand Marketing",
        items: [
          "Logo Design (Complimentary)",
          "3 - 5 Page Authors Website",
          "2 - Year Domain & Hosting",
          "60 - 90 Seconds Video Trailer",
          "Organic Google Marketing",
          "Blogs & Article Postings",
          "Press Releases (150+ Platforms)",
          "Social Media Marketing (Facebook, Instagram, Twitter, YouTube, TikTok)",
        ],
      },
      {
        title: "Guarantees",
        items: ["No Royalties Share", "100% Ownership Rights", "100% Satisfaction"],
      },
    ],
  },
];

const comparisonRowsGroupOne = [
  ["Editorial Support", "✔", "✔", "✔"],
  ["Proofreading", "✔", "✔", "✔"],
  ["Typesetting", "✔", "✔", "✔"],
  ["Layout Adjustment", "✔", "✔", "✔"],
  ["Basic Formatting", "✔", "✔", "✔"],
  ["Publishing Standard Formatting", "✖", "✔", "✔"],
  ["Revisions Per Draft", "2", "3", "5"],
  ["Graphic OR Illustrated Design", "✖", "✔", "✔"],
  ["Cover Layout", "✖", "✔", "✔"],
  ["Cover Formatting", "✖", "✔", "✔"],
  ["Front, Back & Spine", "✖", "✔", "✔"],
  ["ISBN + Barcode (2X)", "✖", "✖", "✔"],
  ["Amazon & Kindle", "Kindle only", "✔", "✔"],
  ["Barnes & Noble", "✖", "✖", "✔"],
  ["Google Books", "✖", "✖", "✖"],
  ["Paperback Format", "✖", "✔", "✔"],
  ["Hardcover Format", "✖", "✖", "✔"],
  ["No Royalties Share", "✔", "✔", "✔"],
  ["100% Ownership Rights", "✔", "✔", "✔"],
  ["100% Satisfaction", "✔", "✔", "✔"],
];

const comparisonRowsGroupTwo = [
  ["Editorial Support", "✔", "✔", "✔"],
  ["Proofreading", "✔", "✔", "✔"],
  ["Typesetting", "✔", "✔", "✔"],
  ["Layout Adjustment", "✔", "✔", "✔"],
  ["Publishing Standard Formatting", "✔", "✔", "✔"],
  ["Revisions Per Draft", "5", "5", "5"],
  ["Graphic OR Illustrated Design", "✔", "✔", "✔"],
  ["Cover Layout", "✔", "✔", "✔"],
  ["Cover Formatting", "✔", "✔", "✔"],
  ["Front, Back & Spine", "✔", "✔", "✔"],
  ["ISBN + Barcode (2X)", "✔", "✔", "✔"],
  ["Amazon & Kindle", "✔", "✔", "✔"],
  ["Barnes & Noble", "✔", "✔", "✔"],
  ["Google Books", "✔", "✔", "✔"],
  ["Smashwords", "✖", "✔", "✔"],
  ["Draft2Digital", "✖", "✖", "✔"],
  ["ACX", "✖", "✖", "✔"],
  ["Paperback Format", "✔", "✔", "✔"],
  ["Hardcover Format", "✔", "✔", "✔"],
  ["Audiobook Format", "✖", "✖", "✔"],
  ["No Royalties Share", "✔", "✔", "✔"],
  ["100% Ownership Rights", "✔", "✔", "✔"],
  ["100% Satisfaction", "✔", "✔", "✔"],
];

const marketingPackages: PackageData[] = [
  {
    id: 1,
    title: "Rising Author Program",
    price: "$12,499",
    originalPrice: "$19,999",
    sections: [
      {
        title: "Elite Visibility",
        items: ["Times Square Promotion", "Literary Exhibition Placement"],
      },
      {
        title: "Media Exposure",
        items: ["Author Interviews", "Press Campaigns"],
      },
      {
        title: "Sales Acceleration",
        items: ["Amazon Best Seller Campaign"],
      },
      {
        title: "Long-Term Support",
        items: ["Dedicated Marketing Strategist", "12 Months Author Branding Support"],
      },
      {
        title: "Guarantees",
        items: ["No Royalties Share", "100% Ownership Rights", "100% Satisfaction"],
      },
    ],
  },
  {
    id: 2,
    title: "Bestselling Author Program",
    price: "$24,999",
    originalPrice: "$34,999",
    intro: "Everything included in the Author Visibility Package, plus:",
    sections: [
      {
        title: "Elite Visibility",
        items: ["International Book Fair Representation"],
      },
      {
        title: "Media Exposure",
        items: ["Podcast Tour Campaign", "Premium Author Interview Placements"],
      },
      {
        title: "Sales Acceleration",
        items: ["Advanced Amazon Best Seller Campaigns", "Influencer Marketing Campaign"],
      },
      {
        title: "Brand Expansion",
        items: ["Retail Placement Opportunities", "Global Distribution Growth"],
      },
      {
        title: "Long-Term Support",
        items: ["Quarterly Performance Reviews", "24 Months Author Branding Support"],
      },
      {
        title: "Guarantees",
        items: ["No Royalties Share", "100% Ownership Rights", "100% Satisfaction"],
      },
    ],
  },
  {
    id: 3,
    title: "Legacy Author Program",
    price: "$49,999",
    originalPrice: "$69,999",
    intro: "Everything included in the Author Influence Package, plus:",
    sections: [
      {
        title: "Elite Visibility",
        items: [
          "Premium International Book Fair Representation",
          "Multi-Event Literary Exhibition Placement",
        ],
      },
      {
        title: "Media Exposure",
        items: ["Multi-Podcast Tour Campaign", "National & International Press Outreach"],
      },
      {
        title: "Sales Acceleration",
        items: [
          "Comprehensive Amazon Best Seller Campaigns",
          "Expanded Influencer Marketing Network",
          "Reader Outreach Campaigns",
        ],
      },
      {
        title: "Brand Expansion",
        items: [
          "Merchandise Creation & Development",
          "Expanded Retail Placement Opportunities",
          "Enhanced Global Distribution Strategy",
        ],
      },
      {
        title: "Long-Term Support",
        items: [
          "Dedicated Marketing Team",
          "Quarterly Performance Reviews",
          "36 Months Author Branding Support",
        ],
      },
      {
        title: "Guarantees",
        items: ["No Royalties Share", "100% Ownership Rights", "100% Satisfaction"],
      },
    ],
  },
];

const firstThreePackages = pricing_data.slice(0, 3);
const lastThreePackages = pricing_data.slice(3, 6);

export default function PricingArea() {
  const [showPopup, setShowPopup] = useState(false);
  const [selectedPackage, setSelectedPackage] = useState("");
  const [mounted, setMounted] = useState(false);
  const [showComparisonOne, setShowComparisonOne] = useState(false);
  const [showComparisonTwo, setShowComparisonTwo] = useState(false);
  const [activeTab, setActiveTab] = useState<"publishing" | "marketing">("publishing");

  useEffect(() => {
    setMounted(true);
  }, []);

  const openQuotePopup = (packageName: string) => {
    setSelectedPackage(packageName);
    setShowPopup(true);
  };

  const closeQuotePopup = () => {
    setShowPopup(false);
  };

  return (
    <div className="tp-price-area pb-120">
      <div className="container">
        {mounted &&
          showPopup &&
          createPortal(
          <div className="home4-popup-overlay">
            <div className="home4-popup-card">
              <button type="button" className="home4-popup-close" aria-label="Close popup" onClick={closeQuotePopup}>
                x
              </button>
              <div className="home4-popup-grid">
                <div
                  className="home4-popup-media"
                  style={{ backgroundImage: "url(/assets/img/home-04/service-3.webp)" }}
                >
                  <div className="home4-popup-media-overlay">
                    <p className="home4-popup-kicker">Talk to an Expert</p>
                    <h4>Bring Your Story to Life</h4>
                    <span>Share your details and get a custom roadmap for your publishing goals.</span>
                  </div>
                </div>
                <div className="home4-popup-form-wrap">
                  <h3 className="home4-popup-title">Avail Discount</h3>
                  <p className="home4-popup-subtitle">
                    Exclusive Offer: Expert Book Publishing at 50% Off - Your Story Deserves to be Heard!
                  </p>
                  <form className="home4-popup-form">
                    <input type="text" placeholder="Name" name="name" />
                    <input type="email" placeholder="Email" name="email" />
                    <input type="tel" placeholder="Phone" name="phone" />
                    <input type="text" name="package" value={selectedPackage} readOnly />
                    <textarea placeholder="Message" name="message" rows={4} defaultValue={`I am interested in ${selectedPackage}.`} />
                    <button type="submit">SUBMIT</button>
                  </form>
                </div>
              </div>
            </div>
          </div>,
          document.body
        )}

        <div className="pricing-package-tabs">
          <button
            type="button"
            className={activeTab === "publishing" ? "active" : ""}
            onClick={() => setActiveTab("publishing")}
          >
            Publishing Packages
          </button>
          <button
            type="button"
            className={activeTab === "marketing" ? "active" : ""}
            onClick={() => setActiveTab("marketing")}
          >
            Marketing Packages
          </button>
        </div>

        {activeTab === "publishing" && (
          <>
        <div className="row">
          {firstThreePackages.map((item) => (
            <div key={item.id} className="col-xl-4 col-lg-6 mb-30">
              <div className="tp-price-item pricing-equal-card" style={{ color: "#121212" }}>
                <div className="tp-price-head">
                  <span style={{ color: "#121212" }}>#{item.id}</span>
                  <h5 style={{ color: "#121212" }}>{item.title}</h5>
                </div>
                <div className="tp-price-body">
                  <span className="tp-price-monthly" style={{ color: "#121212" }}>
                    {item.price}
                  </span>
                  <div className="tp-price-list">
                    {item.sections.map((section, i) => (
                      <div key={`${item.id}-${i}`} className="mb-20">
                        <h6 className="mb-10">{section.title}</h6>
                        <ul>
                          {section.items.map((l, idx) => (
                            <li key={`${item.id}-${i}-${idx}`}>
                              <i className="fa-sharp fa-light fa-check"></i>
                              {l}
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                    {item.paymentPlan && (
                      <div className="mb-20">
                        <h6 className="mb-10">Easy Payment Plan</h6>
                        <ul>
                          {item.paymentPlan.map((p, i) => (
                            <li key={`pay-${item.id}-${i}`}>
                              <i className="fa-sharp fa-light fa-check"></i>
                              {p}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                  <button
                    type="button"
                    className="tp-btn-black-md w-100 text-center"
                    onClick={() => openQuotePopup(item.title)}
                  >
                    Get a Quote
                    <span>
                      <UpArrow />
                    </span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="row mt-40 mb-70">
          <div className="col-12">
            <div className="text-center">
              <button
                type="button"
                className="tp-btn-black-md"
                onClick={() => setShowComparisonOne((prev) => !prev)}
              >
                {showComparisonOne ? "Hide Comparison (Basic to Standard)" : "Show Comparison (Basic to Standard)"}
              </button>
            </div>
            {showComparisonOne && (
              <div className="table-responsive mt-20">
                <table className="table table-bordered align-middle">
                  <thead>
                    <tr>
                      <th>Feature</th>
                      <th>Basic</th>
                      <th>Start Up</th>
                      <th>Standard</th>
                    </tr>
                  </thead>
                  <tbody>
                    {comparisonRowsGroupOne.map((row, idx) => (
                      <tr key={`row-${idx}`}>
                        {row.map((col, colIdx) => (
                          <td key={`cell-${idx}-${colIdx}`}>{col}</td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        </div>
        <div className="row">
          {lastThreePackages.map((item) => (
            <div key={item.id} className="col-xl-4 col-lg-6 mb-30">
              <div className="tp-price-item pricing-equal-card" style={{ color: "#121212" }}>
                <div className="tp-price-head">
                  <span style={{ color: "#121212" }}>#{item.id}</span>
                  <h5 style={{ color: "#121212" }}>{item.title}</h5>
                </div>
                <div className="tp-price-body">
                  <span className="tp-price-monthly" style={{ color: "#121212" }}>
                    {item.price}
                  </span>
                  <div className="tp-price-list">
                    {item.sections.map((section, i) => (
                      <div key={`${item.id}-${i}`} className="mb-20">
                        <h6 className="mb-10">{section.title}</h6>
                        <ul>
                          {section.items.map((l, idx) => (
                            <li key={`${item.id}-${i}-${idx}`}>
                              <i className="fa-sharp fa-light fa-check"></i>
                              {l}
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                    {item.paymentPlan && (
                      <div className="mb-20">
                        <h6 className="mb-10">Easy Payment Plan</h6>
                        <ul>
                          {item.paymentPlan.map((p, i) => (
                            <li key={`pay-${item.id}-${i}`}>
                              <i className="fa-sharp fa-light fa-check"></i>
                              {p}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                  <button
                    type="button"
                    className="tp-btn-black-md w-100 text-center"
                    onClick={() => openQuotePopup(item.title)}
                  >
                    Get a Quote
                    <span>
                      <UpArrow />
                    </span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="row mt-40">
          <div className="col-12">
            <div className="text-center">
              <button
                type="button"
                className="tp-btn-black-md"
                onClick={() => setShowComparisonTwo((prev) => !prev)}
              >
                {showComparisonTwo ? "Hide Comparison (Expert to Enterprise)" : "Show Comparison (Expert to Enterprise)"}
              </button>
            </div>
            {showComparisonTwo && (
              <div className="table-responsive mt-20">
                <table className="table table-bordered align-middle">
                  <thead>
                    <tr>
                      <th>Feature</th>
                      <th>Expert</th>
                      <th>Premium</th>
                      <th>Enterprise</th>
                    </tr>
                  </thead>
                  <tbody>
                    {comparisonRowsGroupTwo.map((row, idx) => (
                      <tr key={`row-two-${idx}`}>
                        {row.map((col, colIdx) => (
                          <td key={`cell-two-${idx}-${colIdx}`}>{col}</td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        </div>
          </>
        )}

        {activeTab === "marketing" && (
          <div className="row">
            {marketingPackages.map((item) => (
              <div key={item.id} className="col-xl-4 col-lg-6 mb-30">
                <div className="tp-price-item pricing-equal-card" style={{ color: "#121212" }}>
                  <div className="tp-price-head">
                    <span style={{ color: "#121212" }}>#{item.id}</span>
                    <h5 style={{ color: "#121212" }}>{item.title}</h5>
                  </div>
                  <div className="tp-price-body">
                    <div className="pricing-marketing-price">
                      {item.originalPrice && <del>{item.originalPrice}</del>}
                      <span className="tp-price-monthly" style={{ color: "#121212" }}>
                        {item.price}
                      </span>
                    </div>
                    <div className="tp-price-list">
                      {item.intro && <p className="pricing-package-intro">{item.intro}</p>}
                      {item.sections.map((section, i) => (
                        <div key={`${item.id}-${i}`} className="mb-20">
                          <h6 className="mb-10">{section.title}</h6>
                          <ul>
                            {section.items.map((l, idx) => (
                              <li key={`${item.id}-${i}-${idx}`}>
                                <i className="fa-sharp fa-light fa-check"></i>
                                {l}
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                    <button
                      type="button"
                      className="tp-btn-black-md w-100 text-center"
                      onClick={() => openQuotePopup(item.title)}
                    >
                      Get a Quote
                      <span>
                        <UpArrow />
                      </span>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
      <style jsx>{`
        .pricing-package-tabs {
          width: fit-content;
          margin: 0 auto 40px;
          padding: 8px;
          display: flex;
          gap: 8px;
          border: 1px solid rgba(18, 18, 18, 0.14);
          border-radius: 999px;
          background: rgba(255, 255, 255, 0.65);
          box-shadow: inset 0 0 0 1px rgba(255, 255, 255, 0.35);
        }
        .pricing-package-tabs button {
          min-width: 190px;
          height: 48px;
          padding: 0 24px;
          border: 0;
          border-radius: 999px;
          color: #080a2b;
          font-size: 16px;
          font-weight: 700;
          line-height: 1;
          background: transparent;
          transition: all 0.25s ease;
        }
        .pricing-package-tabs button.active {
          color: #ffffff;
          background: #278475;
        }
        .pricing-package-tabs button:not(.active):hover {
          color: #278475;
        }
        .pricing-package-intro {
          margin-bottom: 22px;
          color: #080a2b;
          font-size: 16px;
          font-weight: 700;
          line-height: 1.35;
        }
        .pricing-marketing-price {
          display: flex;
          align-items: baseline;
          gap: 14px;
          margin-bottom: 28px;
        }
        .pricing-marketing-price del {
          color: #278475;
          font-size: 18px;
          font-weight: 700;
          line-height: 1;
        }
        .pricing-marketing-price .tp-price-monthly {
          margin-bottom: 0;
        }
        .pricing-equal-card {
          height: 920px;
          display: flex;
          flex-direction: column;
        }
        .pricing-equal-card .tp-price-body {
          flex: 1;
          display: flex;
          flex-direction: column;
          min-height: 0;
        }
        .pricing-equal-card .tp-price-list {
          flex: 1;
          overflow-y: auto;
          padding-right: 8px;
          scrollbar-width: thin;
        }
        .pricing-equal-card .tp-price-list::-webkit-scrollbar {
          width: 6px;
        }
        .pricing-equal-card .tp-price-list::-webkit-scrollbar-thumb {
          background: rgba(17, 17, 17, 0.3);
          border-radius: 999px;
        }
        @media (max-width: 1199px) {
          .pricing-equal-card {
            height: 860px;
          }
        }
        @media (max-width: 767px) {
          .pricing-package-tabs {
            width: 100%;
            flex-direction: column;
            border-radius: 24px;
          }
          .pricing-package-tabs button {
            width: 100%;
            min-width: 0;
          }
          .pricing-equal-card {
            height: 760px;
          }
        }
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
          font-family: inherit;
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
          font-family: inherit;
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
    </div>
  );
}
