import React from 'react';
import Service from '../Service/Service';
import UseCourses from '../useCourses/useCourses';


const Home = () => {
    const [courses] =UseCourses()
    return (
        <div className="container bg-light">
            <div className="container p-5">  
                <div className="border border-3 m-3">
                <h1>Welcome to Our Web site</h1> 
                <p>We provide the best quality product</p>
                </div>
                <Service courses={courses.slice(0,6)}></Service>
            </div>
        </div>
    );
};

export default Home;