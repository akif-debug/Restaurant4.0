import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './HomeMenu.css'
import HomeMenuData from "./HomeMenuData";

export default class HomeMenu extends Component {
  render() {
    var settings = {
      dots: true,
      infinite: false,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 4,
      initialSlide: 0,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 800,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    };
    return (
      <>
        <div className="container" style={{ textAlign: 'center' }}>
          <Slider {...settings} className='home-slider'>
            {HomeMenuData.map((item, index) => {
              return (
                <div className="home-slider__child">
                  <div className={item.className}>
                    <img src={item.img} style={{ width: '95%', margin: 'auto' }} />
                    <h4 className="home-slider__h4">{item.heading}</h4>
                    <p className="home-slider__p">{item.para}</p>
                  </div>
                </div>
              )
            })}
          </Slider>
        </div>
      </>
    );
  }
}