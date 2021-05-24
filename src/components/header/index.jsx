import React, { useContext } from 'react'
import AddCart from '../add_cart'
import AddProdContext from '../../contexts/contextAddProd'

import logo from '../../assets/images/header/site-logo-corebiz-preto-cinza.svg'
import cart from '../../assets/images/header/cart.svg'
import search from '../../assets/images/header/search-icon.svg'
import user from '../../assets/images/header/user-icon.svg'
import hamburger from '../../assets/images/header/hamburger-menu.svg'

import styles from './styles.module.scss'

function Header () {

  const { countCart } = useContext(AddProdContext)

  return (
    <header>
      <div className="container">
        <div className={styles.header}>
          <div className={styles.hamburger}>
            <img src={hamburger} alt="Hamburger menu" />
          </div>
          <div className={styles.logo}>
            <img src={logo} alt="Logo Corebiz" />
          </div>
          <div className={styles.search}>
            <input type="text" placeholder="O que está procurando?" />
            <button type="button">
              <img src={search} alt="Search-icon" />
            </button>
          </div>
          <div className={styles.account}>
            <button className={styles.minhaConta}>
              <img src={user} alt="user icon" />
              <span>Minha conta</span>
            </button>
            <div className={styles.cart + " cart-global"}>
              <div className={styles.group}>
                <img src={cart} alt="Carrinho" />
                <span>{countCart}</span>
              </div>
              <AddCart />
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header