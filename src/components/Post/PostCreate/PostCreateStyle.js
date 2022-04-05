import styled from 'styled-components';

export const PostCreateStyle = styled.form`
        width: 100%;
        max-width: 600px;
        min-height: 350px ;
        display: flex;
        flex-direction:column;
        align-items:center;
        justify-content:space-evenly;
        text-align:start;
        font-size: 1.1rem;
        margin: 2.1rem 0;
        padding: 0 2.4rem;
        box-shadow: rgba(67, 71, 85, 0.27) 0px 0px 0.25em, rgba(90, 125, 188, 0.05) 0px 0.25em 1em;
        


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
        padding: .5rem 0;
    }

    button{
        align-self:end;
        margin-right: 1.4rem;
    }
`