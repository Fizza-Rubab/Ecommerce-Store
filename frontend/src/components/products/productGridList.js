import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import GridListTileBar from "@material-ui/core/GridListTileBar";
import IconButton from "@material-ui/core/IconButton";
import StarBorderIcon from "@material-ui/icons/StarBorder";
import ProductCard from "./productCard";
const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "nowrap",
    justifyContent: "space-around",
    overflow: "hidden",
    backgroundColor: theme.palette.background.paper,
  },
  gridList: {
    flexWrap: "nowrap",
    display: "flex",

    // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
    transform: "translateZ(0)",
  },
  title: {
    color: theme.palette.primary.light,
  },
  titleBar: {
    background:
      "linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)",
  },
}));

const tileData = [
  {
    img: "/static/img/logo.png",
    title: "Logo",
    desc: "Description",
    price: "3300",
  },
  {
    img: "/static/img/shoes.png",
    title: "Women",
    desc: "Description",
    price: "33900",
  },
  {
    img: "/static/img/shoes.png",
    title: "Womedsin n",
    desc: "Description",
    price: "33900",
  },
  {
    img: "/static/img/logo.png",
    title: "Logo",
    desc: "Description",
    price: "3300",
  },
  {
    img: "/static/img/logo.png",
    title: "Logo",
    desc: "Description",
    price: "3300",
  },
  {
    img: "/static/img/logo.png",
    title: "Logo",
    desc: "Description",
    price: "3300",
  },
];
export default function SingleLineGridList() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <GridList className={classes.gridList} cols={4}>
        {tileData.map((tile) => (
          <GridListTile key={tile.img}>
            <ProductCard img={tile.img} title={tile.title} desc={tile.desc} />
          </GridListTile>
        ))}
      </GridList>
    </div>
  );
}
