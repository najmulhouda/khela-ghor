import React from 'react';
import Service from '../Service/Service';
import UseCourses from '../useCourses/useCourses';

const services = () => {
    const [courses] = UseCourses()
    return (
        <div className="container mt-5">
               <Service courses={courses}></Service>
        </div>
    );
};

export default services;