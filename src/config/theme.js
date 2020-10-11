import { createMuiTheme } from '@material-ui/core/styles';
import { red, blue} from '@material-ui/core/colors';

export default createMuiTheme({
  palette: {
    primary: {
      main : '#002984'
    },
    secondary: {
      main :'#757de8'
    },
    error: {
      main: '#F00',
    },
  },
  status: {
    danger: 'orange',
  },
  button: {
    color: red,
  },
});