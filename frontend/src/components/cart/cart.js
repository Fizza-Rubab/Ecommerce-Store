import React from "react";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";

import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import DeleteForeverIcon from "@material-ui/icons/DeleteForever";
import IconButton from "@material-ui/core/IconButton";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
import { ShoppingCart } from "@material-ui/icons";
import Typography from "@material-ui/core/Typography";
import QuantityButton from "./quantityButton";
const StyledTableCell = withStyles((theme) => ({
  rootMain: {
    marginTop: theme.spacing(12),
    // position: "relative",
  },
  head: {
    backgroundColor: theme.palette.primary.dark,
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

const rows = [
  {
    img: "/static/img/shoes.png",
    name: "Sneakers",
    size: "L",
    quantity: 2,
    price: 1500,
    total: 3000,
  },
  {
    img: "/static/img/shoes.png",
    name: "Chppal",
    size: "L",
    quantity: 5,
    price: 1500,
    total: 3000,
  },
  {
    img: "/static/img/shoes.png",
    name: "Joggers",
    size: "L",
    quantity: 2,
    price: 1500,
    total: 3000,
  },
  {
    img: "/static/img/shoes.png",
    name: "Wedges ",
    size: "L",
    quantity: 9,
    price: 1500,
    total: 3000,
  },
];

const useStyles = makeStyles((theme) => ({
  table: {
    minWidth: 700,
  },
  main: {
    marginTop: theme.spacing(4),
  },
}));
export default function OrderHistory() {
  const classes = useStyles();

  return (
    // <Grid >
    <Container className={classes.main}>
      <Typography component="h1" variant="h5" align="center">
        Your Past Ordered Items History
      </Typography>

      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell>Image</StyledTableCell>
              <StyledTableCell>Item Name</StyledTableCell>
              <StyledTableCell align="right">Size</StyledTableCell>
              <StyledTableCell align="right">Price </StyledTableCell>
              <StyledTableCell align="right">Quantity</StyledTableCell>
              <StyledTableCell align="right">Total </StyledTableCell>
              <StyledTableCell align="right">Remove</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <StyledTableRow key={row.name}>
                <StyledTableCell component="th" scope="row">
                  ,<img src={row.img} alt="Image" height="150px" />
                </StyledTableCell>
                <StyledTableCell component="th" scope="row">
                  {row.name}
                </StyledTableCell>
                <StyledTableCell align="right">{row.size}</StyledTableCell>
                <StyledTableCell align="right">{row.price}</StyledTableCell>
                <StyledTableCell align="right">
                  {/* {row.quantity} */}
                  {/* <QuantityButton quantity={2} /> */}
                  <QuantityButton quantity={row.quantity} />
                </StyledTableCell>
                <StyledTableCell align="right">
                  {row.price * row.quantity}
                </StyledTableCell>
                <StyledTableCell align="right">
                  <IconButton
                    color="primary"
                    aria-label="upload picture"
                    component="span"
                  >
                    <DeleteForeverIcon />
                  </IconButton>
                </StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
    // </Grid>
  );
}
// import React from "react";
// import { Link } from "react-router-dom";
// // import axios from "axios";
// // import FlatButton from "@material-ui/core/FlatButton";
// import Button from "@material-ui/core/Button";
// import NavigateNext from "@material-ui/icons/NavigateNext";
// import RemoveShoppingCart from "@material-ui/icons/RemoveShoppingCart";
// import Dialog from "@material-ui/core/Dialog";
// import Snackbar from "@material-ui/core/Snackbar";
// import { makeStyles } from "@material-ui/core/styles";

// // import CheckoutModal from "../CheckoutModal";
// // import OrderSuccessModal from "../OrderSuccessModal";
// // import { ICart } from "@typings/state/index";
// // import { modal } from "@typings/modal";
// // import "@styles/Cart.css";
// const useStyles = makeStyles((theme) => ({
//   cartContainer: {
//     minHeight: "100vh",
//     margin: "0 6px",
//     marginTop: "-72px",
//     border: "1px solid #ffffff00",
//   },
//   cartContainerH1: {
//     marginTop: "100px",
//     marginBottom: "40px",
//   },
//   cart: {
//     display: "flex",
//     flexDirection: "row",
//     justifyContent: "space-between",
//   },
//   cartInfo: {
//     display: "flex",
//     flexDirection: "column",
//     width: "20%",
//     height: "100%",
//     minHeight: "auto",
//     background: "#f5f5f5",
//   },
//   cartInfoP: {
//     padding: "0 10px",
//   },
// }));

// // .cart-info .total {
// //   font-size: 22px;
// //   color: #64DD17;
// // }

// // .cart-info .btns {
// //   text-align: center;
// // }

// // .cart-info .btn {
// //   width: 150px;
// //   margin: 10px auto;
// // }

// // .cart-items {
// //   width: 78%;
// // }

// // .cart-items img {
// //   max-width: 50px;
// // }

// // .cart-items table {
// //   width: 100%;
// //   border-spacing: 0;
// // }

// // .cart-items th {
// //   padding: 5px 5px;
// //   background-color: #ff8c00;
// //   color: white;
// //   text-align: left;
// // }

// // .cart-items th:first-child {
// //   width: 70px;
// // }

// // .cart-items th:last-child {
// //   width: 15px;
// // }

// // .cart-items td {
// //   padding: 12px 5px;
// //   text-align: left;
// //   border-bottom: 1px solid #ff8c00;
// // }

// // .cart-items td:nth-child(4) {
// //   text-align: center;
// // }

// // .cart-items a {
// //   color: inherit;
// //   text-decoration: none;
// // }

// // .cart-items button {
// //   padding: 1px 5px;
// //   background: none;
// //   color: #F44336;
// //   font-weight: bold;
// //   border: none;
// //   border-radius: 50%;
// //   cursor: pointer;
// // }

// // .cart-items button:hover {
// //   background: #F44336;
// //   color: white;
// // }

// // .cart-items h1 {
// //   text-align: center;
// //   margin-top: 100px;
// // }

// // @media (max-width: 1000px) {
// //   .cart-container h1 {
// //     margin-top: 100px;
// //     margin-bottom: 30px;
// //     font-size: 24px;
// //   }

// //   .cart {
// //     flex-direction: column;
// //   }

// //   .cart-info {
// //     flex-direction: row;
// //     width: 100%;
// //   }

// //   .cart-info .info {
// //     width: 50%;
// //   }

// //   .cart-info .btns {
// //     width: 50%;
// //   }

// //   .cart-info .btn {
// //     margin: 10px;
// //   }

// //   .cart-items {
// //     width: 100%;
// //     margin: 40px auto 60px auto;
// //   }
// // }

// export default function Cart(cartExists, cart) {
//   const classes = useStyles();
//   console.log(cart);
//   return (
//     <div className="cart-container">
//       <h1>Your Cart</h1>

//       <div className="cart">
//         <div className="cart-info">
//           <div className="info">
//             <p>
//               <b>Number of items: </b>
//               {cartExists
//                 ? () => {
//                     var sum = 0;
//                     for (var i = 0; i < cart.length; i++)
//                       sum += cart[i].quantity;
//                     return sum;
//                   }
//                 : 0}
//             </p>
//             <p>
//               <b>Total amount: </b>
//               <span className="total">
//                 {cartExists
//                   ? () => {
//                       var sum = 0;
//                       for (var i = 0; i < cart.length; i++)
//                         sum += cart[i].price * cart[i].quantity;
//                       return sum;
//                     }
//                   : 0}
//               </span>
//             </p>
//           </div>
//           <div className="btns">
//             <Button
//               //   onClick={() => this.setActiveModal("checkout")}
//               className="btn"
//               label="Checkout"
//               labelPosition="before"
//               icon={<NavigateNext />}
//               primary={true}
//               disabled={!cartExists}
//             />
//             <Button
//               //   onClick={() => this.setActiveModal("dialog")}
//               className="btn"
//               label="Empty cart"
//               labelPosition="before"
//               icon={<RemoveShoppingCart />}
//               secondary={true}
//               disabled={!cartExists}
//             />
//           </div>
//           {/* <CheckoutModal
//             isOpen={this.state.activeModal === "checkout"}
//             onRequestClose={() => this.setActiveModal}
//             setActiveModal={this.setActiveModal}
//             makeOrder={this.makeOrder}
//           />
//           <OrderSuccessModal
//             isOpen={this.state.activeModal === "orderSuccess"}
//             setActiveModal={this.setActiveModal}
//           />
//           <Dialog
//             title="Are you sure that you want to empty your cart?"
//             actions={[
//               <FlatButton
//                 label="Cancel"
//                 primary={true}
//                 onClick={() => this.setActiveModal(null)}
//               />,
//               <FlatButton
//                 label="Yes"
//                 primary={true}
//                 onClick={this.emptyCart}
//               />,
//             ]}
//             modal={true}
//             open={this.state.activeModal === "dialog"}
//           >
//             All items will be removed.
//           </Dialog>
//         </div> */}
//           <div className="cart-items">
//             {cartExists ? (
//               <table>
//                 <thead>
//                   <tr>
//                     <th></th>
//                     <th>Product Name</th>
//                     <th>Price</th>
//                     <th>Qty</th>
//                     <th>Total</th>
//                     <th></th>
//                   </tr>
//                 </thead>
//                 <tbody>
//                   {cart.forEach((item) => {
//                     return (
//                       <tr key={item.name}>
//                         <td>
//                           <img src={item.img} />
//                         </td>
//                         <td>
//                           <Link to={`/product/${item.product._id}`}>
//                             {item.name}
//                           </Link>
//                         </td>
//                         <td>{item.price}</td>
//                         <td>{item.quantity}</td>
//                         <td>{item.price * item.quantity}</td>
//                         <td>
//                           <button
//                             title="Remove this item from the cart"
//                             //   onClick={() => this.removeItem(item._id)}
//                           >
//                             X
//                           </button>
//                         </td>
//                       </tr>
//                     );
//                   })}
//                 </tbody>
//               </table>
//             ) : (
//               <h1>No items in the cart.</h1>
//             )}
//             {/* <Snackbar
//               open={this.state.activeModal === 'snackbar'}
//               message="Item removed from your cart."
//               bodyStyle={{ 'textAlign': 'center' }}
//             /> */}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }
