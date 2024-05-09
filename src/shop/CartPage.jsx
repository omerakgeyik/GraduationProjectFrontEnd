import React, { useEffect, useState } from 'react'
import PageHeader from '../components/PageHeader';
import { Link } from 'react-router-dom';
import delImgUrl from "../assets/images/shop/del.png"
import CheckOutPage from './CheckOutPage';

const CartPage = () => {
    const [cartItems, setcartItems] = useState([]);

    useEffect(() => {
        //fetch cart item from local storage
        const storedCartItems = JSON.parse(localStorage.getItem("cart")) || [];
        setcartItems(storedCartItems);
    }, [])

    //calculate prices
    const calculateTotalPrice = (item) => {
        return item.price * item.quantity;
    }

    //handle quantity increase
    const handleIncrease = (item) => {
        item.quantity += 1;
        setcartItems([...cartItems]);

        //update local storage with new cart items
        localStorage.setItem("cart", JSON.stringify(cartItems));
    }

    //handle quantity decrease
    const handleDecrease = (item) => {
        if (item.quantity > 1) {
            item.quantity -= 1;
            setcartItems([...cartItems]);

            //update local storage with new cart items
            localStorage.setItem("cart", JSON.stringify(cartItems));
        }
    };

    //handle item remove
    const handleRemoveItem = (item) => {
        const updatedCart = cartItems.filter((cartItems) => cartItems.id !== item.id);

        //update new cart
        setcartItems(updatedCart);
        updateLocalStorage(updatedCart);
    }

    const updateLocalStorage = (cart) => {
        localStorage.setItem("cart", JSON.stringify(cart));
    }

    const cartSubtotal = cartItems.reduce((total, item) => {
        return total + calculateTotalPrice(item);
    }, 0)

    //order total
    const orderTotal = cartSubtotal;

    return <div>
        <PageHeader title={"Shop Cart"} curPage={"Cart Page"} />
        <div className="shop-cart padding-tb">
            <div className="container">
                <div className="section-wrapper">

                    {/* cart top */}

                    <div className="cart-top">
                        <table>
                            <thead>
                                <tr>
                                    <th className="cart-product">Product</th>
                                    <th className="cart-price">Price</th>
                                    <th className="cart-quantity">Quantity</th>
                                    <th className="cart-toprice">Total</th>
                                    <th className="cart-edit">Remove</th>
                                </tr>
                            </thead>

                            {/* table body */}
                            <tbody>
                                {
                                    cartItems.map((item, indx) => (
                                        <tr key={indx}>
                                            <td className="product-item cart-product">
                                                <div className="p-thumb">
                                                    <Link to="/shop"><img src={item.img} alt="" /></Link>
                                                </div>
                                                <div className="p-content">
                                                    <Link to="/shop">{item.name}</Link>
                                                </div>
                                            </td>
                                            <td className="cart-price">${item.price}</td>
                                            <td className="cart-quantity">
                                                <div className="cart-plus-minus">
                                                    <div className="dec qtybutton" onClick={() => handleDecrease(item)}>-</div>
                                                    <input type="text" className="cart-plus-minus-box" name="qtybutton" value={item.quantity} />
                                                    <div className="inc qtybutton" onClick={() => handleIncrease(item)}>+</div>
                                                </div>
                                            </td>
                                            <td className="cart-toprice">${calculateTotalPrice(item)}</td>
                                            <td className="cart-edit">
                                                <a href="#" onClick={() => handleRemoveItem(item)}>
                                                    <img src={delImgUrl} alt="" />
                                                </a>
                                            </td>
                                        </tr>
                                    ))
                                }
                            </tbody>
                        </table>

                    </div>

                    {/* cart bottom */}
                    <div className="cart-bottom">
                        {/* checkout box */}
                        <div className="cart-checkout-box">
                            <form className="coupon">
                                <input className="cart-page-input-text" type="text" name="" id="coupon" placeholder="Coupon code..." />
                                <input type="submit" value="Apply Coupon" />
                            </form>
                            <form className="cart-checkout">
                                <input type="submit" value="Update Cart" />
                                <div>
                                    <CheckOutPage />
                                </div>
                            </form>
                        </div>

                        {/* shopping box */}
                        <div className="shiping-box">
                            <div className="row">
                                <div className="col-md-6 col-12">
                                    <div className="calculate-shiping">
                                        <h3>Shipping to...</h3>
                                        <div className="outline-select">
                                            <select>
                                                <option value="tr">Turkiye</option>
                                                <option value="az">Azerbaijan</option>
                                                <option value="it">Italy</option>
                                                <option value="usa">United States</option>
                                                <option value="uk">United Kingdom</option>
                                                <option value="fr">France</option>
                                                <option value="fi">Finland</option>
                                                <option value="au">Australia</option>
                                                <option value="ca">Canada</option>
                                                <option value="ch">Switzerland</option>
                                                <option value="jp">Japan</option>
                                            </select>
                                            <span className="select-icon">
                                                <i className="icofont-rounded-down"></i>
                                            </span>
                                        </div>
                                        <div className="outline-select shipping-select">
                                            <select>
                                                <option value="tr">Ankara</option>
                                                <option value="az">Baku</option>
                                                <option value="it">Rome</option>
                                                <option value="usa">Washington, D.C.</option>
                                                <option value="uk">London</option>
                                                <option value="fr">Paris</option>
                                                <option value="fi">Helsinki</option>
                                                <option value="au">Canberra</option>
                                                <option value="ca">Ottawa</option>
                                                <option value="ch">Bern</option>
                                                <option value="jp">Tokyo</option>
                                            </select>
                                            <span className="select-icon">
                                                <i className="icofont-rounded-down"></i>
                                            </span>
                                        </div>
                                        <input type="text" name="postalCode" id="postalCode" placeholder="Postcode/ZIP *" className="cart-page-input-text" />
                                        <button type="submit">Update Address</button>
                                    </div>
                                </div>
                                <div className="col-md-6 col-12">
                                    <div className="cart-overview">
                                        <h3>Cart Total</h3>
                                        <ul className="lab-ul">
                                            <li>
                                                <span className="pull-left">Cart Subtotal</span>
                                                <p className="pull-right">$ {cartSubtotal}</p>
                                            </li>
                                            <li>
                                                <span className="pull-left">Shipping and Handling</span>
                                                <p className="pull-right">Free Shipping</p>
                                            </li>
                                            <li>
                                                <span className="pull-left">Order Total</span>
                                                <p className="pull-right">$ {orderTotal.toFixed(2)}</p>
                                            </li>

                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

        </div>
    </div>;

};

export default CartPage;