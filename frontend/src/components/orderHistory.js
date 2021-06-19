import React from "react";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";

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

const rows = [
  {
    name: "Sneakers",
    quantity: 2,
    price: 1500,
    shipmentType: "Cash",
    shipmentDate: new Date().getTime(),
  },
  {
    name: "Chappal",
    quantity: 1,
    price: 900,
    shipmentType: "Credit",
    shipmentDate: new Date().getTime(),
  },
  {
    name: "Converse",
    quantity: 5,
    price: 10000,
    shipmentType: "Cash",
    shipmentDate: new Date().getTime(),
  },
  {
    name: "Khussa",
    quantity: 1,
    price: 3000,
    shipmentType: "Credit",
    shipmentDate: new Date().getTime(),
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
              <StyledTableCell align="right">Shipment Time</StyledTableCell>
              <StyledTableCell align="right">Shipment Time</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <StyledTableRow key={row.name}>
                <StyledTableCell component="th" scope="row">
                  {row.name}
                </StyledTableCell>
                <StyledTableCell align="right">{row.quantity}</StyledTableCell>
                <StyledTableCell align="right">{row.price}</StyledTableCell>
                <StyledTableCell align="right">
                  {row.shipmentType}
                </StyledTableCell>
                <StyledTableCell align="right">
                  {row.shipmentDate}
                </StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}
