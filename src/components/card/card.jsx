import React from 'react';
import './card.css';
import { cards } from '../../data/db';
import { StyledImg } from './card.styled';
export const Cards = () => {
  return (
    <div className='card-wrapper'>
      {cards.map((i) => {
     return ( 
      <div class="card">
        <StyledImg image={i.frontImg}>
            <div class="front">
                <h3 class="title">{i.title}</h3>
            </div>
            <div class="back">
                <p class="description">
                    {i.description}
                    </p>
            </div>
          </StyledImg>
    </div>
      )
      })}
    </div>
  );
};
