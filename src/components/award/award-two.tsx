"use client";
import React from "react";
import Image from "next/image";
import award_img from "@/assets/img/home-04/3d-cover.webp";
import Link from "next/link";
import { UpArrow } from "../svg";

export default function AwardTwo() {
  return (
    <div className="tp-award-2-area tpaward tp-award-2-space p-relative fix">
      <div className="tp-award-2-shape">
        <span className="tp-award-2-circle"></span>
        <span className="tp-award-2-img">
          <Image src={award_img} alt="award-img" />
        </span>
      </div>
      <div className="container container-1650">
        <div className="row">
          <div className="col-xl-12">
            <div className="tp-award-2-title-box p-relative">
              {/* <span className="tp-award-2-subtitle">Accolades</span> */}
              <h2 className="tp-award-2-title tp-award-title-1">WHY</h2>
              <h2 className="tp-award-2-title tp-award-title-2">
                <span>Choose Us?</span>
              </h2>
              <p>
                Tired of trying out the same old book publishing companies? At Pine Book Publishing, your success is our priority, and we're committed to helping you achieve your literary goals with confidence and ease, which other self-publishing companies might not offer. With us, you get:
                {/* <div className="d-flex gap-5 pb-5">
                  <ul>
                    <li>Affordable Price</li>
                    <li>Tailored Creativity</li>
                    <li>Expert Craftsmanship</li>

                  </ul>
                  <ul>
                    <li>Engaging Narratives</li>
                    <li>On-Time Deliveries</li>
                    <li>Pristine Publication</li>
                  </ul>
                </div> */}
              </p>
              <hr />

            </div>
            <div className="tp-award-2-btn-box">
              <div className="tp-projct-5-2-btn-box d-flex justify-content-end">
                <div className="tp-hover-btn-wrapper">
                  <Link
                    className="tp-btn-circle tp-hover-btn-item tp-hover-btn"
                    href="/portfolio-details-1"
                  >
                    <span className="tp-btn-circle-text">
                      Call <br /> Now
                    </span>
                    <span className="tp-btn-circle-icon">
                      <UpArrow />
                    </span>
                    <i className="tp-btn-circle-dot"></i>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
