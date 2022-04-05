import styled from 'styled-components';

export const SignupModalStyle = styled.div`
    width: 100%;
    max-width: 500px;
    height: 270px;
    display: flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;
    background-color:white;
    padding: 0 1rem;
    

    .modalText{
        width: 100%;
        max-width: 440px;
        height: 35%;
        display: flex;
        flex-direction:column;
        justify-content:space-between;
        margin-bottom:15px;
    }

    .modalText h4{
        font-weight:500;
    }

    .inputmodal{
        width: 100%;
        max-width: 440px;
        display: flex;
        flex-direction:column;
        height: 60px;
    }
    
    .inputmodal p{
        padding-top:5px;
        padding-left:15px;
        color:red;
    }
    
    .divButton{
        width: 100%;
        display: flex;
        justify-content:end;
        max-width: 440px;
    }
`