import styled from 'styled-components';

export const ModalConfirmStyle = styled.form`
    width: 600px;
    height: 150px;
    display: flex;
    flex-direction:column;
    align-items:center;
    justify-content:space-evenly;
    background-color:white;
    padding: 0 2.4rem;
    transition: .5s;
    box-shadow: 0px 2px 15px 2px #454545CC;


    h2{
        align-self:start;
        font-size: 1.2rem;
        font-weight: 500;
    }

    .buttons{
        align-self:end;
        display: flex;
        justify-content:space-between;
        width: 260px;
    }
    button{
        &:hover{
            color: white;
            background-color:black;
            border: none;
        }
    }
`
