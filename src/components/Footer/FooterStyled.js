import styled from 'styled-components';

export const FooterStyled = styled.footer`
    width: 100%;
    height: 60px;
    display: flex;
    align-items:center;
    justify-content:center;
    background-color:rgb(229 229 229);
    margin-top: auto;

    h6{
        color: black;
        transition: .5s;
        &:hover{
            color: red;
        }
    }

`