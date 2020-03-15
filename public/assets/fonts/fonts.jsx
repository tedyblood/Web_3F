import { createGlobalStyle } from "styled-components";

import sf from "./SegoeScript.eot";
import sf2 from "./SegoeScript.woff";

export default createGlobalStyle`
    @font-face {
        font-family: 'sf2';
        src: local('Font Name'), local('FontName'),
        url(${sf2}) format('woff2'),
        url(${sf}) format('woff');
        font-weight: 300;
        font-style: normal;
    }
`;
