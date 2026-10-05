import { matchPath, useLocation } from 'react-router-dom'
import NavToolbar from './components/NavToolbar'
import Hero from './sections/Hero'
import SkillsTicker from './sections/SkillsTicker'
import Work from './sections/Work'
import Awards from './sections/Awards'
import Playground from './sections/Playground'
import About from './sections/About'
import Contact from './sections/Contact'
import CaseOverlay from './case/CaseOverlay'

export default function App() {
  const { pathname } = useLocation()
  const match = matchPath('/work/:slug', pathname)
  const caseOpen = Boolean(match)

  return (
    <>
      {/* the home stays mounted under the case overlay (Behance-style) */}
      <div inert={caseOpen || undefined}>
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
      </div>
      {match && <CaseOverlay slug={match.params.slug} />}
    </>
  )
}
