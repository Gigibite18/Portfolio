import { useReveal } from '../../hooks/useReveal'

/** Section wrapper: anchor target for "Jump to" + a short fade-in. */
export default function Section({ id, label, className, children, labelledBy }) {
  const [ref, reveal] = useReveal({ threshold: 0.08 })
  return (
    <section
      id={id}
      ref={ref}
      tabIndex={-1}
      className={className}
      aria-labelledby={labelledBy}
      aria-label={labelledBy ? undefined : label}
      data-reveal={reveal}
    >
      {children}
    </section>
  )
}
