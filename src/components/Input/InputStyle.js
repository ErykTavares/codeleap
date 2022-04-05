import styled from 'styled-components';

export const InputStyle = styled.input`
    width: 100%;
    max-width: ${({width}) => width+"px"};
    height: ${({height})=> height+"px"};
    border-radius:.5rem;
    border:${({border}) => border? "2px solid var(--borderColor)": "none"};
    outline:none;
    padding-left:15px;
    background-color:${({bgcolor})=> bgcolor};
    font-size:1.1rem;
    
    &:hover, &:focus{
        border:${({border})=> border? null : "2px solid var(--textcolor)"};
    }



`