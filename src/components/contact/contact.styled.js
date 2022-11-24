import { Button } from '@mui/material';
import styled from 'styled-components';

export const ContactWrapper = styled.div`
  // background: red;
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 71vh;
  /* background-color: #f5f5f5; */
  padding: 0px;
  margin: 0px;
  /* min-height: 89vh; */
`;

export const SendBtn = styled.div`
  display: flex;
  justify-content: center;
`;

export const ErrorStyle = styled.div`
  color: red;
`;
export const BtnMui = styled(Button)`
  && {
    background-color: hsl(234, 12%, 34%);
  }
`;

export const StyledBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 86%;

  padding: 10px;
  margin: 0px;
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    height: 100%;
  }
`;
