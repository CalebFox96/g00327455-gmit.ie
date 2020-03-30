import React from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import './App.css';
import HomeScreen from './screens/Homescreen';
import ProductScreen from './screens/ProductScreen';
import CartScreen from './screens/CartScreen';
import SigninScreen from './screens/SigninScreen';
import { useSelector } from 'react-redux';
import RegisterScreen from './screens/RegisterScreen';

function App() {

    const userSignin = useSelector(state => state.userSignin);
    const { userInfo } = userSignin;

    const CarMenu = () => {
        document.querySelector(".sidebar").classList.add("open");
    }
    const CloseCarMenu = () => {
        document.querySelector(".sidebar").classList.remove("open")
    }
    return (
        <BrowserRouter>
            <div className="grid-container">
                <header className="header">
                    <div className="brand">
                        <button onClick={CarMenu}>
                            &#9776;
                </button>
                        <Link to='/'>DoneDeal</Link>
                    </div>
                    <div className="header-links">
                        <a href="cart.html">Cart</a>
                        {
                            userInfo ? <Link to="/profile">{userInfo.name}</Link> :
                                <Link to="/signin">Sign In</Link>
                        }

                    </div>
                </header>
                <aside className="sidebar">
                    <h3>Car Brands</h3>
                    <button className="close-sidebar" onClick={CloseCarMenu}>x</button>
                    <ul>
                        <li>
                            <a href="index.html">BMW</a>
                        </li>
                        <li>
                            <a href="index.html">Audi</a>
                        </li>
                        <li>
                            <a href="index.html">Ford</a>
                        </li>
                        <li>
                            <a href="index.html">Renault</a>
                        </li>
                    </ul>
                </aside>
                <main className="main">
                    <div className="content">
                        <Route path="/signin" component={SigninScreen} />
                        <Route path="/register" component={RegisterScreen} />
                        <Route path="/products/:id" component={ProductScreen} />
                        <Route path="/cart/:id?" component={CartScreen} />
                        <Route path="/" component={HomeScreen} />
                    </div>
                </main>
                <footer className="footer">
                    Mini Project Caleb Fox & Evan Garvey</footer>
            </div>
        </BrowserRouter>
    );
}

export default App;
