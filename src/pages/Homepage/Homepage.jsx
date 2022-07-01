import React from 'react'
import {Header, Sidebar, Posts} from '../../components'
import './Homepage.css'

const Homepage = () => {
  return (
    <>
      <Header/>
      <div className='home'>
        <Posts/>
        <Sidebar/>
      </div>
    </>
  )
}

export default Homepage