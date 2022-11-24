import React from 'react';
import { AboutC } from './about/aboutC';
import { BookingC } from './booking/bookingC';
import { FaqsC } from './faqs/faqs';
import { WrapperSubcomponents } from './subcomponents.styled';
import { subcomponents } from '../../data/db';

const [about, faqs] = subcomponents;

export const SubComponents = () => {
  return (
    <>
      <WrapperSubcomponents>
        <AboutC about={about} />
        <FaqsC faqs={faqs} />
        <BookingC />
      </WrapperSubcomponents>
    </>
  );
};
