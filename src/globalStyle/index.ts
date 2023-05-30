import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
@import 'react-toastify/dist/ReactToastify.css';
*{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-family:  "Nunito",  sans-serif
}


li{
    list-style: none;
}

a{
    cursor: pointer;
}

button{
    cursor: pointer;
}



/* Exemplo de estilo personalizado */

:root{
    --color-primary:#022b3a;
    --color-secondary:#1f7a8c;
    --color-terciary:#bfdbf7;

    --color-gray:#e1e5f2;
    --color-white:#FFFF;

    --color-background-modal:#3333;

    --color-failed:#ed1b24;
    --color-danger: #660708;
    --color-sucess:#168821;

    --radius-1:8px;
    --radius-2:5px;

}

`;
