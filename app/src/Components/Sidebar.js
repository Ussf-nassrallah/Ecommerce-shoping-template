import { React, useState } from 'react';
import { RiBarChartHorizontalFill } from 'react-icons/ri';
import items from '../data/categories';
import SidebarCategory from './SidebarCategory';
import '../styles/components/Sidebar.scss';

const Sidebar = () => {
  const [Categories, setCategories] = useState(items);

  return (
    <div className="sidebar">
      <button className="sidebar__btn btn btn-secondary">
        <RiBarChartHorizontalFill  className="icon" />
        departments
      </button>

      <div className="sidebar__menu">
        <ul>
          {
            Categories.map(category => <SidebarCategory 
              key={category.id}
              name={category.name}
              subCategory = {category.subCategory ? category.subCategory : []}
            />)
          }
        </ul>
      </div>
    </div>
  )
}

export default Sidebar;