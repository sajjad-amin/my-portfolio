import React from 'react';
import ProfilePicture from "../../../Assets/Images/profile.png";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faDownload, faEnvelope, faMapMarkerAlt, faPhoneAlt} from "@fortawesome/free-solid-svg-icons";
import {faFacebook, faGithub, faLinkedin} from "@fortawesome/free-brands-svg-icons";
import {Fade} from "react-reveal";

const About = () => {
    return (
        <div className="container">
            <div className="row">
                <Fade left>
                    <div className="col-md-6 p-5">
                        <div className="col-md-8 mt-5">
                            <img className="rounded-3 img-fluid" src={ProfilePicture} alt="Sajjad Amin"/>
                        </div>
                        <h1 className="mt-3 mb-3">Sajjad Amin</h1>
                        <p className="led">
                            I am a passionate programmer and full-stack web developer. I like
                            to solve various problems while implementing my ideas and always
                            try to learn new technology. I always try to do my work
                            professionally.
                        </p>
                        <div className="d-flex flex-row">
                            <a
                                href="https://sajjadamin.com/files/sajjad-amin-resume.pdf" target="_blank"
                                className="btn btn-b btn-sm btn-outline-success"><FontAwesomeIcon icon={faDownload}/> Download Resume</a>
                        </div>
                        <div className="mt-5 fs-3 d-flex flex-row justify-content-center gap-3">
                            <a className="color-a" href="https://facebook.com/sajjad.amin.100" target="_blank">
                                <FontAwesomeIcon icon={faFacebook}/>
                            </a>
                            <a className="color-a" href="src/Components/Guest/About/About" target="_blank">
                                <FontAwesomeIcon icon={faLinkedin}/>
                            </a>
                            <a className="color-a" href="src/Components/Guest/About/About" target="_blank">
                                <FontAwesomeIcon icon={faGithub}/>
                            </a>
                        </div>
                    </div>
                </Fade>
                <Fade right>
                    <div className="col-md-6 p-5">
                        <section>
                            <h3 className="color-a">Skills</h3>
                            <hr/>
                            <ul>
                                <li><h5>Programming & Other Languages:</h5></li>
                                <ul>
                                    <li><span className="fw-bold">Expertise:</span> Java, JavaScript, ES6, HTML, CSS</li>
                                    <li><span className="fw-bold">Comfortable: </span>C, PHP, SQL</li>
                                    <li><span className="fw-bold">Familiar: </span>C++, TypeScript</li>
                                </ul>
                            </ul>
                            <ul>
                                <li><h5>Libraries & Frameworks:</h5></li>
                                <ul>
                                    <li><span className="fw-bold">Comfortable: </span>Node JS, Express JS, React JS, React Router, Bootstrap, jQuery</li>
                                    <li><span className="fw-bold">Familiar: </span>Laravel, Redux, React Native, Material UI, SASS, Font Awesome</li>
                                </ul>
                            </ul>
                            <ul>
                                <li><h5>Database:</h5></li>
                                <ul>
                                    <li><span className="fw-bold">Comfortable: </span>MySQL, SQLite</li>
                                    <li><span className="fw-bold">Familiar: </span>MongoDB, Firebase</li>
                                </ul>
                            </ul>
                            <div className="d-flex gap-2">
                                <h5>Tools: </h5>
                                <p>Linux, Git, NPM, Yarn, Firebase, Netlify, Heroku, Webpack, Babel.</p>
                            </div>
                            <div className="d-flex gap-2">
                                <h5>Others Technology: </h5>
                                <p>Android, Java Swing, JavaFX, WordPress</p>
                            </div>
                            <div className="d-flex gap-2">
                                <h5>Soft Skills: </h5>
                                <p>Adobe Illustrator, Photoshop, MS Office</p>
                            </div>
                        </section>
                        <section>
                            <h3 className="mt-3 color-a">Education</h3>
                            <hr/>
                            <ul>
                                <li>Hafez-E-Quran – 2013</li>
                                <li>SSC – 2018</li>
                                <li>HSC – 2020</li>
                                <li>BSc in Computer Science & Engineering <br/> February 2021 – Present</li>
                            </ul>
                        </section>
                        <section>
                            <h3 className="mt-3 color-a">Language</h3>
                            <hr/>
                            <ul>
                                <li>Bangla – Native language</li>
                                <li>English – Good understanding, reading, writing, and speaking</li>
                                <li>Arabic – Reading, and writing</li>
                            </ul>
                        </section>
                        <section>
                            <h3 className="mt-3 color-a">Contact</h3>
                            <hr/>
                            <div className="ms-3">
                                <p><FontAwesomeIcon className="me-3" icon={faMapMarkerAlt}/>Mirpur, Dhaka - 1216, Bangladesh</p>
                                <p><FontAwesomeIcon className="me-3" icon={faPhoneAlt}/>+880 1679109904</p>
                                <p><FontAwesomeIcon className="me-3" icon={faEnvelope}/>sayem.1998.bd@gmail.com</p>                            <p><FontAwesomeIcon className="me-3" icon={faMapMarkerAlt}/> Mirpur, Dhaka - 1216, Bangladesh</p>
                                <p>
                                    <FontAwesomeIcon className="me-3" icon={faFacebook}/>
                                    <a className="text-white" href="https://facebook.com/sajjad.amin.100" target="_blank">Facebook</a>
                                </p>
                                <p>
                                    <FontAwesomeIcon className="me-3" icon={faLinkedin}/>
                                    <a className="text-white" href="src/Components/Guest/About/About" target="_blank">LinkedIn</a>
                                </p>
                                <p>
                                    <FontAwesomeIcon className="me-3" icon={faGithub}/>
                                    <a className="text-white" href="src/Components/Guest/About/About">GitHub</a>
                                </p>
                            </div>
                        </section>
                    </div>
                </Fade>
            </div>
        </div>
    );
};

export default About;