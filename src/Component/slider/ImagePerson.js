import React from 'react'

function ImagePerson({ image, id, info, name, location }) {
  return (
    <article key={id}>
      <div className='image'>
        <img src={image} alt='' />
      </div>
      <p>{info}</p>
      <p>
        {name} <span>{location}</span>
      </p>
    </article>
  )
}

export default ImagePerson
