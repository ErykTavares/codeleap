import styled from 'styled-components';

export const PostStyles = styled.div`
    width: 100%;
    max-width: 600px;
    font-size:1.1rem;
    margin:2.1rem 0;
    box-shadow: rgba(67, 71, 85, 0.27) 0px 0px 0.25em, rgba(90, 125, 188, 0.05) 0px 0.25em 1em;


    header{
        width: 100%;
        display: flex;
        align-items:center;
        justify-content:space-between;
        padding:1.8rem;
        background-color:#000;
        color: white;
    }

    header h2{
        font-weight:300;
    }

    ul{
        width: 15%;
        display: flex;
        justify-content:space-between;
    }
    
    .trash{
        padding-top:2px;
    }
    
    svg{
        cursor: pointer;
        transition: .5s;
        &:hover{
            transform: scale(1.2);
        }
    }

    .title{
        width: 100%;
        height: 50px;
        display: flex;
        align-items:center;
        justify-content:space-between;
        padding: 0 1.8rem;
        color: var(--textGraycolor);
    }

    .titleName{
        font-weight:700;
    }

    .titleHour{
    
    }

    .content{
        width: 100%;
        padding: 1rem 1.8rem;
    }

    .content p{
        text-align:justify;
        font-weight:400;
    }
`