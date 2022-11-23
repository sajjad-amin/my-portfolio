import React, {useEffect, useState} from 'react';
import LiveCard from "./LiveCard";
import {Link, useRouteMatch} from "react-router-dom";
import axios from "axios";

const Live = () => {
    const [data, setData] = useState({});
    const {url} = useRouteMatch();
    useEffect(()=>{
        axios.get(process.env.REACT_APP_BASE_URL+'/live').then(r=>setData(r.data));
    },[]);
    return (
        <div className="container">
            <h1 className="color-a">Lives</h1>
            <hr/>
            <Link to={`${url}/create`}>
                <button className="btn btn-b">Create +</button>
            </Link>
            <section className="row mt-5 mb-5">
                {
                    Object.keys(data).map((key)=>(
                        <LiveCard
                            key={data[key].key}
                            data={data[key]}
                        />
                    ))
                }
            </section>
        </div>
    );
};

export default Live;