import React, { useState } from 'react'
import { GoTriangleDown, GoTriangleUp } from 'react-icons/go'
function Question({ title, info }) {
  const [showInfo, setShowInfo] = useState(false)
  return (
    <article>
      <div>
        <p>{title} </p>{' '}
        <span className='span' onClick={() => setShowInfo(!showInfo)}>
          {showInfo ? (
            <GoTriangleUp style={{ color: 'white' }} />
          ) : (
            <GoTriangleDown style={{ color: 'white' }} />
          )}
        </span>
      </div>

      {showInfo && <div className='answer'>{info}</div>}
    </article>
  )
}

export default Question
