import { createGlobalStyle } from 'styled-components';

import GilroyRegular from './GilroyRegular.ttf';
import GilroyBold from './GilroyBold.ttf';

export default createGlobalStyle`
    @font-face {
        font-family: 'Font Name';
        src: local('Font Name'), local('FontName'),
        url(${GilroyRegular}) format('ttf'),
        url(${GilroyBold}) format('ttf'),

        font-weight: 300;
        font-style: normal;
    }
`;
