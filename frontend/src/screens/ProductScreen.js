import React, { useEffect, useState } from 'react';
import {useSelector, useDispatch} from 'react-redux';
import { Link } from 'react-router-dom';
import { detailsProduct } from '../actions/productActions';
function ProductScreen(props){
    const [qty, setQty] = useState(1);
    console.log(props.match.params.id)
   const productDetails = useSelector(state => state.productDetails);
   const {product, loading, error} = productDetails;
   const dispatch = useDispatch();

   useEffect(() => {
    dispatch(detailsProduct(props.match.params.id));
        return() => {

        };
        }, []);
        const handleAddToCart = () => {
            props.history.push("/cart/" + props.match.params.id + "?qty="+ qty)
        }
    return <div>
        <div className="back-to-result">
            <Link to="/">Back to Home Page</Link>
        </div>
        {loading ? <div>Loading...</div>:
        error ? <div>{error}</div>:
        (
            <div className="details">
          <div className="details-image">
              <img src={product.image} alt="product"></img>
          </div>
          <div className="details-info">
            <ul>
                <li>
                    <h4>{product.name}</h4>
                </li>
                <li>
                    Price:
                    <b>{product.price}</b>
                </li>
                <li>
                    Brand:
                    <b>{product.brand}</b>
                </li>
                <li>
                    Mileage:
                    <b>{product.mileage}</b>
                </li>
            </ul>
          </div>   
          <div className="details-action">
              <ul>
                  <li>
                      Price: ${product.price}
                  </li>
                  <li>
                      Status:{product.status}
                  </li>
                  <li>
                      Qty: <select value={qty}onChange={(e)=>{setQty(e.target.value)}}>
                        {[...Array(product.countInStock).keys()].map(x=>
                            <option value={x+1}>{x+1}</option>
                            )}
                      </select>
                  </li>
                  <li>
                      <button onClick ={handleAddToCart}className="button">
                          Add to cart
                      </button>
                  </li>
              </ul>
          </div>      
        </div>

        )
        
    }
        
    </div>
}
export default ProductScreen;