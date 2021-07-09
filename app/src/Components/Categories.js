import { React, useState } from 'react';
import items from '../data/categories';
import Category from '../Components/Category';
import '../styles/components/Categories.scss';

const Catygories = () => {
  const [categories, setCategories] = useState(items);

  return (
  <div className="container">
      <div className="categories">
        {
          categories.map(category => <Category
            key = {category.id}
            iconSrc = {category.iconSrc}
            name = {category.name}
          />)
        }
      </div>
    </div>
  )
}

export default Catygories
