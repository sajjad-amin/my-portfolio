import React, {useEffect, useState} from 'react';
import LiveCard from "./LiveCard";
import axios from "axios";

const Live = () => {
    const [data, setData] = useState({});
    useEffect(()=>{
        axios.get(process.env.REACT_APP_BASE_URL+'/live').then(r=>setData(r.data));
    },[]);
    return (
        <div className="container">
            <h1 className="color-a">Lives</h1>
            <hr/>
            <section className="row mt-5 mb-5">
                {
                    data.length > 0 ? Object.keys(data).map((key)=>(
                        Number.parseInt(data[key].show) ? <LiveCard
                            key={data[key].key}
                            data={data[key]}
                        /> : ''
                    )) : <h3 className="text-center">No live available right now</h3>
                }
            </section>
        </div>
    );
};

export default Live;