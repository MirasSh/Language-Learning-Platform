import React from "react"

function Classes({ product }) {
  return (
    <div className="new">
      <p className="name">
        <b>{product.name}</b>
      </p>
      <a href={product.src}>
        <img src={product.image} alt={product.name} />
        <button className="but">{product.button}</button>
      </a>
    </div>
  )
}

export default Classes
