import React, {useContext, useRef} from 'react';
import axios from "axios";
import {random} from "../../../Helper/helper";
import dummyImage from "../../../Assets/Images/dummy_1.png";
import {UserContext} from "../../../App";
import {useHistory} from "react-router-dom/cjs/react-router-dom";

const CreateLive = () => {
    const [user] = useContext(UserContext);
    const history = useHistory();
    const displayRef = useRef(null);
    const imageRef = useRef(null);
    const keyRef = useRef(null);
    const linkRef = useRef(null);
    const titleRef = useRef(null);
    const descriptionRef = useRef(null);
    let enable = 1;
    const handleSelect = event => {
        displayRef.current.src = URL.createObjectURL(event.target.files[0]);
    }
    const handleKey = () => {
        keyRef.current.value = random(32);
    }
    const setEnable = event => {
        enable = event.target.value;
    }
    const handleSubmit = () => {
        const image = imageRef.current.files[0];
        const key = keyRef.current.value;
        const link = linkRef.current.value;
        const title = titleRef.current.value;
        const description = descriptionRef.current.value;
        if(key !== '' && title !== '' && description !== ''){
            let requestBody = new FormData();
            requestBody.append('title', title);
            requestBody.append('description', description);
            if(imageRef.current.files.length > 0){
                requestBody.append('image', image);
            }
            requestBody.append('key', key);
            requestBody.append('link', link);
            requestBody.append('show', enable);
            axios.post(`${process.env.REACT_APP_BASE_URL}/live/create`, requestBody, {
                headers: {
                    "profileAuthToken" : user.token
                }
            }).then(r=>{
                if(r.data.success){
                    history.goBack();
                }
            });
        }
    }
    return (
        <div className="container">
            <div className="card bg-a">
                <div className="card-header pt-3">
                    <h2 className="color-a">New Live</h2>
                </div>
                <div className="card-body">
                    <div className="row d-flex align-items-end">
                        <div className="col-md-2 mb-3">
                            <img ref={displayRef} className="img img-thumbnail" src={dummyImage} alt=""/>
                        </div>
                        <div className="col-md-8 mb-3">
                            <input ref={imageRef} onChange={handleSelect} type="file" className="form-control"/>
                        </div>
                        <div className="col-md-2 mb-3">
                            <select className="form-control" onChange={setEnable}>
                                <option className="form-control" value={1} >Enable</option>
                                <option className="form-control" value={0} >Disable</option>
                            </select>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-10 mb-3">
                            <input ref={keyRef} type="text" className="form-control" placeholder="Key"/>
                        </div>
                        <div className="col-md-2 mb-3">
                            <button className="btn btn-b float-end" onClick={handleKey}>Generate</button>
                        </div>
                    </div>
                    <div className="mb-3">
                        <input ref={linkRef} type="url" className="form-control" placeholder="Link"/>
                    </div>
                    <div className="mb-3">
                        <input ref={titleRef} type="text" className="form-control" placeholder="Title"/>
                    </div>
                    <div className="mb-3">
                        <textarea ref={descriptionRef} rows="10" className="form-control" placeholder="Description"></textarea>
                    </div>
                    <button onClick={handleSubmit} className="btn btn-b">Create</button>
                </div>
            </div>
        </div>
    );
};

export default CreateLive;