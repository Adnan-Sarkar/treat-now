import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import { UserContext } from "../../App";
import "./CheckOut.css";

const CheckOut = () => {
    const [loggedInUser] = useContext(UserContext);

    const [product, setProduct] = useState();
    const { id } = useParams();

    useEffect(() => {
        fetch(`https://treat-now.herokuapp.com/singleProduct/${id}`)
            .then((res) => res.json())
            .then((data) => setProduct(data));
    }, [id]);

    const handleCheckOut = product => {
        const orderDetails = {
            userEmail: loggedInUser.email,
            productName: product.name,
            productPrice: product.price,
            orderTime: new Date().toLocaleString()
        }
        
        fetch(`https://treat-now.herokuapp.com/addOrder`, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(orderDetails)
        })
        .then(res => res.json())
    }

    return (
        <div className="container">
            <h2 className = "checkout-tittle">Checkout</h2>
            <table className = "checkout-table">
                <thead>
                    <tr>
                        <th>Product Name</th>
                        <th>Quantity</th>
                        <th>Price</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td><p>{product && product.name}</p></td>
                        <td><p>1</p></td>
                        <td><p>${product && product.price}</p></td>
                    </tr>
                </tbody>
                <tfoot>
                    <tr>
                        <td>Total</td>
                        <td></td>
                        <td>${product && product.price}</td>
                    </tr>
                </tfoot>
            </table>
            <div className="checkout-btn">
                <Link to="/orders" className = 'btn btn-success btn-lg' onClick={() => handleCheckOut(product)} >Checkout</Link>
            </div>
        </div>
    );
};

export default CheckOut;
