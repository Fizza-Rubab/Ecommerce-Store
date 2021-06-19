import React, { useState } from "react";
import { render } from "react-dom";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

import Login from "./components/login";
import Register from "./components/register";
import AppBar from "./components/appbar";
import Footer from "./components/footer";
import ProductPage from "./components/products/productPage";
import Products from "./components/products/products";
import Home from "./components/home";
import CheckOutForm from "./components/checkout/checkoutForm";
import OrderSummary from "./components/checkout/orderSummary";
import UserProfile from "./components/userProfile";
import OrderHistory from "./components/orderHistory";
import Cart from "./components/cart/cart";
import About from "./components/about";

const prod = [
  {
    img: "/static/img/shoesBanner.png",
    name: "Shoes 3",
    description: "Description",
    price: "3300",
  },
  {
    img: "/static/img/user.png",
    name: "Shoes 2",
    description: "Description",
    price: "3300",
  },
  {
    img: "/static/img/logo.png",
    name: "Shoes 1",
    description: "Description 123",
    price: "3300",
  },
];
export default function App() {
  const [state, setState] = useState({ categories: [] });
  // getCategories = () => {
  //   fetch("/api/categories", { method: "GET" })
  //     .then((response) => response.json())
  //     .then((data) => {
  //       setState({
  //         categories: data,
  //       });
  //     });
  // };
  return (
    <div>
      <AppBar />,
      <Router>
        <Switch>
          <Route
            exact
            path="/"
            render={() => {
              return <Redirect to="/home" />;
            }}
          />
          <Route exact path="/home" component={Home} />
          <Route exact path="/products/:productSlug" component={ProductPage} />
          <Route
            exact
            path="/products"
            render={() => <Products products={prod} />}
          />
          <Route exact path="/login" component={Login} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/cart" component={Cart} />
          <Route exact path="/cart/checkout" component={CheckOutForm} />
          <Route exact path="/cart/checkout/summary" component={OrderSummary} />
          <Route exact path="/user" component={UserProfile} />
          <Route exact path="/about" component={About} />
          <Route exact path="/user/order-history" component={OrderHistory} />
        </Switch>
      </Router>
      <Footer />
    </div>
  );
}

// const appDiv = document.getElementById("app");
// render(<App />, appDiv);

// const cart = [
//   {
//     name: "Fizza's shampoo",
//     img: "/static/img/shoes.png",
//     price: 300,
//     quantity: 3,
//   },
// ];
// const cartExists = true;

// function App() {
//   return (
//     // <Button variant="contained" color="primary">
//     //   Hello World
//     // </Button>
//     //<CategoryBar />
//     <>
//       <AppBar />,{/* <Home /> */}
//       {/* <ProductPage product={prod} /> */}
//       {/* <ProductList products={prod} /> */}
//       {/* <CheckOutForm></CheckOutForm> */}
//       {/* <Login /> */}
//       {/* <Register /> */}
//       {/* <UserProfile /> */}
//       <OrderHistory />
//       {/* <Cart /> */}
//       <Footer />
//       {/* <Cart cartExists={true} cart={cart} /> */}
//     </>

//     //
//   );
// }

// export default App;
