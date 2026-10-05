import Cursor from '../components/Cursor'
import styles from './DearDiaryCover.module.css'

// Doodles cropped from gigi's sprite sheet (Untitled_Artwork 41), exactly as
// laid out in Figma 212:309. [x, y, w, h, imgW%, imgH%, imgL%, imgT%, rotate]
const DOODLES = [
  [539, 10, 23, 22, 2156.52, 3104.43, -1080.38, -2750.97],
  [290, 42, 19, 21, 2431.37, 3104.43, -1151.26, -2423.94],
  [293, 142, 20, 23, 2530.61, 2998.29, -1383.85, -2673.06],
  [388, 10, 28, 16, 1771.43, 4385, -938.92, -3618.33],
  [201, 56, 29, 28, 1664.43, 2402.74, -751.25, -1779.68],
  [155, 112, 29, 28, 1664.43, 2402.74, -870.56, -1754.13],
  [36, 34, 20, 22, 2431.37, 3104.43, -1498.7, -2290.2],
  [127, 18, 19, 21, 2431.37, 3104.43, -1269.35, -2428.73],
  [49, 102, 26, 24, 1837.04, 2852.03, -1213.53, -2231.27],
  [210, 126, 27, 25, 1837.04, 2852.03, -1192.33, -2354.07],
  [443, 313, 20, 24, 2530.61, 2998.29, -1701.15, -2578.56],
  [18, 153, 12, 12, 4000, 5396.92, -2365.22, -4745.39],
  [247, 16, 12, 13, 4000, 5396.92, -2444.38, -4668.09],
  [501, 363, 24, 22, 2032.79, 3104.43, -965.85, -2524.55],
  [453, 375, 14, 12, 3397.26, 5315.15, -1539.67, -4467.31],
  [456, 446, 14, 12, 3397.26, 5315.15, -1932.1, -4287.9],
  [494, 417, 27, 20, 1810.22, 3248.15, -866.92, -2767.91],
  [117, 161, 19, 19, 2505.05, 3692.63, -1351.93, -3176.91],
  [109.5, 66.9, 25.393, 31.315, 3087.37, 3541.25, -1742.64, -2808.71, -52.15],
  [74.5, 455.3, 31.78, 10.908, 2048.9, 8443.98, -1302.85, -6616.48, -42.38],
  [494, 306, 22, 24, 2234.23, 2806.4, -1331.01, -2304.97],
]

// px on the 660×480 Figma cover → container-query units (1cqw = 6.6px)
const u = (px) => `${(px / 6.6).toFixed(3)}cqw`

export default function DearDiaryCover() {
  return (
    <div className={styles.cover} aria-hidden="true">
      <div className={styles.stage}>
        <div
          className={`${styles.ipad} ${styles.back}`}
          style={{ left: u(308), top: u(30), width: u(344), height: u(248), rotate: '-4deg' }}
        >
          <span className={styles.screen} style={{ inset: u(12) }}>
            <img src="/images/dear-diary/07-ask-lia.webp" alt="" />
          </span>
        </div>

        {DOODLES.map(([x, y, w, h, iw, ih, il, it, r], i) => (
          <span
            key={i}
            className={styles.doodle}
            style={{
              left: u(x),
              top: u(y),
              width: u(w),
              height: u(h),
              rotate: r ? `${r}deg` : undefined,
              '--d': `${(i % 7) * 0.4}s`,
            }}
          >
            <img
              src="/art/dd-doodles-sprite.webp"
              alt=""
              style={{ width: `${iw}%`, height: `${ih}%`, left: `${il}%`, top: `${it}%` }}
            />
          </span>
        ))}

        <div
          className={`${styles.ipad} ${styles.front}`}
          style={{ left: u(28.8), top: u(175), width: u(404), height: u(289), rotate: '2deg' }}
        >
          <span className={styles.screen} style={{ inset: u(12) }}>
            <img src="/images/dear-diary/03-ch1-discovery.webp" alt="" />
          </span>
        </div>

        <Cursor label="you" color="pink" className={styles.cursor} />

        <div className={styles.lia} style={{ left: u(494), top: u(176), width: u(160.136), height: u(294.606) }}>
          <img src="/art/dd-lia-outline.svg" alt="" className={styles.liaOutline} />
          <span className={styles.liaArt} style={{ left: u(6.71), top: u(2.93), width: u(145.89), height: u(279.057) }}>
            <img
              src="/art/dd-lia-sticker.webp"
              alt=""
              style={{ width: '720.93%', height: '533.13%', left: '-266.57%', top: '-185.87%' }}
            />
          </span>
        </div>
      </div>
    </div>
  )
}
