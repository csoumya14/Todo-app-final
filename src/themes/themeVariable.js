import moonImg from '../assets/icon-moon.svg';
import sunImg from '../assets/icon-sun.svg';
import mobileLightThemeBackgroundImage from '../assets/bg-mobile-light.jpg';
import mobileDarkThemeBackgroundImage from '../assets/bg-mobile-dark.jpg';
export const theme = {
  //Colors
  brightBlue: 'hsl(220, 98%, 61%)',
  checkBackground: 'linear-gradient hsl(192, 100%, 67%) to hsl(280, 87%, 65%)',
  mediaSize: {
    s: '420px',
    md: '768px',
    lg: '992px',
    xlg: '1200px',
  },
};

export const lightTheme = {
  backgroundColor: '#ffffff',
  mainBackgroundColor: '#ffffff',
  mainBackgroundImage: `url(${mobileLightThemeBackgroundImage})`,
  backgroundImage: `url(${moonImg})`,
  boxShadow: '0px 35px 50px -15px rgba(194, 195, 214, 0.5)',
  listTextColor: '#494C6B',
  buttonTextColor: '#9495A5',
  strikedColor: '#D1D2DA',
};

export const darkTheme = {
  backgroundColor: '#25273D',
  mainBackgroundColor: '#000000',
  boxShadow: '0px 0px 0px 0px ',
  mainBackgroundImage: `url(${mobileDarkThemeBackgroundImage})`,
  backgroundImage: `url(${sunImg})`,
  listTextColor: '#C8CBE7',
  buttonTextColor: '#5B5E7E',
  strikedColor: '#4D5067',
};
