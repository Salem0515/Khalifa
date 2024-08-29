import React from 'react'
import Nav from './Components/Nav/Nav'
import Discription from './Components/Discription/Discription'
import Serivces from './Components/Serivces/Serivces'
import Purchase from './Components/Purchase/Purchase'
import Rating from './Components/Rating/Rating'
import AboutUs from './Components/MoreAboutUs/AboutUs'





const App = () => {
  return (
    <div>
      <Nav/>
      <Discription/>
      <Serivces/>
      <Purchase/>
      <Rating/>
      <AboutUs/>
    </div>
  )
}

export default App
