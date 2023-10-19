import React from 'react'

function Total({exercise1, exercise2, exercise3}) {
  return (
    <div>
      <h3>Number of exercises {exercise1 + exercise2 + exercise3} </h3> 
    </div>
  )
}

export default Total