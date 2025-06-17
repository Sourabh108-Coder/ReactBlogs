import React, { useEffect, useState } from 'react'


import NavBar from '../components/NavBar'
import BlogsCard from '../components/BlogsCard'
import Pagenation from '../components/Pagenation'
import { useNavigate, useLocation} from 'react-router-dom'

const Tag = () => {

    const navigate=useNavigate();

    const location=useLocation();

    const[taghead,settaghead]=useState("");

     useEffect(()=>
        {
           const tag=location.pathname.split("/").at(-1);
           const decodetag = decodeURIComponent(tag);
    
           settaghead(decodetag);

           window.scrollTo(0, 0);
        },[])

  return (
    <div>
      <NavBar/>
      <div  className='cat_head'>
        <button onClick={()=>navigate(-1)} className="back-button">
            Back
        </button>
        <h1>Blogs on {taghead}</h1>
      </div>

      <div>
        <BlogsCard/>
        <Pagenation/>
      </div>
    </div>
  )
}

export default Tag
