import React, {useContext, useEffect, useRef} from 'react';
import 'react-pro-sidebar/dist/css/styles.css';
import {useRouteMatch, Link, Switch, Route, NavLink} from "react-router-dom";
import Blog from "../../Guest/Blog/Blog";
import Live from "../../Guest/Live/Live";
import Projects from "../../Guest/Projects/Projects";
import Login from "../Login/Login";
import {UserContext} from "../../../App";
import {isUserLoggedIn} from "../../../Helper/Auth";

const Dashboard = () => {
    const [user] = useContext(UserContext);
    const {url} = useRouteMatch();
    const dashboardContainer = useRef(null);
    useEffect(()=>{
        const header = document.getElementById('header');
        const footer = document.getElementById('footer');
        const extraHeight = header.offsetHeight + footer.offsetHeight;
        if(dashboardContainer.current){
            dashboardContainer.current.style.minHeight = `${window.innerHeight - extraHeight - 10}px`;
        }
    });
    return (
        <div>
            {
                !isUserLoggedIn(user) ? <Login/> :
                <div className="container-fluid">
                        <div className="dashboard-wrapper">
                            <div className="dashboard-sidebar bg-glass">
                                <ul className="list-group">
                                    <NavLink exact to={url} className="dash-nav-link" activeClassName="dash-nav-link-selected">
                                        <li className="list-group-item nav-glass">Dashboard</li>
                                    </NavLink>
                                    <NavLink to={`${url}/project`} className="dash-nav-link" activeClassName="dash-nav-link-selected">
                                        <li className="list-group-item nav-glass">Project</li>
                                    </NavLink>
                                    <NavLink to={`${url}/blog`} className="dash-nav-link" activeClassName="dash-nav-link-selected">
                                        <li className="list-group-item nav-glass">Blog</li>
                                    </NavLink>
                                    <NavLink to={`${url}/live`} className="dash-nav-link" activeClassName="dash-nav-link-selected">
                                        <li className="list-group-item nav-glass">Live</li>
                                    </NavLink>
                                </ul>
                            </div>
                            <div ref={dashboardContainer} className="dashboard-content">
                                <Switch>
                                    <Route exact path={url}>
                                    </Route>
                                    <Route path={`${url}/live`}>
                                        <Live/>
                                    </Route>
                                    <Route path={`${url}/project`}>
                                        <Projects/>
                                    </Route>
                                    <Route path={`${url}/blog`}>
                                        <Blog/>
                                    </Route>
                                </Switch>
                            </div>
                        </div>
                    </div>
            }
        </div>
    );
};

export default Dashboard;