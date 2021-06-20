import { useEffect } from "react";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import CategoryBar from "./categoryBar";

import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import { useHistory } from "react-router-dom";
const useStyles = makeStyles((theme) => ({
  icon: {
    marginRight: theme.spacing(2),
  },
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(30, 0, 6),
    backgroundImage: "url(/static/img/shoesBanner.png)",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center",
  },
  heroButtons: {
    marginTop: theme.spacing(5),
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  card: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
  },
  cardMedia: {
    paddingTop: "56.25%", // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6),
  },
}));
const categories = [
  { id: 1, name: "Ladies" },
  { id: 2, name: "Men Footwear" },
];
const prod = [
  {
    img: "/static/img/logo.png",
    name: "Logo",
    description: "Description",
    price: "3300",
  },
  {
    img: "/static/img/shoes.png",
    name: "Women",
    description: "Description",
    price: "33900",
  },
  {
    img: "/static/img/shoes.png",
    name: "Womedsin n",
    description: "Description",
    price: "33900",
  },
  {
    img: "/static/img/logo.png",
    name: "Logo",
    description: "Description",
    price: "3300",
  },
  {
    img: "/static/img/logo.png",
    name: "Logo",
    description: "Description",
    price: "3300",
  },
  {
    img: "/static/img/logo.png",
    name: "Logo",
    description: "Description",
    price: "3300",
  },
];

export default function Home() {
  const classes = useStyles();
  let history = useHistory();
  useEffect(() => {
    const token = window.localStorage.getItem("E_Token");
    console.log("Hey I m a ", token);
    if (!token) history.push("/login");
    // else history.push("/home");
    //eslint-disable-next-line
  }, []);
  return (
    <>
      <main>
        <CategoryBar categories={categories} />
        <div className={classes.heroContent}>
          <Container maxWidth="sm">
            <Typography
              component="h1"
              variant="h2"
              align="center"
              color="textPrimary"
              fontWeight="fontWeightBold"
              fontFamily="monospace"
              gutterBottom
            >
              The Shoe Shop
            </Typography>
            <Typography
              variant="h5"
              align="center"
              color="textSecondary"
              paragraph
            >
              The Shoe Shop has become one of the most recognized names in
              Pakistani footwear industry and has no intention of slowing down
              with around 140 brand outlets in more than 50 cities in Pakistan!
            </Typography>
            <div className={classes.heroButtons}>
              <Grid container spacing={2} justify="center">
                <Grid item>
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={() => history.push("/about")}
                  >
                    Learn More About Us
                  </Button>
                </Grid>
                <Grid item>
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={() => history.push("/about")}
                  >
                    Shop Now!
                  </Button>
                </Grid>
              </Grid>
            </div>
          </Container>
        </div>
        {/* <CategoryBar /> */}
      </main>
    </>
  );
}
