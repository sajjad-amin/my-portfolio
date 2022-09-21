import React from 'react';
import ReactHlsPlayer from "react-hls-player";

const Live = () => {

    return (
        <div className="container">
            <h1 className="color-a">Live</h1>
            <hr/>
            <ReactHlsPlayer
                src="https://sajjadamin.xyz:1937/hls/sajjadamindotcom.m3u8"
                autoPlay={true}
                controls={true}
                muted={true}
                width="100%"
                height="auto"
            />
        </div>
    );
};

export default Live;