import { red } from '@material-ui/core/colors';
import { createMuiTheme } from '@material-ui/core/styles';

// A custom theme for this app
const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#038C3E',
    },
    secondary: {
      main: '#75BF95',
    },
    error: {
      main: '#F24C27',
    },
    background: {
      default: '#fff',
    },
  },
});

export default theme;