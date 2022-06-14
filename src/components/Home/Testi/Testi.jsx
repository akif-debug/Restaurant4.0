import React, { Component } from 'react'
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import './Testi.css'
import { AiFillStar } from 'react-icons/ai'
import TestiData from './TestiData'

export default class HomeMenu extends Component {
    render() {
        var settings = {
            dots: true,
            infinite: false,
            speed: 500,
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 0,
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 2,
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
                <div className="container testi-slider" style={{ textAlign: 'center' }}>
                    <h1 className="section__h1">Testimonials</h1>
                    <p className="section__p">what our customer says</p>
                    {/* ================================= */}
                    <Slider {...settings}>
                        {TestiData.map((item) => {
                            return (
                                <div className="testi-slider__col">
                                    <div className="testi-col__child">
                                        <div className="img-box">
                                            <img src={item.img} className='custo-img' />
                                        </div>
                                        <div className="text-box" style={{ width: '400px' }}>
                                            <h1 className="text-box__h1">{item.name}</h1>
                                            <p className="text-box__p">{item.para}</p>
                                            <span style={{ fontSize: '25px', lineHeight: '0', color: '#FFD700' }}>
                                                <AiFillStar /><AiFillStar /><AiFillStar /><AiFillStar /><AiFillStar />
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                    </Slider>
                    {/* ================================== */}
                </div>
            </>
        )
    }
}