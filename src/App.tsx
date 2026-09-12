import './App.css'
import Nav from './components/nav'
import Banner from './components/baner'
import Footer from './components/footer'
import Software from './components/technologys/technology'
import { Suspense } from 'react'
import Technology from './components/technologys/technology'


const technologyPromise = async () => {
  const res = await fetch('/data.json')
  const data = await res.json()
  return data
}

function App() {

  return (
    <>
      <Nav />

      <Banner />

      {/* <Suspense fallback={<p>Loading...</p>}>
        <Software technologyPromise={technologyPromise()} />
      </Suspense> */}
      <Technology technologyPromise={technologyPromise()} />

      <Footer />
    </>
  )
}

export default App