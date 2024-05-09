import React from 'react'
import { Link } from 'react-router-dom';

const subTitle = "Choose Your Field";
const title = "Start with Us";
const btnText = "Get Started Now";

const categoryList = [
    {
        imgUrl: 'src/assets/images/category/oil.jpg',
        imgAlt: 'category rajibraj91 rajibraj',
        iconName: 'icofont-brand-windows',
        title: 'Oil',
    },
    {
        imgUrl: 'src/assets/images/category/acrylic.jpg',
        imgAlt: 'category rajibraj91 rajibraj',
        iconName: 'icofont-brand-windows',
        title: 'Acrylic',
    },

    {
        imgUrl: 'src/assets/images/category/watercolor.jpg',
        imgAlt: 'category rajibraj91 rajibraj',
        iconName: 'icofont-brand-windows',
        title: 'Watercolor',
    },
    {
        imgUrl: 'src/assets/images/category/charcoal.jpg',
        imgAlt: 'category rajibraj91 rajibraj',
        iconName: 'icofont-brand-windows',
        title: 'Charcoal',
    },
    {
        imgUrl: 'src/assets/images/category/coloredpencil.jpg',
        imgAlt: 'category rajibraj91 rajibraj',
        iconName: 'icofont-brand-windows',
        title: 'Colored pencil',
    },
    {
        imgUrl: 'src/assets/images/category/digital.jpg',
        imgAlt: 'category rajibraj91 rajibraj',
        iconName: 'icofont-brand-windows',
        title: 'Digital',
    },
    {
        imgUrl: 'src/assets/images/category/mural.jpg',
        imgAlt: 'category rajibraj91 rajibraj',
        iconName: 'icofont-brand-windows',
        title: 'Mural',
    },
    {
        imgUrl: 'src/assets/images/category/punch.jpg',
        imgAlt: 'category rajibraj91 rajibraj',
        iconName: 'icofont-brand-windows',
        title: 'Punch',
    },
    {
        imgUrl: 'src/assets/images/category/photography.jpg',
        imgAlt: 'category rajibraj91 rajibraj',
        iconName: 'icofont-brand-windows',
        title: 'Photography',
    },
]

const HomeCategory = () => {
    return <div className="category-section style-4 padding-tb">
        <div className="container">
            {/* section header */}
            <div className="section-header text-center">
                <span className="subtitle">{subTitle}</span>
                <h2 className="title">{title}</h2>
            </div>

            {/* section card */}
            <div className="section-wrapper">
                <div className="row g-4 justify-content-center row-cols-md-3 row-cols-sm-2 row-cols-1">
                    {
                        categoryList.map((val, i) => (<div key={i} className="col">
                            <Link to="/shop" className="category-item">
                                <div className="category-inner">
                                    {/* image thumbnail */}
                                    <div className="category-thumb">
                                        <img src={val.imgUrl} alt="" />
                                    </div>

                                    {/* content */}
                                    <div className="category-content">
                                        <div className="cate-icon">
                                            <i className={val.iconName}></i>
                                        </div>
                                        <Link to="/shop"><h6>{val.title}</h6></Link>
                                    </div>
                                </div>
                            </Link>
                        </div>))
                    }
                </div>

                {/* btn get started */}
                <div className="text-center mt-5">
                    <Link to="/shop" className="lab-btn"><span>{btnText}</span></Link>
                </div>

            </div>
        </div>
    </div>;
};

export default HomeCategory;