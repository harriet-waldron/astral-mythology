import React, { useState, useEffect} from 'react'

import { Route } from 'react-router-dom'

import { getHomepage, getPlanets } from '../api'

//Import components
import Nav from './Nav'
import Home from './Home'
import Sky from './Sky' 
import Star from './Star'

//App function

function App () {

const [home, setHome] = useState('')
const [info, setInfo] = useState([])

// useEffect(() => {
//   getHomepage()
//   .then(response => {
//     setHome(response.statement)
//     return null
//   })
//   .catch((err) => {
//     console.error(err.message)
//   })
// }, [])

useEffect(() => {
  getPlanets()
  .then(response => {
    return setInfo(response)  
})
.catch((err) => {
  console.error(err.message)
})
}, [])

  return (
    <>
      <div className='title'>
        <h1>Stars</h1>
        {/* {home} */}
        {info}
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