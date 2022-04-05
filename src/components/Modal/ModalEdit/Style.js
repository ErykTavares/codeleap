import styled from 'styled-components';

export const ModalEditStyle = styled.form`
    width: 600px;
    height: 350px;
    display: flex;
    flex-direction:column;
    align-items:center;
    justify-content:space-evenly;
    background-color:white;
    font-size: 1.1rem;
    padding: 0 2.4rem;
    transition: .5s;
    box-shadow: 0px 2px 15px 2px #454545CC;


.title{
        align-self:start;
    }

    .content{
        width: 100%;
        height: 60%;
        display: flex;
        flex-direction:column;
        justify-content:space-evenly;
    }

    .content div{
        display: flex;
        flex-direction:column;
        align-items:center;
        
    }

    .content div label{
        align-self:start;
        padding: .5rem  0;
    }

    button{
        align-self:end;
    }

`

