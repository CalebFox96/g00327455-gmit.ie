import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';
import { listProducts } from '../actions/productActions';
function HomeScreen(props){

    const productList = useSelector(state => state.productList);
    const {products, loading, error} = productList;
    const dispatch = useDispatch();
    useEffect(() => {
            dispatch(listProducts());
        return() => {

        };
    }, [])
    return loading ? <div>Loading...</div> :
    error ? <div>{error}</div> :
    <ul className="products">
    {
        products.map(product =>
        <li key={product._id}>
            <div className="product">
             <img className="product-image" src={product.image} alt="product"></img>
             <div className="product-name">
                 <Link to={'/products/'+ product._id}>Model:{product.name}</Link>
             </div>
             <div className="product-brand">Brand:{product.brand}</div>
             <div className="price">Price:{product.price}</div>
             <div className="mileage">Mileage:{product.mileage}</div>
            </div>
        </li>)
    }

</ul>
}
export default HomeScreen;