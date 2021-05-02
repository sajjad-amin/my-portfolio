import React from 'react';

const Contact = () => {
    const handleSubmit = event => {
        event.preventDefault();
        const name = event.target[0].value;
        const email = event.target[1].value;
        const message = event.target[2].value;
    }
    return (
        <div className="mt-5 d-flex align-items-center justify-content-center">
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
                    </div>
                    <div className="card-footer pt-3 text-muted">
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;