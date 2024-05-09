import React from 'react'
import { Link } from 'react-router-dom';


const title = "Most Popular Posts";

const postList = [{ id: 1, imgUrl: '/src/assets/images/blog/10.jpg', imgAlt: 'rajibraj91', title: 'Poor People Campaign Our Resources', date: 'Jun 05,2022', }, { id: 2, imgUrl: '/src/assets/images/blog/11.jpg', imgAlt: 'rajibraj91', title: 'Poor Peoples Campaign Our Resources', date: 'Jun 05,2022', }, { id: 3, imgUrl: '/src/assets/images/blog/12.jpg', imgAlt: 'rajibraj91', title: 'Poor Peoples Campaign Our Resources', date: 'Jun 05,2022', }, { id: 4, imgUrl: '/src/assets/images/blog/09.jpg', imgAlt: 'rajibraj91', title: 'Poor Peoples Campaign Our Resources', date: 'Jun 05,2022', },]

const PopularPost = () => {
    return (
        <div className="widget widget-post">
            <div className="widget-header">
                <h5 className="title">{title}</h5>
            </div>
            <ul className="widget-wrapper" style={{
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "center", gap: "20px"
            }}>
                {
                    postList.map((blog, i) => (
                        <li key={i} className="d-flex flex-wrap justify-content-between">
                            <div className="card" style={{ '--clr': '#B7C4CF', marginBottom: '85px' }}>
                                <div className="post-thumb">
                                    <Link to={`/blog/${blog.id}`}>
                                        <div class="imgBx">
                                            <img src={blog.imgUrl} alt="" className="post-image" />
                                        </div>
                                    </Link>
                                </div>
                                <div className="post-content" style={{ width: '80%', margin: '0 auto' }}>
                                    <Link to={`/blog/${blog.id}`} style={{ textDecoration: 'none' }}>
                                        <h5 className="post-title">{blog.title}</h5>
                                    </Link>
                                    <p>{blog.date}</p>
                                </div>

                            </div>
                        </li>
                    ))
                }

            </ul>
        </div>
    )
}

export default PopularPost