import React from 'react';
import ProjectData from "../../Data/ProjectData";
import ProjectCard from "./ProjectCard";

const Projects = () => {
    return (
        <div className="container">
            <h1 className="color-a">My Projects</h1>
            <hr/>
            <section className="row row-cols-lg-3 mt-5 mb-5">
                {
                    ProjectData.map(data=>(
                        <ProjectCard
                            image={data.image}
                            title={data.title}
                            description={data.description}
                            technologies={data.technologies}
                            githubLink={data.githubLink}
                            liveLink={data.liveLink}
                        />
                    ))
                }
            </section>
        </div>
    );
};

export default Projects;