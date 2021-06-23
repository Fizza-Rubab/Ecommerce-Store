import React from "react";
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
import CategoryPage from "./components/categoryPage";
import ProductPage from "./components/products/productPage";
import Products from "./components/products/products";
import Home from "./components/home";
import CheckOutForm from "./components/checkout/checkoutForm";
import OrderSummary from "./components/checkout/orderSummary";
import UserProfile from "./components/userProfile";
import OrderHistory from "./components/orderHistory";
import Cart from "./components/cart/cart";
import About from "./components/about";

export default function App() {
  return (
    <div>
      <Router>
        <AppBar />
        <Switch>
          <Route
            exact
            path="/"
            render={() => {
              return <Redirect to="/home" />;
            }}
          />
          <Route exact path="/home" component={Home} />
          <Route exact path="/categories" component={CategoryPage} />
          <Route exact path="/products/:id" component={ProductPage} />
          <Route exact path="/products" render={() => <Products products />} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/cart" component={Cart} />
          <Route exact path="/cart/checkout" component={CheckOutForm} />
          <Route exact path="/cart/summary" component={OrderSummary} />
          <Route exact path="/user" component={UserProfile} />
          <Route exact path="/about" component={About} />
          <Route exact path="/user/order-history" component={OrderHistory} />
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}
