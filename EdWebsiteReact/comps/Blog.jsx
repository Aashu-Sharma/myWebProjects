import React from 'react';
import certificate from '../Images/certificate.jpg';

function Blog() {
    return (
        <>
            <section className="sub-header">
                <h1>Our Certificates & Online Programms For 2024</h1>
            </section>

            {/* <!-- ------------Blog Page Content------------ --> */}

            <section className="blog-content">
                <div className="row">
                    <div className="blog-left">
                        <img src={certificate} />
                        <h2>Our Certificates & Online Programms For 2024</h2>
                        <div className="blog-text">
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis quaerat sed nostrum quam, error dignissimos reiciendis pariatur natus. Sit ut consequuntur exercitationem modi itaque mollitia, doloremque recusandae culpa minima laborum.
                            </p>
                            <br/>
                            <p>
                                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptas, impedit officiis quasi soluta quod sapiente recusandae debitis non. Debitis error molestias saepe atque nesciunt cupiditate aliquam obcaecati modi aliquid rem, voluptate, eius fugit facere accusamus rerum deleniti minima, eum voluptatibus? Incidunt libero blanditiis ut a quis explicabo sed quaerat autem. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ut totam debitis, at possimus cumque natus! Magni facere earum sed. Nostrum.
                            </p>
                            <br/>
                            <p>
                                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deleniti vero expedita perferendis minus error fuga, iure, quaerat quam earum tempore id saepe a quos sit, itaque amet quae. Ut magni perspiciatis vero commodi ipsam tempora numquam aut ex esse exercitationem laborum consequatur reprehenderit, quo reiciendis illo voluptates sunt dolorum incidunt et praesentium fugiat amet quisquam! Dolorem odio rem consequatur error!
                            </p>
                            <br/>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit reprehenderit, saepe beatae earum laudantium modi totam soluta officiis sed aliquam unde exercitationem dolorum maiores inventore ab esse consectetur sint perspiciatis!
                            </p>
                        </div>

                        <div className="comment-box">
                            <h3>Leave a Comment</h3>
                            <form className = "comment-form">
                                <input type="text" placeholder = "Enter Name"/>
                                <input type="email" placeholder = "Enter Email"/>
                                <textarea rows="8"></textarea>
                                <button type="submit" className = "hero-btn red-btn">POST COMMENT</button>
                            </form>
                        </div>
                    </div>

                    <div className="blog-right">
                        <h3>Post Categories</h3>
                        <div>
                            <span>Business Analytics</span>
                            <span>21</span>
                        </div>
                        <div>
                            <span>Data Science</span>
                            <span>28</span>
                        </div>
                        <div>
                            <span>Machine Learning</span>
                            <span>15</span>
                        </div>
                        <div>
                            <span>Computer Science</span>
                            <span>42</span>
                        </div>
                        <div>
                            <span>AutoCad</span>
                            <span>34</span>
                        </div>
                        <div>
                            <span>Journalism</span>
                            <span>22</span>
                        </div>
                        <div>
                            <span>Commerce</span>
                            <span>30</span>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Blog
