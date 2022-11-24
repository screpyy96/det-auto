import React from 'react';
import './card.css';
import { cards } from '../../data/db';
import { StyledImg } from './card.styled';
import { LinkStyle } from '../navbar/navbar.style';

export const Cards = () => {
  return (
    <div className="card-wrapper">
      {cards.map((i, idx) => {
        return (
          <div key={idx} style={{ width: '100%' }}>
            <LinkStyle to={i.urlPath}>
              <div className="card">
                <StyledImg key={i} image={i.frontImg}>
                  <div className="front">
                    <h3 className="title">{i.title}</h3>
                  </div>
                  <div className="back">
                    <p className="description">{i.description}</p>
                  </div>
                </StyledImg>
              </div>
            </LinkStyle>
          </div>
        );
      })}
    </div>
  );
};
