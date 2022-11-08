import React from 'react'
import Carousel, { CarouselItem } from './carousel'

import poza1 from '../../data/images/1.jpg'
import poza2 from '../../data/images/2.jpg'
import poza3 from '../../data/images/3.jpg'

export const Slider = () => {
  return (
    <div className="App">
    <Carousel>
      <CarouselItem poza1={poza1}/>
      <CarouselItem poza2={poza2}/>
      <CarouselItem poza3={poza3}/> 
    </Carousel>
  </div>
  )
}

export default Slider