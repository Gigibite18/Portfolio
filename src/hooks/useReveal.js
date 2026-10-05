import { useEffect, useRef, useState } from 'react'

/**
 * Short fade-up when an element first enters the viewport.
 * Content is visible by default (SSR / no-JS / reduced motion);
 * we only hide it once we know the observer can reveal it again.
 */
export function useReveal({ threshold = 0.15 } = {}) {
  const ref = useRef(null)
  const [state, setState] = useState('shown')

  useEffect(() => {
    const el = ref.current
    if (!el || !('IntersectionObserver' in window)) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    const rect = el.getBoundingClientRect()
    if (rect.top < window.innerHeight * 0.9) return // already on screen

    setState('hidden')
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setState('shown')
          io.disconnect()
        }
      },
      { threshold },
    )
    io.observe(el)
    return () => io.disconnect()
  }, [threshold])

  return [ref, state]
}

/** Fires once when the element scrolls into view (for draw-on effects). */
export function useInView({ threshold = 0.4 } = {}) {
  const ref = useRef(null)
  const [inView, setInView] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    if (!('IntersectionObserver' in window)) {
      setInView(true)
      return
    }
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true)
          io.disconnect()
        }
      },
      { threshold },
    )
    io.observe(el)
    return () => io.disconnect()
  }, [threshold])

  return [ref, inView]
}
