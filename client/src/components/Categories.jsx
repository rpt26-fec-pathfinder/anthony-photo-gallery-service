import React, { useState } from 'react';
import { AllCategories, Category } from '../styling/CategoriesStyled.jsx'



const Categories = () => {
  const [category, setCategory] = useState('')

  return (
    <AllCategories >
      <Category href="">All Games<span>&nbsp;&nbsp;>&nbsp;&nbsp;</span></Category>
      <Category href="">Strategy Games<span>&nbsp;&nbsp;>&nbsp;&nbsp;</span></Category>
      <Category href="">Age of Empires Franchise Franchise<span>&nbsp;&nbsp;>&nbsp;&nbsp;</span></Category>
      <Category href="">Age of Empires II: Definitive Edition</Category>
    </AllCategories >
  )
}

export default Categories;