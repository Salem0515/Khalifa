import React from 'react'
import './AboutUs.css'
import grgs from '../../assets/grgss.png'
import Star from '../../assets/Star.png'
import Ellipse10 from '../../assets/Ellipse10.png'
import cart from '../../assets/cart.png'
import Heart from '../../assets/Heart.png'
import Tag from '../../assets/Tag.png'
const AboutUs = () => {
  return (
    <div>
      <div className="aboutUS">
        <h2>Suggested Services</h2>
        <div className="cards">
            <div className="card">
                <div className="imegas">
                <img src={grgs} alt="" className='grgs' />
                <div className="kid">
                    <img src={Heart} alt="" className='heart' />
                </div>
                </div>
                
                <p className='About'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam cum quos sed ipsam vero libero perspiciatis aut corrupti voluptas magni optio, eum possimus consequatur illo harum numquam dolores voluptate laboriosam!</p>
                <div className="ratt">
                    <img src={Star} alt="" className='rating_star' />
                    <p className='num'>4.9</p>
                    <img src={cart} alt="" />
                    <p className='num'>300</p>
                </div>
                <div className="JS">
                    <img src={Ellipse10} alt="" className='User' />
                    <p>Jane Smith</p>
                    <img src={Tag} alt="" className='tag' />
                    <p>$10</p>
                </div>
            </div>
            <div className="card">
            <div className="imegas">
                <img src={grgs} alt="" className='grgs' />
                <div className="kid">
                    <img src={Heart} alt="" className='heart' />
                </div>
                </div>                <p className='About'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam cum quos sed ipsam vero libero perspiciatis aut corrupti voluptas magni optio, eum possimus consequatur illo harum numquam dolores voluptate laboriosam!</p>
                <div className="ratt">
                    <img src={Star} alt="" className='rating_star' />
                    <p className='num'>4.9</p>
                    <img src={cart} alt="" />
                    <p className='num'>300</p>
                </div>
                <div className="JS">
                    <img src={Ellipse10} alt="" className='User' />
                    <p>Jane Smith</p>
                    <img src={Tag} alt="" className='tag' />
                    <p>$10</p>
                </div>
            </div>
            <div className="card">
            <div className="imegas">
                <img src={grgs} alt="" className='grgs' />
                <div className="kid">
                    <img src={Heart} alt="" className='heart' />
                </div>
                </div>                <p className='About'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam cum quos sed ipsam vero libero perspiciatis aut corrupti voluptas magni optio, eum possimus consequatur illo harum numquam dolores voluptate laboriosam!</p>
                <div className="ratt">
                    <img src={Star} alt="" className='rating_star' />
                    <p className='num'>4.9</p>
                    <img src={cart} alt="" />
                    <p className='num'>300</p>
                </div>
                <div className="JS">
                    <img src={Ellipse10} alt="" className='User' />
                    <p>Jane Smith</p>
                    <img src={Tag} alt="" className='tag' />
                    <p>$10</p>
                </div>
            </div>
            <div className="card">
            <div className="imegas">
                <img src={grgs} alt="" className='grgs' />
                <div className="kid">
                    <img src={Heart} alt="" className='heart' />
                </div>
                </div>
                <p className='About'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam cum quos sed ipsam vero libero perspiciatis aut corrupti voluptas magni optio, eum possimus consequatur illo harum numquam dolores voluptate laboriosam!</p>
                <div className="ratt">
                    <img src={Star} alt="" className='rating_star' />
                    <p className='num'>4.9</p>
                    <img src={cart} alt="" />
                    <p className='num'>300</p>
                </div>
                <div className="JS">
                    <img src={Ellipse10} alt="" className='User' />
                    <p>Jane Smith</p>
                    <img src={Tag} alt="" className='tag' />
                    <p>$10</p>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default AboutUs
