import React, { useState, useEffect } from "react";
import axios from "axios";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";
import { useHistory } from "react-router-dom";

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  table: {
    minWidth: 700,
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 0),
  },
  root: {
    width: "100%",
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
}));

export default function UpdateProfile(user) {
  const classes = useStyles();
  let history = useHistory();
  const [userName, setUserName] = useState("");
  const token = window.localStorage.getItem("E_Token");
  const id = `${JSON.parse(atob(token.split(".")[1])).user_id}`;
  useEffect(() => {
    if (!token) history.push("/login");
    axios({
      method: "get", //you can set what request you want to be
      url: `/api/users/${id}`,
      headers: {
        authorization: token,
      },
    })
      .then((res) => {
        setUserName(res.data.userName);
      })
      .catch((err) => {
        console.log(err);
      });

    //eslint-disable-next-line
  }, []);
  return (
    <>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <div className={classes.paper}>
          <img src="/static/img/user.png" height="100px" />
          <Typography component="h1" variant="h5" align="center">
            Update your profile {user.userName}
          </Typography>
          <form
            className={classes.form}
            onSubmit={(e) => {
              e.preventDefault();
              axios({
                method: "put", //you can set what request you want to be
                url: `/api/users/update/${id}`,
                headers: {
                  authorization: token,
                },
              })
                .then((res) => {
                  history.push("/home");
                })
                .catch((error) => {
                  console.log(error);
                });
            }}
          >
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  autoComplete="userName"
                  name="userName"
                  variant="outlined"
                  // required
                  fullWidth
                  id="userName"
                  label={userName}
                  autoFocus
                  onChange={(event) => {
                    setUserName(event.target.value);
                  }}
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
            >
              Update Profile
            </Button>
          </form>
          <Button
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            onClick={() => {
              history.push("/user/order-history");
            }}
          >
            View your order history
          </Button>
        </div>
      </Container>
    </>
  );
}
