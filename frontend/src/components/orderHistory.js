import React, { useEffect, useState } from "react";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";
import { useHistory } from "react-router-dom";
import axios from "axios";
import Typography from "@material-ui/core/Typography";
const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.primary.dark,
    color: theme.palette.common.white,
  },
  main: {
    marginTop: theme.spacing(12),
    paddingTop: theme.spacing(5),
    paddingLeft: theme.spacing(2),
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
  table: {
    minWidth: 700,
  },
  main: {
    marginTop: theme.spacing(4),
  },
}));

export default function OrderHistory() {
  const history = useHistory();
  const [itemsObj, setItemsObj] = React.useState([]);
  const classes = useStyles();
  const token = window.localStorage.getItem("E_Token");
  const id = `${JSON.parse(atob(token.split(".")[1])).user_id}`;
  useEffect(() => {
    if (!token) history.push("/login");
    axios({
      method: "get", //you can set what request you want to be
      url: `http://localhost:5000/api/cart/history`,
      headers: {
        authorization: token,
      },
    })
      .then((res) => {
        console.log(res.data);
        setItemsObj(res.data);
      })
      .catch((err) => {
        console.log(err);
      });

    //eslint-disable-next-line
  }, []);
  return (
    <div className={classes.main}>
      <Typography component="h1" variant="h5" align="center">
        Your Past Ordered Items History
      </Typography>
      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell>Item Name</StyledTableCell>
              <StyledTableCell align="right">Quantity</StyledTableCell>
              <StyledTableCell align="right">Price </StyledTableCell>
              <StyledTableCell align="right">Total </StyledTableCell>
              <StyledTableCell align="right">Shipment Time</StyledTableCell>
              <StyledTableCell align="right">Shipment Time</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {itemsObj.map((itemsOb) =>
              itemsOb.items.map((item) => (
                <StyledTableRow key={item.id}>
                  <StyledTableCell component="th" scope="row">
                    {item.name}
                  </StyledTableCell>
                  <StyledTableCell align="right">
                    {item.order_item.quantity}
                  </StyledTableCell>
                  <StyledTableCell align="right">{item.price}</StyledTableCell>
                  <StyledTableCell align="right">
                    {item.price * item.order_item.quantity}
                  </StyledTableCell>
                  <StyledTableCell align="right">
                    {itemsOb.shipmentType}
                  </StyledTableCell>
                  <StyledTableCell align="right">
                    {itemsOb.shipmentDate}
                  </StyledTableCell>
                </StyledTableRow>
              ))
            )}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}
