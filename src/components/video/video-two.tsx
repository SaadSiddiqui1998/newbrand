'use client';
import React from "react";
import { Leaf } from "../svg";

const VideoTwo = () => {

  return (
    <div className="tp-video-area">
      <div className="container container-1870">
        <div className="row">
          <div className="col-xl-12" >
            <div className="tp-video-wrap p-relative">
              <video
                className="play-video"
                loop={true}
                muted={true}
                autoPlay={true}
                playsInline={true}
              >
                <source
                  src="https://html.aqlova.com/videos/liko/liko.mp4"
                  type="video/mp4"
                />
              </video>
              <div className="tp-video-content text-center">
                <span className="tp-video-subtitle">
                  <span>
                    <Leaf />
                  </span>
                  Speak to our Consultant
                </span>
                <h2 className="tp-video-title">Do You Have Concerns?
                </h2>
                <p>
                  It’s okay to have questions since we understand that your book is close to your heart. Why not just get into a quick discussion?
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoTwo;
