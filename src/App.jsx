import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.min.css";

import { useEffect, useState } from "react";
import { HashRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home/Home";
import Todo from "./pages/Todo/Todo";
import Layout from "./layouts/Layout/Layout";
import Calculator from "./pages/Calculator/Calculator";
import Components from "./pages/Components/Components";
import Product from "./pages/Product/Product";
import Carts from "./pages/Carts/Carts";
import Animation from "./pages/Animation/Animation";

import { fetchProducts } from "./data/products";

import "./App.css";
import Login from "./pages/Login/Login";



function App() {
  const [token, setToken] = useState('');
  const [role, setRole] = useState('');
  const [products, setProducts] = useState([]);
  const [carts, setCarts] = useState([]);


  useEffect(() => setProducts(fetchProducts()), []);
  useEffect(() => console.log(products), [products]);

  if (token === ''){
    return (<Login setToken={setToken} setRole={setRole}/>)
  }else{
    return (
      <div className="app-container">
        <HashRouter>
          <Routes>
            <Route
              element={
                <Layout
                  products={products}
                  carts={carts}
                  setToken={setToken}
                />
              }
            >
              <Route path="/" element={<Home />} />
              <Route path="/home" element={<Home />} />
              <Route path="/calculator" element={<Calculator />} />
              <Route path="/animation" element={<Animation />} />
              <Route path="/todo" element={<Todo />} />
              <Route path="/component" element={<Components />} />
              <Route
                path="/product"
                element={
                  <Product products={products} carts={carts} setCarts={setCarts} />
                }
              />
              <Route
                path="/cart"
                element={<Carts carts={carts} setCarts={setCarts} />}
              />
            </Route>
            
          </Routes>
        </HashRouter>
      </div>
    );
  }


 
}

export default App;