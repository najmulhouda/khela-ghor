import { useEffect, useState } from 'react';

const UseCourses = () => {
    const [courses, setCourses] = useState([]);
    useEffect( ()=>{
        fetch('./products.JSON')
        .then(res=> res.json())
        .then(data => setCourses(data));
    } ,[])
    return [courses]
};

export default UseCourses;