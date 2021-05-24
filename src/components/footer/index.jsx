import React from 'react'
import styles from './styles.module.scss'

import corebiz from '../../assets/images/footer/corebiz-logo.svg'
import vtex from '../../assets/images/footer/vtex-logo.svg'
import envelope from '../../assets/images/footer/envelope.svg'
import headphone from '../../assets/images/footer/headphone.svg'

function Footer() {
  
  return (
    <footer>
      <div className="container">
        <div className={styles.footer}>
          <div className={styles.base1}>
            <div className={styles.title}>
              <span>Localização</span>
            </div>
            <div className={styles.address}>
              <p>Avenida Andrômeda, 2000. Bloco 6 e 8</p>
              <p>Alphavile SP</p>
              <p>brasil@corebiz.ag</p>
              <p>+55 11 3090 1039</p>
            </div>
          </div>
          <div className={styles.base2}>
            <button>
              <img src={envelope} alt="Envelope img" />
              <span>Entre em contato</span>
            </button>
            <button>
              <img src={headphone} alt="Headphone img" />
              <span>Fale com o nosso consultor online</span>
            </button>
          </div>
          <div className={styles.base3}>
            <div className={styles.poweredBy}>
              <span>
                Created by
                <img src={corebiz} alt="Corebiz logo" />
              </span>
              <span>
                Powered by
                <img src={vtex} alt="VTEX logo" />
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer