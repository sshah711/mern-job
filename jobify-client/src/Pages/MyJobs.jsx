import { data } from 'autoprefixer';
import React, { useEffect, useState } from 'react'

const MyJobs = () => {
    //const email= "sakshishah0711@gmail.com"
    const [jobs,setJobs] = useState([]);
    const [searchText, setSearchText] = useState("");
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        setIsLoading(true);
        fetch(`http://localhost:8000/my-job/sakshishah0711@gmail.com`).then(res => res.json()).then(data => {
            setJobs(data)
        })
    }, [])
  return (
    <div>MyJobs {jobs.length}</div>
  )
}

export default MyJobs