import { ThemeProvider } from 'styled-components';

const theme = {
color: {
red: 'hsl(0, 78%, 62%)',
cyan: 'hsl(180, 62%, 55%)',
orange: 'hsl(34, 97%, 64%)',
blue: 'hsl(212, 86%, 64%)',
veryDarkBlue: 'hsl(234, 12%, 34%)',
grayishBlue: 'hsl(229, 6%, 66%)',
veryLightGray: 'hsl(0, 0%, 98%)',
},
font: {
size: {
extraSmall: '14px',
small: '16px',
medium: '18px',
large: '20px',
extraLarge: '24px',
},
family: 'sans-serif',
},
breakpoint: {
mobile: '850px',
},
};

const Theme = ({ children }) => {
return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export default Theme;