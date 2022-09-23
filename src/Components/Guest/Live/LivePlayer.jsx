import React, {useEffect, useState} from 'react';
import ReactHlsPlayer from "react-hls-player";
import {useParams} from "react-router-dom";

const LivePlayer = () => {
    const {id} = useParams();
    const [data, setData] = useState({});
    useEffect(()=>{
        fetch(`${process.env.REACT_APP_BASE_URL}/live/${id}`).then(r=>r.json()).then(d=>setData(d[0]));
    },[]);
    console.log(data);
    return (
        <div className="container">
            <h1 className="color-a">{data.title}</h1>
            <hr/>
            <ReactHlsPlayer
                src={`${process.env.REACT_APP_LIVE_URL}/${data.key}.m3u8`}
                autoPlay={true}
                controls={true}
                muted={true}
                width="100%"
                height="auto"/>
            <p className="mt-3">{data.description}</p>
        </div>
    );
};

export default LivePlayer;