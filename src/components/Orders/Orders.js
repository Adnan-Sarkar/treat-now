import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../App';
import SingleOrder from '../SingleOrder/SingleOrder';
import './Orders.css';

const Orders = () => {
    const [loggedInUser] = useContext(UserContext);
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        fetch(`https://treat-now.herokuapp.com/orders?email=${loggedInUser.email}`)
        .then(res => res.json())
        .then(data => setOrders(data))
    }, [orders])

    return (
        <div className="container">
            <h1 className="order-tittle">Your <span>Order</span> History</h1>
            {
                orders && orders.map( order => <SingleOrder key ={order._id} order = {order} />)
            }
        </div>
    );
};

export default Orders;