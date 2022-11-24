import styled from 'styled-components';

const StyledImg = styled.div`
  text-align: center;
  position: relative;
  transition: all 2.25s;
  background-image: url(${({ image }) => (image ? image : '')});
  background-size: cover;
  background-position: center;
  padding: 5em;
  transform-style: preserve-3d;
  height: 100%;
  &:hover {
    transform: rotateY(0.5turn);
  }
`;

export { StyledImg };
