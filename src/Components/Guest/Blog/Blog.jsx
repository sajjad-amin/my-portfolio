import React from 'react';
import BlogData from "../../../Data/BlogData";
import BlogCard from "./BlogCard";

const Blog = () => {
    return (
        <div className="container">
            <h1 className="color-a">My Blogs</h1>
            <hr/>
            <section className="row mt-5 mb-5">
                {
                    BlogData.map(data=>(
                        <BlogCard
                            link={data.link}
                            image={data.image}
                            title={data.title}
                            description={data.description}
                            tags={data.tags}
                            date={data.date}
                        />
                    ))
                }
            </section>
        </div>
    );
};

export default Blog;