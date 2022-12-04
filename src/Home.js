import React from 'react'
import ShoeCard from './ShoeCard'

function Home() {
  return (
    <div>
      <h1 style={{marginBottom: '1em'}}>Shoes</h1>
      <div className='homePage' style={{backgroundColor: '#6B6D76'}}>
        <div style={{display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', flex: '1', height: '100%'}}>
          <ShoeCard/>
          <ShoeCard/>
          <ShoeCard/>
          <ShoeCard/>
          <ShoeCard/>
          <ShoeCard/>
        </div>
      </div>
    </div>
  )
}

export default Home
