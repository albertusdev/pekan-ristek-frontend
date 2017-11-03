const theme = {
  mainFont: 'sans-serif',
  headingFont: 'sans-serif',
  breakpoint: {
    mobile: '48rem',
  },
  color: {
    blue: '#75DDDD',
    black: '#1E2019',
    blackTransparent: opacity => `rgba(0, 0, 0, ${opacity})`,
    gray: '#585B56',
    white: '#FFFFFF',
    orange: '#FFD782',
    yellowPR: '#F4D35E', // yellow Pekan Ristek
    yellowUI: '#FED304', // yellow Universitas Indonesia
    pink: '#E88873',
    lightGray: '#F0F2EF',
  },
  font: {
    helvetica: 'Helvetica',
    highSchoolUSASerif: 'High_School_USA_Serif',
    jaapokki: 'Jaapokki-Regular',
    pekanRistek: 'Vermin_Vibes_4_Helium',
  },
  linearGradient: {
    turnWhite: 'linear-gradient(120deg, #fff 0%, #585b56 100%)',
  },
  height: {
    button: {
      mobile: '1.5rem',
      standard: '3rem',
    },
    logo: {
      small: '1.5rem',
      medium: '1.75rem',
      large: '3rem',
    },
  },
  width: {
    button: {
      mobile: '5rem',
      standard: '10rem',
    },
  },
  size: {
    font: {
      medium: '1.5rem',
      large: '2rem',
      jumbo: '3rem',
    },
  },
};

export const media = bp => `@media screen and (max-width: ${theme.breakpoint[bp]})`;

export default theme;
