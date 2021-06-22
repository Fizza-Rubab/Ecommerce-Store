import { Carousel } from "3d-react-carousal";
import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import { Card, CardMedia, CardContent, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { useHistory } from "react-router-dom";
import axios from "axios";

let slides = [
  <img src="/static/img/shoesBanner.png" alt="1" />,
  <img src="https://picsum.photos/800/301/?random" alt="2" />,
  <img src="https://picsum.photos/800/302/?random" alt="3" />,
  <img src="https://picsum.photos/800/303/?random" alt="4" />,
  <img src="https://picsum.photos/800/304/?random" alt="5" />,
];

const useStyles = makeStyles((theme) => ({
  root: {
    marginLeft: theme.spacing(4),
    marginBottom: theme.spacing(1),
    backgroundColor: theme.palette.primary.dark,
    color: theme.palette.background.default,
  },
  paper: {
    marginTop: theme.spacing(1),
    display: "flex",
    flexDirection: "column",
    color: theme.palette.primary.dark,
  },
  button: {
    margin: theme.spacing(1, 1, 0, 0),
  },
  form: {
    width: "100%",
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  formControl: {
    margin: theme.spacing(3),
  },
}));
export default function ProductPage(prod) {
  console.log(prod);
  const classes = useStyles();

  const [product, setProduct] = React.useState(prod);
  let [size, setSize] = useState("M");
  let [quantity, setQuantity] = useState();
  const token = window.localStorage.getItem("E_Token");
  const id = `${JSON.parse(atob(token.split(".")[1])).user_id}`;
  const history = useHistory();

  return (
    <>
      <Grid container className={classes.paper} spacing={4}>
        <Grid item xs={12}>
          <Typography component="h1" variant="h5" align="center">
            {prod.location.prod.name}
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Carousel
            slides={slides}
            autoplay={true}
            interval={10000}
            marginTop="100px"
          />
          ;
        </Grid>
        <Grid item xs={12} sm={4}>
          <Card className={classes.root}>
            <CardMedia
              className={classes.media}
              title={prod.location.prod.name}
            />
            <CardContent>
              <div className={classes.cardContent}>
                <Typography gutterBottom variant="h5" component="h2">
                  {prod.location.prod.name}
                </Typography>
                <Typography gutterBottom variant="h5" component="h2">
                  $ {prod.location.prod.price}
                </Typography>
              </div>
              <Typography
                dangerouslySetInnerHTML={{
                  __html: prod.location.prod.description,
                }}
                variant="body2"
                color="inherit"
                component="p"
              />
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Card className={classes.root}>
            <CardContent>
              <form
                className={classes.form}
                noValidate
                onSubmit={(e) => {
                  e.preventDefault();
                  console.log(quantity);
                  console.log(size);
                  axios({
                    method: "post", //you can set what request you want to be
                    url: `http://localhost:5000/api/cart/add`,
                    data: {
                      item_id: prod.location.prod.id,
                      quantity,
                      size,
                    },
                    headers: {
                      authorization: token,
                    },
                  })
                    .then((res) => {
                      console.log(res);
                      history.push("/cart");
                      // console.log(res.data);
                    })
                    .catch((error) => {
                      console.log(error);
                    });
                }}
              >
                <Grid container spacing={2}>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      InputLabelProps={{
                        style: { color: "#fff" },
                      }}
                      autoComplete="Size"
                      name="size"
                      variant="filled"
                      required
                      fullWidth
                      color="#84ffff"
                      id="size"
                      label="Size"
                      autoFocus
                      onChange={(event) => {
                        setSize(event.target.value);
                      }}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      variant="filled"
                      color="#84ffff"
                      required
                      fullWidth
                      InputLabelProps={{
                        style: { color: "#fff" },
                      }}
                      id="quantity"
                      label="Quantity"
                      name="quantity"
                      autoComplete="quantity"
                      onChange={(event) => {
                        // console.log(event.target.value);
                        setQuantity(event.target.value);
                        // console.log(quantity);
                      }}
                    />
                  </Grid>
                </Grid>
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  color="#84ffff"
                  className={classes.submit}
                >
                  Add to Cart!
                </Button>
              </form>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </>
  );
}
