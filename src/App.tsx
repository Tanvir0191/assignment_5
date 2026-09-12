import './App.css'
import Nav from './components/nav'
import Banner from './components/baner'
import Footer from './components/footer'

import Technology from './components/technologys/technology'
import { Toaster } from 'react-hot-toast'




function App() {

  return (
    <>
      <Nav />

      <Banner />


      <Technology />
      <Toaster />

      <Footer />
    </>
  )
}

export default App