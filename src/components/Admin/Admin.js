import React, { useState } from "react";
import "./Admin.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faThLarge, faPlus, faPencilAlt, faCloudUploadAlt } from '@fortawesome/free-solid-svg-icons'
import { Link } from "react-router-dom";
import axios from "axios";
import { useForm } from "react-hook-form";

const Admin = () => {
    const { register, handleSubmit } = useForm();

    const [imageURL, setImageURL] = useState(null)

    const onSubmit = data => {
        const productData = {
        name: data.name,
        price: data.price,
        weight: data.weight,
        imageURL: imageURL
        };
        
        const url = `https://treat-now.herokuapp.com/addProduct`;
        fetch(url, {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(productData)
        })
        .then(res => console.log('server side response'))
    };

    const handleImageUpload = event => {
        const imageData = new FormData()
        imageData.set('key', '3a96d13b3a372dca605287bbfa85e09c')
        imageData.append('image', event.target.files[0])
        
        axios.post('https://api.imgbb.com/1/upload', imageData)
        .then(res => setImageURL(res.data.data.display_url))
        .then(error => console.log(error))
        
    }
    return (
        <div className="container">
            <div className="row">
                <div className="col-lg-3 p-0">
                    <div className="content text-center">
                        <h1>Admin</h1>
                        <Link className="manage-product" to="/manageProduct"><FontAwesomeIcon className = "admin-icon" icon={faThLarge} /> Manage Product</Link>
                        <Link to='/admin' className="admin-btn"><FontAwesomeIcon className = "admin-icon" icon={faPlus} /> Add Product</Link>
                        <h6 className="admin-btn"><FontAwesomeIcon className = "admin-icon" icon={faPencilAlt} /> Edit Product</h6>
                    </div>
                </div>
                <div className="col-lg-9 p-0">
                    <div className="add-product">
                        <div className="top">
                            <h2>Add Product</h2>
                        </div>
                        <div className="add-product-form">
                            <div className="form">
                                <form onSubmit={handleSubmit(onSubmit)}>

                                    <label htmlFor="product-name">Product Name</label>
                                    <input name="name" className="form-control" type="text" id="product-name" ref={register} />

                                    <label htmlFor="add-price">Add Price</label>
                                    <input name="price" className="form-control" type="text" id="add-price" ref={register} />

                                    <label htmlFor="weight">weight</label>
                                    <input name="weight" className="form-control" type="text" id="weight" ref={register} />

                                    <label className = "photo" htmlFor="add-photo"><FontAwesomeIcon className = "upload-icon" icon={faCloudUploadAlt} /> Upload Photo</label>
                                    <input type="file" onChange={handleImageUpload} id="add-photo" hidden />

                                    <button type="submit" className= "btn btn-success mt-3" >Submit</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Admin;
