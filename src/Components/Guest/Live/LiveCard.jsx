import {Link, useRouteMatch} from "react-router-dom";

const LiveCard = (props) => {
    const {url} = useRouteMatch();
    const {date, id, image, title, description, key, show} = props.data;
    return (
        <div className="col-md-4 mb-4 article-card">
            <div className="card bg-a">
                {image && <img src={image} className="card-img-top" alt={title}/>}
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text fs-6">{description}</p>
                </div>
                <div className="card-footer d-flex align-items-baseline justify-content-between">
                    <Link to={`${url}/${id}`}>
                        <button className="btn btn-b">Watch</button>
                    </Link>
                    <p>{new Date(date*1000).toLocaleString()}</p>
                </div>
            </div>
        </div>
    );
};

export default LiveCard;