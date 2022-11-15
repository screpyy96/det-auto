import styled from 'styled-components'

const WrapperSubcomponents = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    width: 100%;
    
    margin: auto;
  
`;

const AboutCWrapper = styled.div`
    background: #F9F9F9;
    height: 100%;
    display: flex;
    
`;

const MainContent = styled.div`
    width: 90%;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    
`;


const StyledBtn = styled.button`
    margin: 0 auto;
    border: 2px solid black;
    color: black;
    padding: 13px 17px;
    text-transform: uppercase;
    float: right;
    letter-spacing: 2px;
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
    display: grid;
    grid-gap: 10px;     
`;

export {StyledBtnFaqs,FaqsWrapper,StyledBtn,WrapperSubcomponents,AboutCWrapper,MainContent}