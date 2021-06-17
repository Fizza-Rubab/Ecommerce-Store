import { createMuiTheme } from "@material-ui/core/styles";
import blue from "@material-ui/core/colors/purple";
import purple from "@material-ui/core/colors/green";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: blue[500],
    },
    secondary: {
      main: purple[500],
    },
  },
});

theme = responsiveFontSizes(theme);
