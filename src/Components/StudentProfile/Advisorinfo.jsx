import React, { useEffect, useState } from 'react';

const Advisorinfo = () => {
    const[students, setStudents] = useState(['']);
    const[teacher, setTeacher] = useState(['']);
    useEffect(()=>{
        fetch('Data.json')
        .then(res =>res.json())
        .then(data=>setTeacher(data))
    },[]);

    useEffect(()=>{
        fetch('https://department-cse.onrender.com/students')
        .then(res =>res.json())
        .then(data=>setStudents(data))
    },[])
    return (
        <div>
            
        </div>
    );
};

export default Advisorinfo;