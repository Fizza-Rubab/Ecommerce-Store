import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Button,
  Badge,
  Typography,
} from "@material-ui/core";
import { ShoppingCart } from "@material-ui/icons";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import { makeStyles, fade } from "@material-ui/core/styles";
import { NavLink, useHistory } from "react-router-dom";
// import { useHistory } from "react-router-dom";

const drawerWidth = 0;

const useStyles = makeStyles((theme) => ({
  appBar: {
    marginBottom: theme.spacing(10),
    boxShadow: "none",
    borderBottom: "1px solid rgba(0, 0, 0, 0.12)",
    [theme.breakpoints.up("sm")]: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
    },
    color: theme.palette.common.white,
    backgroundColor: theme.palette.primary.dark,
  },
  title: {
    flexGrow: 1,
    alignItems: "center",
    display: "flex",
    textDecoration: "none",
  },
  image: {
    marginRight: "10px",
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
  },
  grow: {
    flexGrow: 1,
  },
  search: {
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "auto",
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  inputRoot: {
    color: "inherit",
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
}));

export default function PrimarySearchAppBar() {
  const classes = useStyles();
  let loggedIn = true;
  let history = useHistory();
  return (
    <AppBar position="fixed" className={classes.appBar} color="inherit">
      <Toolbar>
        <Typography
          to="/"
          variant="h6"
          className={classes.title}
          color="inherit"
        >
          <img
            src="/static/img/logo.png"
            alt="commerce.js"
            height="50px"
            className={classes.image}
          />{" "}
          The Shoe Shop
        </Typography>
        <div className={classes.grow} />
        <div className={classes.button}>
          <Button color="inherit" onClick={() => history.push("/user")}>
            <AccountCircleIcon />
          </Button>
          <Button
            aria-label="Show cart items"
            color="inherit"
            onClick={() =>
              loggedIn ? history.push("/cart") : history.push("/user")
            }
          >
            <Badge badgeContent="3" color="secondary">
              <ShoppingCart />
            </Badge>
          </Button>
        </div>
      </Toolbar>
    </AppBar>
  );
}
