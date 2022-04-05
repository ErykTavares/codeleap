import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    :root{
        --borderColor: #999999;
        --textGraycolor: #777777;
    }


    *{
        margin:0;
        padding:0;
        box-sizing:border-box;
        font-family: "Roboto", sans-serif;
    }   

    a, a:hover{
        text-decoration:none;
        color: white;
    }

    ul, li{
        list-style:none
    }

    main{
        position: relative;
        width: 100%;
        display:flex;
        flex-direction: column;
    }

    section{
        width: 100%;
    }

    .popmodal{
        animation: pop 1s forwards ease-in-out;
    }
    .unpopmodal{
        animation: unpop 1s forwards ease-in-out;
    }

   @keyframes pop {
       from {
           opacity: 0;
           transform: scale(0);
       }
       to{
           opacity: 1;
            transform:scale(1);
        }
   }

   @keyframes unpop{
       from{
           opacity: 1;
           transform: scale(1);
       }
       to{
           opacity: 0;
           transform: scale(0);
       }
   }




`