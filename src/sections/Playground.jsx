import { useRef, useState } from 'react'
import ScribbleUnderline from '../components/ScribbleUnderline'
import Cursor from '../components/Cursor'
import { DraggableSticker, Sticker } from '../components/Sticker'
import { useDraggable } from '../hooks/useDraggable'
import styles from './Playground.module.css'

// Board is 1200×680 in Figma (130:134); positions are kept as % of it.
const pct = (x, y) => ({ left: `${(x / 1200) * 100}%`, top: `${(y / 680) * 100}%` })

// Art cards (Figma art-card/* 458:373–458:386). cx/cy = centre of the rotated
// card, a = card side; art = crayon cut-out box inside the card [x, y, w, h].
const ARTS = [
  {
    name: 'Sapo sábio',
    src: '/art/crayon/art-sapo.webp',
    cx: 829.9,
    cy: 269.4,
    a: 280,
    r: 4,
    art: [32.5, 54.43, 212, 168.14],
  },
  {
    name: 'menina',
    src: '/art/crayon/art-menina.webp',
    cx: 1099.15,
    cy: 179.65,
    a: 160,
    r: -7,
    art: [17.5, 21.67, 122, 113.66],
  },
  {
    name: 'FonFon, the mascot',
    src: '/art/crayon/art-fonfon.webp',
    cx: 230.9,
    cy: 427.9,
    a: 220,
    r: -6,
    art: [29.58, 24.5, 157.85, 168],
  },
  {
    name: 'morango',
    src: '/art/crayon/art-morango.webp',
    cx: 492.34,
    cy: 466,
    a: 170,
    r: 8,
    art: [29.06, 18.5, 108.89, 130],
  },
  {
    name: 'arco-íris',
    src: '/art/crayon/art-arco-iris.webp',
    cx: 1067.27,
    cy: 482.09,
    a: 170,
    r: 5,
    art: [18.5, 46.36, 130, 74.29],
  },
]

const START = [
  { name: 'heart', x: 630, y: 470, r: -12 },
  { name: 'star', x: 880, y: 505, r: 6 },
  { name: 'sparkle', x: 1120, y: 50, r: 0 },
  { name: 'flower', x: 370, y: 300, r: 0 },
  { name: 'bee', x: 588, y: 248, r: 8 },
  { name: 'ladybug', x: 770, y: 428, r: -10 },
  { name: 'butterfly', x: 323, y: 574, r: 6 },
  { name: 'mushroom', x: 1070, y: 577, r: -8 },
]

/** One of gigi's cut-out drawings — grab it like the stickers. */
function ArtCard({ item, bounds, draggable }) {
  const { offset, dragging, handlers } = useDraggable({ bounds })
  const [x, y, w, h] = item.art
  const u = (px) => `${(px / item.a) * 100}%`
  return (
    <li
      className={styles.artItem}
      style={{ ...pct(item.cx, item.cy), '--a': `${(item.a / 1200) * 100}cqw` }}
      data-draggable={draggable || undefined}
    >
      <button
        type="button"
        className={styles.artCard}
        data-dragging={dragging || undefined}
        style={{ '--r': `${item.r}deg`, '--x': `${offset.x}px`, '--y': `${offset.y}px` }}
        aria-label={`Drawing: ${item.name} — drag me, or use the arrow keys`}
        {...handlers}
      >
        <img src={item.src} alt="" draggable="false" style={{ left: u(x), top: u(y), width: u(w), height: u(h) }} />
      </button>
    </li>
  )
}

const TOOLS = [
  { id: 'select', glyph: '↖', label: 'Move' },
  { id: 'hand', glyph: '✋', label: 'Grab stickers' },
  { id: 'pencil', glyph: '✏️', label: 'Pencil — draw on the board' },
  { id: 'stamp', glyph: '✦', label: 'Stamp — click to drop a sticker' },
]
const STAMPS = ['heart', 'star', 'sparkle', 'flower']
const rand = (min, max) => min + Math.random() * (max - min)

export default function Playground() {
  const boardRef = useRef(null)
  const [tool, setTool] = useState('hand')
  const [stickers, setStickers] = useState(START)
  const [round, setRound] = useState(0)
  const [strokes, setStrokes] = useState([])
  const [stamps, setStamps] = useState([])
  const drawing = useRef(null)

  const shuffle = () => {
    setStickers((list) => list.map((s) => ({ ...s, x: rand(40, 1110), y: rand(250, 560), r: rand(-25, 25) })))
    setStrokes([])
    setStamps([])
    setRound((n) => n + 1)
  }

  const point = (e) => {
    const b = boardRef.current.getBoundingClientRect()
    return [((e.clientX - b.left) / b.width) * 1200, ((e.clientY - b.top) / b.height) * 680]
  }

  const onBoardDown = (e) => {
    if (e.target.closest('button')) return
    if (tool === 'pencil') {
      e.currentTarget.setPointerCapture(e.pointerId)
      drawing.current = [point(e)]
      setStrokes((s) => [...s.slice(-40), drawing.current])
    } else if (tool === 'stamp') {
      const [x, y] = point(e)
      setStamps((s) => [
        ...s.slice(-30),
        { id: crypto.randomUUID?.() ?? Math.random(), name: STAMPS[s.length % 4], x, y, r: rand(-20, 20) },
      ])
    }
  }
  const onBoardMove = (e) => {
    if (!drawing.current) return
    drawing.current = [...drawing.current, point(e)]
    const current = drawing.current
    setStrokes((s) => [...s.slice(0, -1), current])
  }
  const onBoardUp = () => {
    drawing.current = null
  }

  return (
    <section id="playground" className={styles.playground} aria-labelledby="playground-title">
      <div
        ref={boardRef}
        className={styles.board}
        data-tool={tool}
        onPointerDown={onBoardDown}
        onPointerMove={onBoardMove}
        onPointerUp={onBoardUp}
        onPointerCancel={onBoardUp}
      >
        <div className={styles.intro}>
          <h2 id="playground-title" className={styles.title}>
            I also draw things
          </h2>
          <ScribbleUnderline width={400} height={30} className={styles.scribble} />
          <p className={styles.desc}>Grab a sticker and drag it around, everything on this board was drawn by me. ✋</p>
        </div>

        <ul className={styles.arts}>
          {ARTS.map((item) => (
            <ArtCard key={item.name} item={item} bounds={boardRef} draggable={tool === 'hand' || tool === 'select'} />
          ))}
        </ul>

        <svg className={styles.ink} viewBox="0 0 1200 680" preserveAspectRatio="none" aria-hidden="true">
          {strokes.map((pts, i) => (
            <polyline key={i} points={pts.map((p) => p.join(',')).join(' ')} />
          ))}
        </svg>

        {stamps.map((s) => (
          <Sticker key={s.id} name={s.name} rotate={s.r} className={styles.stamp} style={pct(s.x - 30, s.y - 30)} />
        ))}

        <div className={styles.stickers} data-draggable={tool === 'hand' || tool === 'select' || undefined}>
          {stickers.map((s) => (
            <DraggableSticker
              key={`${s.name}-${round}`}
              name={s.name}
              rotate={s.r}
              scale={s.name === 'heart' || s.name === 'star' ? 1.1 : 1}
              bounds={boardRef}
              className={styles.sticker}
              style={pct(s.x, s.y)}
            />
          ))}
        </div>

        <Cursor label="drag me!" color="pink" float className={styles.cursor} />

        <div className={styles.toolbar} role="toolbar" aria-label="Playground tools">
          {TOOLS.map((t) => (
            <button
              key={t.id}
              type="button"
              className={styles.tool}
              aria-pressed={tool === t.id}
              aria-label={t.label}
              title={t.label}
              onClick={() => setTool(t.id)}
            >
              <span aria-hidden="true">{t.glyph}</span>
            </button>
          ))}
          <button type="button" className={styles.tool} onClick={shuffle}>
            <span aria-hidden="true">⟳</span> <span className={styles.hand}>Shuffle</span>
          </button>
        </div>
      </div>
    </section>
  )
}
