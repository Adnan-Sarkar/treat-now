import React from "react";
import { Link } from "react-router-dom";
import "./SingleProduct.css";

const SingleProduct = (props) => {


    const { name, imageURL, price, _id } = props.product;
    return (
        <div className="col-lg-4 col-md-6 mb-5">
            <div className="product-card">
                <div className="card-top">
                    <img className="image-fluid w-100" src={imageURL} alt="" />
                </div>
                <div className="card-middle">
                    <h2>{name}</h2>
                </div>
                <div className="card-bottom">
                    <h3>${price}</h3>
                    <Link to={`/checkout/${_id}`} className="btn btn-primary">Buy Now </Link>
                </div>
            </div>
        </div>
    );
};

export default SingleProduct;
