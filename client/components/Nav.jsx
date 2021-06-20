// nested ul li, with collapse button, like EDA site
import React from 'react'

function Nav() {
  return (
    <div className='nav'>
      <ul>
        <li>Home</li>
        <li>Ancient Greece</li>
        <ul>
          <li>Orion</li>
          <li>Pliedies</li>
        </ul>
      </ul>
    </div>
  )
}

export default Nav