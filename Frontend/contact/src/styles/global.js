import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
}

:root{
        --blue-1: #CAF0F8;
        --blue-2: #023E8A;
        --blue-3: #0077B6;
        --green: #1aaf1a;
        --grey-1: #F8F9FA;
        --grey-2: #E9ECEF;
        --grey-3: #ADB5BD;
        --grey-4: #495057;
        --black: #000000;
        --white: #FFFFFF;
    }

body{
    background-color: #ffffff;
    color: #000000;
}

body, input, button{
    font-family: 'Inter', serif;
    font-size: 1rem;
}

button {
    cursor: pointer;
}

a {
    text-decoration: none;
}
`;
