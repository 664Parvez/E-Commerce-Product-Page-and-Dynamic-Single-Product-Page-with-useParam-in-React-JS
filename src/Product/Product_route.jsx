import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Nav from "./Nav";

import ProductSinglePage from './Product_single_page'

import Contact from "./Contact";
import Home from "./Home";
import Product from "./Product";

const ProductRoute = () => {
    return (
        <>
            <Router>
                <Nav />
                <Routes>
                    <Route path="/" element={ <Home /> }></Route>
                    <Route path="/Product" element={ <Product /> }></Route>
                    <Route path="/Contact" element={ <Contact /> }></Route>
                    <Route path="/Product/:id" element={ <ProductSinglePage /> }></Route>
                </Routes>
            </Router>
        </>
    )
}

export default ProductRoute