import React from 'react';
import {Fade} from "react-reveal";

const BlogCard = ({link, image, title, description, tags, date}) => {
    return (
        <div className="col-md-4 mb-4 article-card">
            <Fade bottom>
                <div className="card bg-a">
                    <img src={image} className="card-img-top" alt={title}/>
                    <div className="card-body">
                        <h5 className="card-title">{title}</h5>
                        <p className="card-text fs-6">{description} <a href={link} target="_blank" className="btn link-secondary">Read more...</a></p>
                    </div>
                    <div className="card-footer pt-3 d-flex align-items-center justify-content-between">
                        <ul className="list-inline d-flex flex-row flex-wrap gap-2">
                            {
                                tags.map(item=>(
                                    <li className="list-inline-item bg-secondary rounded ps-2 pe-2">{item}</li>
                                ))
                            }
                        </ul>
                        <p>{date}</p>
                    </div>
                </div>
            </Fade>
        </div>
    );
};

export default BlogCard;