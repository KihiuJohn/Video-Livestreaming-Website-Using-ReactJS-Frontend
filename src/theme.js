// src/theme.js
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    mode: 'light', // Set default mode to light; you can toggle this in your component
    primary: {
      main: 'rgb(255, 255, 255)',     // Primary color (white) for light mode
    },
    secondary: {
      main: 'rgb(83,252,24)',         // Secondary color (teal)
    },
    background: {
      default: 'rgb(246, 246, 247)',  // Background color (light gray)
      paper: 'rgb(255, 255, 255)',    // Paper color (white)
    },
    text: {
      primary: 'black',               // Primary text color (black)
      secondary: 'rgb(83,252,24)',    // Secondary text color (teal)
    },
    dark: {
      primary: {
        main: 'rgb(37, 37, 37)',     // Primary color (dark gray) for dark mode
      },
      background: {
        default: 'rgb(24, 24, 24)',   // Background color (darker gray)
        paper: 'rgb(37, 37, 37)',     // Paper color (dark gray)
      },
      text: {
        primary: 'rgb(230, 230, 230)', // Primary text color (light gray)
        secondary: 'rgb(83,252,24)',   // Secondary text color (teal)
      },
    },
  },
});

export default theme;
