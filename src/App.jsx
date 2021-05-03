import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle.js'
import '../src/Assets/Styles/Main.css';
import Header from "./Components/Header/Header";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import Home from "./Components/Home/Home";
import About from "./Components/About/About";
import Projects from "./Components/Projects/Projects";
import Contact from "./Components/Contact/Contact";
import Blog from "./Components/Blog/Blog";
import NotFound from "./Components/404/NotFound";
import Footer from "./Components/Footer/Footer";
import Particles from "react-particles-js";
import ParticleConfig from "./Data/ParticleConfig";

function App() {
  return (
    <BrowserRouter>
        <Particles
            className="background"
            params={ParticleConfig}
        />
        <Header/>
        <Switch>
            <Route exact path="/">
                <Home/>
            </Route>
            <Route path="/about">
                <About/>
            </Route>
            <Route path="/projects">
                <Projects/>
            </Route>
            <Route path="/blog">
                <Blog/>
            </Route>
            <Route path="/contact">
                <Contact/>
            </Route>
            <Route path="*">
                <NotFound/>
            </Route>
        </Switch>
        <Footer/>
    </BrowserRouter>
  );
}

export default App;
