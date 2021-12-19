import React from 'react';

const Course = (props) => {
    const { name, details, prise, img} = props.course;
    console.log(props);
    return (

                <div className="col">
                    <div className="card rounded-3">
                        <img src={img} className="card-img-top" alt="..."/>
                        <div className="card-body">
                            <h5 className="card-title">{name}</h5>
                            <p className="card-text">{details}</p>
                            <p>Prise{prise}</p>
                            <br/>
                            <button className="btn btn-primary">Buy Now</button>

                        </div>
                    </div>
                </div>

    )
};

export default Course;