import React from "react";

export default function BrandFive() {
  return (
    <div
      className="ab-brand-area pt-120 pb-120 black-bg-2"
      style={{
        backgroundImage: "url(/assets/img/inner-about/brand/brand-bg-shape.png)",
      }}
    >
      <div className="container">
        <div className="row">
          <div className="col-xl-8 col-lg-10">
            <div className="ab-brand-title-box">
              <h4 className="ab-brand-title" style={{ color: "#fff", marginBottom: "20px" }}>
                WHY CHOOSE US?
              </h4>
              <p style={{ color: "#fff", fontSize: "34px", lineHeight: "1.7", marginBottom: "28px" }}>
                Tired of trying out the same old book publishing companies?
                At Pine Book Publishing, your success is our priority, and
                we're committed to helping you achieve your literary goals
                with confidence and ease, which other self-publishing
                companies might not offer. With us, you get:
              </p>
            </div>
          </div>
        </div>

        <div className="row mb-50">
          <div className="col-xl-8 col-lg-10">
            <div className="row">
              <div className="col-sm-6">
                <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                  <li style={{ color: "#fff", marginBottom: "10px", fontWeight: 700 }}>&#10003; Affordable Price</li>
                  <li style={{ color: "#fff", marginBottom: "10px", fontWeight: 700 }}>&#10003; Tailored Creativity</li>
                  <li style={{ color: "#fff", marginBottom: "10px", fontWeight: 700 }}>&#10003; Expert Craftsmanship</li>
                </ul>
              </div>
              <div className="col-sm-6">
                <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                  <li style={{ color: "#fff", marginBottom: "10px", fontWeight: 700 }}>&#10003; Engaging Narratives</li>
                  <li style={{ color: "#fff", marginBottom: "10px", fontWeight: 700 }}>&#10003; On-Time Deliveries</li>
                  <li style={{ color: "#fff", marginBottom: "10px", fontWeight: 700 }}>&#10003; Pristine Publication</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-xl-8 col-lg-10">
            <div style={{ display: "flex", gap: "15px", flexWrap: "wrap" }}>
              <a href="#" className="tp-btn-white">
                Speak to our Consultant
              </a>
              <a href="#" className="tp-btn-white">
                Call Now
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
