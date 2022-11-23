import React, {useEffect, useState} from 'react';
import ReactHlsPlayer from "react-hls-player";
import {useParams} from "react-router-dom";
import axios from "axios";

const LivePlayer = () => {
    const {id} = useParams();
    const [data, setData] = useState({});
    const [url, setUrl] = useState('');
    useEffect(()=>{
        axios.get(`${process.env.REACT_APP_BASE_URL}/live/${id}`).then(r=>{
            setData(r.data[0]);
        });
    },[]);
    useEffect(()=>{
        if(data.link){
            setUrl(data.link);
        }else{
            setUrl(`${process.env.REACT_APP_LIVE_URL}/${data.key}.m3u8`);
        }
    },[data]);
    {console.log(url)}
    return (
        <div className="container">
            <h1 className="color-a">{data.title}</h1>
            <hr/>
            <ReactHlsPlayer
                src={url}
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