import React, { CSSProperties } from 'react';
import Image from 'next/image';
import Marquee from 'react-fast-marquee';
// images
import shape_1 from '@/assets/img/home-03/gallery/gal-shape-1.png';
import shape_d_1 from '@/assets/img/home-03/gallery/gal-shape-dark-1.png';
import shape_2 from '@/assets/img/home-03/gallery/gal-shape-2.png';
import shape_d_2 from '@/assets/img/home-03/gallery/gal-shape-dark-2.png';

const publishedBookImageNames = [
  '56.png',
  '60.png',
  'A. David.png',
  'Angel Mercado.png',
  'Ashlee Griffin.png',
  'C.B. Ryan.png',
  'Carla Fendricks.png',
  'Che A. Abongwa.png',
  'Chhavyvann So.png',
  'Christian Ehiobuche.png',
  'Christopher Allen.png',
  'D.T. Weiss.png',
  'David Van FleetNot.png',
  'David Wolfson.png',
  'Dr. Joshan A. Flowers DSL.png',
  'Dr. Joshan A. Flowers, DSL.png',
  'Edward Agbai.png',
  'Evan M Franzen.png',
  'Frank Willard Morgan.png',
  'J. Grace.png',
  'J. L. Schaffer.png',
  'J.E. Grace.png',
  'Jeff Ramin.png',
  'John M Suits.png',
  'K. C. Climer  pt 1.png',
  'K. C. Climer  pt 2Not.png',
  'Katie Loftis  -1.png',
  'Katie Loftis.png',
  'Kristin Kramer.png',
  'Larry NiMarLee.png',
  'Leslie Vick.png',
  'Lesvi Ferrel -2.png',
  'Lesvi Ferrel.png',
  'Louis Crump Smithwick.png',
  'Mary Gunn - 1.png',
  'Mary Gunn.png',
  'Max O. Miller-not.png',
  'Max O. Miller.png',
  'Megan Siebenlist.png',
  'Michael Garrell.png',
  'Michele Angelique Vann.png',
  'Neil Dutta.png',
  'Pamela Avis Harry.png',
  'Queen Starasia.png',
  'Ready Writer.png',
  'Reginald Wade.png',
  'Rob Sturgeon.png',
  'Robert A Eckess.png',
  'Ronald A Larson.png',
  'Rosetta Khalideen.png',
  'Scott Andrews -2.png',
  'Scott Andrews.png',
  'Sherrie Campbell.png',
  'Shiela Orsot.png',
  'Stacey L Joiner.png',
  'Terry-Ann Reid.png',
  'Tonya Richardson.png',
  'Vikki LeBeau.png',
  'World Association for Academic Doctors.png',
  'Zach Berger.png',
  'Zulfi Ahmed.png',
];

const galleryImages = publishedBookImageNames.map(
  (name) => `/assets/img/Published-Books-Section/${encodeURIComponent(name)}`
);

const imgStyle: CSSProperties = { height: 'auto' };

export default function GalleryOne() {
  return (
    <div className="tp-gallery-area fix p-relative">
      <div className="tp-gallery-shape-1">
        <Image className="img-1" src={shape_1} alt="shape" style={imgStyle} />
        <Image className="img-2" src={shape_d_1} alt="shape" style={imgStyle} />
      </div>
      <div className="tp-gallery-shape-2">
        <Image className="img-1" src={shape_2} alt="shape" style={imgStyle} />
        <Image className="img-2" src={shape_d_2} alt="shape" style={imgStyle} />
      </div>
      <div className="container-fluid">
        <div className="row">
          <div className="col-xl-12">
            <div className="tp-gallery-slider-wrap">
              <div className="swiper-container tp-gallery-slider-active">
                <Marquee className="tp-gallery-titming" speed={100} direction="left">
                  {galleryImages.map((g, i) => (
                    <div key={i}>
                      <div className="tp-gallery-item mr-30">
                        <Image src={g} alt="gallery-img" width={320} height={450} style={{ height: 'auto' }} />
                      </div>
                    </div>
                  ))}
                </Marquee>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
