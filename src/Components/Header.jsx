
import React from 'react'

function Header(props) {
  console.log(props)
  return (
    <div>
        <h1>{props.courses}</h1>
    </div>
  )
}

export default Header