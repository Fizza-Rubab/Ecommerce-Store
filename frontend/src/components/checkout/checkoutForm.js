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
  const [value, setValue] = React.useState("cash");

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

          <form className={classes.form} noValidate>
            <Grid container spacing={2}>
              &nbsp;&nbsp;Please fill in the following user details first
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="fname"
                  name="firstName"
                  variant="outlined"
                  required
                  fullWidth
                  id="firstName"
                  label="First Name"
                  autoFocus
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  id="lastName"
                  label="Last Name"
                  name="lastName"
                  autoComplete="lname"
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
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  id="street"
                  label="Street"
                  name="street"
                  autoComplete="street"
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
                    value="cash"
                    control={<Radio />}
                    label="Cash on delivery"
                  />
                  <FormControlLabel
                    value="credit"
                    control={<Radio />}
                    label="Credit Card Payment"
                  />
                </RadioGroup>
              </FormControl>
              {value == "credit" ? (
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
