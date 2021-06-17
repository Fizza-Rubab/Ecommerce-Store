import React from "react";
import Login from "./components/login";
import Button from "@material-ui/core/Button";
import CategoryBar from "./components/categoryBar";
import Register from "./components/register";
import AppBar from "./components/appbar";
import Footer from "./components/footer";
function App() {
  return (
    // <Button variant="contained" color="primary">
    //   Hello World
    // </Button>
    //<CategoryBar />
    <>
      <AppBar />
      , <Login />
      , <Footer />
    </>
    // <Login />
    // <Register />
  );
}

export default App;
