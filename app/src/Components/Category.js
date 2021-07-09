import React from 'react'

const Category = ({ id, iconSrc, name }) => {
  return (
    <div className="category">
      <img src={iconSrc} className="category__icon" alt={name} />
      <p>{name}</p>
    </div>
  )
}

export default Category
