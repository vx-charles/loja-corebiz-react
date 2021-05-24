import React from 'react'

import Slider from "react-slick";
import "../../../node_modules/slick-carousel/slick/slick.css";
import "../../../node_modules/slick-carousel/slick/slick-theme.css";

import styles from './styles.module.scss'
import banner from '../../assets/images/banners/banner.jpg'

function Banner() {

  // const settings = {
  //   slidesPerRow: 1,
  //   dots: true,
  //   autoplay: true,
  //   centerPadding: 0,
  //   autoplaySpeed: 6000,
  //   className: 'banners-slides',
  // }

  const settings = {
    slidesPerRow: 1,
    dots: true,
    autoplay: true,
    autoplaySpeed: 6000,
    lazyLoad: true
  }

  const loopBanner = () => {
    let i = 0
    let bannerHTML = []
    while(i++ < 4){ // faz 4 banners
      bannerHTML.push(
        <div className={styles.banners} key={i}>
          <div className={styles.description}>
            <p>Olá, o que você está buscando?</p>
            <p>Criar ou migrar seu<br /> e-commerce?</p>
          </div>
          <img src={banner} alt={"banner-" + i} />
      </div>
      )
    }

    return(
      bannerHTML.map(banner => banner)
    )
  }

  return (
    <Slider {...settings} className="banners-slides">
      {loopBanner()}
    </Slider>
  )
}

export default Banner