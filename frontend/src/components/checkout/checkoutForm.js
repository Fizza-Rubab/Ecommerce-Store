import React from "react";
import PaymentIcon from "@material-ui/icons/Payment";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import { useHistory } from "react-router-dom";
import axios from "axios";

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
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
  button: {
    margin: theme.spacing(1, 1, 0, 0),
  },
}));

export default function CheckOutForm() {
  const classes = useStyles();
  let history = useHistory();
  const [value, setValue] = React.useState("");
  const [userName, setUserName] = React.useState("");
  const [address, setAddress] = React.useState("");
  const [zipcode, setZipCode] = React.useState("");
  const [city, setCity] = React.useState("");
  const [country, setCountry] = React.useState("");
  const [cvv, setCVV] = React.useState("");
  const [expDate, setExpDate] = React.useState("");
  const [card, setCard] = React.useState("");
  const token = window.localStorage.getItem("E_Token");
  const id = `${JSON.parse(atob(token.split(".")[1])).user_id}`;
  const handleRadioChange = (event) => {
    setValue(event.target.value);
  };
  return (
    <>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <PaymentIcon />
          </Avatar>
          <Typography component="h1" variant="h5" align="center">
            Check Out Form
          </Typography>

          <form
            className={classes.form}
            noValidate
            onSubmit={(e) => {
              e.preventDefault();
              axios({
                method: "post", //you can set what request you want to be
                url: `/api/checkout/`,
                data: {
                  streetAddress: address,
                  zip: zipcode,
                  city,
                  country,
                  cvv,
                  card,
                  exp: expDate,
                  shipmentType: value,
                },
                headers: {
                  authorization: token,
                },
              })
                .then((res) => {
                  history.push("/home");
                  console.log(res.data);
                })
                .catch((error) => {
                  console.log(error);
                });
            }}
          >
            <Grid container spacing={2}>
              &nbsp;&nbsp;Please fill in the following user details first
              <Grid item xs={12} sm={12}>
                <TextField
                  autoComplete="username"
                  name="userName"
                  variant="outlined"
                  required
                  fullWidth
                  id="userName"
                  label="User Name"
                  autoFocus
                  onChange={(event) => {
                    setUserName(event.target.value);
                  }}
                />
              </Grid>
              &nbsp;&nbsp;Please fill in the following address details!
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  id="address"
                  label="Address/House No."
                  name="address"
                  autoComplete="address"
                  onChange={(event) => {
                    setAddress(event.target.value);
                  }}
                />
              </Grid>
              <Grid item xs={12} sm={4}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  id="zipcode"
                  label="Zipcode"
                  name="zipcode"
                  autoComplete="zipcode"
                  onChange={(event) => {
                    setZipCode(event.target.value);
                  }}
                />
              </Grid>
              <Grid item xs={12} sm={4}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  id="city"
                  label="City"
                  name="city"
                  autoComplete="city"
                  onChange={(event) => {
                    setCity(event.target.value);
                  }}
                />
              </Grid>
              <Grid item xs={12} sm={4}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  name="country"
                  label="Country"
                  id="country"
                  autoComplete="country"
                  onChange={(event) => {
                    setCountry(event.target.value);
                  }}
                />
              </Grid>
              <p>Choose your shipment Method </p>
              <FormControl component="fieldset" className={classes.formControl}>
                <RadioGroup
                  aria-label="quiz"
                  name="quiz"
                  value={value}
                  onChange={handleRadioChange}
                >
                  <FormControlLabel
                    value="D"
                    control={<Radio />}
                    label="Cash on delivery"
                  />
                  <FormControlLabel
                    value="P"
                    control={<Radio />}
                    label="Credit Card Payment"
                  />
                </RadioGroup>
              </FormControl>
              {value == "P" ? (
                <>
                  &nbsp;&nbsp;Please fill in the following credit details!
                  <Grid item xs={12}>
                    <TextField
                      variant="outlined"
                      required
                      fullWidth
                      id="card"
                      label="Credit Card No."
                      name="card"
                      autoComplete="card no"
                      onChange={(event) => {
                        setCard(event.target.value);
                      }}
                    />
                  </Grid>
                  <Grid item xs={6}>
                    <TextField
                      variant="outlined"
                      required
                      fullWidth
                      id="cvv"
                      label="CVV"
                      name="cvv"
                      autoComplete="cvv"
                      onChange={(event) => {
                        setCVV(event.target.value);
                      }}
                    />
                  </Grid>
                  <Grid item xs={6} sm={4}>
                    <TextField
                      variant="outlined"
                      required
                      fullWidth
                      id="expDate"
                      label="Expiry Date"
                      name="expDate"
                      autoComplete="expDate"
                      onChange={(event) => {
                        setExpDate(event.target.value);
                      }}
                    />
                  </Grid>{" "}
                </>
              ) : (
                <></>
              )}
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
            >
              Check Out
            </Button>
          </form>
        </div>
      </Container>
    </>
  );
}
