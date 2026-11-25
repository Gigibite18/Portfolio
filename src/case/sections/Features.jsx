import { useState } from 'react'
import Section from './Section'
import SectionHeader from '../SectionHeader'
import TwoTone from '../TwoTone'
import MediaSlot from '../../components/MediaSlot'
import styles from './Features.module.css'

// px on the 620×440 visual half of a Figma feature band → %
const px = (x, y) => ({ left: `${(x / 620) * 100}%`, top: `${(y / 440) * 100}%` })

function Tags({ tags }) {
  return (
    <ul className={styles.tags} aria-label="Topics">
      {tags.map((t) => (
        <li key={t.label} className={styles.tag} data-tone={t.tone} style={{ ...px(t.x, t.y), '--r': `${t.r}deg` }}>
          {t.label}
          <span className={styles.x} aria-hidden="true">
            ×
          </span>
        </li>
      ))}
    </ul>
  )
}

function DeviceVisual({ block }) {
  return (
    <>
      <div className={styles.device}>
        {block.screen.src ? (
          <img src={block.screen.src} alt={block.screen.alt} loading="lazy" />
        ) : (
          <MediaSlot label={block.screen.placeholder} className={styles.slot} />
        )}
      </div>
      {block.tags && <Tags tags={block.tags} />}
    </>
  )
}

function ChatVisual({ block }) {
  const c = block.chat
  return (
    <>
      <div className={styles.chat}>
        <p className={styles.chatEyebrow}>{c.eyebrow}</p>
        <p className={styles.chatTitle}>
          {c.title.map((l, i) => (
            <span key={i}>{l}</span>
          ))}
        </p>
        <p className={styles.bubbleMe}>{c.me}</p>
        <p className={styles.bubbleThem}>{c.them}</p>
        <p className={styles.input}>
          {c.input}
          <span className={styles.inputDot} aria-hidden="true" />
        </p>
      </div>
      {block.tags && <Tags tags={block.tags} />}
    </>
  )
}

function ToggleVisual({ block }) {
  const t = block.toggle
  const [on, setOn] = useState(true)
  return (
    <div className={styles.toggleWrap} data-on={on || undefined}>
      <div className={styles.toggleCard}>
        <span id={`${block.id}-toggle`}>{t.label}</span>
        <button
          type="button"
          role="switch"
          aria-checked={on}
          aria-labelledby={`${block.id}-toggle`}
          className={styles.bigSwitch}
          onClick={() => setOn((v) => !v)}
        >
          <span aria-hidden="true" />
        </button>
      </div>
      <ul className={styles.chips}>
        {t.items.map((it) => (
          <li
            key={it.label}
            className={styles.chip}
            style={{ left: `${((it.x - 488) / 600) * 100}%`, top: `${(it.y / 440) * 100}%`, '--r': `${it.r}deg` }}
          >
            <span aria-hidden="true">○</span>
            <s>{it.label}</s>
          </li>
        ))}
      </ul>
      {t.note && <p className={styles.handNote}>{t.note}</p>}
    </div>
  )
}

/** A finished mock-up exported from Figma (device + screen already composed). */
function ImageVisual({ block }) {
  const im = block.image
  const w0 = im.w0 ?? 620 // width of the Figma visual half it was placed on
  return (
    <>
      <img
        className={styles.mock}
        src={im.src}
        alt={im.alt}
        loading="lazy"
        style={{ left: `${(im.x / w0) * 100}%`, top: `${(im.y / 440) * 100}%`, width: `${(im.w / w0) * 100}%` }}
      />
      {block.tags && <Tags tags={block.tags} />}
    </>
  )
}

/** Cattail + lily-pad doodles behind a band (Figma 598:6671), drawn in t/doodle. */
function PondDoodles() {
  return (
    <svg className={styles.doodles} viewBox="0 0 1085 438" preserveAspectRatio="none" aria-hidden="true">
      <path d="M111.071 408.188L137.97 418.443C109.624 425.121 43.0639 433.341 33.4081 408.188C23.4289 382.191 162.267 383.861 155.325 410.334L111.071 408.188Z" />
      <path d="M193.071 415.581H236.892C236.892 415.581 258.152 394.355 254.681 389.823C252.178 386.556 224.31 412.004 224.31 412.004C224.31 412.004 219.537 375.036 213.463 376.944C210.01 378.029 205.22 410.334 205.22 410.334C205.22 410.334 191.77 388.392 186.129 387.2C180.489 386.007 193.071 415.581 193.071 415.581Z" />
      <path d="M76.3608 43.761L73.7576 46.8615C69.8528 59.025 125.388 72.6194 148.383 56.8785C134.846 33.2194 94.1494 34.8641 76.3608 43.761Z" />
      <path d="M44.6884 32.392L52.9319 29.6896C73.7576 37.7985 124.52 20.3881 109.769 3.45467C91.5462 -6.08528 41.9984 4.83797 50.3287 27.5431L35.6892 29.6896C38.7653 30.5743 41.7747 31.4808 44.6884 32.392Z" />
      <path d="M73.7576 46.8615L76.3608 43.761C69.8837 41.0313 58.3353 36.6597 44.6884 32.392C41.7747 31.4808 38.7653 30.5743 35.6892 29.6896C24.2205 26.391 11.8243 23.3945 0 21.5806V25.1581C6.73474 26.2863 17.5657 28.4685 29.503 31.5299C33.467 32.5465 37.5529 33.66 41.6514 34.8641C53.0399 38.2098 64.5249 42.2548 73.7576 46.8615Z" />
      <path d="M29.503 31.5299C14.7515 34.8641 4.77255 60.933 39.482 64.7489C50.7626 61.8869 59.0061 51.978 41.6514 34.8641C37.5529 33.66 33.467 32.5465 29.503 31.5299Z" />
      <path d="M908.006 390.3C921.89 392.208 969.326 422.895 991.309 438H1062.03C1088.06 375.036 1086.76 354.843 1082.86 352.617C1053.01 362.92 1040.63 412.719 1038.17 436.33C1035.04 418.968 1044.39 365.496 1049.45 340.931C1059.17 341.477 1061.88 339.092 1062.03 337.83C1065.21 326.621 1071.75 303.487 1072.44 300.625C1073.07 298.02 1068.88 296.933 1062.03 296.258C1059.47 296.005 1056.54 295.811 1053.35 295.616C1043.98 295.044 1040.77 298.717 1040.34 300.625C1037.73 310.483 1032.27 331.2 1031.22 335.207C1030.18 339.214 1038.02 340.692 1042.07 340.931C1033.39 349.135 1030.07 405.723 1029.49 432.992C1027.06 423.07 1007.65 387.2 998.251 370.505C1007.97 368.788 1006.93 363.906 1005.19 361.68C1000.56 352.617 990.441 333.251 986.97 328.29C983.499 323.33 975.979 323.52 972.653 324.236L967.446 315.888C967.302 315.094 966.058 313.551 962.24 313.742C958.422 313.933 958.914 316.366 959.637 317.558L964.409 325.667C954.343 327.575 955.009 332.345 956.6 334.491C962.529 344.906 974.909 366.546 976.991 369.789C979.074 373.033 987.404 372.254 991.309 371.459C994.433 372.985 1010.25 411.527 1017.77 430.607C978.293 373.128 890.652 387.915 908.006 390.3Z" />
      <path d="M1060.73 284.168C1053.79 283.214 1052.92 291.403 1053.35 295.616C1056.54 295.811 1059.47 296.005 1062.03 296.258C1064.49 292.625 1067.67 285.122 1060.73 284.168Z" />
      <ellipse cx="1062.03" cy="30.8378" rx="19.813" ry="13.6215" transform="rotate(21.0873 1062.03 30.8378)" />
      <ellipse cx="1058.75" cy="63.4136" rx="9.23747" ry="6.35076" transform="rotate(21.0873 1058.75 63.4136)" />
      <ellipse cx="1030.24" cy="42.5393" rx="12.0648" ry="8.29452" transform="rotate(21.0873 1030.24 42.5393)" />
    </svg>
  )
}

const VISUALS = { device: DeviceVisual, chat: ChatVisual, toggle: ToggleVisual, image: ImageVisual }

/** Full-width band: heading + a row of app screens in small device frames. */
function ScreensBand({ block, id }) {
  return (
    <div className={styles.screensBand} data-tone={block.tone}>
      {block.label && <p className={styles.label}>{block.label}</p>}
      <h2 id={id} className={styles.title}>
        {Array.isArray(block.title) ? <TwoTone parts={block.title} /> : block.title}
      </h2>
      <ul className={styles.screens}>
        {block.screens.map((s) => (
          <li key={s.src} className={styles.thumb}>
            <img src={s.src} alt={s.alt} loading="lazy" />
          </li>
        ))}
      </ul>
    </div>
  )
}

/** Features: exploded UI blocks (device / chat card / toggle) + built-in tiles. */
export default function Features({ data }) {
  return (
    <Section id={data.id} className={styles.features} labelledBy={`${data.id}-title-0`}>
      <SectionHeader eyebrow={data.eyebrow} n={data.n} />
      {data.blocks.map((b, i) => {
        if (b.kind === 'screens') return <ScreensBand key={i} block={b} id={`${data.id}-title-${i}`} />
        const Visual = VISUALS[b.kind]
        return (
          <div key={i} className={styles.band} data-tone={b.tone} data-flip={b.flip || undefined}>
            {b.doodles === 'pond' && <PondDoodles />}
            {b.sticker && (
              // Figma px on the 1088×440 band → %
              <span
                className={styles.codeSticker}
                style={{
                  left: `${(b.sticker.x / 1088) * 100}%`,
                  top: `${(b.sticker.y / 440) * 100}%`,
                  '--r': `${b.sticker.r ?? 0}deg`,
                }}
                aria-hidden="true"
              >
                {b.sticker.text}
              </span>
            )}
            <div className={styles.visual}>
              <Visual block={{ ...b, id: `${data.id}-${i}` }} />
            </div>
            <div className={styles.copy}>
              {b.label && <p className={styles.label}>{b.label}</p>}
              <h2 id={`${data.id}-title-${i}`} className={styles.title}>
                {Array.isArray(b.title) ? <TwoTone parts={b.title} /> : b.title}
              </h2>
              <p className={styles.body}>{b.body}</p>
            </div>
          </div>
        )
      })}

      {data.builtIn?.length > 0 && (
        <>
          <h3 className={styles.builtInLabel}>{data.builtInLabel}</h3>
          <ul className={styles.tiles}>
            {data.builtIn.map((b) => (
              <li key={b.title.join(' ')} className={styles.tile} data-tone={b.tone}>
                <p className={styles.tileTitle}>
                  {b.title.map((l, i) => (
                    <span key={i}>{l}</span>
                  ))}
                </p>
                <p className={styles.tileBody}>{b.body}</p>
              </li>
            ))}
          </ul>
        </>
      )}
    </Section>
  )
}
