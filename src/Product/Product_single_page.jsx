import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import Data from './Product_data.json'

// import Image from './product_img/2.png'

const ProductSinglePage = () => {

    const { id } = useParams ()

    const [ productImage, setProductImage ] = useState ()
    const [productName, setProductName] = useState ('')
    const [productDes, setProductDes] = useState ('')

    useEffect ( () => {
        Data.filter ( (items) => {
            if ( items.id === id ) {
                setProductImage (items.product_img)
                setProductName (items.product_name)
                setProductDes (items.Product_describe)
            }
        } )
    }, [] )

    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 text-center">
                        <img src={ productImage } alt="" style={ { height: "auto", width: "300px" } } />
                    </div>
                    <div className="col-lg-6">
                        <h2>{ productName }</h2>
                        <p>{ productDes }</p>
                        <a href="" className="btn btn-success">Place Order</a>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProductSinglePage