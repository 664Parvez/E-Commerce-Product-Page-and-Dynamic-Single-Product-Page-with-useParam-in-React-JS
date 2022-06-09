import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import Home from './Home'
import Contact from './Contact'
import Blog from './Blog'
import Navbar from './navbar'
import SingleBlogPage from './singleBlogPage'

const Main_section = () => {
  return (
    <div>
            <Router>
                <Navbar />
                <Routes>
                    <Route path='/' element={ <Home /> }></Route>
                    <Route path='/Blog' element={ <Blog/> }></Route>
                    <Route path='/Blog/:title' element={ <SingleBlogPage/> }></Route>
                    <Route path='/Contact' element={ <Contact /> }></Route>
                </Routes>

            </Router>
    </div>
  )
}

export default Main_section