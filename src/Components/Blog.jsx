import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'

import Data from './JSON_file/Data.json'

const Blog = () => {

  // const [ data, setData ] = useState ()
  
  return (
    <div>

      <div className="container">
        <div className="row">
  
  {
        Data.map ((items) => {
          const { id, title, des, btnText } = items
          let sortDes = des.toString()
          let finalSortDes = sortDes.slice(0, 120).concat('...')
          // console.log(finalSortDes);
          return (
            <>

            <div className="col-4 mt-2">

              <div key={id}>
                
              <div className="card">
                <div className="card-body">
                  <div className="card-title">
                    <h3>{ title }</h3>
                  </div>
                <div className="card-text">
                  <p>{ finalSortDes }</p>
                  <NavLink to={ title }>{ btnText }</NavLink>
                </div>
              </div>
            </div>
                
              </div>
          </div>

            </>
          )
        }) 
      }

        </div>
      </div>

    </div>

  )
}

export default Blog