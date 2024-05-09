// FavPage.js

import React, { useEffect, useState } from 'react'
import PageHeader from '../components/PageHeader';
import { Link } from 'react-router-dom';
import delImgUrl from "../assets/images/shop/del.png"
import Data from '../products.json';

const FavPage = () => {
    const [favItems, setfavItems] = useState([]);

    useEffect(() => {
        const storedFavItems = JSON.parse(localStorage.getItem("fav")) || [];
        setfavItems(storedFavItems);
    }, [])

    const handleRemoveItem = (item) => {
        const updatedFav = favItems.filter((favItem) => favItem.id !== item.id);
        setfavItems(updatedFav);
        updateLocalStorage(updatedFav);
    }

    const updateLocalStorage = (fav) => {
        localStorage.setItem("fav", JSON.stringify(fav));
    }

    return (
        <div>
            <PageHeader title={"Favorites"} curPage={"Fav Page"} />
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
                                        <th className="cart-edit">Remove</th>
                                    </tr>
                                </thead>
                                {/* table body */}
                                <tbody>
                                    {favItems.map((item, indx) => (
                                        <tr key={indx}>
                                            <td className="product-item cart-product">
                                                <div className="p-thumb">
                                                    <Link to="/shop">
                                                        <Link to={`/shop/${item.id}`} className="eye-icon" style={{ backgroundColor: "#FFD700", borderRadius: "0%", padding: "3px", display: "inline-block", marginBottom: "0px" }}>
                                                            <i className="icofont-eye"></i>
                                                        </Link>
                                                        <img src={item.img} alt="" />

                                                    </Link>
                                                </div>
                                                <div className="p-content">
                                                    <Link to="/shop">{item.name}</Link>
                                                </div>
                                            </td>
                                            <td className="cart-price">${item.price}</td>
                                            <td className="cart-edit">
                                                <a href="#" onClick={() => handleRemoveItem(item)}>
                                                    <img src={delImgUrl} alt="" />
                                                </a>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FavPage;
