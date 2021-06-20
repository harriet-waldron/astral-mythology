import React from 'react'
import { Route } from 'react-router-dom'

//Import components
import Nav from './Nav'
import Home from './Home'
import Sky from './Sky' 
import Star from './Star'

//App function

function App () {
  return (
    <>
      <div className='title'>
        <h1>Stars</h1>
      </div>  
      <div className='main'> 
        <Route path='/' component={Nav} />
        <Route exact path='/' component={Home} />
        <Route path='/sky/:name' component={Sky} />
        <Route path='/sky/:name/:code' component={Star} />
      </div>
    </>
  )
}

export default App