import React from 'react'
import './Blogs.css'
import chefIcon from '../../../assets/blogs/chef64.png'
import BlogsData from './BlogsData'
import Slider from 'react-slick'

const Blogs = () => {
    var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
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
        <div className='container blogs-slider'>
            <div className="row blogs-row">
                <Slider {...settings}>
                    {BlogsData.map((item) => {
                        return (
                            <div className="col-lg-12">
                                <div className="row">
                                    <div className="col-lg-4" style={{padding: '10px'}}>
                                        <img src={item.img} width='100%' className='blog-img' />
                                    </div>
                                    <div className="col-lg-4" style={{padding: '10px'}}>
                                        <div className="blogs-head">
                                            <h3 className="blogs-heading">{item.heading}</h3>
                                            <img src={chefIcon} className='head-img' />
                                        </div>
                                        <p className="blogs-para">{item.para}</p>
                                    </div>
                                    <div className="col-lg-4" style={{padding: '10px'}}>
                                        <img src={item.img2} width='100%' className='blog-img' />
                                    </div>
                                    {/* ////////////////////////////////////// */}
                                </div>
                            </div>
                        )
                    })}
                </Slider>
            </div>
        </div>
    )
}

export default Blogs