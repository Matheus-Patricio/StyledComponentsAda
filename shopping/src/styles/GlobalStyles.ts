// CSS in TS

import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Inter:wght@100..900&family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap');


    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;

    }
    body, button{
        font-family: 'Montserrat';
    }

    button {
        cursor: pointer;

        &:hover {
            filter: brightness(1.2);
        }
    }
`