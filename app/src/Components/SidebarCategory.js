import React from 'react'
import { RiArrowRightSLine } from 'react-icons/ri'

const SidebarCategory = ({ id, name, itemCtaegories }) => {
  return (
    <li className="sc">
      <p className="sc__name">{name}</p>
      <RiArrowRightSLine className="arrowIcon" />
      {/* <ul>
        {
          itemCtaegories.map(itemCtaegory => <li>{itemCtaegory}</li>)
        }
      </ul> */}
    </li>
  )
}

export default SidebarCategory
