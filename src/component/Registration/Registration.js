import React from 'react';

const Registration = () => {
    return (
        <div>
            <h2 className="my-5">Sign up for our monthly newsletter</h2>
            <p className="my-5">Be the first to know about news and updates.We never share you mail with others. Trust us!</p>

            <form className="container mt-5">
            <div className="mb-3 mx-5">
                <label for="exampleInputEmail1" className="form-label">Email address</label>
                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
            </div>
            <div className="mb-3 mx-5">
                <label for="exampleInputPassword1" className="form-label">Password</label>
                <input type="password" className="form-control" id="exampleInputPassword1"/>
            </div>
            <div className="mb-3 mx-5 form-check">
                <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
                <label className="form-check-label" for="exampleCheck1">Check me out</label>
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
            </form>
            <h3 className="my-5 text-success">We provide monthly pack in just 10$ </h3>
            <br />
            <h3 className="my-5 text-success">We provide yearly pack in just 80$</h3>

            <h4 className="text-success">thanks for coming here</h4>
        </div>
    );
};

export default Registration;