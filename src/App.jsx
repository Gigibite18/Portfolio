import NavToolbar from './components/NavToolbar'
import Hero from './sections/Hero'
import SkillsTicker from './sections/SkillsTicker'

export default function App() {
  return (
    <>
      <NavToolbar />
      <Hero />
      <main>
        <SkillsTicker />
      </main>
    </>
  )
}
