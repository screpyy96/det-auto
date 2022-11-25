import styled from 'styled-components';

import { TabList } from '@mui/lab';
import Tab from '@mui/material/Tab';
import { Box } from '@mui/material';

export const TabListStyle = styled(TabList)`
  display: block;
  '& .MuiTabs-flexContainer {
    display: block;
  }' && {
    display: block;
  }
`;
export const TabStyle = styled(Tab)`
    '& .MuiTabs-flexContainer {
      display: block;
    }'

`;
export const BoxStyled = styled(Box)`
  transform: translate(0, 3%);
  width: 90%;
  margin: 0 auto;
  @media screen and (max-width: 768px) {
    transform: translate(0, 3%);
  }
`;
export const ContainerWrapper = styled.div`
  display: grid;
  grid-template-columns: 500px auto;
  grid-gap: 2rem;
`;

export const DescriptionContainer = styled.div`
  & > h4,
  h5 {
    padding: 1rem 0;
    font-size: 20px;
  }
`;

export const TitleStyle = styled.h2`
  color: #ec1d24;
  font-size: 39px;
  text-align: left;
  padding-bottom: 1rem;
`;
export const SubTitle = styled.h3`
  color: #ea1d22;
  padding: 1rem 0;
  font-size: 20px;
`;
export const ListContainer = styled.div``;
