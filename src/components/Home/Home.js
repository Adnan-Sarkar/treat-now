import React, { useEffect, useState } from "react";
import "./Home.css";
import SingleProduct from "../SingleProduct/SingleProduct";

const Home = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch("https://treat-now.herokuapp.com/products")
            .then((res) => res.json())
            .then((data) => setProducts(data));
    }, [products]);

    return (
        <div className="container">
            <div className="search-box">
                <input
                    className="form-control"
                    type="text"
                    name=""
                    id=""
                    placeholder="Search"
                />
                <button className="btn btn-success search-btn">Search</button>
            </div>
            {products && products.length === 0 && (
                <div className="d-flex justify-content-center">
                    <div className="spinner-border" role="status">
                        <span className="sr-only">Loading...</span>
                    </div>
                </div>
            )}
            <div className="row mt-5">
                {products &&
                    products.map((product) => (
                        <SingleProduct key={product._id} product={product} />
                    ))}
            </div>
        </div>
    );
};

export default Home;
