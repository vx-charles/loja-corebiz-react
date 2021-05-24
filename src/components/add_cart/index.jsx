import React, { useContext } from 'react'
import _ from 'lodash'
import AddProdContext from '../../contexts/contextAddProd'

import styles from './styles.module.scss'

function AddCart () {

  // Pega a lista de produtos no localStorage do navegador quando adicionado.
  const prodStorage = JSON.parse(localStorage.getItem('add_cart_corebiz'))
  const { setCountCart } = useContext(AddProdContext)

  const realToFormatPrice = valor => (
    'R$ ' + (valor/100).toFixed(2).replace('.',',')
  )

  const prodCartExclude = (product, id) => {
    const newList = _.remove(product, function(obj){      
      return !_.isEqual(id, obj.productId); //utiliza o isEqual para comparar
    })
  
    localStorage.setItem('add_cart_corebiz', JSON.stringify(newList))
    setCountCart(JSON.parse(localStorage.getItem('add_cart_corebiz')).length)
    
    if(localStorage.getItem('add_cart_corebiz') === "[]") {
      localStorage.removeItem('add_cart_corebiz') // remove de vez do localStorage do navegador quando array estiver vazio.
    }
  }

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
              <button onClick={() => prodCartExclude(prodStorage, prod.productId)}>
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