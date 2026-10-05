import NavToolbar from './components/NavToolbar'
import Hero from './sections/Hero'
import SkillsTicker from './sections/SkillsTicker'
import Work from './sections/Work'
import Awards from './sections/Awards'
import Playground from './sections/Playground'
import About from './sections/About'
import Contact from './sections/Contact'

export default function App() {
  return (
    <>
      <NavToolbar />
      <Hero />
      <main>
        <SkillsTicker />
        <Work />
        <Awards />
        <Playground />
        <About />
      </main>
      <Contact />
    </>
  )
}
