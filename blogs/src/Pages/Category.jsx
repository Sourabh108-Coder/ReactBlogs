import React, { useEffect, useState } from 'react'


import NavBar from '../components/NavBar'
import BlogsCard from '../components/BlogsCard'
import Pagenation from '../components/Pagenation'

import { useNavigate,useLocation } from 'react-router-dom'

const Category = () => {

    const Navigate=useNavigate();

    const location=useLocation();

    const[categoryhead,setcategoryhead]=useState("");

    useEffect(()=>
    {
       const category=location.pathname.split("/").at(-1);

       const decodecategory = decodeURIComponent(category);

       setcategoryhead(decodecategory);

       window.scrollTo(0, 0);
       
    },[])

  return (
    <div>
      <NavBar/>

      <div className='cat_head'>
        <button onClick={()=>Navigate(-1)} className="back-button">Back</button>
        <h1>Blogs on {categoryhead}</h1>
      </div>

      <div>
        <BlogsCard/>
        <Pagenation/>
      </div>
    </div>
  )
}

export default Category
