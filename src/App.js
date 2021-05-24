import Header from './components/header'
import Banner from './components/banner'
import Produtos from './components/products'
import Newsletter from './components/newsletter'
import Footer from './components/footer'

import { useState } from 'react'
import AddProdContext from './contexts/contextAddProd'

import './styles/global.scss'

function App() {

  const countProd = localStorage.getItem('add_cart_corebiz') !== null ? JSON.parse(localStorage.getItem('add_cart_corebiz')).length : 0
  const [countCart, setCountCart] = useState(countProd)
  const objCountCart = {countCart, setCountCart}

  return (
    <AddProdContext.Provider value={objCountCart}>
      <Header />
      <main>
        <Banner />
        <Produtos />
        <Newsletter />
        <Footer />
      </main>
    </AddProdContext.Provider>
  )
}

export default App
