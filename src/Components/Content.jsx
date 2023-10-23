import React from 'react'

function Content(parts) {
  console.log(parts)
  return (
    <div>
      <p>name:{parts[0].name}</p>
      <p>exercise:{parts[0].exercises}</p>
      <p>name:{parts[1].name}</p>
      <p>exercise:{parts[1].exercises}</p>
      <p>name:{parts[2].name}</p>
      <p>exercise:{parts[2].exercises}</p>

    </div>
  )
}

export default Content