/* eslint-disable react/prop-types */
import React from 'react';
import {
  ContainerWrapper,
  DescriptionContainer,
  ListContainer,
  SubTitle,
  TitleStyle
} from './valorificare.styled';

export const ValorificaComponent = ({ data }) => {
  console.log(data);
  return (
    <ContainerWrapper>
      <div>
        <img src={data.imgPath} alt="imagine de cct" width={500} height={'100%'} />
      </div>
      <DescriptionContainer>
        <TitleStyle>{data.title}</TitleStyle>
        <SubTitle>{data.subTitle}</SubTitle>
        <h4>{data.header}</h4>
        <ListContainer>
          {data.description.map((i, key) => {
            return (
              <ul key={key}>
                <li>{i}</li>
              </ul>
            );
          })}
        </ListContainer>
        <SubTitle>{data.sealent}</SubTitle>
        <h5>{data.subDescription.title}</h5>
        <ListContainer>
          {data.subDescription.description.map((i, key) => {
            return (
              <div key={key}>
                <ul>
                  <li>{i}</li>
                </ul>
              </div>
            );
          })}
        </ListContainer>
        <ListContainer>
          <p>{data.title1}</p>
          {data.whyChooseUS.map((i, key) => {
            return (
              <div key={key}>
                <ul>
                  <li>{i}</li>
                </ul>
              </div>
            );
          })}
        </ListContainer>
      </DescriptionContainer>
    </ContainerWrapper>
  );
};
