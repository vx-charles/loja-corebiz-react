import Header from './components/header'
import Banner from './components/banner'
import Produtos from './components/products'
import Newsletter from './components/newsletter'
import Footer from './components/footer'

import './styles/global.scss'

function App() {
  return (
    <>
      <Header />
      <main>
        <Banner />
        <Produtos />
        <Newsletter />
        <Footer />
      </main>
    </>
  )
}

export default App
