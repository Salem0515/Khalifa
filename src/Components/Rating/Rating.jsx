import React from 'react'
import './Rating.css'
import Star from '../../assets/Star.png'
import stars from '../../assets/stars.png'
import bar from '../../assets/bar.png'
import PosterAvatar from '../../assets/PosterAvatar.png'
import Elllipse from '../../assets/Ellipse10.png'

const Rating = () => {
  return (
    <div>
      <div className="rating">
        <div className="title">
        <img src={Star} alt="" />
        <h2>4.6 Service Rating . 4.6 Service Rating</h2>
        </div>
        <div className="rating_bars">
          <div className="bar">
            <p>Work Qualty</p> 
            <img src={Star} alt="" className='lonly_star' />
            <p>5.0</p>
            <img src={stars} alt="" className='many_stars' />
            <img src={bar} alt="" className='bar_img' />
            <p>4</p>
          </div>
          <div className="bar">
            <p>Communiction & Collaboration</p>
            <img src={Star} alt="" className='lonly_star' />
            <p>5.0</p>
            <img src={stars} alt="" className='many_stars' />
            <img src={bar} alt="" className='bar_img' />
            <p>4</p>
          </div>
          <div className="bar">
            <p>Adherence to Schedule</p> 
            <img src={Star} alt="" className='lonly_star' />
            <p>5.0</p>
            <img src={stars} alt="" className='many_stars' />
            <img src={bar} alt="" className='bar_img' />
            <p>4</p>
          </div>
        </div>

        <div className="Comments">
        <br />
        <div className="janeSmith">
            <img src={PosterAvatar} alt="" className='this_idiot' />
            <div className="comment_text">
              <h3>Jane Smith</h3>
              <img src={stars} alt="" />
              <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Diam nisi, cras neque Lorem ipsum dolor sit amet,Lorem ipsum dolor sit amet, consectetur adipiscing elit.... Lorem ipsum dolor sit amet, consectetur adipiscing elit. Diam nisi, cras neque Lorem ipsum dolor sit amet,Lorem ipsum dolor sit amet, consectetur adipiscing elit....
              </p>
            </div>
        </div>
        <div className="janeSmith">
            <img src={PosterAvatar} alt="" className='this_idiot'/>
            <div className="comment_text">
              <h3>Jane Smith</h3>
              <img src={stars} alt="" />
              <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Diam nisi, cras neque Lorem ipsum dolor sit amet,Lorem ipsum dolor sit amet, consectetur adipiscing elit.... Lorem ipsum dolor sit amet, consectetur adipiscing elit. Diam nisi, cras neque Lorem ipsum dolor sit amet,Lorem ipsum dolor sit amet, consectetur adipiscing elit....
              </p>
            </div>
        </div>
        <div className="janeSmith">
            <img src={PosterAvatar} alt="" className='this_idiot' />
            <div className="comment_text">
              <h3>Jane Smith</h3>
              <img src={stars} alt="" />
              <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Diam nisi, cras neque Lorem ipsum dolor sit amet,Lorem ipsum dolor sit amet, consectetur adipiscing elit.... Lorem ipsum dolor sit amet, consectetur adipiscing elit. Diam nisi, cras neque Lorem ipsum dolor sit amet,Lorem ipsum dolor sit amet, consectetur adipiscing elit....
              </p>
            </div>
        </div>
        <div className="Add_coment">
              <img src={Elllipse} alt="" className='this_idiot' />
                <div className="text_area">
                  <input type="text_area" placeholder='Write your review here' />
                  <button className='post'>Post Review</button>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Rating