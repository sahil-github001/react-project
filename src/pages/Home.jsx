import React from 'react'
import { Siderbar, Chat } from '../components'

const Home = () => {
  return (
    <div className='home'>
      <div className="container">
          <Siderbar/>
          <Chat/>
      </div>
    </div>
  )
}

export default Home