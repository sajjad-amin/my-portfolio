import React, {useContext} from 'react';
import {setLoggedInData} from "../../../Helper/auth";
import {sendRequest} from "../../../Helper/http";
import {UserContext} from "../../../App";

const Login = () => {
    const [,setUser] = useContext(UserContext);
    const handleSubmit = event =>{
        event.preventDefault();
        const email = event.target[0].value;
        const password = event.target[1].value;
        if(email && password){
            const body = JSON.stringify({email,password});
            sendRequest(
                '/authentication/login',
                'POST',
                body,
                null,
                user => {
                    setUser(user);
                    setLoggedInData(user);
                }
            );
        }
    }
    return (
        <div className="mt-5 d-flex align-items-center justify-content-center">
            <div className="col-md-4 mb-5">
                <div className="card bg-a">
                    <div className="card-header text-center pt-3">
                        <h2 className="color-a">Login</h2>
                    </div>
                    <div className="card-body">
                        <form onSubmit={handleSubmit} >
                            <div className="mb-3">
                                <input type="email" className="form-control" placeholder="Email"/>
                            </div>
                            <div className="mb-3">
                                <input type="password" className="form-control" placeholder="Password"/>
                            </div>
                            <button type="submit" className="btn btn-b">Login</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;