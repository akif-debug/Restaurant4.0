import React from "react";
import './Hero.css'
import HeroData from './HeroData'

const Home = () => {
  return (
    <>
      <header className="home">
        <div id="carouselExampleFade" className="carousel slide carousel-fade" data-bs-ride="carousel">
          <div className="carousel-inner">
            {HeroData.map((item, index) => {
              return (
                <div className={item.class}>
                  <img src={item.img} className="home-carousel__img d-block m-auto"/>
                  <div className="carousel-caption">
                    <h2 className="carousel-caption__h2">{item.heading}</h2>
                    <p className="carousel-caption__p">{item.para}</p>
                  </div>
                </div>
              )
            })}
          </div>
          <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </header>
    </>
  )
}

export default Home