import React from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faGithub} from "@fortawesome/free-brands-svg-icons";
import {faExternalLinkAlt} from "@fortawesome/free-solid-svg-icons";

const ProjectCard = ({image, title, description, technologies, githubLink, liveLink}) => {
    return (
        <div className="col-md-4 mb-4 article-card">
            <div className="card bg-a">
                <img src={image} className="card-img-top" alt={title}/>
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text fs-6">{description}</p>
                </div>
                <div className="card-footer pt-3 d-flex align-items-center justify-content-between">
                    <ul className="list-inline d-flex flex-row flex-wrap gap-2">
                        {
                            technologies.map(item=>(
                                <li className="list-inline-item bg-secondary rounded ps-2 pe-2">{item}</li>
                            ))
                        }
                    </ul>
                </div>
                <div className="card-footer d-flex gap-3">
                    {liveLink && <a href={liveLink} target="_blank"><FontAwesomeIcon className="fs-5 color-a" icon={faExternalLinkAlt}/></a>}
                    {githubLink && <a href={githubLink} target="_blank"><FontAwesomeIcon className="fs-5 color-a" icon={faGithub}/></a>}
                </div>
            </div>
        </div>
    );
};

export default ProjectCard;