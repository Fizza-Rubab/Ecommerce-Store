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
    marginTop: theme.spacing(2),
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
export default function ProductPage({ product }) {
  const classes = useStyles();
  const [value, setValue] = React.useState("cash");

  const handleRadioChange = (event) => {
    setValue(event.target.value);
  };
  return (
    <>
      <Grid container className={classes.paper} spacing={2}>
        <Grid item xs={12}>
          <Typography component="h1" variant="h5" align="center">
            {product.name}
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Carousel slides={slides} autoplay={true} interval={10000} />;
        </Grid>
        <Grid item xs={12} sm={4}>
          <Card className={classes.root}>
            <CardMedia className={classes.media} title={product.name} />
            <CardContent>
              <div className={classes.cardContent}>
                <Typography gutterBottom variant="h5" component="h2">
                  {product.name}
                </Typography>
                <Typography gutterBottom variant="h5" component="h2">
                  $ {product.price}
                </Typography>
              </div>
              <Typography
                dangerouslySetInnerHTML={{ __html: product.description }}
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
                      autoComplete="Size"
                      name="size"
                      variant="filled"
                      required
                      fullWidth
                      color="secondary"
                      id="size"
                      label="Size"
                      autoFocus
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      variant="filled"
                      color="secondary"
                      required
                      fullWidth
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
                  color="primary"
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
