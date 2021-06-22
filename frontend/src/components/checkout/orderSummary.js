import React, { useEffect, useState } from "react";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import { useHistory } from "react-router-dom";
import axios from "axios";
import CssBaseline from "@material-ui/core/CssBaseline";
const useStyles = makeStyles((theme) => ({
  main: {
    backgroundColor: theme.palette.grey[300],
    marginTop: theme.spacing(10),
    paddingLeft: theme.spacing(2),
    display: "flex",
    flexDirection: "column",
  },
  listItem: {
    padding: theme.spacing(0, -5),
    // backgroundColor: theme.palette.info.light,
  },
  total: {
    fontWeight: 700,
  },
  title: {
    marginTop: theme.spacing(2),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function Summary() {
  const history = useHistory();
  const [items, setItems] = React.useState([]);
  const classes = useStyles();
  const token = window.localStorage.getItem("E_Token");
  const id = `${JSON.parse(atob(token.split(".")[1])).user_id}`;
  useEffect(() => {
    if (!token) history.push("/login");
    axios({
      method: "get",
      url: `http://localhost:5000/api/cart/`,
      headers: {
        authorization: token,
      },
    })
      .then((res) => {
        setItems(res.data[0].items);
        // setUserName(res.data.userName);
      })
      .catch((err) => {
        console.log(err);
      });

    //eslint-disable-next-line
  }, []);
  return (
    <>
      <Container component="main" maxWidth="xs">
        <div className={classes.main}>
          <CssBaseline />
          <Typography
            variant="h6"
            color="{theme.palette.primary.dark}"
            gutterBottom
            align="center"
          >
            Order Receipt
          </Typography>
          <List>
            {items.map((product) => (
              <ListItem className={classes.listItem} key={product.id}>
                <ListItemText
                  primary={product.name}
                  secondary={product.description}
                />
                <Typography variant="body2">
                  Price: &nbsp; {product.price} &nbsp;
                </Typography>
                <Typography variant="body2">
                  Quantity: &nbsp; {product.order_item.quantity}
                </Typography>
              </ListItem>
            ))}
            <ListItem className={classes.listItem}>
              <ListItemText primary="Total" />
              <Typography variant="subtitle1" className={classes.total}>
                {" "}
                Total Items:
                {items.reduce(
                  (total, item) => item.order_item.quantity + total,
                  0
                )}{" "}
                &nbsp;
              </Typography>
              <Typography variant="subtitle1" className={classes.total}>
                {" "}
                Total Cost:
                {items.reduce(
                  (total, item) =>
                    item.price * item.order_item.quantity + total,
                  0
                )}
              </Typography>
            </ListItem>
          </List>
          <Button
            fullWidth
            align="center"
            variant="contained"
            color="primary"
            className={classes.submit}
            onClick={(event) => {
              history.push("/cart/checkout");
            }}
          >
            Lock Purchase
          </Button>
        </div>
      </Container>
    </>
  );
}
