import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import Data from './JSON_file/Data.json'

const SingleBlogPage = () => {

    const { title } = useParams ()   

    const [ bodyData, setBodyData ] = useState ('')

    useEffect ( () => {
        Data.filter ( (items) => {
            if ( items.title === title ) {
                setBodyData (items.des)
            }
        } )
    }, [] )
    
  return (
    <div>
        <h2>{ title } Page</h2>
        <p>{ bodyData }</p>
    </div>
  )
}

export default SingleBlogPage