import NavToolbar from './components/NavToolbar'
import Hero from './sections/Hero'
import SkillsTicker from './sections/SkillsTicker'
import Work from './sections/Work'

export default function App() {
  return (
    <>
      <NavToolbar />
      <Hero />
      <main>
        <SkillsTicker />
        <Work />
      </main>
    </>
  )
}
