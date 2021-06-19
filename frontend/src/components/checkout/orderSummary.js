import React from "react";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";

import CssBaseline from "@material-ui/core/CssBaseline";

const products = [
  { name: "Product 1", description: "A nice thing", price: "9.99" },
  { name: "Product 2", description: "Another thing", price: "3.45" },
  { name: "Product 3", description: "Something else", price: "6.51" },
  { name: "Product 4", description: "Best thing of all", price: "14.11" },
];
const addresses = [
  "1 Material-UI Drive",
  "Reactville",
  "Anytown",
  "99999",
  "USA",
];
const payments = [
  { name: "Payment type", detail: "Cash" },
  { name: "Purchaser", detail: "Mr John Smith" },
  //   { name: "Card number", detail: "xxxx-xxxx-xxxx-1234" },
  //   { name: "Expiry date", detail: "04/2024" },
];

const useStyles = makeStyles((theme) => ({
  main: {
    backgroundColor: theme.palette.grey[300],
    marginTop: theme.spacing(8),
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
  const classes = useStyles();
  let sum = 0.0;
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
            Order summary
          </Typography>
          <List disablePadding>
            {products.map((product) => (
              <ListItem className={classes.listItem} key={product.name}>
                <ListItemText
                  primary={product.name}
                  secondary={product.description}
                />
                <Typography variant="body2">{product.price}</Typography>
                {(sum += parseInt(product.price))}
              </ListItem>
            ))}
            <ListItem className={classes.listItem}>
              <ListItemText primary="Total" />
              <Typography variant="subtitle1" className={classes.total}>
                {sum}
              </Typography>
            </ListItem>
          </List>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <Typography variant="h6" gutterBottom className={classes.title}>
                Shipping
              </Typography>
              <Typography gutterBottom>John Smith</Typography>
              <Typography gutterBottom>{addresses.join(", ")}</Typography>
            </Grid>
            <Grid item container direction="column" xs={12} sm={6}>
              <Typography variant="h6" gutterBottom className={classes.title}>
                Payment details
              </Typography>
              <Grid container>
                {payments.map((payment) => (
                  <React.Fragment key={payment.name}>
                    <Grid item xs={6}>
                      <Typography gutterBottom>{payment.name}</Typography>
                    </Grid>
                    <Grid item xs={6}>
                      <Typography gutterBottom>{payment.detail}</Typography>
                    </Grid>
                  </React.Fragment>
                ))}
              </Grid>
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Confirm Purchase
          </Button>
        </div>
      </Container>
    </>
  );
}
