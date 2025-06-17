import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext'

const Pagenation = () => {

    const{page,clickHandler,TotalPage}=useContext(AppContext);
    
  return (
    <div className='foot-bar'>
        <div className='two_but'>

          {
            page>1 && 

             <div>
              <button className="back-button" onClick={()=>clickHandler(page-1)}>Previous</button>
            </div>
          }

          {
            page<6 && page<TotalPage &&

            <button className="back-button" onClick={()=>clickHandler(page+1)} >Next</button>
          }
        </div>

        <div className='page_show'>
           <h3>Page {page} of {TotalPage}</h3>
        </div>
    </div>
  )
}

export default Pagenation
