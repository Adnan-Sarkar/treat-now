import React, { useEffect, useState } from "react";
import "./ManageProduct.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faThLarge,
    faPlus,
    faPencilAlt,
    faTrashAlt,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const ManageProduct = () => {

    const deleteProduct = (id) => {
        fetch(`https://treat-now.herokuapp.com/delete/${id}`, {
            method: 'DELETE'
        })
        .then(res => res.json())
        .then(result => {
            console.log('deleted successfully');
        })
    }
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch(`https://treat-now.herokuapp.com/products`)
            .then((res) => res.json())
            .then((data) => setProducts(data));
    }, [products]);

    return (
        <div className="container">
            <div className="row">
                <div className="col-lg-3 p-0">
                    <div className="content text-center">
                        <h1>Admin</h1>
                        <Link className="manage-product" to="/manageProduct">
                            <FontAwesomeIcon
                                className="admin-icon"
                                icon={faThLarge}
                            />{" "}
                            Manage Product
                        </Link>
                        <Link className="admin-btn" to="/admin">
                            <FontAwesomeIcon
                                className="admin-icon"
                                icon={faPlus}
                            />{" "}
                            Add Product
                        </Link>
                        <h6 className="admin-btn">
                            <FontAwesomeIcon
                                className="admin-icon"
                                icon={faPencilAlt}
                            />{" "}
                            Edit Product
                        </h6>
                    </div>
                </div>
                <div className="col-lg-9 p-0">
                    <div className="add-product">
                        <div className="top">
                            <h2>Manage Product</h2>
                        </div>
                        <div className="product-list">
                            <table className="manage-product-table">
                                <thead>
                                    <tr>
                                        <th>Product Name</th>
                                        <th>Weight</th>
                                        <th>Price</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {products &&
                                        products.map((product) =>
                                            <tr key ={product._id}>
                                                <td >
                                                    <p>{product.name}</p>
                                                </td>
                                                <td>
                                                    <p>{product.weight}gm</p>
                                                </td>
                                                <td>
                                                    <p>${product.price}</p>
                                                </td>
                                                <td>
                                                    <button className="btn btn-primary edit-btn">
                                                        <FontAwesomeIcon
                                                            className="admin-icon"
                                                            icon={faPencilAlt}
                                                        />
                                                    </button>
                                                    <button className="btn btn-warning edit-btn">
                                                        <FontAwesomeIcon
                                                            onClick = {() => deleteProduct( product._id)}
                                                            className="admin-icon"
                                                            icon={faTrashAlt}
                                                        />
                                                    </button>
                                                </td>
                                            </tr>
                                        )}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ManageProduct;
