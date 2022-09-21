import React, {useState} from 'react';
import {Zoom} from "react-reveal";

const Contact = () => {
    const [isOk, setIsOk] = useState(null);
    const removeMessage = () => {
        let iID = setInterval(()=>{
            setIsOk(null)
            clearInterval(iID)
        },5000)
    }
    const handleSubmit = event => {
        event.preventDefault();
        const name = event.target[0].value
        const email = event.target[1].value;
        const message = event.target[2].value;
        const clearForm = () => {
            event.target[0].value = ''
            event.target[1].value = ''
            event.target[2].value = ''
        }
        if (name && email && message){
            const emailBody = JSON.stringify({
                email,
                name,
                message
            })
            fetch('https://sajjadamin.com/email.php',{
                method: 'POST',
                body: emailBody
            }).then(r=>r.json())
                .then(r=>{
                    if(r.success === true){
                        setIsOk(true)
                        removeMessage()
                        clearForm()
                    } else {
                        removeMessage()
                    }
                })
        } else {
            setIsOk(false)
            removeMessage()
        }
    }
    return (
        <div className="mt-5 d-flex align-items-center justify-content-center">
            <Zoom>
                <div className="col-md-5 mb-5">
                    <div className="card bg-a">
                        <div className="card-header text-center pt-3">
                            <h2 className="color-a">Get In Touch</h2>
                        </div>
                        <div className="card-body">
                            <form onSubmit={handleSubmit}>
                                <div className="mb-3">
                                    <input type="text" className="form-control" placeholder="Your full name"/>
                                </div>
                                <div className="mb-3">
                                    <input type="email" className="form-control" placeholder="Your email"/>
                                </div>
                                <div className="mb-3">
                                    <textarea className="form-control" placeholder="Write a message" rows="6"/>
                                </div>
                                <div className="d-grid gap-2 col-6 mx-auto">
                                    <button type="submit" className="btn btn-b btn-outline-success">Send</button>
                                </div>
                            </form>
                            <h5 className="text-center color-a m-3">OR</h5>
                            <div className="d-grid gap-2 col-6 mx-auto">
                                <a type="button" className="btn btn-b btn-outline-success" href="https://meet.sajjadamin.com" target="_blank">Join Live Meeting</a>
                            </div>
                        </div>
                        <div className="card-footer text-center">
                            {
                                isOk != null && isOk === false &&
                                <div className="alert alert-danger" role="alert">
                                    Please fill out the form.
                                </div>
                            }
                            {
                                isOk != null && isOk === true &&
                                <div className="alert alert-success" role="alert">
                                    Thank you for your email. I will reply you as soon as possible.
                                </div>
                            }
                        </div>
                    </div>
                </div>
            </Zoom>
        </div>
    );
};

export default Contact;