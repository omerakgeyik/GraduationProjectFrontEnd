import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle } from '@fortawesome/free-solid-svg-icons'; // Import solid circle icon
import { Link } from 'react-router-dom';

const ProductDisplay = ({ item }) => {

    const { name, id, price, seller, desc, ratingsCount, quantity, img } = item;

    const [prequantity, setQuantity] = useState(quantity);
    const [coupon, setCoupon] = useState("");
    const [size, setSize] = useState("Select Size");
    const [color, setColor] = useState("Select Color");

    const handleSizeChange = (e) => {
        setSize(e.target.value);
    }

    const handleColorChange = (e) => {
        setColor(e.target.value);
    }

    const handleDecrease = () => {
        if (prequantity > 0) {
            setQuantity(prequantity - 1)
        }
    }

    const handleIncrease = () => {
        setQuantity(prequantity + 1)

    }

    const handleAddToFavorites = () => {
        const existingFavorites = JSON.parse(localStorage.getItem("fav")) || [];
        const isAlreadyFavorited = existingFavorites.find(favItem => favItem.id === id);

        if (!isAlreadyFavorited) {
            existingFavorites.push(item);
            localStorage.setItem("fav", JSON.stringify(existingFavorites));
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const product = {
            id: id,
            img: img,
            name: name,
            price: price,
            quantity: prequantity,
            size: size,
            color: color,
            coupon: coupon

        }

        const existingCart = JSON.parse(localStorage.getItem("cart")) || [];

        const existingProductIndex = existingCart.findIndex((item) => item.id === id);

        if (existingProductIndex !== -1) {
            existingCart[existingProductIndex].quantity += prequantity;

        } else {
            existingCart.push(product);
        }

        //update local storage
        localStorage.setItem("cart", JSON.stringify(existingCart));

        //reset form fields
        setQuantity(1);
        setSize("Select Size");
        setColor("Select Color");
        setCoupon("");

    }

    return (
        <div>
            <div>
                <h4>{name}</h4>
                <p className="rating">
                    <i className="icofont-star"></i>
                    <i className="icofont-star"></i>
                    <i className="icofont-star"></i>
                    <i className="icofont-star"></i>
                    <i className="icofont-star"></i>
                    <span> {ratingsCount} review</span>
                </p>
                <h4>${price}</h4>
                <h6>{seller}</h6>
                <p>{desc}</p>
            </div>

            {/* Cart Components*/}
            <div>
                <form onSubmit={handleSubmit}>

                    {/* Size */}

                    <div className="select-product size">
                        <select value={size} onChange={handleSizeChange}>
                            <option>Select Size</option>
                            <option>A1</option>
                            <option>A2</option>
                            <option>A3</option>
                            <option>A4</option>
                            <option>A5</option>
                        </select>
                        <i className="icofont-rounded-down"></i>
                    </div>

                    {/* Color */}

                    <div className="select-product color">
                        <select value={color} onChange={handleColorChange}>
                            <option>Select Color</option>
                            <option>Black</option>
                            <option>White</option>
                            <option>Red</option>
                            <option>Green</option>
                            <option>Yellow</option>
                            <option>Blue</option>
                            <option>Brown</option>
                            <option>Orange</option>
                            <option>Pink</option>
                            <option>Purple</option>
                            <option>Gray</option>
                        </select>
                        <i className="icofont-rounded-down"></i>
                        {color !== "Select Color" && ( // Render FontAwesome icon only when color is selected
                            <FontAwesomeIcon icon={faCircle} style={{ color: color, borderRadius: '50%', marginLeft: '5px' }} />
                        )}
                    </div>

                    {/* Cart Plus Minus */}

                    <div className="cart-plus-minus ">
                        <div className="dec qtybutton" onClick={handleDecrease}>-</div>
                        <input className="cart-plus-minus-box" type="text" name="qtybutton" id="qtybutton" value={prequantity} onChange={(e) => setQuantity(parseInt(e.target.value, 10))} />
                        <div className="inc qtybutton" onClick={handleIncrease}>+</div>
                    </div>

                    {/* Coupon */}

                    <div className="discount-code mb-2">
                        <input type="text" placeholder="Enter The Discount Code" onChange={(e) => setCoupon(e.target.value)} />

                    </div>

                    {/* Button */}

                    <button type="submit" className="lab-btn">
                        <span>Add to Cart</span>
                    </button>

                    <Link to="/fav-page">
                        <button type="submit" className="lab-btn" onClick={handleAddToFavorites} style={{ backgroundColor: "#FF3131" }}>
                            <span className="icofont-heart"></span>
                        </button>
                    </Link>

                    <Link to="/cart-page" className="lab-btn bg-primary">
                        <span>Check Out</span>

                    </Link>

                </form>
            </div>
        </div>
    )
}

export default ProductDisplay;
