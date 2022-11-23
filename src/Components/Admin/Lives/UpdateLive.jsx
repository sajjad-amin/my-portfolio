import React, {useContext, useEffect, useRef, useState} from 'react';
import axios from "axios";
import {useParams} from "react-router-dom";
import {random} from "../../../Helper/helper";
import {UserContext} from "../../../App";
import {useHistory} from "react-router-dom/cjs/react-router-dom";

const UpdateLive = () => {
    const [user] = useContext(UserContext);
    const history = useHistory();
    const {id} = useParams();
    const [data, setData] = useState({});
    const [enabled, setEnabled] = useState(0);
    const displayRef = useRef(null);
    const imageRef = useRef(null);
    const keyRef = useRef(null);
    const linkRef = useRef(null);
    const titleRef = useRef(null);
    const descriptionRef = useRef(null);
    useEffect(()=>{
        axios.get(`${process.env.REACT_APP_BASE_URL}/live/${id}`).then(r=>{
            setData(r.data[0]);
            setEnabled(Number.parseInt(r.data[0].show));
        });
    },[]);
    const handleEnable = event => {
        setEnabled(Number.parseInt(event.target.value));
    }
    const handleSelect = event => {
        displayRef.current.src = URL.createObjectURL(event.target.files[0]);
    }
    const handleKey = () => {
        keyRef.current.value = random(32);
    }
    const handleSubmit = () => {
        const image = imageRef.current.files[0];
        const key = keyRef.current.value;
        const title = titleRef.current.value;
        const description = descriptionRef.current.value;
        if(key !== '' && title !== '' && description !== ''){
            let requestBody = new FormData();
            requestBody.append('id', data.id);
            requestBody.append('title', title);
            requestBody.append('description', description);
            if(imageRef.current.files.length > 0){
                requestBody.append('image', image);
            }
            requestBody.append('imagePath', data.image);
            requestBody.append('key', key);
            requestBody.append('link', linkRef.current.value);
            requestBody.append('show', enabled);
            axios.post(`${process.env.REACT_APP_BASE_URL}/live/update`,requestBody,{
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
    const handleDelete = event => {
        axios.delete(`${process.env.REACT_APP_BASE_URL}/live/delete`,{
            headers: {
                "profileAuthToken" : user.token
            },
            data: {id: data.id}
        }).then(r=>{
            if(r.data.success){
                history.goBack();
            }
        });
    }
    return (
        <div className="container">
            <div className="card bg-a">
                <div className="card-header pt-3">
                    <h2 className="color-a">{data.title}</h2>
                </div>
                <div className="card-body">
                    <div className="row d-flex align-items-end">
                        <div className="col-md-2 mb-3">
                            <img ref={displayRef} className="img img-thumbnail" src={data.image} alt=""/>
                        </div>
                        <div className="col-md-8 mb-3">
                            <input ref={imageRef} onChange={handleSelect} type="file" className="form-control"/>
                        </div>
                        <div className="col-md-2 mb-3">
                            <select className="form-control" onChange={handleEnable} value={enabled}>
                                <option className="form-control" value={1} >Enable</option>
                                <option className="form-control" value={0} >Disable</option>
                            </select>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-10 mb-3">
                            <input ref={keyRef} type="text" className="form-control" placeholder="Key" defaultValue={data.key}/>
                        </div>
                        <div className="col-md-2 mb-3">
                            <button className="btn btn-b float-end" onClick={handleKey}>Generate</button>
                        </div>
                    </div>
                    <div className="mb-3">
                        <input ref={linkRef} type="url" className="form-control" placeholder="Link" defaultValue={data.link}/>
                    </div>
                    <div className="mb-3">
                        <input ref={titleRef} type="text" className="form-control" placeholder="Title" defaultValue={data.title}/>
                    </div>
                    <div className="mb-3">
                        <textarea ref={descriptionRef} rows="10" className="form-control" placeholder="Description" defaultValue={data.description}></textarea>
                    </div>
                    <div className="d-flex justify-content-between">
                        <button onClick={handleDelete} className="btn btn-b">Delete</button>
                        <button onClick={handleSubmit} className="btn btn-b">Update</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UpdateLive;