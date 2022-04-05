import styled from 'styled-components';

export const ButtonStyle = styled.button`
    width: ${({width})=> width? width : "120px"};
    height: ${({height})=> height? height : "40px"};
    background-color: ${({bgcolor, disabled})=> disabled? null : bgcolor};
    color: ${({textColor, disabled}) => disabled? null : textColor};
    border: ${({border}) => border? border : "none"};
    font-size:1.1rem;
    font-weight:500;
    cursor: pointer;
`