import React from 'react';

const Item = (props) => {
    return (
        <div className="row type-box">
            <div className="col-md-3 box2">
                <div className="thumbnail">
                    <img src={props.imgSrc} className="card-img-top" alt="Pizza" />
                    <h1 className="item-title">{props.title}</h1>
                    <div className="card-body">
                        <p className="card-text item-text">{props.text}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Item;
