import React from 'react';
import './SingleOrder.css'

const SingleOrder = (props) => {
    const { productName, productPrice, orderTime } = props.order
    return (
        <div className="orderDetails">
            <table className ="order-details-table">
                <thead>
                    <tr>
                        <th>Product Name</th>
                        <th>Order Time</th>
                        <th>Price</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>{ productName}</td>
                        <td>{ orderTime}</td>
                        <td>${ productPrice}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default SingleOrder;