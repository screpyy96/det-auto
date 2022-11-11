import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import poza1 from '../../data/images/1.jpg'
import poza2 from '../../data/images/2.jpg'
import poza3 from '../../data/images/3.jpg'
import { CallBtn } from '../call-btn/call-btn';

const poze = [poza1, poza2, poza3]
const Carousele = () => {

        return (
            <>
            <Carousel showThumbs={false} showStatus={false} infiniteLoop={true} autoPlay={true} showArrows={false}>
                {poze.map((p) => {
                    return (<div>
                        <img src={p} alt="p" style={{height: "70vh"}}/>
                    </div>)
                })}
            </Carousel>
            <CallBtn/>
            </>
        );
    }

export default Carousele;
