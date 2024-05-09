import React, { useState } from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Rating from '../components/Rating';
import { Link } from 'react-router-dom';

const title = "Our Products";

const ProductData = [
    {
        imgUrl: 'src/assets/images/categoryTab/pebeobrush.jpg',
        cate: 'Brushes',
        title: 'Acrylic Brushes',
        author: 'assets/images/course/author/01.jpg',
        brand: 'Pebeo',
        price: '$20.00',
        id: 1,
    },
    {
        imgUrl: 'src/assets/images/categoryTab/markerpencil.jpg',
        cate: 'Pencils',
        title: 'Markers',
        author: 'assets/images/course/author/02.jpg',
        brand: 'Winsor & Newton',
        price: '$30.00',
        id: 2,
    },
    {
        imgUrl: 'src/assets/images/categoryTab/prismacolorpaint.jpg',
        cate: 'Paints',
        title: 'Colored Pencils',
        author: 'assets/images/course/author/01.jpg',
        brand: 'Gucci',
        price: '$95.00',
        id: 3,
    },
    {
        imgUrl: 'src/assets/images/categoryTab/fabrianopaper.jpg',
        cate: 'Papers',
        title: 'Watercolor Papers',
        author: 'src/assets/images/categoryTab/brand/apple.png',
        brand: 'Fabriano',
        price: '$50.00',
        id: 4,
    },
    {
        imgUrl: 'src/assets/images/categoryTab/artcanvas.jpg',
        cate: 'Canvases',
        title: 'Canvases',
        author: 'assets/images/course/author/04.jpg',
        brand: 'Arte',
        price: '$10.00',
        id: 5,
    },
    {
        imgUrl: 'src/assets/images/categoryTab/tableeasel.jpg',
        cate: 'Easels',
        title: 'Tabletop Easels',
        author: 'assets/images/course/author/05.jpg',
        brand: 'Anka',
        price: '$80.00',
        id: 6,
    },
    {
        imgUrl: 'src/assets/images/categoryTab/hellorope.jpg',
        cate: 'Yarns',
        title: 'Colorful Yarns',
        author: 'assets/images/course/author/06.jpg',
        brand: 'Hello',
        price: '$15.00',
        id: 7,
    },
    {
        imgUrl: 'src/assets/images/categoryTab/punchpencil.jpg',
        cate: 'Pencils',
        title: 'Heat Erasable Pens',
        author: 'assets/images/course/author/02.jpg',
        brand: 'Pilot',
        price: '$10.00',
        id: 8,
    },
    {
        imgUrl: 'src/assets/images/categoryTab/skepaper.jpg',
        cate: 'Papers',
        title: 'Sketchbooks',
        author: 'assets/images/course/author/02.jpg',
        brand: 'Moleskine',
        price: '$30.00',
        id: 9,
    },
    {
        imgUrl: 'src/assets/images/categoryTab/winsorpaint.jpg',
        cate: 'Paints',
        title: 'Watercolor',
        author: 'assets/images/course/author/02.jpg',
        brand: 'Winsor & Newton',
        price: '$90.00',
        id: 10,
    },
    {
        imgUrl: 'src/assets/images/categoryTab/gazzalrope.jpg',
        cate: 'Yarns',
        title: 'Various Yarns',
        author: 'assets/images/course/author/02.jpg',
        brand: 'Gazzal',
        price: '$15.00',
        id: 11,
    },
    {
        imgUrl: 'src/assets/images/categoryTab/proeasel.jpg',
        cate: 'Easels',
        title: 'French Box Easels',
        author: 'assets/images/course/author/02.jpg',
        brand: 'Martin',
        price: '$90.00',
        id: 12,
    },
    {
        imgUrl: 'src/assets/images/categoryTab/derwentbrush.jpg',
        cate: 'Brushes',
        title: 'Water brushes',
        author: 'assets/images/course/author/02.jpg',
        brand: 'Derwent',
        price: '$32.00',
        id: 13,
    },
    {
        imgUrl: 'src/assets/images/categoryTab/krafcanvas.jpg',
        cate: 'Canvases',
        title: 'Canvases',
        author: 'assets/images/course/author/02.jpg',
        brand: 'Kraf',
        price: '$13.00',
        id: 14,
    },
    {
        imgUrl: 'src/assets/images/categoryTab/digitalbrush.jpg',
        cate: 'Brushes',
        title: 'Digital Brushes',
        author: 'assets/images/course/author/02.jpg',
        brand: 'Procreate',
        price: '$45.00',
        id: 15,
    },
    {
        imgUrl: 'src/assets/images/categoryTab/rotringpencil.jpg',
        cate: 'Pencils',
        title: 'Popular Pencils',
        author: 'assets/images/course/author/02.jpg',
        brand: 'Rotring',
        price: '$16.00',
        id: 16,
    },
    {
        imgUrl: 'src/assets/images/categoryTab/minilink.jpg',
        cate: 'Cameras',
        title: 'Instax Mini Link 2',
        author: 'assets/images/course/author/02.jpg',
        brand: 'Fujifilm',
        price: '$200.00',
        id: 17,
    },
    {
        imgUrl: 'src/assets/images/categoryTab/classiceasel.jpg',
        cate: 'Easels',
        title: 'Portable Easels',
        author: 'assets/images/course/author/02.jpg',
        brand: 'D&J Bags',
        price: '$50.00',
        id: 18,
    },
    {
        imgUrl: 'src/assets/images/categoryTab/cadencepaint.jpg',
        cate: 'Paints',
        title: 'Acrylic',
        author: 'assets/images/course/author/02.jpg',
        brand: 'Cadence',
        price: '$17.00',
        id: 19,
    },
    {
        imgUrl: 'src/assets/images/categoryTab/strathmorepaper.jpg',
        cate: 'Papers',
        title: 'Toned Gray Papers',
        author: 'assets/images/course/author/02.jpg',
        brand: 'Strathmore',
        price: '$60.00',
        id: 20,
    },
    {
        imgUrl: 'src/assets/images/categoryTab/instaxmini.jpg',
        cate: 'Cameras',
        title: 'Instax Mini 12',
        author: 'assets/images/course/author/02.jpg',
        brand: 'Fujifilm',
        price: '$250.00',
        id: 21,
    },
    {
        imgUrl: 'src/assets/images/categoryTab/alizerope.jpg',
        cate: 'Yarns',
        title: 'High Quality Yarns',
        author: 'assets/images/course/author/02.jpg',
        brand: 'Alize',
        price: '$16.00',
        id: 22,
    },
    {
        imgUrl: 'src/assets/images/categoryTab/gvncanvas.jpg',
        cate: 'Canvases',
        title: 'Canvases',
        author: 'assets/images/course/author/02.jpg',
        brand: 'Guven',
        price: '$9.00',
        id: 23,
    },
    {
        imgUrl: 'src/assets/images/categoryTab/film.jpg',
        cate: 'Cameras',
        title: 'Films',
        author: 'assets/images/course/author/02.jpg',
        brand: 'Fujifilm',
        price: '$90.00',
        id: 24,
    },
]

const CategoryShowCase = () => {
    const [items, setItems] = useState(ProductData);

    // category based filtering

    const filterItem = (categItem) => {

        const updateItems = ProductData.filter((curElem) => {
            return curElem.cate === categItem;
        });

        setItems(updateItems)

    };

    //slider
    const settings = {
        dots: false,
        infinite: true,
        speed: 450,
        slidesToShow: 1,
        slidesToScroll: 1
    };

    return (

        <div className="course-section style-3 padding-tb">

            {/* shapes */}
            <div className="course-shape one"><img src="/src/assets/images/shape-img/icon/01.png" alt="" /></div>
            <div className="course-shape two"><img src="/src/assets/images/shape-img/icon/02.png" alt="" /></div>

            {/* main section */}
            <div className="container">
                {/* section header */}
                <div className="section-header">
                    <h2 className="title">{title}</h2>
                    <div className="course-filter-group">
                        <ul className="lab-ul">
                            <li onClick={() => setItems(ProductData)}>All
                            </li>
                            <li onClick={() => filterItem("Brushes")}> Brushes
                            </li>
                            <li onClick={() => filterItem("Pencils")}> Pencils
                            </li>
                            <li onClick={() => filterItem("Paints")}> Paints
                            </li>
                            <li onClick={() => filterItem("Papers")}> Papers
                            </li>
                            <li onClick={() => filterItem("Canvases")}> Canvases
                            </li>
                            <li onClick={() => filterItem("Easels")}> Easels
                            </li>
                            <li onClick={() => filterItem("Yarns")}> Yarns
                            </li>
                            <li onClick={() => filterItem("Cameras")}> Cameras
                            </li>
                        </ul>
                    </div>

                </div>

                {/* section body */}
                <div className="section-wrapper">
                    <div className="row g-4 justify-content-center row-cols-xl-4 row-cols-lg-3 row-cols-md-2 row-cols-1 course-filter">
                        <Slider {...settings}>
                            {
                                items.map((product) => <div key={product.id} className="col">
                                    <div className="course-item style-4">
                                        <div className="course-inner">
                                            <div className="course-thumb">

                                                <img src={product.imgUrl} alt="" />
                                                <div className="course-category">
                                                    <div className="course-cate">
                                                        <a href="#">{product.cate}</a>
                                                    </div>
                                                    <div className="course-reiew">
                                                        <Rating />

                                                    </div>
                                                </div>

                                            </div>

                                            {/* content */}
                                            <div className="course-content">
                                                <Link to={`/shop/${product.id}`}><h5>{product.title}</h5>
                                                </Link>
                                                <div className="course-footer">
                                                    <div className="author">
                                                        <Link to="/" className="ca-name">{product.brand}</Link>
                                                    </div>
                                                    <div className="course-price">
                                                        {product.price}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>)
                            }
                        </Slider>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CategoryShowCase;