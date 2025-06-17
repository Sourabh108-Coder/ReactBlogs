import React from 'react'

import NavBar from '../components/NavBar'
import BlogsCard from '../components/BlogsCard'
import Pagenation from '../components/Pagenation'

const Home = () => {
  return (
    <div className='hom_div'>
        <NavBar/>

        <div>
            <BlogsCard/>
            <Pagenation/>
        </div>
    </div>
  )
}

export default Home
