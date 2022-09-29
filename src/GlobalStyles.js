import {createGlobalStyle} from 'styled-components';

const GlobalStyles = createGlobalStyle`
:root{
    --title-font: 'Kaushan Script', cursive;
    --card-font: 'Amatic SC', cursive;
}
*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

li {
  list-style: none;
}
`;

export default GlobalStyles;
