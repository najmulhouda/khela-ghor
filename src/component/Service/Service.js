import React from 'react';
import Course from '../Course/Course';
import { useEffect, useState } from 'react';

const Service = () => {
    
    const [courses, setCourses] = useState([]);
    useEffect( ()=>{
        fetch('./products.JSON')
        .then(res=> res.json())
        .then(data => setCourses(data));
    } ,[])


    return (
        <div className='container'>
            <div className="row row-cols-1 row-cols-md-3 g-4">
        {
                courses.map(course => <Course   key={course.id}
                    course={course}>
                  
                </Course>)
            }
            </div>
        </div>
    );
};

export default Service;