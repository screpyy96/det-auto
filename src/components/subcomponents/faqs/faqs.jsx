/* eslint-disable react/prop-types */
import { Typography } from '@mui/material';
import React from 'react';
import { ContentWrapper, FaqsWrapper, StyledBtnFaqs, StyledText } from '../subcomponents.styled';

export const FaqsC = ({ faqs }) => {
  return (
    <FaqsWrapper image={faqs.frontImg}>
      <ContentWrapper>
        <Typography>{faqs.title}</Typography>
        <StyledText>
          <p>{faqs.mainText}</p>
          <p>{faqs.subText}</p>
        </StyledText>
        <StyledBtnFaqs>{faqs.button}</StyledBtnFaqs>
      </ContentWrapper>
    </FaqsWrapper>
  );
};
