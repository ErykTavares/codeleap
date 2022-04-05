import styled from 'styled-components';

export const TextAreaStyle = styled.textarea`
    width: 100%;
    max-width: 520px;
    border:${({border}) => border? "2px solid var(--borderColor)" : "none"};
    outline:none;
    border-radius: .5rem;
    padding-top:5px;
    padding-left:15px;
    font-size:1.1rem;
    resize:${({resize})=>resize}



`