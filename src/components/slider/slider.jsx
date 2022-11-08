import React, { useState } from 'react'
import Carousel, { CarouselItem } from './carousel'

import poza1 from '../../data/images/1.jpg'
import poza2 from '../../data/images/2.jpg'
import poza3 from '../../data/images/3.jpg'

export const Slider = () => {
  const [poze, setPoze] = useState([poza1, poza2, poza3])
  console.log(poze)
  return (
    <div className="App">
    <Carousel poze={poze}>
      <CarouselItem />
      <CarouselItem />
      <CarouselItem /> 
    </Carousel>
  </div>
  )
}

export default Slider