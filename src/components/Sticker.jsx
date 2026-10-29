import { forwardRef } from 'react'
import { useDraggable } from '../hooks/useDraggable'
import styles from './Sticker.module.css'

// crayon art cut from the Figma sprites (Sticker/* + section "Ilustrações" 455:369);
// w/h are the Figma layer sizes
export const STICKERS = {
  star: { src: '/art/crayon/sticker-star.webp', w: 60, h: 49, alt: 'yellow crayon star sticker' },
  heart: { src: '/art/crayon/sticker-heart.webp', w: 64, h: 52, alt: 'red crayon heart sticker' },
  sparkle: { src: '/art/crayon/sticker-sparkle.webp', w: 56, h: 46, alt: 'blue crayon sparkle sticker' },
  flower: { src: '/art/crayon/sticker-flower.webp', w: 60, h: 49, alt: 'pink crayon flower sticker' },
  crown: { src: '/art/crayon/sticker-coroa.webp', w: 75, h: 74, alt: 'coral crayon crown sticker' },
  bee: { src: '/art/crayon/sticker-abelha.webp', w: 70, h: 77, alt: 'crayon bee sticker' },
  ladybug: { src: '/art/crayon/sticker-joaninha.webp', w: 60, h: 58, alt: 'crayon ladybug sticker' },
  butterfly: { src: '/art/crayon/sticker-borboleta.webp', w: 72, h: 66, alt: 'lilac crayon butterfly sticker' },
  mushroom: { src: '/art/crayon/sticker-cogumelo.webp', w: 56, h: 67, alt: 'crayon mushroom sticker' },
}

/** Static sticker art with a wiggle on hover. */
export const Sticker = forwardRef(function Sticker(
  { name, rotate = 0, scale = 1, className = '', style, decorative = true },
  ref,
) {
  const s = STICKERS[name]
  return (
    <span ref={ref} className={`${styles.sticker} ${className}`} style={{ '--r': `${rotate}deg`, ...style }}>
      <img
        src={s.src}
        alt={decorative ? '' : s.alt}
        width={Math.round(s.w * scale)}
        height={Math.round(s.h * scale)}
        draggable="false"
      />
    </span>
  )
})

/** Sticker you can grab with the mouse/finger or move with arrow keys. */
export function DraggableSticker({ name, rotate = 0, scale = 1, bounds, className = '', style, offset: forced }) {
  const { offset, dragging, handlers } = useDraggable({ bounds })
  const o = forced ?? offset
  const s = STICKERS[name]
  return (
    <button
      type="button"
      className={`${styles.sticker} ${styles.draggable} ${className}`}
      data-dragging={dragging || undefined}
      style={{ '--r': `${rotate}deg`, '--x': `${o.x}px`, '--y': `${o.y}px`, ...style }}
      aria-label={`${s.alt} — drag me, or use the arrow keys`}
      {...handlers}
    >
      <img src={s.src} alt="" width={Math.round(s.w * scale)} height={Math.round(s.h * scale)} draggable="false" />
    </button>
  )
}
