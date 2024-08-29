import React from 'react';
import './Services.css';

const Services = () => {
  return (
    <div className='services'>
      <h1>Service Add-Ons</h1>
      <div className="add">
        <div className="add_one">
          <label className="circle-checkbox">
            <input type="checkbox" />
            <span className="checkmark"></span>
            <span className="description">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Diam nisi, cras neque Lorem ipsum 
              dolor sit amet, Lorem ipsum dolor sit amet.
            </span>
          </label>
          <div className="price-time">
              <span className="price">$100</span> 
              <span className="time">2 days</span>
            </div>
        </div>

        <div className="add_one">
          <label className="circle-checkbox">
            <input type="checkbox" />
            <span className="checkmark"></span>
            <span className="description">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Diam nisi, cras neque Lorem ipsum 
              dolor sit amet, Lorem ipsum dolor sit amet.
            </span>
          </label>
          <div className="price-time">
              <span className="price">$100</span> 
              <span className="time">2 days</span>
            </div>
        </div>

        <div className="add_one">
          <label className="circle-checkbox">
            <input type="checkbox" />
            <span className="checkmark"></span>
            <span className="description">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Diam nisi, cras neque Lorem ipsum 
              dolor sit amet, Lorem ipsum dolor sit amet.
            </span>
          </label>
          <div className="price-time">
              <span className="price">$100</span> 
              <span className="time">2 days</span>
            </div>
        </div>
      </div>
    </div>
  );
}

export default Services;
