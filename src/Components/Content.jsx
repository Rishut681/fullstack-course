import React from 'react'

function Content({p1,e1,p2,e2,p3,e3}) {
  return (
    <div>
      <h4>
        {p1} {e1}
      </h4>
      <h4>
        {p2} {e2}
      </h4>
      <h4>
        {p3} {e3}
      </h4>
    </div>
  )
}

export default Content