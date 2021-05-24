import React from 'react'
import { useDispatch } from 'react-redux'
import { prodCartExclude } from '../../store/actions/prodActions'

import styles from './styles.module.scss'

function AddCart () {

  const dispatch = useDispatch({ prodCartExclude })

  const prodStorage = JSON.parse(localStorage.getItem('add_cart_corebiz'))

  const realToFormatPrice = valor => (
    'R$ ' + (valor/100).toFixed(2).replace('.',',')
  )

  return (
    <div className={styles.addCart + " cart-global-add"} >
      <div className={styles.title}>
        Meu carrinho
      </div>
      <div className={styles.addList}>
        {
          prodStorage !== null ? prodStorage.map(prod => (
            <div className={styles.prodItems} key={prod.productId}>
              <div className={styles.prodTitle}>{prod.productName}</div>
              <div className={styles.price}>{realToFormatPrice(prod.price)}</div>
              <button onClick={() => dispatch(prodCartExclude(prodStorage, prod.productId))}>
                remover
              </button>
            </div>
          )) : ("Carrinho vazio")
        }
      </div>
    </div>
  )
}

export default AddCart