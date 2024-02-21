import React, { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import NavBar from "./EcomwebSite/Navbar/NavBar";
import Product from "./EcomwebSite/Products/Product";
import Cart from "./EcomwebSite/CartPage/Cart";
import Details from "./EcomwebSite/DEtails/Details";
import Orders from "./EcomwebSite/PlaceOrder/Orders";
import Footer from "./EcomwebSite/Footer";
import Notfound from "./EcomwebSite/Notfound";

import Delivery from "./EcomwebSite/PaymentGate/Delivery";
const App = () => {
  const [alldata, setalldata] = useState([]);
  const [data, SetData] = useState([]);
  const [cart, SetCart] = useState([]);
  const [order, setOrder] = useState([]);
  const [loading, setloading] = useState(false);
  useEffect(() => {
    setloading(true);
    const data = async () => {
      const poduct = await fetch("https://dummyjson.com/products");
      const data = await poduct.json();
      const productsdetails = data.products;
      SetData(productsdetails);
      setloading(false);
    };
    data();
  }, []);

  const handleCart = (id) => {
    const find = data.find((each) => each.id == id);
    SetCart([...cart, find]);
    if (cart.length >= 1) {
      const filter = cart.filter((each) => each.id !== id);
      SetCart([...filter, find]);
    }
  };
  const handleDelete = (id) => {
    const filter = cart.filter((each) => each.id !== id);
    SetCart(filter);
  };
  const handleplaceOrder = (id) => {
    const find = data.find((each) => each.id === id);
    setOrder([...order, find]);
    const filter = cart.filter((each) => each.id !== id);
    SetCart(filter);
  };
  return (
    <div>
      <NavBar order={order} cart={cart} />
      <Routes>
        <Route path="/" element={<Product data={data} loading={loading} />} />
        <Route
          path="/cart"
          element={<Cart handleDelete={handleDelete} cart={cart} />}
        />
        <Route
          path="/delivery/:id"
          element={
            <Delivery
              cart={cart}
              datas={data}
              alldata={alldata}
              setalldata={setalldata}
              handleplaceOrder={handleplaceOrder}
            />
          }
        />
        <Route
          path="/details/:id"
          element={<Details data={data} handleCart={handleCart} />}
        />
        <Route path="/orders" element={<Orders order={order} />} />
        <Route path="*" element={<Notfound />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
