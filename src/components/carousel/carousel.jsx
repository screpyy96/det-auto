import React from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import './carousel.css';
import poza1 from '../../data/images/poza2.jpg';
import poza2 from '../../data/images/interior.jpg';
import poza3 from '../../data/images/poza1.jpg';

const poze = [poza1, poza2, poza3];
const Carousele = () => {
  return (
    <div className='filter'>
      <Carousel
        showThumbs={false}
        showStatus={false}
        infiniteLoop={true}
        autoPlay={true}
        showArrows={false}
      >
        {poze.map((p) => {
          return (
            <div>
              <img src={p} alt='p' style={{ height: '69vh' }} />
            </div>
          );
        })}
      </Carousel>
    </div>
  );
};

export default Carousele;
