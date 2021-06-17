import React from "react";
import Box from "@material-ui/core/Box";
import ListItemText from "@material-ui/core/ListItemText";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Link from "@material-ui/core/Link";
import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";
import YouTubeIcon from "@material-ui/icons/YouTube";

function Copyright() {
  return (
    <Typography
      variant="body2"
      color="textSecondarycontrastText"
      align="center"
    >
      {"Copyright © "}
      <Link color="inherit" href="https://material-ui.com/">
        The Shoe Shop
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}
const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    minHeight: "100vh",
  },
  main: {
    marginTop: theme.spacing(8),
    marginBottom: theme.spacing(2),
  },
  footer: {
    padding: theme.spacing(3, 2),
    marginTop: "auto",
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.secondary.contrastText,
  },
}));

export default function StickyFooter() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <CssBaseline />
      <footer className={classes.footer}>
        <Grid
          container
          alignContents="center"
          alignItems="center"
          justify="center"
        >
          <Grid item xs="3">
            <List dense>
              <ListItem button>
                <ListItemText align="center" primary="Sent mail" />
              </ListItem>
              <ListItem button>
                <ListItemText align="center" primary="Drafts" />
              </ListItem>
            </List>
          </Grid>
          <Grid item xs="6">
            <Box display="flex" justifyContent="center" alignItems="center">
              <IconButton color="inherit">
                <FacebookIcon />
              </IconButton>
              <IconButton color="inherit">
                <InstagramIcon />
              </IconButton>
              <IconButton color="inherit">
                <YouTubeIcon />
              </IconButton>
            </Box>
          </Grid>
          <Grid item xs="12">
            <Copyright />
          </Grid>
        </Grid>
      </footer>
    </div>
  );
}
