import { Typography } from '@mui/material'
import React from 'react'
import { FaqsWrapper, MainContent, StyledBtnFaqs } from '../subcomponents.styled'

export const FaqsC = ({faqs}) => {

  return (
    <FaqsWrapper image={faqs.frontImg}>
      <MainContent>
        <Typography>{faqs.title}</Typography>
        <p>{faqs.mainText}</p>
        <p>{faqs.subText}</p>
        <StyledBtnFaqs>{faqs.button}</StyledBtnFaqs>
      </MainContent>
      </FaqsWrapper>
  )
}
