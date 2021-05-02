import React from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faGithub} from "@fortawesome/free-brands-svg-icons";
import {faExternalLinkAlt} from "@fortawesome/free-solid-svg-icons";

const HomeProjectCard = ({image, title, description, technologies, githubLink, liveLink}) => {
    return (
        <div className="row mt-3 project-home">
            <div className="col-md-7">
                <img className="img-fluid" src={image} alt="Project1"/>
            </div>
            <div className="col-md-5 d-flex flex-row align-items-center">
                <div className="card bg-a overlap-left">
                    <div className="card-header">
                        <h3 className="card-title">{title}</h3>
                    </div>
                    <div className="card-body">
                        <p className="card-text">{description}</p>
                        <ul className="list-inline d-flex flex-row flex-wrap gap-2">
                            {
                                technologies.map(e=>(
                                    <li className="list-inline-item bg-secondary rounded ps-2 pe-2">{e}</li>
                                ))
                            }
                        </ul>
                    </div>
                    <div className="card-footer">
                        {githubLink && <a href={githubLink} target="_blank"><FontAwesomeIcon className="fs-5 color-a" icon={faGithub}/></a>}
                        {liveLink && <a href={liveLink} target="_blank"><FontAwesomeIcon className="fs-5 color-a ms-3" icon={faExternalLinkAlt}/></a>}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomeProjectCard;