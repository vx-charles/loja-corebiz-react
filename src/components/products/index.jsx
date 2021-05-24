import React, { useEffect, useRef } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { prodListApi, addCart } from '../../store/actions/prodActions'

import styles from './styles.module.scss'
import loading from '../../assets/images/products/loading-icon.svg'
import starFill from '../../assets/images/products/star-fill-icon.svg'
import starOutline from '../../assets/images/products/star-outline-icon.svg'

import Slider from "react-slick";
import "../../../node_modules/slick-carousel/slick/slick.css";
// import "../../../node_modules/slick-carousel/slick/slick-theme.css";

function Produtos() {

  const props = useSelector(state => (
    {
      prodList: state.products.prodList,
      loading: state.products.loading,
      addCart: state.products.addCart
    }
  ))

  const dispatch = useDispatch({ prodListApi, addCart })
  const initialRender = useRef(true)

  useEffect(() => {
    if (initialRender.current) {
      dispatch(prodListApi())
      initialRender.current = false
    }
  })

  const stars = (star) => {
    let i = 0, t = 0, c = 0
    let imgStar = []

    while(i++ < star){
      imgStar.push(<img key={c++} src={starFill} alt={"fill-star-" + i} />)
    }
    while(t++ < 5 - star){
      imgStar.push(<img key={c++} src={starOutline} alt={"outline-star-" + i} />)
    }
    return (
      imgStar.map(star => star)
    )
  }

  const realToFormatPrice = valor => (
    'R$ ' + (valor/100).toFixed(2).replace('.',',')
  )

  const prodListMap = () => (
    !props.loading ? props.prodList.map(prod => (
      <div className={styles.prodItem} key={prod.productId}>
        <div className={styles.prodImg}>
          {
            prod.listPrice !== null &&
            <div className={styles.flag}><span>Off</span></div>
          }
          <img src={prod.imageUrl} alt={prod.productName} />
        </div>
        <div className={styles.prodInfo}>
          <div className={styles.title}>{prod.productName}</div>
          <div className={styles.stars}>{stars(prod.stars)}</div>
          <div className={styles.price}>
            <p className={styles.slash}>
              {prod.listPrice !== null && <>de {realToFormatPrice(prod.listPrice)}</>}
            </p>
            <p>por {realToFormatPrice(prod.price)}</p>
          </div>
          <div className={styles.installments}>
            {prod.installments.length !== 0 && <p>ou em {prod.installments[0].quantity}x de {realToFormatPrice(prod.installments[0].value)}</p>}
          </div>
          <button className={styles.buy} onClick={() => dispatch(addCart([...props.addCart, prod]))}>
            Comprar
          </button>
        </div>

      </div>
    )) : (<img className="loading" src={loading} alt="Loading..." />)
  )

  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          dots: false
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          dots: true
        }
      }
    ]
  }

  return (
    <div className="container">
      <div className={styles.produtos}>
        <div className={styles.productTitle}>
          <span>Mais vendidos</span>
        </div>
          {
            !props.loading ?
              <div className={styles.productList}>
                <Slider { ...settings } className="products-slides">
                  {prodListMap()}
                </Slider>
              </div>
            : <img className="loading" src={loading} alt="Loading..." />
          }
      </div>
    </div>
  )
}

export default Produtos