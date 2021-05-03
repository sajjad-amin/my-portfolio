import React from 'react';
import ProfilePicture from '../../Assets/Images/profile.jpg'
import ProjectData from "../../Data/ProjectData";
import HomeProjectCard from "./HomeProjectCard";
import BlogData from "../../Data/BlogData";
import BlogCard from "../Blog/BlogCard";
import {Link} from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faFacebook, faGithub, faLinkedin} from "@fortawesome/free-brands-svg-icons";
import {faDownload} from "@fortawesome/free-solid-svg-icons";
import {Roll} from "react-reveal";

const Home = () => {
    return (
        <div className="container">
          <section className="row">
              <Roll left>
                  <div className="col-md-6 p-5">
                      <img className="rounded-3 img-thumbnail img-fluid" src={ProfilePicture} alt="Sajjad Amin"/>
                  </div>
              </Roll>
              <Roll right>
                  <div className="col-md-6 d-flex flex-column justify-content-center">
                      <div className="p-5">
                          <h5 className="color-a">Hello, I'm</h5>
                          <h1 className="mt-3 mb-2">Sajjad Amin</h1>
                          <ul className="color-a d-flex gap-5">
                              <li className="">Programmer</li>
                              <li>Web Developer</li>
                          </ul>
                          <p className="led mt-5">
                              I am a passionate programmer and full-stack web developer. I like
                              to solve various problems while implementing my ideas and always
                              try to learn new technology.
                          </p>
                          <div className="d-flex gap-3 mt-5">
                              <Link to="/about" className="btn btn-a btn-success">About Me</Link>
                              <a
                                  href="https://sajjadamin.com/files/sajjad-amin-resume.pdf" target="_blank"
                                  className="btn btn-b btn-outline-success"><FontAwesomeIcon icon={faDownload}/> Download Resume</a>
                          </div>
                          <div className="mt-5 fs-3 d-flex flex-row justify-content-center gap-3">
                              <a className="color-a" href="https://facebook.com/sajjad.amin.100" target="_blank">
                                  <FontAwesomeIcon icon={faFacebook}/>
                              </a>
                              <a className="color-a" href="https://www.linkedin.com/in/sajjadaminsayem/" target="_blank">
                                  <FontAwesomeIcon icon={faLinkedin}/>
                              </a>
                              <a className="color-a" href="https://github.com/sajjad-amin/" target="_blank">
                                  <FontAwesomeIcon icon={faGithub}/>
                              </a>
                          </div>
                      </div>
                  </div>
              </Roll>
          </section>
          <div className="col-md-7 mb-5">
              <h2><span className="color-a">My latest</span> projects</h2>
          </div>
          <section className="mb-5 projects">
              {
                  ProjectData.filter((elm,ind,)=>ind < 3).map(data=>(
                      <HomeProjectCard
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
          <div className="col-md-7 mb-5">
              <h2><span className="color-a">My latest</span> articles</h2>
          </div>
          <section className="row mb-5 articles">
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
          <section className="m-5 d-flex flex-column align-items-center">
              <Roll bottom right>
                  <div className="col-md-6 m-5 d-flex flex-column align-items-center">
                      <h1>Get In Touch</h1>
                      <p>Feel free to send me a message. I'll respond to you as soon as possible</p>
                      <Link to="contact" className="btn btn-b btn-outline-success mt-3">Say Hello</Link>
                  </div>
              </Roll>
          </section>
        </div>
    );
};

export default Home;