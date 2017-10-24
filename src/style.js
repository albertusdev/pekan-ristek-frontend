import { injectGlobal } from 'styled-components';
import theme from './common/theme';
import helveticaURL from './assets/fonts/HELR45W.ttf';
import anuratiRegularURL from './assets/fonts/Anurati_Regular.otf';
import highSchoolUSASerifURL from './assets/fonts/High_School_USA_Serif.ttf';
import jaapokkienchanceRegularURL from './assets/fonts/Jaapokkienchance_Regular.otf';
import verminVibes4HeliumURL from './assets/fonts/Vermin_Vibes_4_Helium.otf';

/* eslint-disable no-unused-expressions */
injectGlobal`
  html {
    position: absolute;
    font-size: 16px;
    background: ${theme.white};
    color: ${theme.black};
  }

  #app {
    position: relative;
    top: 0;
    left: 0;
    width: 100vw;
  }

  @font-face {
    font-family: 'Anurati-Regular';
    src: url(${anuratiRegularURL}) format('truetype');
    font-weight: normal;
    font-style: normal;
  }

  @font-face {
    font-family: 'Helvetica';
    src: url(${helveticaURL}) format('truetype');
    font-weight: normal;
    font-style: normal;
  }

  @font-face {
    font-family: 'High_School_USA_Serif';
    src: url(${highSchoolUSASerifURL}) format('truetype');
    font-weight: normal;
    font-style: normal;
  }

  @font-face {
    font-family: 'Jaapokki-Regular';
    src: url(${jaapokkienchanceRegularURL}) format('truetype');
    font-weight: normal;
    font-style: normal;
  }

  @font-face {
    font-family: 'Vermin_Vibes_4_Helium';
    src: url(${verminVibes4HeliumURL}) format('truetype');
    font-weight: normal;
    font-style: normal;
  }
`;
/* eslint-enable */
