import React from 'react'
import './Home.css'
import Header from '../../components/Navbar/Header/Header'
import Exploremenu from '../../components/ExploreMenu/Exploremenu'
import { useState } from 'react'

const Home = () => {
    const [category,setCategory] = useState("All");
  return (
    <div>
      <Header/>  
      <Exploremenu category={category} setCategory={setCategory}/>
      <FoodDisplay category={category}/>
    </div>
  )
}

export default Home