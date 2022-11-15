import {  Typography } from '@mui/material'
import React from 'react'
import { AboutCWrapper, MainContent, StyledBtn, StyledText } from '../subcomponents.styled'

export const AboutC = ({about}) => {
console.log(about)
  return (
    <>
        <AboutCWrapper>
        <MainContent>
            <Typography>{about.title}</Typography>
            <StyledText>
              <p style={{fontSize: '16px'}}>{about.mainText}</p>
              <p>{about.subText}</p>
            </StyledText>
            <StyledBtn>{about.button}</StyledBtn>
        </MainContent>
        </AboutCWrapper>
    </>
  )
}
