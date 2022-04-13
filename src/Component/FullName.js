import React from 'react'

const FullName = ({data}) => {
  return (

    <div>
        <h2>Yass Falle7a </h2>
        {data.FullName} <br/>
   {data.Bio}
    </div>
  )
}

export default FullName