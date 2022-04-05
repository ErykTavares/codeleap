import styled from 'styled-components';

export const LoadingStyle = styled.div`
    width: 50px;
    height: 50px;
    border:10px solid black; 
    border-right-color:var(--textGraycolor);
    border-radius:50%;
    animation: spin 1s infinite linear;
    
    @keyframes spin{
        to{
        transform:rotate(360deg);
        }
    }   


`