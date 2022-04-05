import styled from 'styled-components';

export const HeaderStyle = styled.header`
    width: 100%;
    height: 80px;
    display: flex;
    align-items:center;
    justify-content:space-between;
    background-color: #000;
    color: white;
    padding: 0 2.4rem;
    @media screen and (max-width:560px){
        flex-direction:column;
        justify-content:space-evenly;
        padding: 0 1rem;
    }

`