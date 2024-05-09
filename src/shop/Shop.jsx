import React, { useState } from 'react';
import PageHeader from '../components/PageHeader';
import Data from '../products.json';
import ProductCards from './ProductCards';
import Pagination from './Pagination';
import Search from './Search';
import ShopCategory from './ShopCategory';
import PopularPost from './PopularPost';
import Tags from './Tags';
import { Link } from 'react-router-dom'

const Shop = () => {
    const [GridList, setGridList] = useState(true);
    const [products, setProducts] = useState(Data);
    const [currentPage, setCurrentPage] = useState(1);
    const productsPerPage = 12;
    const [selectedCategory, setSelectedCategory] = useState('All');
    const menuItems = [...new Set(Data.map((Val) => Val.category))];
    const [sortBy, setSortBy] = useState('default'); //sort menüsü kapalıyken sort by yazısının görünmesini sağlar

    // Function to change the current page
    const paginate = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    // Function to sort products
    const sortProducts = (sortBy) => {
        let sortedProducts = [...products];

        switch (sortBy) {
            case 'lowest':
                sortedProducts.sort((a, b) => a.price - b.price);
                break;
            case 'highest':
                sortedProducts.sort((a, b) => b.price - a.price);
                break;
            case 'bestsellers':
                sortedProducts.sort((a, b) => b.ratingsCount - a.ratingsCount);
                break;
            case 'topFavorites':
                sortedProducts.sort((a, b) => b.faveCount - a.faveCount);
                break;
            case 'bestReviewed':
                sortedProducts.sort((a, b) => b.ratings - a.ratings);
                break;
            case 'newest':
            default:
                sortedProducts.sort((a, b) => new Date(b.dateAdded) - new Date(a.dateAdded));
                break;
        }

        setProducts(sortedProducts);
    };

    // Filter products based on category
    const filterItem = (curcat) => {
        const newItem = Data.filter((newVal) => {
            return newVal.category === curcat;
        });

        setSelectedCategory(curcat);
        setProducts(newItem);
    };

    // Handle sorting change
    const handleSortChange = (event) => {
        const selectedSortBy = event.target.value;
        setSortBy(selectedSortBy);
        if (selectedSortBy !== 'default') {
            sortProducts(selectedSortBy);
        }
    };

    // Calculate current products to display
    const indexOfLastProduct = currentPage * productsPerPage;
    const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
    const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct);

    return (
        <div>
            <PageHeader title="Our Shop Page" curPage="Shop" />

            {/* Shop Page */}
            <div className="shop-page padding-tb">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-8 col-12">
                            <article>
                                {/* layout and title */}
                                <div className="shop-title d-flex flex-wrap justify-content-between">
                                    <p>{`Showing ${indexOfFirstProduct + 1} - ${Math.min(
                                        indexOfLastProduct,
                                        products.length
                                    )} of ${products.length} Results`}</p>
                                    <div className={`product-view-mode ${GridList ? 'gridActive' : 'listActive'}`}>
                                        <a className="grid" onClick={() => setGridList(!GridList)}>
                                            <i className="icofont-ghost"></i>
                                        </a>
                                        <a className="list" onClick={() => setGridList(!GridList)}>
                                            <i className="icofont-listine-dots"></i>
                                        </a>
                                    </div>
                                    {/* Sorting Products */}
                                    <div className="sort-by">
                                        <select value={sortBy} onChange={handleSortChange}>
                                            <option value="default">Sort by...</option>
                                            <option value="newest">Newest</option>
                                            <option value="lowest">Lowest Price</option>
                                            <option value="highest">Highest Price</option>
                                            <option value="bestsellers">Bestsellers</option>
                                            <option value="topFavorites">Top Favorites</option>
                                            <option value="bestReviewed">Best Reviewed</option>
                                        </select>
                                    </div>
                                    <Link to="/fav-page">
                                        <button type="submit" className="lab-btn" style={{ backgroundColor: "#FF3131", borderRadius: "50%", padding: "10px", display: "inline-block" }}>
                                            <span className="icofont-heart" style={{ fontSize: "20px", color: "#fff", display: "block", lineHeight: "1" }}></span>
                                        </button>
                                    </Link>
                                    <Link to="/cart-page">
                                        <button type="submit" className="lab-btn" style={{ backgroundColor: "rgb(13, 220, 203)", borderRadius: "50%", padding: "10px", display: "inline-block" }}>
                                            <span className="icofont-cart-alt" style={{ fontSize: "20px", color: "#fff", display: "block", lineHeight: "1" }}></span>
                                        </button>
                                    </Link>
                                </div>

                                {/* Product Cards */}
                                <div>
                                    <ProductCards GridList={GridList} products={currentProducts} />
                                </div>

                                <Pagination
                                    productsPerPage={productsPerPage}
                                    totalProducts={products.length}
                                    paginate={paginate}
                                    activePage={currentPage}
                                />
                            </article>
                        </div>
                        <div className="col-lg-4 col-12">
                            <aside>
                                <Search products={products} GridList={GridList} />
                                <ShopCategory
                                    filterItem={filterItem}
                                    setItem={setProducts}
                                    menuItems={menuItems}
                                    setProducts={setProducts}
                                    selectedCategory={selectedCategory}
                                />
                                <PopularPost />
                                <Tags />
                            </aside>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Shop;
