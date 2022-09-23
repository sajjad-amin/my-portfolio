import React, {createContext, useState} from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle.js'
import '../src/Assets/Styles/Main.css';
import Header from "./Components/Guest/Header/Header";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import Home from "./Components/Guest/Home/Home";
import About from "./Components/Guest/About/About";
import Projects from "./Components/Guest/Projects/Projects";
import Contact from "./Components/Guest/Contact/Contact";
import Blog from "./Components/Guest/Blog/Blog";
import NotFound from "./Components/Guest/404/NotFound";
import Footer from "./Components/Guest/Footer/Footer";
import Particles from "react-particles-js";
import ParticleConfig from "./Data/ParticleConfig";
import Live from "./Components/Guest/Live/Live";
import Dashboard from "./Components/Admin/Dashboard/Dashboard";
import {getLoggedInData} from "./Helper/auth";
import LivePlayer from "./Components/Guest/Live/LivePlayer";

export const UserContext = createContext();
const App = () => {
    const [user, setUser] = useState(getLoggedInData());
    return (
        <UserContext.Provider value={[user, setUser]}>
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
                    <Route exact path="/live">
                        <Live/>
                    </Route>
                    <Route path="/live/:id">
                        <LivePlayer/>
                    </Route>
                    <Route path="/contact">
                        <Contact/>
                    </Route>
                    <Route path="/dashboard">
                        <Dashboard/>
                    </Route>
                    <Route path="*">
                        <NotFound/>
                    </Route>
                </Switch>
                <Footer/>
            </BrowserRouter>
        </UserContext.Provider>
    );
}

export default App;
