import React from 'react'
import '../styles/components/SelectDropdown.scss'

const SelectDropdown = ({ defaultOpt }) => {
  return (
    <div className="slc-dropdown">
      <select className="btn btn-slc">
        <option value="option-1">{defaultOpt}</option>
        <option value="option-2">Option-2</option>
        <option value="option-3">Option-3</option>
        <option value="option-4">Option-4</option>
      </select>
    </div>
  )
}

export default SelectDropdown
