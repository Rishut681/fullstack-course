import React from 'react'

function Total(parts) {
  console.log(parts)
  return (
    <div>
      <h3>Number of exercises {parts[0].exercises + parts[1].exercises + parts[2].exercises} </h3> 
    </div>
  )
}

export default Total