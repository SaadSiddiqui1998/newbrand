import React from 'react';
import Image from 'next/image';
import logo from '@/assets/img/home-04/logo.webp';
import { RightArrow, SvgBgSm } from '@/components/svg';
import Link from 'next/link';

export default function FooterFour() {
  return (
    <footer>
      <div className="tp-footer-3-area dark-bg pt-120">
        <div className="container">
          <div className="row">
            <div className="col-xl-4 col-lg-6 col-md-6 mb-60">
              <div className="tp-footer-3-widget-wrapper footer-col-3-1">
                <div className="tp-footer-3-widget mb-40">
                  <h4 className="tp-footer-3-title">Quick Links</h4>
                  <div className="tp-footer-3-menu">
                    <ul>
                      <li><Link href="#">Home</Link></li>
                      <li><Link href="#">About</Link></li>
                      <li><Link href="#">Blog</Link></li>
                      <li><Link href="#">Contact</Link></li>
                    </ul>
                  </div>
                </div>
                <div className="tp-footer-3-widget">
                  <h4 className="tp-footer-3-title">Newsletter</h4>
                  <div className="tp-footer-3-input-box d-flex align-items-center">
                    <input type="text" placeholder="Enter Address..." />
                    <button className="tp-footer-3-btn p-relative">
                      <span className="icon-1">
                        <RightArrow clr='#19191A' />
                      </span>
                      <span className="icon-2">
                        <SvgBgSm />
                      </span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-6 col-md-6 mb-60">
              <div className="tp-footer-3-widget text-md-center footer-col-3-2">
                <div className="tp-footer-3-logo-box">
                  <p className="mb-100">
                    Pine Book Publishing is a team of passionate book publishers that believe in the power of storytelling and the importance of writers.


                  </p>
                  <Link className="tp-footer-3-logo p-relative" href="/">
                    <Image src={logo} alt="logo" style={{ width: "300px", height: "auto" }} />
                  </Link>
                  <p className="tp-footer-3-copyright">Copyright ©
                    {new Date().getFullYear()} <br />Powered by <br></br> <a href='https://pinebookwriting.com/'>Pine Book Writing Inc.</a>
                  </p>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-6 col-md-6 mb-60">
              <div className="tp-footer-3-widget-wrapper footer-col-3-3">
                <div className="tp-footer-3-widget mb-30">
                  <h4 className="tp-footer-3-title">Contact</h4>
                  <div className="tp-footer-2-contact-item">
                    <span>
                      <Link href="#"
                      >Canada Address:
                        R-10225 Yonge St, Suite #250, Richmond Hill, ON L4C 3B2</Link>
                    </span>
                    <span>
                      <Link href="#"
                      >USA Address:
                        211 E 43rd St, 7th Floor, Suite #424, New York City, NY 10017</Link>
                    </span>
                  </div>
                  <div className="tp-footer-2-contact-item">
                    <span>Sales: <Link href="tel:(888) 786-7135">(888) 786-7135</Link></span>
                    <span>Support: <Link href="tel:(866) 841-7469">(866) 841-7469</Link></span>
                    <span>E: <Link href="mailto:support@pinebookpublishing.com
">support@pinebookpublishing.com
                    </Link></span>
                  </div>
                </div>
                <div className="tp-footer-3-widget">
                  <h4 className="tp-footer-3-title">Follow</h4>
                  <div className="tp-footer-3-social">
                    <Link href="#"><i className="fa-brands fa-twitter"></i></Link>
                    <Link href="#"><i className="fa-brands fa-facebook-f"></i></Link>
                    <Link href="#"><i className="fa-brands fa-instagram"></i></Link>
                    <Link href="#"><i className="fa-brands fa-linkedin-in"></i></Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </footer>
  )
}
