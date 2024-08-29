import React from 'react'
import './Discription.css'
import stars from '../../assets/stars.png'
import grgs from '../../assets/grgs.png'
const Discription = () => {
  return (
    <div>
      <div className="design">
        <p className='logoDesign'>Design / Logo Design</p>
        <div className="lorem">
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Exercitationem enim sunt harum eius debitis quo, in, ab consequatur quisquam, aut perferendis explicabo praesentium vitae aspernatur. Libero optio in consectetur animi?</p>
        </div>
        <div className="stars">
            <img src={stars} alt="" />
            <p>4.1 (500)</p>
        </div>
        <div className="grgsss">
            <img src={grgs} alt="" />
      </div>
      <div className="disc">
        <h1>Description</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Diam nisi, cras neque Lorem ipsum dolor sit amet, Lorem ipsum dolor sit amet, consectetur adipiscing elit. Diam nisi, cras neque Lorem ipsum dolor sit amet, Lorem ipsum dolor sit amet, consectetur adipiscing elit. Diam nisi, cras neque Lorem ipsum dolor sit amet, Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Diam nisi, cras neque Lorem ipsum dolor sit amet.</p>
      </div>
    </div>
    </div>
  )
}

export default Discription
