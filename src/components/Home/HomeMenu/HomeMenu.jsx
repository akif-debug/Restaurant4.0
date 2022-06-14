import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './HomeMenu.css'
import HomeMenuData from "./HomeMenuData";
import {Link} from 'react-router-dom' 

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
        <div className="container home-slider" style={{ textAlign: 'center' }}>
          <h1 className="section__h1">our menu</h1>
          <p className="section__p">some special dishes</p>
          <Slider {...settings}>
            {HomeMenuData.map((item, index) => {
              return (
                <div className="home-slider__child">
                  <div className={item.className}>
                    <img src={item.img} style={{ width: '95%', margin: 'auto' }} />
                    <h4 className="home-slider__h4">{item.heading}</h4>
                    <p className="home-slider__para">{item.para}</p>
                  </div>
                </div>
              )
            })}
          </Slider>
          <Link exact to='menu' className="home-slider__link">
            <button className="home-slider__btn">explore menu</button>
          </Link>
        </div>
      </>
    );
  }
}