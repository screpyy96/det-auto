import styled from 'styled-components'

const WrapperSubcomponents = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    width: 100%;
    margin: auto;
    @media (max-width: 768px) {
    grid-template-columns: 1fr;
    height: 50%;
    grid-gap: 2rem;
  }
`;

const AboutCWrapper = styled.div`
    background: #F9F9F9;
    height: 100%;
    display: flex;
   
`;

const StyledText = styled.div`
    margin-top: 2rem;
    display: flex;
   flex-direction: column;
   gap: 10px;
`;

const StyledBtn = styled.button`
    margin: 0 auto;
    border: 2px solid black;
    color: black;
    padding: 13px 17px;
    text-transform: uppercase;
    float: right;
    letter-spacing: 2px;
    margin-top: 2rem;
    &:hover { 
        background: red;
        color: white;
        border: 2px solid red;
    }
`;
const StyledBtnFaqs = styled.button`
    margin: 0 auto;
    border: 2px solid white;
    color: white;
    padding: 13px 17px;
    text-transform: uppercase;
    float: right;
    letter-spacing: 2px;
    background: transparent;
    margin-top: 2rem;
    &:hover { 
        background: red;
        color: white;
        border: 2px solid red;
    }
`;

// Faqs

const FaqsWrapper = styled.div`
    background-image: url(${({ image  }) => (image ? image : "")});
    height: 60vh;
    background-size: cover;
    color: white;
    display: flex;
    flex-direction: column;
    /* gap: 1rem; */
    width: 100%;
    margin: 0 auto;
    
`;

const MainContent = styled.div`
    width: 90%;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    margin-top: 2rem;
    
`;
const ContentWrapper = styled.div`

width: 90%;
margin: 0 auto;
     display: flex;
     flex-direction: column;
  
    margin-top: 2rem;
    justify-content: space-around;
`;

export {StyledText,ContentWrapper,StyledBtnFaqs,FaqsWrapper,StyledBtn,WrapperSubcomponents,AboutCWrapper,MainContent}