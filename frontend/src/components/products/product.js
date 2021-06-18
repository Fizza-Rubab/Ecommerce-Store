// import React from "react";
// import { makeStyles } from "@material-ui/core/styles";
// import Card from "@material-ui/core/Card";
// import CardActionArea from "@material-ui/core/CardActionArea";
// import CardActions from "@material-ui/core/CardActions";
// import CardContent from "@material-ui/core/CardContent";
// import CardMedia from "@material-ui/core/CardMedia";
// import Button from "@material-ui/core/Button";
// import Typography from "@material-ui/core/Typography";

// const useStyles = makeStyles({
//   root: {
//     maxWidth: 320,
//   },
// });

// const itemData = {
//   img: "/static/img/logo.png",
//   desc: "abracadabra",
//   title: "Women Shoes",
//   price: 500,
// };
// export default function ImgMediaCard(props) {
//   const classes = useStyles();
//   return (
//     <Card className={classes.root}>
//       <CardActionArea>
//         <CardMedia
//           component="img"
//           alt="Contemplative Reptile"
//           height="150"
//           image={props.img}
//           title={props.title}
//         />
//         <CardContent>
//           <Typography gutterBottom variant="h5" component="h2">
//             {props.title}
//           </Typography>
//           <Typography gutterBottom variant="h7" component="h3">
//             Price: {props.price}
//           </Typography>
//           <Typography variant="body2" color="textSecondary" component="p">
//             {props.desc}
//           </Typography>
//         </CardContent>
//       </CardActionArea>
//       <CardActions>
//         <Button size="small" color="primary">
//           Add to Cart
//         </Button>
//       </CardActions>
//     </Card>
//   );
// }
import React from "react";
import {
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Typography,
  IconButton,
} from "@material-ui/core";
import { AddShoppingCart } from "@material-ui/icons";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
  root: {
    // maxWidth: 345, original width style
    maxWidth: "100%",
  },
  media: {
    height: 0,
    paddingTop: "56.25%", // 16:9
  },
  cardActions: {
    display: "flex",
    justifyContent: "flex-end",
  },
  cardContent: {
    display: "flex",
    justifyContent: "space-between",
  },
}));

export default function Product({ product }) {
  const classes = useStyles();
  return (
    <Card className={classes.root}>
      <CardMedia
        className={classes.media}
        image={product.img}
        title={product.name}
      />
      <CardContent>
        <div className={classes.cardContent}>
          <Typography gutterBottom variant="h5" component="h2">
            {product.name}
          </Typography>
          <Typography gutterBottom variant="h5" component="h2">
            ${product.price}
          </Typography>
        </div>
        <Typography
          dangerouslySetInnerHTML={{ __html: product.description }}
          variant="body2"
          color="textSecondary"
          component="p"
        />
      </CardContent>
      <CardActions disableSpacing className={classes.cardActions}>
        <IconButton aria-label="Add to Cart">
          <AddShoppingCart />
        </IconButton>
      </CardActions>
    </Card>
  );
}
