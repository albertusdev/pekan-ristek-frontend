const theme = {
  mainFont: 'sans-serif',
  headingFont: 'sans-serif',
  breakpoint: {
    mobile: '48rem',
  },
  color: {
    black: '#1E2019',
    blackTransparent: opacity => `rgba(0, 0, 0, ${opacity}`,
    gray: '#585B56',
    white: '#FFFFFF',
    orange: '#FFD782',
    yellowPR: '#F4D35E', // yellow Pekan Ristek
    yellowUI: '#FED304', // yellow Universitas Indonesia
    pink: '#E88873',
  },
  font: {
    helvetica: 'Helvetica',
    highSchoolUSASerif: 'High_School_USA_Serif',
    jaapokki: 'Jaapokki-Regular',
    pekanRistek: 'Vermin_Vibes_4_Helium',
  },
  linearGradient: {
    sunnyMorning: 'linear-gradient(120deg, #f6d365 0%, #fda085 100%)',
  },
  height: {
    button: {
      mobile: '1.5rem',
      standard: '3rem',
    },
    logo: {
      small: '1.5rem',
      medium: '2rem',
      large: '3rem',
    },
  },
  width: {
    button: {
      mobile: '5rem',
      standard: '10rem',
    },
  },
};

export const media = bp => `@media screen and (max-width: ${theme.breakpoint[bp]})`;

export default theme;
