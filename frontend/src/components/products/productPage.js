import { Carousel } from "3d-react-carousal";
import React from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import {
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Typography,
  IconButton,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
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
    // flexGrow: 1,
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
    width: "100%", // Fix IE 11 issue.
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
  const classes = useStyles();
  const [value, setValue] = React.useState("cash");
  const [product, setProduct] = React.useState(prod);
  console.log(product);

  return (
    <>
      <Grid container className={classes.paper} spacing={4}>
        <Grid item xs={12}>
          <Typography component="h1" variant="h5" align="center">
            {product.location.prod.name}
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
              title={product.location.prod.name}
            />
            <CardContent>
              <div className={classes.cardContent}>
                <Typography gutterBottom variant="h5" component="h2">
                  {product.location.prod.name}
                </Typography>
                <Typography gutterBottom variant="h5" component="h2">
                  $ {product.location.prod.price}
                </Typography>
              </div>
              <Typography
                dangerouslySetInnerHTML={{
                  __html: product.location.prod.description,
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
              <form className={classes.form} noValidate>
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
