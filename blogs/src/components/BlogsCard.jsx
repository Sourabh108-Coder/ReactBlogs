import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext'
import Spinner from './Spinner';

import { NavLink } from 'react-router-dom';
import NavBar from './NavBar';

const BlogsCard = () => {

    const{loading,posts}=useContext(AppContext);

  return (
    <div className='blogs-bar'>
        {loading ? 
        (<Spinner/>):
        (
            posts.map((post)=>{
                return(
                    <card className='blogs-card-bar'>
                    <h2>{post.title}</h2>
                    <p className='auth-para'>By {post.author} on <NavLink to={`/categories/${post.category}`}><span className='span-tag'>{post.category}</span></NavLink></p>
                    <p className='post-para'>Posted on {post.date}</p>

                    <p className='para_pa'>{post.content}</p>

                    <div className='tags-bar'>
                        {post.tags.map((tag)=>{
                            return(
                                <NavLink to={`/tags/${tag}`}><p>#{tag}</p></NavLink>
                            )
                        })}
                    </div>
                   </card>
                )
            })
        )
        }
    </div>
  )
}

export default BlogsCard
