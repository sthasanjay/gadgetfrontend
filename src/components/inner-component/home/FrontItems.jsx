import React from 'react'

const FrontItems = (props) => {
  return (
    <>
    <div className = "item ">
      <div className = "image-container">
        <img 
          src = {props.img}
          alt = "gadgets"
          className = "img-fluid img-responsive"
        />
      </div>
      <div className = "img-name py-3">
        <span>{props.name}</span>
      </div>
    </div>
    </>
  )
}

export default FrontItems
