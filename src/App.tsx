import Nav from './components/Nav'
import Hero from './components/Hero'
import About from './components/About'
import Pillars from './components/Pillars'
import Mowosi from './components/Mowosi'
import Academy from './components/Academy'
import Race from './components/Race'
import RaceStack from './components/RaceStack'
import Ecosystem from './components/Ecosystem'
import Join from './components/Join'
import Footer from './components/Footer'

function App() {
  return (
    <>
      <Nav />
      <Hero />
      <span className="gold-line" />
      <About />
      <span className="gold-line" />
      <Pillars />
      <span className="gold-line" style={{ marginTop: 0 }} />
      <Academy />
      <span className="gold-line" />
      <Race />
      {/* <RaceStack /> */}
      <span className="gold-line" />
      <Ecosystem />
      <span className="gold-line" />
      <Mowosi />
      <Join />
      <Footer />
    </>
  )
}

export default App
