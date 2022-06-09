import React from "react";
import { NavLink } from 'react-router-dom'

import Data from './Product_data.json'

const Product = () => {
    return (
        <>
            <div className="container">
                <div className="row">
                    {
                        Data.map ( (items) => {
                            const { id, product_img, product_name, Product_describe, price, button_text } = items;
                            let slice_des = Product_describe.slice(0, 20).concat ('...')

                            return (
                            <div className="col-lg-2" key={id}>
                                <div className="card">
                                    <img className="card-img-top" src={ product_img } alt="" style={ { width: "100%" } } />
                                    <div className="card-body">
                                        <div className="card-title">
                                            <h5>{ product_name }</h5>
                                        </div>
                                        <div className="card-text">
                                            <p>{ slice_des }</p>
                                            <b><p className="text-success">{ price }</p></b>
                                        </div>
                                    </div>
                                    <div className="card-footer text-center">
                                        <NavLink to={ id } className="btn btn-danger">{ button_text }</NavLink>
                                    </div>
                                </div>
                            </div>
                            )
                        } )
                    }
                </div>
            </div>
        </>
    )
}

export default Product