import React from 'react'

const Title = ( { title }) => {
  return (
    <div>
        <h1 className="text-center pt-4 uppercase text-3xl font-bold mb-5 "style={{ textShadow: '2px 2px 2px gray', fontSize:"33px" }}>{title}</h1>
    </div>
  )
}

export default Title
