import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Landing from "./components/landing.jsx";
import { ProtectedRoute } from "./components/protected.route";
import { Shop } from "./components/shop.page.jsx";
import { Sell } from "./components/sell.page.jsx";
import { ShoppingCart } from "./components/shoppingcart.jsx";
import { Studio } from "./components/studio.jsx";
import { SideCart } from "./components/side-cart.jsx";
import { ArtistStudio } from "./components/artist.studio.jsx";
import { CartPage } from "./components/cart.page.jsx";

function App() {
  return (
    <div className="app-container">
      <Router>
        <Route exact path="/" component={Landing} />
        <ProtectedRoute path="/store" component={Shop} />
        <ProtectedRoute path="/sell" component={Sell} />
        <ProtectedRoute path="/studio" component={Studio} />
        <ProtectedRoute path="/artist" component={ArtistStudio} />
        <ProtectedRoute path="/cart" component={CartPage} /> 
      </Router>
      <SideCart customClass="sideCart">
        <ShoppingCart />
      </SideCart>
    </div>
  );
}

export default App;
