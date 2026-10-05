import { useInView } from '../hooks/useReveal'
import styles from './ScribbleUnderline.module.css'

/** Hand-drawn underline (Figma: Scribble Underline, 320×26 artwork).
 *  Draws itself when it scrolls into view (pathLength 0→1, 600ms). */
export default function ScribbleUnderline({ width = 320, height = 26, className = '' }) {
  const [ref, inView] = useInView()
  return (
    <svg
      ref={ref}
      className={`${styles.scribble} ${className}`}
      data-drawn={inView || undefined}
      width={width}
      height={height}
      viewBox="0 0 320 26"
      preserveAspectRatio="none"
      fill="none"
      aria-hidden="true"
    >
      <path pathLength="1" d="M4 15C70 6 160 4 314 9" />
      <path pathLength="1" d="M22 21C110 14 200 13 290 17" />
    </svg>
  )
}
